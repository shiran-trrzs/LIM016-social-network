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
    signOut,
    onAuthStateChanged,
} from './firebase-initializer.js';

// registrar usuario con correo y contraseña
export const signUp = (email, password) => createUserWithEmailAndPassword(auth, email, password);

// enviar email de verificacion para creación de cuenta por correo
export const emailMessage = () => sendEmailVerification(auth.currentUser);

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
        window.location.hash = '#/home';
        console.log('iniciaste sesión con email');
        console.log(user);
    });

// cerrar sesión
export const authSignOut = (auth) => signOut(auth);

// observador
onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const email = user.email;
        const emailVerified = user.emailVerified;
        const uid = user.uid;
        let textoVerificado = '';
        if (emailVerified === false) {
            textoVerificado = 'Email no verificado';
        } else {
            textoVerificado = 'email verificado';
        }
        // ...
    } else {
        // User is signed out
        // ...
    }
});
