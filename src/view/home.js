/* eslint-disable no-alert */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import {
    auth, db, onSnapshot, query, collection,
} from '../firebase/firebase-initializer.js';
import { savePost, getUser } from '../firebase/firebase-data.js';
import { signOutUser } from '../firebase/firebase-auth.js';

export default () => {
    const user = auth.currentUser; // Contiene toda la info del usuario
    // console.log(user);

    const viewHome = /* html */ `
    <section>
        <div class="userInfo">
            <h2 class="userName"></h2>
            <img class="photoUser" src= "">
        </div>
        <div class="postTextBox">
            <textarea class="inputPublish" placeholder="¿Qué estás pensando?"></textarea> 
            <div class="items">
                <i class="fa-solid fa-image"></i> <span> Imagen </span>
                <i class="fa-solid fa-face-smile-beam"></i> <span class="btnPrueba"> Emoji </span>
                <i class="fa-solid fa-paper-plane"></i> <span class="btnShare"> Compartir </span>
            </div>
        </div>
    </section>

    <div class="menuBar">
        <nav class="navBar">
            <img src="../img/home_icon.png">
            <img src="../img/profile_icon.png">
            <img src="../img/setting_icon.png">
            <img src="../img/group_icon.png">
            <img  class="iconBar" id="logoutIcon" src="../img/logout_icon.png"> 
        </nav>
    </div>`;

    // Creacion de vista home
    const viewHomeDiv = document.createElement('div');
    viewHomeDiv.setAttribute('class', 'home');
    viewHomeDiv.innerHTML = viewHome;

    // Imprimir nombre y foto del usuario que inicio sesion
    getUser(user.uid)
        .then((re) => {
            // console.log(re);
            viewHomeDiv.querySelector('.userName').innerHTML = re.name;
            viewHomeDiv.querySelector('.photoUser').setAttribute('src', re.photo);
        })
        .catch((err) => err);

    // Funcion para limpiar los posts
    function limpiarPosts() {
        const nodosEliminar = viewHomeDiv.querySelectorAll('.publish');
        console.log(nodosEliminar);
        nodosEliminar.forEach((nodo) => nodo.remove());
    }

    // Funcionalidad al compartir post
    viewHomeDiv.querySelector('.btnShare').addEventListener('click', () => {
        // Ejecutando funcion de limpiar posts
        limpiarPosts();
        // Función para mostrar post en tiempo real
        const getPostRealTime = async () => {
            const q = query(collection(db, 'posts'));
            const unsubscribe = await onSnapshot(q, (querySnapshot) => {
                const posts = [];
                querySnapshot.forEach((documento) => {
                    // console.log(documento.data());
                    posts.push(documento.data());
                });
                // Recorrer posts
                posts.forEach((e) => {
                    // Template strings de cada post
                    const htmlDiv = /* html */ `<div class="publication">
        <div class="headPublication">
            <div class="authorP">
                <img class="authorPhoto" src= "${e.photo}">
            </div>
            <div class="authorN">
                <label for="" class="authorName">${e.name}</label>
                <label for="" class="date">${e.date}</label>
            </div>
            <div class="edit" >
                <i class="fa-solid fa-ellipsis-vertical"></i>
                <div class="hidde options">
                    <ul class="optionDelete">Eliminar</ul>
                    <ul class="optionEdit">Editar</ul>
                </div>
            </div>
        </div>
        <div class="bodyPublication">${e.textPost}</div>
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
                    // Creacion de post
                    const viewPublishDiv = document.createElement('div');
                    viewPublishDiv.innerHTML = htmlDiv;
                    viewHomeDiv.appendChild(viewPublishDiv);
                    viewPublishDiv.setAttribute('class', 'publish');
                });
                // console.log(posts);
                return posts;
            });
        };

        // Ejecucion de funcion
        getPostRealTime();

        // Obtener texto a publicar
        const textPublication = viewHomeDiv.querySelector('.inputPublish').value;
        if (textPublication === '') {
            alert('Escribe algo para publicar'); // En caso no exista texto aparece un alert
        } else {
            // Llamar a la funcion getUser para obtener nombre y foto del autor del post
            getUser(user.uid)
                .then((re) => {
                    // Obtener fecha
                    const tiempoTranscurrido = Date.now();
                    const hoy = new Date(tiempoTranscurrido);
                    // Guardando publicacion en db
                    savePost(user.uid, textPublication, hoy.toLocaleDateString(), re.name, re.photo);
                });

            // Limpiar caja de texto
            viewHomeDiv.querySelector('.inputPublish').value = '';

            // Mostrar y ocultar opcion de editar y eliminar publicacion
            /* const botonEditar = viewPublishDiv.querySelector('.fa-ellipsis-vertical');
            const divOcul = viewPublishDiv.querySelector('.options');
            botonEditar.addEventListener('click', () => {
                const status = divOcul.getAttribute('class');
                if (status === 'hidden') {
                    divOcul.setAttribute('class', 'show');
                } else divOcul.setAttribute('class', 'hidden');
            }); */
        }
    });

    // Cerrar sesión
    const logoutIcon = viewHomeDiv.querySelector('#logoutIcon');
    logoutIcon.addEventListener('click', () => {
        signOutUser()
            .then(() => {
                // Borrando datos
                sessionStorage.clear();
                // Sign-out successful.
                window.location.hash = '#/';
            })
            .catch((error) => {
                console.log(error);
            });
    });

    return viewHomeDiv;
};
