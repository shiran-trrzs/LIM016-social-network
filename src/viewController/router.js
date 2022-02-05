/* eslint-disable consistent-return */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */

import { components } from '../view/index';

const changeView = (route) => {
  const container = document.getElementById('container');
  container.innerHTML = '';

  switch (route) {
    case '#/': { return container.appendChild(components.login()); }
    case '#/profile': { return container.appendChild(components.nav()); }

    default:
      break;
  }
  console.log(route);
};

export { changeView };
