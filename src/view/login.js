export default () => {
    const viewLogin = `
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
        <img src='../img/mail.png'><input type='email' class='loginBox' id='email' placeholder='Correo electrónico'> </input> 
        <img src='../img/password.png'><input type='password' class='loginBox' id='password' placeholder='Contraseña'></input>
  
        <a href=''> Olvidé mi contraseña </a>
        <button type='submit'> Iniciar sesión </button>
        <img src='../img/google_icon.png'><button type='submit'> Continuar con Google </button>
        <p> ¿No tienes una cuenta? <a href=''> Únete </a> </p>
    </div>
    </section>`;

    const viewLoginDiv = document.createElement('div');
    viewLoginDiv.innerHTML = viewLogin;
    return viewLoginDiv;
};
