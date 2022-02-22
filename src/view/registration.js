/* eslint-disable max-len */
/* eslint-disable no-useless-escape */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
import { emailMessage, signUp } from '../firebase/firebase-auth.js';
import { addUserInfo } from '../firebase/firebase-data.js';

export default () => {
    const viewRegistration = `
    <section id="principalView1">
    <h1 class="nameSocialNetwork">VIAJA PE</h1>
    <img class="logo1" src="img/airplane.png" />
</section>

<section id="principalView2">
    <div class="hidden">
        <img class="logo2" src="img/airplane.png" />
        <h2 class="text slogan">Lo que está pasando ahora ...</h2>
    </div>

    <form id="formRegistration">
        <input type="text" class="registerInput" id="signUp-user" placeholder="&#xf007;  Nombre de usuario" required>
        </input>
        <span class="message" id="signUpUserErrorMessage"></span>
        <input type="email" class="registerInput" id="signUp-email" placeholder="&#xf0e0;  Correo electrónico"
            required></input>
        <span class="message" id="emailErrorMessage"></span>
        <input type="password" class="registerInput" id="signUp-password" placeholder="&#xf084;  Contraseña"
            required></input>
        <span class="message" id="passwordErrorMessage"></span>

        <div id="termsConditions">
            <input type="checkbox" class="checkTerms" id="checkTerms" required </input>
            <label>Acepto los <span class="acceptTerms"><b>términos y condiciones</b></span> de las Políticas de
                Privacidad.</label>
        </div>

        <button type="submit" class="btn" id="btnRegister"> Registrarse </button>
        <p class="text"> ¿Ya tienes una cuenta? </p>
        <a class="text bold" href="#/login"> Iniciar sesión </a>
    </form>
</section>

<div class="termsAndConditions-hidden">
    <div class="termsAndConditions-modal">
        <header> Términos y condiciones de uso
            <div class="btn-close"><i class="fa-solid fa-xmark"></i></div>
        </header>

        <div class="text-content">
            <p>Estos Términos y Condiciones de uso ("Condiciones") rigen el uso que haces de VIAJA PE, excepto en los
                casos en que indiquemos expresamente que se aplican otras condiciones (y no estas), y proporcionan
                información sobre el servicio de VIAJA PE ("Servicio"), detallado a continuación. Cuando creas una
                cuenta de VIAJA PE o usas VIAJA PE, aceptas estas condiciones. </p>
            <p>Aceptamos proporcionarte el Servicio de VIAJA PE, que incluye todos los productos, las funciones, las
                apps, los servicios, las tecnologías y el software que ofrecemos para cumplir la misión de VIAJA PE:
                acercarte a los lugares que te encantan y a las personas que comparten tu pasión por los viajes. </p>
            <p>Para proporcionar nuestro Servicio, debemos recopilar y usar tu información. Te explicaremos a
                continuación cómo recopilamos, usamos y compartimos información. Debes aceptar la Política de datos para
                usar VIAJA PE.</p>
            <h4>Permisos que nos concedes: Como parte de nuestro acuerdo, también nos otorgas los permisos que
                necesitamos para proporcionarte el Servicio.</h4>
            <ul>
                <li> No reclamamos la propiedad sobre tu contenido, pero nos otorgas una licencia para usarlo.</li>
                <br>
                <li> Permiso para usar tu nombre de usuario, foto del perfil e información sobre tus relaciones y las
                    acciones que realizas con cuentas, anuncios y contenido patrocinado.</li>
                <br>
                <li> Aceptas que podemos descargar e instalar actualizaciones del Servicio en tu dispositivo.</li>
            </ul>

            <h4>Derechos adicionales que nos reservamos</h4>
            <ul>
                <li>Si seleccionas un nombre de usuario o un identificador similar para tu cuenta, podemos cambiarlo si
                    lo consideramos apropiado o necesario. Por ejemplo, si infringe los derechos de propiedad
                    intelectual de otra persona o suplanta la identidad de otro usuario.</li>
                <br>
                <li>Si usas contenido protegido por derechos de propiedad intelectual que poseemos e incluimos en
                    nuestro Servicio, tales como imágenes, diseños, videos o sonidos que ofrecemos y que tú agregas al
                    contenido que creas o compartes, nos reservamos todos los derechos sobre dicho contenido, pero no
                    sobre los tuyos.</li>
                <br>
                <li>Debes obtener nuestro permiso por escrito o un permiso en virtud de una licencia de código abierto
                    para modificar, descompilar o intentar de algún otro modo extraer nuestro código abierto, o bien
                    para crear trabajos derivados de él.</li>
            </ul>

            <h4>Eliminación de contenido e inhabilitación o cancelación de la cuenta</h4>
            <ul>
                <li>Podemos eliminar cualquier contenido o información que compartas en el Servicio si consideramos que
                    infringe estas Condiciones de uso o nuestras políticas, o si la ley nos lo exige o nos lo permite.
                    Podemos negarnos a proporcionarte o dejar de proporcionarte la totalidad o una parte del Servicio
                    inmediatamente para proteger nuestra comunidad o servicios, o bien si supones para nosotros un
                    riesgo o una exposición legal, infringes estas Condiciones de uso o nuestras políticas, vulneras
                    reiteradamente los derechos de propiedad intelectual de otras personas, o si la ley así nos lo exige
                    o nos lo permite. También podemos cancelar o modificar el Servicio, eliminar o bloquear contenido o
                    información que se haya compartido en nuestro Servicio, o dejar de proporcionar la totalidad o parte
                    del Servicio si determinamos que esta medida es razonablemente necesaria para evitar o mitigar
                    repercusiones legales o reglamentarias que resulten adversas para nosotros. </li>
                <br>
                <li>Si eliminas o nosotros inhabilitamos tu cuenta, estas Condiciones finalizarán como un acuerdo entre
                    tú y nosotros. No obstante, esta sección y la que figura debajo, denominada "Nuestro acuerdo y qué
                    ocurre si no estamos de acuerdo con las disposiciones", seguirán en plena vigencia, incluso una vez
                    que se cancele, inhabilite o elimine tu cuenta.</li>
            </ul>

            <h4>Quién asume la responsabilidad si ocurre algo.</h4>
            <ul>
                <li>Nuestro Servicio se proporciona "tal como está", y no podemos garantizar que será seguro o
                    funcionará correctamente en todo momento. EN LA MEDIDA EN QUE LA LEY LO PERMITA, NO ASUMIMOS NINGUNA
                    REPONSABILIDAD, GARANTÍA, YA SEA EXPLÍCITA O IMPLÍCITA, INCLUIDA RESPONSABILIDAD POR DEFECTOS O
                    FALLAS, FALTA DE DERECHOS DE DOMINIO E INFRACCIÓN DE DERECHOS DE PROPIEDAD INTELECTUAL DE TERCEROS.
                </li>
                <br>
                <li>Tampoco controlamos lo que las personas u otros hacen o dicen, ni somos responsables por sus
                    acciones, conductas (online u offline) o contenidos (ni por los tuyos), incluido contenido ilegal o
                    cuestionable. Tampoco somos responsables por los servicios y las funciones que otras personas o
                    empresas ofrecen, incluso si accedes a ellos mediante nuestro Servicio.</li>
                <br>
                <li>Nuestra responsabilidad por todo lo que ocurre en el Servicio ("responsabilidad") está limitada en
                    la medida en que la ley lo permite. Si hay un problema con nuestro Servicio, no podemos saber cuáles
                    podrían ser todas las posibles consecuencias. Aceptas que no seremos responsables por la pérdida de
                    ganancias, lucro cesante, ingresos, información o datos, ni por daños consecuentes, especiales,
                    indirectos, ejemplares, punitivos, imprevistos o incidentales que surjan a raíz de estas
                    Condiciones, o en relación con ellas, incluso si sabemos que hay posibilidades de que ocurran. Esto
                    incluye cuando eliminamos tu contenido, información o cuenta.</li>
            </ul>

            <h4>Actualización de estas Condiciones.</h4>
            <p>Es posible que modifiquemos nuestro Servicio y las políticas, y que debamos actualizar estas Condiciones
                de modo que reflejen nuestros Servicios y las políticas con precisión. A menos que la ley disponga lo
                contrario, te enviaremos una notificación (por ejemplo, mediante nuestro Servicio) antes de modificar
                estas Condiciones, y te daremos la oportunidad de revisar los cambios antes de que entren en vigor. Si
                sigues usando el Servicio, quedarás sujeto a las Condiciones actualizadas. </p>
        </div>
    </div>
</div>
</div>`;

    const viewRegistrationDiv = document.createElement('div');
    viewRegistrationDiv.innerHTML = viewRegistration;
    viewRegistrationDiv.setAttribute('id', 'viewRegistration');
    const signupForm = viewRegistrationDiv.querySelector('#formRegistration');

    // Capturando los campos de entrada
    const signUpUser = viewRegistrationDiv.querySelector('#signUp-user');
    const email = viewRegistrationDiv.querySelector('#signUp-email');
    const password = viewRegistrationDiv.querySelector('#signUp-password');

    // Capturando mensajes de error
    const signUpUserErrorMessage = viewRegistrationDiv.querySelector('#signUpUserErrorMessage');
    const emailErrorMessage = viewRegistrationDiv.querySelector('#emailErrorMessage');
    const passwordErrorMessage = viewRegistrationDiv.querySelector('#passwordErrorMessage');

    // Capturando Aceptar y texto de Términos y Condiciones
    const termsAndConditions = viewRegistrationDiv.querySelector('.termsAndConditions-hidden');
    const acceptTerms = viewRegistrationDiv.querySelector('.acceptTerms');

    // Regex para los campos de formulario
    const userRegex = /^[a-zA-Z0-9\_\-]{2,10}$/;
    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,10}$/;

    // Funcion de validación de campo de nombre de usuario
    function parametersUserInput() {
        if (userRegex.test(signUpUser.value)) {
            signUpUserErrorMessage.innerHTML = '';
        } else {
            signUpUserErrorMessage.innerHTML = 'El usuario debe tener de 2 a 10 dígitos y solo puede contener números, letras y guion bajo';
        }
    }

    // Funcion de validación de campo de email
    function parametersEmailInput() {
        if (emailRegex.test(email.value)) {
            emailErrorMessage.innerHTML = '';
        } else {
            emailErrorMessage.innerHTML = 'Ingrese un correo válido';
        }
    }

    // Funcion de validación de campo de password
    function parametersPasswordInput() {
        if (passwordRegex.test(password.value)) {
            passwordErrorMessage.innerHTML = '';
        } else {
            passwordErrorMessage.innerHTML = 'Min. 6 caracteres y max. 10, debe contener al menos una letra mayuscula, una minuscula, un numero y un caracter especial';
        }
    }

    // Mensajes de validación de campo de nombre de usuario
    signUpUser.addEventListener('input', parametersUserInput);

    // Mensajes de validación de campo de email
    email.addEventListener('input', parametersEmailInput);

    // Mensajes de validación de campo de password
    password.addEventListener('input', parametersPasswordInput);

    // Funcionalidad al boton "Registrarse"
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault(); // previene que se envíe y borre automaticamente 
        const signUpUserValue = viewRegistrationDiv.querySelector('#signUp-user').value;

        signUp(email.value, password.value)
            .then((userCredential) => {
            // Signed in
                const user = userCredential.user;
                console.log(user);

                emailMessage()
                    .then(() => {
                        alert('Verifica tu bandeja de entrada para verificar tu cuenta');
                        window.location.hash = '#/';
                        // Email verification sent!

                        addUserInfo(user.uid, signUpUserValue, email.value); // Añade data a la colección de users al registrarse
                    });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    // signupForm.reset();// limpiar automáticamente campos del formulario  
    });

    // ------------Modal - términos y condiciones--------------
    // Abrir modal cuando se hace click en Términos y condiciones 
    acceptTerms.addEventListener('click', () => {
        termsAndConditions.classList.add('termsAndConditions-show');
        termsAndConditions.classList.remove('termsAndConditions-hidden');
    });

    // Cerrar modal cuando se hace click en X
    const btnClose = viewRegistrationDiv.querySelector('.btn-close');
    btnClose.addEventListener('click', () => {
        termsAndConditions.classList.add('termsAndConditions-hidden');
    });

    return viewRegistrationDiv;
};
