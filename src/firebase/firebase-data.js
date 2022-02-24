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
    arrayUnion,
    arrayRemove,
    updateDoc,
    auth,
} from './firebase-initializer.js';

// Añade data a la colección de users al registrarse
export const addUserInfo = async (id, userName, emailUser, photoUser) => {
    const idReference = doc(db, 'users', id);
    await setDoc(idReference, {
        uid: id,
        name: userName,
        email: emailUser,
        photo: photoUser,
    });
};

// Añade data a la colección de users al iniciar sesion con Google
export const addUserInfoGoogle = (id, user) => {
    const idReference = doc(db, 'users', id);
    return setDoc(idReference, {
        uid: id,
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
    });
};

// Obtener data un usuario de FireStore
export const getUser = (id) => {
    const docRefUsers = doc(db, 'users', id);
    const docSnap = getDoc(docRefUsers).then((docc) => docc.data());
    return docSnap;
};

// Guardar post en FireStore
export const savePost = async (user, post, datePost) => {
    const docRefPosts = await addDoc(collection(db, 'posts'), {
        userId: user,
        textPost: post,
        date: datePost,
        like: [],
    });
    console.log('Se guardo publicacion en la db con el id: ', docRefPosts.id);
};

// Manipula interacción de los likes de posteos
export async function manageLikes(postId) {
    const userUid = auth.currentUser.uid;
    const postRef = doc(db, 'posts', postId);
    const post = await getDoc(postRef);
    const likes = post.data().like;
    console.log(likes);
    const likesUser = likes.find((element) => element === userUid);

    if (likesUser) {
        await updateDoc(postRef, {
            likes: arrayUnion(userUid),
        });
    } else {
        await updateDoc(postRef, {
            likes: arrayRemove(userUid),
        });
    }
}
