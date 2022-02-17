/* eslint-disable no-trailing-spaces */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
import { emailMessage, signUp } from '../firebase/firebase-auth.js';
import { addUserInfo } from '../firebase/firebase-data.js';

export default () => {
    const viewRegistration = `
        <section id="principalView1">
            <h1 class="nameSocialNetwork">VIAJA PE</h1>
            <img class="logo1" src="img/airplane.png"/>
        </section>

        <section id="principalView2">
            <div class="hidden">
                <img class="logo2" src="img/airplane.png"/>
                <h2 class="text slogan">Lo que está pasando ahora ...</h2>
            </div>

            <form id = 'formRegistration'>
                <input type='text' class='registerInput' id='signup-user' placeholder=' &#xf007;  Nombre de usuario' required> </input>
                <img></img>
                <input type='email' class='registerInput' id='signup-email' placeholder=' &#xf0e0;  Correo electrónico' required></input>
                <img></img>
                <input type='password' class='registerInput' id='signup-password' placeholder=' &#xf084;  Contraseña' required></input>
                <img></img>
                <div id="termsConditions">
                <input type="checkbox" class="checkTerms" id="checkTerms" required </input>
                <label class="text">Acepto los términos y condiciones de las Polìticas de Privacidad.</label>
                </div>
                <button type='submit' class="btn" id='btnRegister'> Registrarse </button>
                <img></img>
                <p class="text"> ¿Ya tienes una cuenta? </p>
                <a class="text bold" href='#/login'> Iniciar sesión </a> 
            </form>
        </section>`;

    const viewRegistrationDiv = document.createElement('div');
    viewRegistrationDiv.innerHTML = viewRegistration;
    viewRegistrationDiv.setAttribute('id', 'viewRegistration');
    const signupForm = viewRegistrationDiv.querySelector('#formRegistration');

    signupForm.addEventListener('submit', (e) => {
        e.preventDefault(); // previene que se envíe y borre automaticamente
        const email = viewRegistrationDiv.querySelector('#signup-email').value;
        const password = viewRegistrationDiv.querySelector('#signup-password').value;
        const newUser = viewRegistrationDiv.querySelector('#signup-user').value;
        signUp(email, password)
            .then((userCredential) => {
                signupForm.reset();// limpiar automáticamente campos del formulario
                console.log('sign up');
                // Signed in
                const user = userCredential.user;
                console.log(user);

                emailMessage()
                    .then(() => {
                        alert('Verifica tu bandeja de entrada para verificar tu cuenta');
                        window.location.hash = '#/';
                        // Email verification sent!

                        addUserInfo(user.uid, newUser, email);
                    });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    });
    return viewRegistrationDiv;
};
