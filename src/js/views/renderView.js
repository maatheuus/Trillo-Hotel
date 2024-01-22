import View from "./View.js";
import * as model from "../model.js";
import hotelView from "./hotelView.js";

class RenderView extends View {
  _parentElement = document.querySelector(".hotel-view");

  addHandlerRender(handler) {
    ["hashchange", "load"].forEach((ev) =>
      window.addEventListener(ev, handler)
    );
  }

  _generateMarkup() {
    return hotelView.render(model.state, false);
  }
}

export default new RenderView();
