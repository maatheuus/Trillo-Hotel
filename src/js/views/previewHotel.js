import View from "./View.js";
import icons from "../../img/icons/sprite.svg";

class PreviewHotel extends View {
  _parentElement = "";

  _generateMarkup() {
    const id = window.location.hash.slice(1);
    return `
    <div class="hotel-preview__block 
    ${this._data.hotelId === id ? "hotel-preview__block--active" : ""}">
        <div class="hotel-preview__gallery">
            <img src="${this._data.imageUrl}" 
            class="hotel-preview__gallery-photo" alt="image of 
            ${this._data.imageDescription}">
        </div>
     
        <div class="informations">
            <div class="informations__header">
                <h1 class="informations__header-title">
                    <a class="informations__header-link" href="#${
                      this._data.hotelId
                    }">
                    ${this._data.nameHotel}</a>
                </h1>
    
                <div class="informations__location">
                    <svg class="informations__icon-location">
                        <use xlink:href="${icons}#icon-location-pin"></use>
                    </svg>
                    <span class="informations__location-city">
                    ${this._data.local}</span>
                </div>
            </div>
    
            <div class="informations__price">
                <span class="informations__price-value">
                ${this._data.symbol + this._data.price}</span>
            </div>
    
            <div class="informations__avaliation">
                <div class="informations__rating">
                    <div class="informations__rating-average">
                    ${this._data.reviewScore}</div>
                    <div class="informations__rating-count">
                    ${this._data.reviewTotal} votes</div>
                </div>
            </div>
        </div>
        </div>
        `;
  }
}
export default new PreviewHotel();
