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
    createUserWithEmailAndPassword,
    sendEmailVerification,
    sendPasswordResetEmail,
    // signOut,
} from './firebase-initializer.js';

// Registrar usuario con correo y contraseña
export const signUp = (email, password) => createUserWithEmailAndPassword(auth, email, password);

// Enviar email de verificacion para creación de cuenta por correo
export const emailMessage = () => sendEmailVerification(auth.currentUser);

// Iniciar sesion con Google
export const signInWithGoogle = () => signInWithPopup(auth, providerGoogle)
    .then((res) => {
        const user = res.user;
        // window.localStorage.setItem('user', JSON.stringify(user));
        // addUserInfoGoogle(user);
        window.location.hash = '#/home';
    })
    .catch((rej) => {
        const errorCode = rej.code;
        const errorMessage = rej.message;
        const email = rej.email; // El email está siendo usado
        console.log(rej);
    });
/*
// Cerrar sesión
export const signOutUser = () => signOut(auth)
    .then(() => {
    // Sign-out successful.
    }).catch((error) => {
    // An error happened.
    });
*/
// Iniciar sesion con correo y contraseña
export const signInWithEmail = (email, password) => signInWithEmailAndPassword(auth, email, password);

// Modificar contraseña
export const changePassword = (email) => sendPasswordResetEmail(auth, email);
