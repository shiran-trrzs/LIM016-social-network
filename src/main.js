// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';

myFunction();

const init = () => {
    window.addEventListener('hashchange', () => console.log(window.location.hash)) //evento para que cambie la url
}

window.addEventListener('load', init)