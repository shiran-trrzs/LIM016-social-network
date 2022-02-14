/* eslint-disable import/named */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import {
    getAuth,
    signInWithEmailAndPassword,
    signInWithPopup,
    auth,
    providerGoogle,
} from './firebase-initializer.js';

// Crear cuenta con correo y contraseña
// export const createAccount = (email, password) => createUserWithEmailAndPassword(auth, email, password);

// Iniciar sesion con Google
export const signInWithGoogle = () => signInWithPopup(auth, providerGoogle)
    .then((res) => {
        window.location.hash = '#/home';
        console.log('iniciaste sesión con google');
    })
    .catch((rej) => {
        console.log(rej);
    });

// Iniciar sesion con correo y contraseña
export const signInWithEmail = (email, password) => signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        window.location.hash = '#/home';
        console.log('iniciaste sesión con email');
        console.log(user);
    });
