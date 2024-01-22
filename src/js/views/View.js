import icons from "../../img/icons/sprite.svg";

export default class View {
  _data;

  /**
   * Renderizando o objeto recebido para o DOM
   * @param {Object | Object[]} data  O dado para ser renderizado
   * @param {boolean} [render=true] se falso, cria um markup string ao invés de ser renderizado no DOM
   * @returns {undefined | String} Ira retornar uma marção se render=false
   * @this {Object} View instance
   * @author Matheus
   */

  render(data, render = true) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();

    this._data = data;
    const markup = this._generateMarkup();

    if (!render) return markup;

    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  /**
   * @param {Object} data Atualiza uma nova marcação dos dados recebidos para o DOM
   * @returns {String} Ira retonar uma nova marcação dos dados para ser renderizado no DOM
   */

  update(data) {
    this._data = data;
    const newMarkup = this._generateMarkup();

    const newDOM = document.createRange().createContextualFragment(newMarkup);
    const newElements = Array.from(newDOM.querySelectorAll("*"));
    const curElements = Array.from(this._parentElement.querySelectorAll("*"));

    newElements.forEach((newEl, i) => {
      const curEl = curElements[i];

      // Update changed TEXT
      if (
        !newEl.isEqualNode(curEl) &&
        newEl.firstChild?.nodeValue.trim() !== ""
      ) {
        curEl.textContent = newEl.textContent;
      }

      // Update changed ATTRIBUTES
      if (!newEl.isEqualNode(curEl)) {
        Array.from(newEl.attributes).forEach((attri) =>
          curEl.setAttribute(attri.name, attri.value)
        );
      }
    });
  }

  _clear() {
    this._parentElement.innerHTML = "";
  }

  renderMessage(message = this._successMessage) {
    const markup = `
      <div class="message">
        <svg class="message__icon">
            <use href="${icons}#icon-location_city"></use>
        </svg>
        <p>${message}</p>
      </div>
    `;
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  renderError(message = this._errorMessage) {
    const markup = `
      <div class="error">
        <svg class="error__icon">
            <use href="${icons}#icon-warning"></use>
        </svg>
        <p>${message}</p>
    </div>
  `;
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  renderSpinner() {
    const markup = `
        <div class="loading">
            <svg class="loading__icon">
              <use href="${icons}#icon-spinner"></use>
            </svg>
        </div>
        `;
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }
}
