import View from "./View.js";
import icons from "../../img/icons/sprite.svg";

class PaginationView extends View {
  _parentElement = document.querySelector(".pagination");

  addHandler(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const btn = e.target.closest(".btn-change");
      if (!btn) return;
      const goTo = +btn.dataset.goto;

      handler(goTo);
    });
  }

  _generateMarkup() {
    const currentPage = this._data.page;
    const numPages = Math.ceil(this._data.results.length / +this._data.perPage);

    if (currentPage === 1 && numPages > 1)
      return this._generateMarkupBtn("next", currentPage);

    if (currentPage === numPages && numPages > 1)
      return this._generateMarkupBtn("prev", currentPage);

    if (currentPage < numPages)
      return `
    ${this._generateMarkupBtn("prev", currentPage)}
    ${this._generateMarkupBtn("next", currentPage)}`;

    return "";
  }

  _generateMarkupBtn(type, currentPage) {
    return type === "next"
      ? `
        <button data-goto="${currentPage + 1}" class="btn-change next">
          <span>Page ${currentPage + 1}</span>
            <svg class="pagination__arrow ">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
        </button>
    `
      : `
          <button data-goto="${currentPage - 1}" class="btn-change prev">
            <span>Page ${currentPage - 1}</span>
              <svg class="pagination__arrow ">
                <use href="${icons}#icon-arrow-left"></use>
              </svg>
          </button>
    `;
  }
}

export default new PaginationView();
