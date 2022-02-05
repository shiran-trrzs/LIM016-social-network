/* eslint-disable no-console */
// Este es el punto de entrada de tu aplicacion

import { changeView } from './viewController/router';

const init = () => {
  changeView(window.location.hash);
  window.addEventListener('hashchange', () => changeView(window.location.hash)); // evento para que cambie la url
};

window.addEventListener('load', init);
