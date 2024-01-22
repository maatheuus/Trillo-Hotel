import View from "./View.js";
import icons from "../../img/icons/sprite.svg";

class HotelView extends View {
  _parentElement = document.querySelector(".hotel-view");
  _errorMessage = "Não foi possivel achar o hotel desejado :(";

  addHandlerAddFavorite(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const btn = e.target.closest(".btn-favorite");
      if (!btn) return;
      handler();
    });
  }

  _generateMarkup() {
    return `
            <div class="gallery">
                ${this._data.detailsHotel.images.map((img) => {
                  return `
                        <figure class="gallery__item">
                            <img src="${img}" alt="Photo of hotel" class="gallery__photo">
                        </figure>`;
                })}

                <button class="gallery__btn-favorite btn-favorite">
                    <svg class="gallery__icon  gallery__icon--favorite">
                        <use xlink:href="${icons}#icon-favorite${
      this._data.hotel.favorite ? "_fill" : ""
    }">
                        </use>
                    </svg>
                </button>

            </div>
            <div class="overview">
                    <h1 class="overview__heading">
                        ${this._data.hotel.nameHotel}
                    </h1>
                <div class="overview__stars">
                    ${this.generateIcon()}
                </div>
                <div class="overview__location">
                    <svg class="overview__icon-location">
                        <use xlink:href="${icons}#icon-location-pin"></use>
                    </svg>
                    <button class="btn-inline">
                    ${this._data.hotel.local},${this._data.detailsHotel.address}
                    </button>
                </div>
                <div class="overview__rating">
                    <div class="overview__rating-average">
                    ${this._data.hotel.reviewScore}</div>
                    <div class="overview__rating-count">
                    ${this._data.hotel.reviewTotal} votes</div>
                </div>
            </div>
            <div class="detail">
            <div class="description">
                <p class="paragraph">
                    ${this._data.detailsHotel.description}
                </p>
                <ul class="list">
                    ${this._data.detailsHotel.amenities
                      .map((ameni) => {
                        return `
                            <li class="list__item">${ameni}</li>
                        `;
                      })
                      .join("")}
                </ul>
            </div>
            <div class="user-reviews">

                <figure class="review">
                    <blockquote class="review__text">
                        ${this._data.reviews[0].reviewInfo}
                    </blockquote>
                    <figcaption class="review__user">
                        <svg class="review__photo">
                            <use xlink:href="${icons}#icon-person"></use>
                        </svg>
                        <div class="review__user-box">
                            <p class="review__user-name">
                            ${this._data.reviews[0].name[0]}</p>
                            <p class="review__user-date">
                            ${this._data.reviews[0].stayDuration}</p>
                        </div>
                        <div class="review__rating">
                        ${this._data.reviews[0].score[0]}</div>
                    </figcaption>
                </figure>

                <figure class="review">
                    <blockquote class="review__text">
                        ${this._data.reviews[1].reviewInfo}
                    </blockquote>
                    <figcaption class="review__user">
                        <svg class="review__photo">
                            <use xlink:href="${icons}#icon-person"></use>
                        </svg>
                        <div class="review__user-box">
                            <p class="review__user-name">
                            ${this._data.reviews[1].name[1]}</p>
                            <p class="review__user-date">
                            ${this._data.reviews[1].stayDuration}</p>
                        </div>
                        <div class="review__rating">
                        ${this._data.reviews[1].score[1]}</div>
                    </figcaption>
                </figure>
            </div>
        </div>
        <div class="cta">
        ${
          this._data.hotel.roomsLeft > 0
            ? `
        <h2 class="cta__book-now">
            Good news! We have ${this._data.hotel.roomsLeft} free rooms for your selected dates!
        </h2>
        <button class="btn">
            <span class="btn__visible">Book now</span>
            <span class="btn__invisible">Only ${this._data.hotel.roomsLeft} rooms left</span>
        </button>
        `
            : `
        <h2 class="cta__book-now">
            Bad news! We dont't have free rooms for your selected dates!
        </h2>   
        `
        }
        </div>`;
  }

  generateIcon() {
    if (
      this._data.detailsHotel.icon === 0 ||
      this._data.detailsHotel.icon === ""
    )
      return "Sem média de avaliações.";

    // Controla quantas estrelas o hotel tem ou não
    switch (this._data.detailsHotel.icon) {
      case 1:
        return `
              <svg class="overview__icon-star">
                  <use xlink:href="${icons}#icon-star"></use>
              </svg>
              `;
      case 2:
        return `
              <svg class="overview__icon-star">
                  <use xlink:href="${icons}#icon-star"></use>
              </svg>
              <svg class="overview__icon-star">
                  <use xlink:href="${icons}#icon-star"></use>
              </svg>
              `;
      case 3:
        return `
              <svg class="overview__icon-star">
                  <use xlink:href="${icons}#icon-star"></use>
              </svg>
              <svg class="overview__icon-star">
                  <use xlink:href="${icons}#icon-star"></use>
              </svg>
              <svg class="overview__icon-star">
                  <use xlink:href="${icons}#icon-star"></use>
              </svg>
              `;
      case 4:
        return `
              <svg class="overview__icon-star">
                  <use xlink:href="${icons}#icon-star"></use>
              </svg>
              <svg class="overview__icon-star">
                  <use xlink:href="${icons}#icon-star"></use>
              </svg>
              <svg class="overview__icon-star">
                  <use xlink:href="${icons}#icon-star"></use>
              </svg>
              <svg class="overview__icon-star">
                  <use xlink:href="${icons}#icon-star"></use>
              </svg>
              `;
      case 5:
        return `
              <svg class="overview__icon-star">
                  <use xlink:href="${icons}#icon-star"></use>
              </svg>
              <svg class="overview__icon-star">
                  <use xlink:href="${icons}#icon-star"></use>
              </svg>
              <svg class="overview__icon-star">
                  <use xlink:href="${icons}#icon-star"></use>
              </svg>
              <svg class="overview__icon-star">
                  <use xlink:href="${icons}#icon-star"></use>
              </svg>
              <svg class="overview__icon-star">
                  <use xlink:href="${icons}#icon-star"></use>
              </svg>
              `;
      default:
        return;
    }
  }
}

export default new HotelView();
