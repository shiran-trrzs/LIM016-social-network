/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
import {
    db,
    setDoc,
    doc,
} from './firebase-initializer.js';

// Añade data a la colección de users al registrarse
export const addUserInfo = async (id, userName, emailUser) => {
    const idReference = doc(db, 'users', id);
    await setDoc(idReference, {
        uid: id,
        name: userName,
        email: emailUser,
    });
};

// export const addUserInfoGoogle = (id, user) => {
//     const idReference = doc(db, 'users', id);
//     return setDoc(idReference, {
//         uid: id,
//         name: user.displayName,
//         email: user.email,
//         photo: user.photoURL,
//     });
// };
