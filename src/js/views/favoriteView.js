import View from "./View.js";
import previewHotel from "./previewHotel.js";

class FavoriteView extends View {
  _parentElement = document.querySelector(".favorites__list");
  _errorMessage = "Sem hoteis por aqui. Ache um hotel legal :)";

  addHandlerRender(handler) {
    window.addEventListener("load", handler);
  }

  _generateMarkup() {
    return this._data
      .map((favorite) => previewHotel.render(favorite, false))
      .join("");
  }
}

export default new FavoriteView();
