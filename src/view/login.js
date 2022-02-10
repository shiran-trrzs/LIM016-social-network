import { signInWithGoogle } from '../firebase/firebase-auth.js';

export default () => {
<<<<<<< HEAD
  const viewHome = `
=======
    const viewLogin = `
>>>>>>> 3f8d5a58264f586dcc73d9e9869fc0a2f2b4d12a
    <section>
        <h1 class='textLeft'> VIAJA PE </h1>
        <img src='../img/airplane.png'>
    </section>

    <section>
    <div id='welcomeMessage'>
        <img src='../img/airplane.png'>
        <h2 class='textRight'> Lo que está pasando ahora </h2>
    </div>
    <div id='loginContainer'>
        <i class="fa-solid fa-envelope"> <input type='email' class='loginBox' id='email' placeholder='Correo electrónico'> </input> </i> 
        <i class="fa-solid fa-lock"></i> <input type='password' class='loginBox' id='password' placeholder='Contraseña'></input> </i>
  
        <a href=''> Olvidé mi contraseña </a>
        <button type='submit' id="btnLogIn"> Iniciar sesión </button>
        <img src='../img/google_icon.png'><button type='submit' id="btnGoogle"> Continuar con Google </button>
        <p> ¿No tienes una cuenta? <a href=''> Únete </a> </p>
    </div>
<<<<<<< HEAD
    </section>
`;
  const viewHomeDiv = document.createElement('div');
  viewHomeDiv.innerHTML = viewHome;
  return viewHomeDiv;
=======
    </section>`;

    const viewLoginDiv = document.createElement('div');
    viewLoginDiv.innerHTML = viewLogin;
    viewLoginDiv.querySelector('#btnGoogle').addEventListener('click', signInWithGoogle);
    return viewLoginDiv;
>>>>>>> 3f8d5a58264f586dcc73d9e9869fc0a2f2b4d12a
};
