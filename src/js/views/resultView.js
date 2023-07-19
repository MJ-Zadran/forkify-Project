import View from './View.js';
import previewView from './previewView.js';
import icons from 'url:../../img/icons.svg'; // Pracel 2 way to import

class ResultView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipe found for your query! Please try again ;)';
  _succesMessage = '';

  _generatMarkup() {
    return this._data
      .map(bookmark => previewView.render(bookmark, false))
      .join(' ');
  }
}

export default new ResultView();
