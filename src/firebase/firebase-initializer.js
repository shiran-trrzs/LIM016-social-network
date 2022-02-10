/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js';

import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
} from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js';

// import {} from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-storage.js';

// import {} from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyD3ISB7LRfoDpJsq7yZIreT3Xxy1Ywy28s',
    authDomain: 'viajape-f5cf8.firebaseapp.com',
    projectId: 'viajape-f5cf8',
    storageBucket: 'viajape-f5cf8.appspot.com',
    messagingSenderId: '80794715048',
    appId: '1:80794715048:web:2871366e9ed2561d62d39d',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Inicializa autenticación
const auth = getAuth(app);

const providerGoogle = new GoogleAuthProvider();

export {
    getAuth,
    signInWithPopup,
    app,
    auth,
    providerGoogle,
};
