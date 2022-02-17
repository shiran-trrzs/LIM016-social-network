/* eslint-disable no-useless-escape */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
import { emailMessage, signUp } from '../firebase/firebase-auth.js';
import { addUserInfo } from '../firebase/firebase-data.js';

export default () => {
    const viewRegistration = `
    <form id = "formRegistration">
        <input type="text" class="registerInput" id="signUp-user" placeholder="Nombre de usuario" required> </input>
        <span id="signUpUserErrorMessage"></span>
        <img></img>
        <input type="email" class="registerInput" id="signUp-email" placeholder="Correo electrónico" required></input>
        <img></img>
        <p id="emailErrorMessage"></p>
        <input type="password" class="registerInput" id="signUp-password" placeholder="Contraseña" required></input>
        <img></img>
        <p id="passwordErrorMessage"></p>
        <img></img>
        <input type="checkbox" class="checkTerms" id="checkTerms" required </input><label>Acepto los términos 
        y condiciones de las Polìticas de Privacidad.</label>
        <button type="submit" id="btnRegister"> Registrarse </button>
        <img></img>
        <p> ¿Ya tienes una cuenta? <a href="#/login"> Iniciar sesión </a> </p>      
    </form>`;

    const viewRegistrationDiv = document.createElement('div');
    viewRegistrationDiv.innerHTML = viewRegistration;
    const signupForm = viewRegistrationDiv.querySelector('#formRegistration');

    // capturando los campos de entrada
    const signUpUser = viewRegistrationDiv.querySelector('#signUp-user');
    const email = viewRegistrationDiv.querySelector('#signUp-email');
    const password = viewRegistrationDiv.querySelector('#signUp-password');

    // capturando mensajes de error
    const signUpUserErrorMessage = viewRegistrationDiv.querySelector('#signUpUserErrorMessage');
    const emailErrorMessage = viewRegistrationDiv.querySelector('#emailErrorMessage');
    const passwordErrorMessage = viewRegistrationDiv.querySelector('#passwordErrorMessage');
    const userRegex = /^[a-zA-Z0-9\_\-]{2,10}$/;
    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;    

    // Mensajes de validación de campo de nombre de usuario
    function parametersUserInput() {
        if (userRegex.test(signUpUser.value)) {
            signUpUserErrorMessage.innerHTML = '';
        } else {
            signUpUserErrorMessage.innerHTML = 'El usuario debe tener de 2 a 10 dígitos y solo puede contener números, letras y guion bajo';
        }
    }
    signUpUser.addEventListener('input', parametersUserInput);

    signupForm.addEventListener('submit', (e) => {
        e.preventDefault(); // previene que se envíe y borre automaticamente 
        signUp(email.value, password.value)
            .then((userCredential) => {
                viewRegistrationDiv.querySelector('#signUp-user').value = '';

                // Signed in
                const user = userCredential.user;
                console.log(user);

                emailMessage()
                    .then(() => {
                        alert('Verifica tu bandeja de entrada para verificar tu cuenta');
                        window.location.hash = '#/';
                        // Email verification sent!

                        addUserInfo(user.uid, signUpUser.value, email.value);
                    });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                if (!emailRegex.test(email.value)) {
                    emailErrorMessage.innerHTML = 'Ingrese un correo válido';
                }
                passwordErrorMessage.innerHTML = 'La contraseña debe contener al menos 6 dígitos';
                // alert(errorMessage);
            });
        signupForm.reset();// limpiar automáticamente campos del formulario  
    });
    return viewRegistrationDiv;
};
