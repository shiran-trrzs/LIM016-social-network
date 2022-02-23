/* eslint-disable no-console */
import { auth } from '../firebase/firebase-initializer.js';
import { savePost, getUser } from '../firebase/firebase-data.js';

export default () => {
    const user = auth.currentUser; // Contiene toda la info del usuario
    console.log(user);

    const viewHome = `

    <section>
        <div class="userInfo">
            <h2 class="userName"></h2>
            <img class="photoUser" src= "">
        </div>
        <div class="postTextBox">
            <textarea class="inputPublish" placeholder="¿Qué estás pensando?"> </textarea> 
            <div class="items">
                <i class="fa-solid fa-image"></i> <span> Imagen </span>
                <i class="fa-solid fa-face-smile-beam"></i> <span> Emoji </span>
                <i class="fa-solid fa-paper-plane"></i> <span class="btnShare"> Compartir </span>
            </div>
        </div>
    </section>

    <section class="contacts">
        <p> Agregar contacto </p>
        <img src="../img/dawson.png"> <p> Dawson Leery </p>
        <img src="../img/mimi.png"> <p> Mimi Ortega </p>
        <img src="../img/katy.png"> <p> Katy Dibiasky </p>
        <img src="../img/nico.png"> <p> Nico Traveler </p>
        <img src="../img/leti.png"> <p> Leti Dev </p>
        <img src="../img/airplane_home.png"> <p> VIAJA PE </p>
    </section>

    <nav class="navBar">
            <img src="../img/home_icon.png">
            <img src="../img/profile_icon.png">
            <img src="../img/setting_icon.png">
            <img src="../img/group_icon.png">
            <img src="../img/logout_icon.png"> 
    </nav>`;

    // Creacion de vista home
    const viewHomeDiv = document.createElement('div');
    viewHomeDiv.setAttribute('class', 'home');
    viewHomeDiv.innerHTML = viewHome;

    // Imprimir nombre y foto del usuario que inicio sesion
    getUser(user.uid)
        .then((re) => {
            console.log(re);
            viewHomeDiv.querySelector('.userName').innerHTML = re.name;
            viewHomeDiv.querySelector('.photoUser').setAttribute('src', re.photo);
        })
        .catch((err) => err);

    // Post
    const htmlDiv = `<div class="publication">
        <div class="headPublication">
            <div class="authorP">
                <img class="authorPhoto" src= "">
            </div>
            <div class="authorN">
                <label for="" class="authorName"></label>
                <label for="" class="date"></label>
            </div>
        </div>
        <div class="bodyPublication">
        </div>
        <div class="footPublication">
            <div class="like">
                <i class="fa-solid fa-heart"></i>
                <label for="">0</label>
            </div>
            <div class="comment">
                <i class="fa-solid fa-comment"></i>
                <label for="">0</label>
            </div>
            <div class="share">
                <i class="fa-solid fa-paper-plane"></i>
                <label for="">0</label>
            </div>
        </div>
    </div>`;

    // Funcionalidad al compartir"
    viewHomeDiv.querySelector('.btnShare').addEventListener('click', () => {
        // Obtener fecha
        const tiempoTranscurrido = Date.now();
        const hoy = new Date(tiempoTranscurrido);

        // Obtener texto a publicar
        const textPublication = viewHomeDiv.querySelector('.inputPublish').value;

        // Creacion de post
        const viewPublishDiv = document.createElement('div');
        viewPublishDiv.innerHTML = htmlDiv;
        viewHomeDiv.appendChild(viewPublishDiv);
        viewPublishDiv.setAttribute('class', 'publish');

        // Imprimir nombre y foto del usuario que realiza la publicacion
        getUser(user.uid)
            .then((re) => {
                viewPublishDiv.querySelector('.authorPhoto').setAttribute('src', re.photo);
                viewPublishDiv.querySelector('.authorName').innerHTML = re.name;
            })
            .catch((err) => err);

        // Imprimir publicacion
        viewPublishDiv.querySelector('.bodyPublication').innerHTML = textPublication;
        viewPublishDiv.querySelector('.date').innerHTML = hoy.toLocaleDateString();
        // Guardando publicacion en db
        savePost(user.uid, textPublication, hoy.toLocaleDateString());

        return viewPublishDiv;
    });

    return viewHomeDiv;
};
