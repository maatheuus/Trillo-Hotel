import View from "./View.js";
import * as model from "../model.js";
import previewHotel from "./previewHotel.js";

class RenderPreview extends View {
  _parentElement = document.querySelector(".hotel-preview");
  _errorMessage =
    "Não foi possível achar nenhum hotel. Tente novamente por favor!";

  handlerClick(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const btn = e.target.closest(".informations__header-title");
      if (!btn) return;

      // Filtra o id do hotel com base em seu nome e manda para a URL
      model.state.search.results
        .map((data) => data)
        .filter((data) => {
          if (data.nameHotel === btn.innerText) {
            return (model.state.hotel = data);
          }
          location.hash = model.state.hotel.hotelId;
        });

      handler();
    });
  }

  _generateMarkup() {
    return this._data
      .map((result) => previewHotel.render(result, false))
      .join("");
  }
}

export default new RenderPreview();
