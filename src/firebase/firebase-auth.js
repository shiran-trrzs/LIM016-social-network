/* eslint-disable max-len */
/* eslint-disable import/named */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import {
    getAuth,
    signInWithEmailAndPassword,
    signInWithPopup,
    auth,
    providerGoogle,
    sendEmailVerification,
} from './firebase-initializer.js';

// Crear cuenta con correo y contraseña
// export const createAccount = (email, password) => createUserWithEmailAndPassword(auth, email, password);

// Iniciar sesion con Google
export const signInWithGoogle = () => signInWithPopup(auth, providerGoogle)
    .then((res) => {
        window.location.hash = '#/home';

        const user = res.user;
        const userName = user.displayName;
        const userPhoto = user.photoURL;
        const userId = user.uid;
        console.log(user);
    })
    .catch((rej) => {
        const errorCode = rej.code;
        const errorMessage = rej.message;
        const email = rej.email; // El email está siendo usado
        console.log(rej);
    });

// Iniciar sesion con correo y contraseña
export const signInWithEmail = (email, password) => signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
    });
