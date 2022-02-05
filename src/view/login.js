export default () => {
  const viewHome = `
    <section>
        <h1 class='textLeft'> VIAJA PE </h1>
        <img></img>
    </section>
    <section>
    <div id='welcomeMessage'>
        <h2 class='textRight'> Lo que está pasando ahora </h2>
    <img></img>
    </div>
    <div id='loginContainer'>
        <input type='email' class='loginBox' id='email' placeholder='Correo electrónico'> </input>
        <img></img>
        <input type='password' class='loginBox' id='password' placeholder='Contraseña'></input>
        <img></img>
        <a href=''> Olvidé mi contraseña </a>
        <button type='submit'> Iniciar sesión </button>
        <button type='submit'> Continuar con Google </button>
        <img></img>
        <p> ¿No tienes una cuenta? <a href=''> Únete </a> </p>
    </div>
    </section>`;
  const viewHomeDiv = document.createElement('div');
  viewHomeDiv.innerHTML = viewHome;
  return viewHomeDiv;
};
