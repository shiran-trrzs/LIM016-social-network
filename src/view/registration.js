import { signUp, emailVerification } from "../firebase/functionsAuth.js";

export default () => {
  const viewFormRegistration = `

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

  const viewFormRegistrationDiv = document.createElement("div");
  viewFormRegistrationDiv.innerHTML = viewFormRegistration;
  return viewFormRegistrationDiv;
};

//Función para el registro por correo electrónico
export const singUpEmail = ()