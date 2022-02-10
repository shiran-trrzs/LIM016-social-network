import { signUp } from '../firebase/firebase-auth.js';

// Formulario de registro
export const viewFormRegistration = () => {
  const formRegistration = `

    <form id = 'formRegistration'>

        <input type='text' class='registerInput' id='user' placeholder='Nombre de usuario'> </input>
        <img></img>

        <input type='email' class='registerInput' id='email' placeholder='Correo electrónico'></input>
        <img></img>

        <input type='password' class='registerInput' id='password' placeholder='Contraseña'></input>
        <img></img>

        <input type="checkbox" class="checkterms" id="checkterms" </input><label>Acepto los términos 
        y condiciones de las Polìticas de Privacidad.</label>

        <button type='submit'> Registrarse </button>
        <img></img>

        <p> ¿Ya tienes una cuenta? <a href='#/login'> Iniciar sesión </a> </p>
    
    </form>`;

  return formRegistration;
};

// Registro por correo y contraseña
export const emailRegister = (selectorForm, containerForm) => {
  const selectTypeRegister = document.getElementById(selectorForm);
  selectTypeRegister.addEventListener
}
