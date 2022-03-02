/* eslint-disable no-cond-assign */
/* eslint-disable no-constant-condition */
/* eslint-disable no-alert */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import { auth } from '../firebase/firebase-initializer.js';
import {
    savePost, getUser, updatePost, deletePost, getPost, editPost,
} from '../firebase/firebase-data.js';
import { signOutUser } from '../firebase/firebase-auth.js';

let editStatus = false;
let idPublicaion = '';

// Funcion eliminar publicacion
const functionDeletePost = (optionDelete, evento) => {
    optionDelete.addEventListener('click', () => {
        deletePost(evento.target.id);
        console.log('Se hizo click en eliminar');
    });
};

// Funcion para ocultar div de edicion de post
const showMenuEdit = (idCreator, idUser, divEdit) => {
    if (idUser === idCreator) {
        divEdit.setAttribute('class', 'show');
    } else divEdit.setAttribute('class', 'hidden');
};

export default () => {
    const user = auth.currentUser; // Contiene toda la info del usuario
    // console.log(user);

    const viewHome = `
    <section>
        <div class="userInfo">
            <h2 class="userName"></h2>
            <img class="photoUser" src= "">
        </div>
        <div class="postTextBox">
            <textarea id="task-title" class="inputPublish" placeholder="¿Qué estás pensando?"></textarea> 
            <div class="items">
                <i class="fa-solid fa-image"></i> <span> Imagen </span>
                <i class="fa-solid fa-face-smile-beam"></i> <span class="btnPrueba"> Emoji </span>
                <i class="fa-solid fa-paper-plane"></i> <span class="btnShare"> Compartir </span>
            </div>
        </div>
    </section>
    <div id="postContainer" class="postContainer"> </div>
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

    // Función para mostrar post en tiempo real
    const getPostRealTime = async () => {
        const postContainer = document.getElementById('postContainer');
        if (window.location.hash = '#/home') {
            updatePost((querySnapshot) => {
                let html = '';
                querySnapshot.forEach((docu) => {
                    const dataPost = docu.data();
                    html += `
                    <div class="publication">
                        <div class="headPublication">
                            <div class="photoAndName">
                                <div class="authorP">
                                    <img class="authorPhoto" src= "${dataPost.photo}">
                                </div>
                                <div class="authorN">
                                    <label for="" class="authorName">${dataPost.name}</label>
                                    <label for="" class="date">${dataPost.date}</label>
                                </div>
                            </div>
                            <div class="edit show"  id="${dataPost.userId}">
                                <i class="fa-solid fa-ellipsis-vertical" id=${docu.id}></i>
                                <div class="hidden options">
                                    <ul class="optionDelete">Eliminar</ul>
                                    <ul class="optionEdit" data-id="${docu.id}">Editar</ul>
                                </div>
                            </div>
                        </div>
                        <div class="bodyPublication" id=${docu.id}>${dataPost.textPost}</div>
                        <div class="footPublication">
                            <div class="like">
                                <i class="fa-solid fa-heart"></i>
                                <label class="accountant">0</label>
                            </div>
                            <div class="comment">
                                <i class="fa-solid fa-comment"></i>
                                <label class="accountant">0</label>
                            </div>
                            <div class="share">
                                <i class="fa-solid fa-paper-plane"></i>
                                <label class="accountant">0</label>
                            </div>
                        </div>
                </div>`;
                    postContainer.innerHTML = html;
                });

                // Ocultar div de edicion de post para post de otras personas
                const divEdition = postContainer.querySelectorAll('.edit');
                divEdition.forEach((div) => {
                    showMenuEdit(div.getAttribute('id'), user.uid, div);
                });

                // Mostrar y ocultar opcion de editar y eliminar publicacion
                const btnsEdit = postContainer.querySelectorAll('.fa-ellipsis-vertical');
                btnsEdit.forEach((btn) => {
                    btn.addEventListener('click', (e) => {
                        console.log(e);
                        const divHidden = e.target.nextElementSibling;
                        const status = divHidden.getAttribute('class');
                        console.log(status);
                        if (status.includes('hidden')) {
                            divHidden.setAttribute('class', 'show');
                            // Opcion a eliminar
                            const optionDelete = e.target.nextElementSibling.firstElementChild;
                            // Ejecutando funcion eliminar post
                            functionDeletePost(optionDelete, e);
                        } else divHidden.setAttribute('class', 'hidden');
                    });
                });

                // Editar post
                const btnEdit = postContainer.querySelectorAll('.optionEdit');
                btnEdit.forEach((btn) => {
                    btn.addEventListener('click', async (e) => {
                        const docUnit = await getPost(e.target.dataset.id);
                        const onePost = docUnit.data();
                        viewHomeDiv.querySelector('.inputPublish').value = onePost.textPost;

                        editStatus = true;
                        idPublicaion = docUnit.id;

                        viewHomeDiv.querySelector('.btnShare').innerText = 'Guardar';
                    });
                });
            });
        }
    };

    // Imprimir nombre y foto del usuario que inicio sesion
    getUser(user.uid)
        .then((re) => {
            // console.log(re);
            viewHomeDiv.querySelector('.userName').innerHTML = re.name;
            viewHomeDiv.querySelector('.photoUser').setAttribute('src', re.photo);
            getPostRealTime(); // Ejecucion de funcion
        })
        .catch((err) => err);

    viewHomeDiv.querySelector('.btnShare').addEventListener('click', () => {
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
                    if (!editStatus) {
                        savePost(user.uid, textPublication, hoy.toLocaleDateString(), re.name, re.photo);
                    } else {
                        editPost(idPublicaion, {
                            textPost: textPublication,
                        });
                        editStatus = false;
                    }
                });

            // Limpiar caja de texto
            viewHomeDiv.querySelector('.inputPublish').value = '';
            viewHomeDiv.querySelector('.btnShare').innerText = 'Compartir';
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
