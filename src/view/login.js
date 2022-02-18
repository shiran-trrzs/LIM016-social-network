import { signInWithGoogle, signInWithEmail } from '../firebase/firebase-auth.js';

export default () => {
    const viewLogin = `
        <section id="principalView1">
            <h1 class="nameSocialNetwork">VIAJA PE</h1>
            <img class="logo1" src="img/airplane.png"/>    
        </section>

        <section id="principalView2">
            <div class="hidden">
                <img class="logo2" src="img/airplane.png"/>
                <h2 class="text slogan">Lo que está pasando ahora ...</h2>
            </div>
            
            <div id="formSection">
                <input type="email" class="loginBox" id="email" placeholder=" &#xf0e0;  Correo electronico"/>
                <input type="password" class="loginBox" id="password" placeholder=" &#xf084;  Contraseña" />
                <span id="signInErrorMessage">blaaaaaaaa</span>
                <a class="text forgetPasswordLink" href="#/password"> Olvidé mi contraseña </a>
            </div>

            <div id="buttons">
                <button type="submit" class="btn" id="btnLogIn"> Iniciar sesión </button>
                <button type="submit" class="btn" id="btnGoogle"> 
                    <i class="fa-brands fa-google"></i>
                    <span>Continuar con Google</span> 
                </button>
                <p class="text">¿No tienes una cuenta? <a class="text bold" href="#/registration"> Únete </a> </p>
            </div>
        </section>`;

    // Funcion iniciar sesion
    const functionLoginIn = () => {
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;
        signInWithEmail(email, password);
    };

    const viewLoginDiv = document.createElement('div');
    viewLoginDiv.setAttribute('id', 'viewLog');
    viewLoginDiv.innerHTML = viewLogin;

    // Funcionalidad al boton de "Continuar con Google"
    viewLoginDiv.querySelector('#btnGoogle').addEventListener('click', signInWithGoogle);

    // Funcionalidad al boton de "Iniciar sesion"
    viewLoginDiv.querySelector('#btnLogIn').addEventListener('click', functionLoginIn);

    return viewLoginDiv;
};
