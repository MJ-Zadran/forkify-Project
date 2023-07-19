import View from './View.js';
import previewView from './previewView.js';
import icons from 'url:../../img/icons.svg'; // Pracel 2 way to import

class BookMarksView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = 'No bookmarks yet. Find a nice recipe and bookmark it ;)';
  _succesMessage = '';

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }

  _generatMarkup() {
    return this._data
      .map(bookmark => previewView.render(bookmark, false))
      .join(' ');
  }
}

export default new BookMarksView();
