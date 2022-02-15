import { emailMessage, signUp } from '../firebase/firebase-auth.js';
import { database, doc, setDoc } from '../firebase/firebase-initializer.js';

// Agregando a la sección de usuarios
async function createUser (name, email, uid, photo) {
    await setDoc(doc(database, 'users', uid), {
        name,
        
    })
}

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

        // capturando los campos de entrada
        const email = viewRegistrationDiv.querySelector('#signup-email').value;
        const password = viewRegistrationDiv.querySelector('#signup-password').value;

        signUp(email, password)
            .then((userCredential) => {
                signupForm.reset();// limpiar automáticamente campos del formulario
                console.log('sign up');
                // Signed in
                const user = userCredential.user;
                console.log(userCredential);

                // Guardando datos del usuario
                let databaseRef = database.ref()

                // creando data de usuario
                let userData = {
                    email: email,
                    lastLogin: Date.now(),
                };

                databaseRef.child('users/' + userX.uid).set(userData);


                emailMessage()
                    .then(() => {
                        alert('Verifica tu bandeja de entrada para verificar tu cuenta');
                        window.location.hash = '#/';
                        // Email verification sent!
                        // ...
                    });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                if (password < 6) {
                    alert ('La contraseña debe contener al menos 6 dígitos');
                }
                alert(errorMessage);
            });
    });
    return viewRegistrationDiv;
};
