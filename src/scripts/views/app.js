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
}

export default App;
