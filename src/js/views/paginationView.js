import View from './View.js';
import icons from 'url:../../img/icons.svg'; // Pracel 2 way to import

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      e.preventDefault();
      const btn = e.target.closest('.btn--inline');

      if (!btn) return;
      const goToPage = +btn.dataset.goto;

      handler(goToPage);
    });
  }

  _pageNumberGenerator(data) {
    return `
      <button>${data}</button>
    `;
  }

  _generatMarkup() {
    const curPage = this._data.page;
    const pageNum = Math.ceil(
      this._data.result.length / this._data.resultPerPage
    );

    // Showing the page number
    this._pageNumberGenerator(pageNum);

    // 1) Page 1, Others
    if (curPage === 1 && pageNum > 1) {
      return `
        <button data-goto="${
          curPage + 1
        }" class="btn--inline pagination__btn--next">
            <span>Page ${curPage + 1}</span>
            <svg class="search__icon">
                <use href="${icons}#icon-arrow-right"></use>
            </svg>
        </button>
        
        `;
      // <button class="btn--count">${pageNum} pages</button>
    }

    // 3) last page
    if (curPage === pageNum && pageNum > 1) {
      return `
        <button data-goto="${
          curPage - 1
        }" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
                <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${curPage - 1}</span>
        </button>
        
        `;
      // <button class="btn--count">${pageNum} pages</button>
    }

    // Others
    if (curPage < pageNum) {
      return `
        <button data-goto="${
          curPage - 1
        }" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
                <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${curPage - 1}</span>
        </button>
        <button data-goto="${
          curPage + 1
        }" class="btn--inline pagination__btn--next">
          <span>Page ${curPage + 1}</span>
          <svg class="search__icon">
          <use href="${icons}#icon-arrow-right"></use>
          </svg>
        </button>
        `;
      // <button class="btn--count">${pageNum} pages</button>
    }

    // 2) Page 1,  No others pages
    return 'Page 1,  No others pages';
  }
}

export default new PaginationView();
