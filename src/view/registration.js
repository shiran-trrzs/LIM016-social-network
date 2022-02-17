/* eslint-disable no-trailing-spaces */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
import { emailMessage, signUp } from '../firebase/firebase-auth.js';
import { addUserInfo } from '../firebase/firebase-data.js';

export default () => {
    const viewRegistration = `
      <form id = 'formRegistration'>
          <input type='text' class='registerInput' id='signup-user' placeholder='Nombre de usuario' required> </input>
          <img></img>
          <input type='email' class='registerInput' id='signup-email' placeholder='Correo electrónico' required></input>
          <img></img>
          <input type='password' class='registerInput' id='signup-password' placeholder='Contraseña' required></input>
          <img></img>
          <input type="checkbox" class="checkTerms" id="checkTerms" required </input><label>Acepto los términos 
          y condiciones de las Polìticas de Privacidad.</label>
          <button type='submit' id='btnRegister'> Registrarse </button>
          <img></img>
          <p> ¿Ya tienes una cuenta? <a href='#/login'> Iniciar sesión </a> </p>
      
      </form>`;

    const viewRegistrationDiv = document.createElement('div');
    viewRegistrationDiv.innerHTML = viewRegistration;
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
