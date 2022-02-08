/* eslint-disable max-len */
import {
    auth,
    providerGoogle,
    onAuthStateChanged,
    signOut,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    sendEmailVerification,
    getRedirectResult,
    sendPasswordResetEmail,
    updateProfile,
} from './setting.js';

// Registrarse
export const signUp = (email, password) => createUserWithEmailAndPassword(auth, email, password);

// Envío de email de verificación
export const emailVerification = () => sendEmailVerification(auth.currentUser);
