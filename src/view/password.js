export default () => {
    const viewForgetPassword = `
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
                <input type="email" class="loginBox" id="emailChangePassword" placeholder=" &#xf0e0; Ingresa tu correo"/>
                <button type="submit" class="btn" id="btnChangePassword"> Restablecer contraseña </button>
            </div>

            <div id="replyMessage">
                <span id="message"></span>
                <button type="button" class="btn" id="btnReturnToLogin"> Volver al inicio </button>
            </div>
        </section>`;

    const viewForgetPasswordDiv = document.createElement('div');
    viewForgetPasswordDiv.innerHTML = viewForgetPassword;
    viewForgetPasswordDiv.setAttribute('id', 'viewForgetPassword');
    return viewForgetPasswordDiv;
};
