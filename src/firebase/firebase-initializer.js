/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */

// Importar las funciones necesarias de los SDK
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js';

import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendEmailVerification,
} from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js';

import {
    getFirestore,
    doc,
    setDoc,
} from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js';

// import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-storage.js';

// import { } from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js';

// La configuración de Firebase de nuestra app web
const firebaseConfig = {
    apiKey: 'AIzaSyD3ISB7LRfoDpJsq7yZIreT3Xxy1Ywy28s',
    authDomain: 'viajape-f5cf8.firebaseapp.com',
    projectId: 'viajape-f5cf8',
    storageBucket: 'viajape-f5cf8.appspot.com',
    messagingSenderId: '80794715048',
    appId: '1:80794715048:web:2871366e9ed2561d62d39d',
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Autenticación
const auth = getAuth(app);
const authUid = firebase.auth;

// Inicializar firebase
const db = getFirestore(app);

// Establecer proveedor
const providerGoogle = new GoogleAuthProvider();

// autenticación
export {
    getAuth,
    signInWithPopup,
    app,
    auth,
    authUid,
    providerGoogle,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendEmailVerification,
};

// firestore
export {
    database,
    doc,
    setDoc,
};
