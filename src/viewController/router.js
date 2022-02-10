/* eslint-disable consistent-return */
/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
import { components } from '../view/index.js';

export const changeView = (route) => {
    const main = document.getElementById('main');
    main.innerHTML = '';

    switch (route) {
    case '':
    case '#':
    case '#/':
    case '#/login': { return main.appendChild(components.login()); }
    case '#/home': { return main.appendChild(components.home()); }
    case '#/profile': { return main.appendChild(components.profile()); }

    default:
        break;
    }
    console.log(route);
};
