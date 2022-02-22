/* eslint-disable no-console */
import { auth } from '../firebase/firebase-initializer.js';

export default () => {
    const user = auth.currentUser; // Contiene toda la info del usuario
    console.log(user);
    const viewHome = `
    <section class="contacts">
        <p> Agregar contacto </p>
        <img src="../img/dawson.png"> <p> Dawson Leery </p>
        <img src="../img/mimi.png"> <p> Mimi Ortega </p>
        <img src="../img/katy.png"> <p> Katy Dibiasky </p>
        <img src="../img/nico.png"> <p> Nico Traveler </p>
        <img src="../img/leti.png"> <p> Leti Dev </p>
        <img src="../img/airplane_home.png"> <p> VIAJA PE </p>
    </section>
    <section>
        <div class="userInfo">
            <h2 class="userName"> ${user.displayName} </h2>
            <img class="photoUser" src= "${user.photoURL}">
        </div>
        <form class="postTextBox">
            <textarea class="inputPublish" placeholder="¿Qué estás pensando?"> </textarea>
            <div class="items">
                <i class="fa-solid fa-image"></i> <span> Imagen </span>
                <i class="fa-solid fa-face-smile-beam"></i> <span> Emoji </span>
                <i class="fa-solid fa-paper-plane"></i> <span> Compartir </span>
            </div>
        </form>
    </section>`;

    const viewHomeDiv = document.createElement('div');
    viewHomeDiv.setAttribute('class', 'home');
    viewHomeDiv.innerHTML = viewHome;
    return viewHomeDiv;
};
