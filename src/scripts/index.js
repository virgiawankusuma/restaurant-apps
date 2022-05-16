import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import App from './views/app';
import Restaurants from './restaurants';

document.addEventListener('DOMContentLoaded', Restaurants);

const app = new App({
  button: document.querySelector('.menu-button'),
  drawer: document.querySelector('#nav'),
  content: document.querySelector('#content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
