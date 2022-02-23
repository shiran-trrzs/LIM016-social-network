/* eslint-disable consistent-return */
/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
import { components } from '../view/index.js';
import { auth, onAuthStateChanged } from '../firebase/firebase-initializer.js';

export const changeView = (route) => {
    const main = document.getElementById('main');
    main.innerHTML = '';

    const authState = () => onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // const uid = user.uid;
            console.log('Usuario en sesión');
            return main.appendChild(components.home());
            // ...
            // eslint-disable-next-line no-else-return
        } else {
            // User is signed out
            console.log('Se cerró sesión');
            window.location.hash = '#/login';
        }
    });

    switch (route) {
    case '':
    case '#':
    case '#/':
    case '#/login': { return main.appendChild(components.login()); }
    case '#/home': { return authState(); }
    case '#/registration': { return main.appendChild(components.registration()); }
    case '#/password': { return main.appendChild(components.password()); }
    default: break;
    }
    console.log(route);
};
