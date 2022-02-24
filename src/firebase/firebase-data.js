/* eslint-disable no-unreachable */
/* eslint-disable no-console */
/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
import {
    db,
    setDoc,
    doc,
    getDoc,
    addDoc,
    collection,
    deleteDoc,
    query,
    where,
    onSnapshot,
} from './firebase-initializer.js';

// Funcion que añade data a la colección de users al registrarse
export const addUserInfo = async (id, userName, emailUser, photoUser) => {
    const idReference = doc(db, 'users', id);
    await setDoc(idReference, {
        uid: id,
        name: userName,
        email: emailUser,
        photo: photoUser,
    });
};

// Funcion que añade data a la colección de users al iniciar sesion con Google
export const addUserInfoGoogle = (id, user) => {
    const idReference = doc(db, 'users', id);
    return setDoc(idReference, {
        uid: id,
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
    });
};

// Funcion obtener data un usuario de FireStore
export const getUser = (id) => {
    const docRefUsers = doc(db, 'users', id);
    const docSnap = getDoc(docRefUsers).then((docc) => docc.data());
    return docSnap;
};

// Funcion guardar post en FireStore
export const savePost = async (user, post, datePost) => {
    const docRefPosts = await addDoc(collection(db, 'posts'), {
        userId: user,
        textPost: post,
        date: datePost,
        like: [],
    });
    console.log(docRefPosts.id);
    console.log('Se guardo publicacion en la db con el id: ', docRefPosts.id);
    return docRefPosts;
};

// Función para mostrar post en tiempo real
export const getPostRealTime = async (callback) => {
    const q = query(collection(db, 'posts'));
    const unsubscribe = await onSnapshot(q, callback);
};

// Funcion eliminar post de FireStore
export const deletePost = async (idPost) => {
    await deleteDoc(doc(db, 'posts', idPost));
    console.log('se elemino de la bd');
};

// Manipula interacción de los likes de posteos
// export const setLikes = async (postId, dataLikes) => {
//     const postRef = doc(db, 'posts', postId);
//     await updateDoc(postRef, {
//         like: dataLikes,
//     });
// };
