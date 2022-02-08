import { components } from '../view/index.js';

export const changeView = (route) => {
  const main = document.getElementById('main');
  main.innerHTML = '';

  switch (route) {
    case '':
    case '#':
    case '#/':
    case '#/login': { return main.appendChild(components.login()); }
    case '#/home': { return main.appendChild(components.nav()); }
    case '#/profile': { return main.appendChild(components.profile()); }
    case '#/registration': { return main.appendChild(components.registration());}

    default:
      break;
  }
  console.log(route);
};
