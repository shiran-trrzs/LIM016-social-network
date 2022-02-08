// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js';

import {
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  getAuth,
  GoogleAuthProvider,
  getRedirectResult,
  sendEmailVerification,
  sendPasswordResetEmail,
  updateProfile,
} from 'https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js';

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
// Initialize authentication
const auth = getAuth(app);
// Initialize firestore
const db = getFirestore(app);
//Initialize storage
const storage = getStorage(app);
//
const user = auth.currentUser;
const providerGoogle = new GoogleAuthProvider(app);


// Exportando firebase auth
export {
  app,
  auth,
  user,
  providerGoogle,  
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,   
  signInWithPopup,
  getRedirectResult,
  sendPasswordResetEmail,
  updateProfile,  
}