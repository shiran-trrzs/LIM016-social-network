import { signInWithGoogle, signInWithEmail } from '../firebase/firebase-auth.js';

export default () => {
    const viewLogin = `
    <div class="page">
        <section id="socialNetwork">
            <h1 class="textLeft">VIAJA PE</h1>
            <img class="logo" src="img/airplane.png"/>
            <h2 class="text textRight">Lo que está pasando ahora</h2>
        </section>

        <section id="formSection">
            <input type="email" class="loginBox" id="email" placeholder=" &#xf0e0; Correo electronico"/>
            <input type="password" class="loginBox" id="password" placeholder=" &#xf084; Contraseña" />
            <a class="text" href=""> Olvidé mi contraseña </a>
        </section>

        <section id="buttons">
            <button type="submit" class="btn" id="btnLogIn"> Iniciar sesión </button>
            <button type="submit" class="btn" id="btnGoogle"> 
            <img class="imgGoogle" src="../img/google_icon.png" />
            <span>Continuar con Google</span> 
            </button>
            <p class="text">¿No tienes una cuenta? <a class="text bold" href=""> Únete </a> </p>
        </section>

    </div>`;

    const viewLoginDiv = document.createElement('div');
    viewLoginDiv.setAttribute('id', 'viewLog');
    viewLoginDiv.innerHTML = viewLogin;
    viewLoginDiv.querySelector('#btnGoogle').addEventListener('click', signInWithGoogle);
    const email = viewLoginDiv.querySelector('#email');
    const password = viewLoginDiv.querySelector('#password');
    viewLoginDiv.querySelector('#btnLogIn').addEventListener('click', () => signInWithEmail(email.value, password.value));
    return viewLoginDiv;
};
