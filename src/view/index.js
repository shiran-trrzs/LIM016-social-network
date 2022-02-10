/* eslint-disable import/prefer-default-export */
// aqui exportaras las funciones que necesites

<<<<<<< HEAD
/* export const myFunction = () => {
  // aqui tu codigo
  console.log('Hola mundo!');
};
 */
=======
import Login from './login.js';
import Nav from './nav.js';
import Profile from './profile.js';
import Home from './home.js';

const components = {
    login: Login,
    nav: Nav,
    profile: Profile,
    home: Home,
};

export { components };
>>>>>>> 3f8d5a58264f586dcc73d9e9869fc0a2f2b4d12a
