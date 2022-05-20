import routes from '../routes/routes';
import UrlParser from '../routes/url-parser';
import DrawerInit from '../utils/drawer-init';

class App {
  constructor({
    button,
    drawer,
    content,
  }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._initAppShell();
  }

  _initAppShell() {
    DrawerInit.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    const skipLinkElem = document.querySelector('.skip-link');
    skipLinkElem.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#content').focus();
    });
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
