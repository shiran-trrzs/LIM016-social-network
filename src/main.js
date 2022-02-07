import { changeView } from './viewController/router.js';

console.log('Hello');

const init = () => {
  changeView(window.location.hash);
  window.addEventListener('hashchange', () => changeView(window.location.hash)); // evento para que cambie la url
};

window.addEventListener('load', init);
