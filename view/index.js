/* eslint-disable import/prefer-default-export */
// aqui exportaras las funciones que necesites

import Login from './login.js';
import Home from './home.js';
import Registration from './registration.js';
import Password from './password.js';

const components = {
    login: Login,
    home: Home,
    registration: Registration,
    password: Password,
};

export { components };
