/* eslint-disable import/named */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import {
    getAuth,
    signInWithPopup,
    auth,
    providerGoogle,
} from './firebase-initializer.js';

export const signInWithGoogle = () => signInWithPopup(auth, providerGoogle)
    .then((res) => {
        window.location.hash = '#/home';
        console.log('iniciaste sesión');
    })
    .catch((rej) => {
        console.log(rej);
    });
