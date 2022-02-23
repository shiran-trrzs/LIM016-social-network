/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/prefer-default-export */
// aqui exportaras las funciones que necesites

import Login from './login.js';
import Profile from './profile.js';
import Home from './home.js';
import Registration from './registration.js';
import Password from './password.js';

const components = {
    login: Login,
    profile: Profile,
    home: Home,
    registration: Registration,
    password: Password,
};

export { components };
