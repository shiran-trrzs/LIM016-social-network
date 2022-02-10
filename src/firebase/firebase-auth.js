/* eslint-disable import/named */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import {
    getAuth,
    signInWithPopup,
    auth,
    provider,
} from './firebase-initializer.js';

export const signInWithGoogle = () => signInWithPopup(auth, provider)
    .then((res) => {
        console.log(res);
    });

   
