import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import App from './views/app.js';

console.log('Hello Coders! :)');

const menu = document.querySelector('#menu');
const hero = document.querySelector('.hero');
const main = document.querySelector('main');
const drawer = document.querySelector('#drawer');

menu.addEventListener('click', function(event) {
  drawer.classList.toggle('open');
  event.stopPropagation();
});

hero.addEventListener('click', function() {
  drawer.classList.remove('open');
});

main.addEventListener('click', function() {
  drawer.classList.remove('open');
});

const app = new App({
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
