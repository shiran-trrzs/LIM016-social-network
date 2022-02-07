import { components } from '../view/index.js';

export const changeView = (route) => {
  const main = document.getElementById('main');
  main.innerHTML = '';

  switch (route) {
    case '#/login': { return main.appendChild(components.login()); }
    case '#/home': { return main.appendChild(components.nav()); }
    case '#/profile': { return main.appendChild(components.profile()); }

    default:
      break;
  }
  console.log(route);
};
