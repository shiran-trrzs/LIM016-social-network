/* eslint-disable import/named */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import {
    getAuth,
    signInWithEmailAndPassword,
    signInWithPopup,
    auth,
    providerGoogle,
    createUserWithEmailAndPassword,
    sendEmailVerification,
} from './firebase-initializer.js';

export {
    auth,
    createUserWithEmailAndPassword,
};

// enviar email de verificacion para creación de cuenta por correo
export const emailMessage = () => sendEmailVerification(auth.currentUser)
    .then(() => {
        // Email verification sent!
        // ...
    });

// Iniciar sesion con Google
export const signInWithGoogle = () => signInWithPopup(auth, providerGoogle)
    .then((res) => {
        window.location.hash = '#/home';
        console.log('iniciaste sesión');
    })
    .catch((rej) => {
        console.log(rej);
    });

// Iniciar sesion con correo y contraseña
export const signInWithEmail = (email, password) => signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
    });
