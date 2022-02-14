/* eslint-disable import/prefer-default-export */
// aqui exportaras las funciones que necesites

import Login from './login.js';
import Nav from './nav.js';
import Profile from './profile.js';
import Home from './home.js';
import Registration from './registration.js';

const components = {
  login: Login,
  nav: Nav,
  profile: Profile,
  home: Home,
  registration: Registration,

};

export { components };
