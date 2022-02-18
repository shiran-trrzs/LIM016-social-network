export default () => {
    const terms = `
    <div class="Terms">
      <a href="#/registration"><i class="fa-solid fa-xmark"></i></a>
      <div class="TermsAndConditionsText">
        <h2> Términos y condiciones de uso de VIAJA PE </h2>
        <p>Estos Términos y Condiciones de uso ("Condiciones") rigen el uso que haces de VIAJA PE, excepto en los casos en que indiquemos expresamente que se aplican otras condiciones (y no estas), y proporcionan información sobre el servicio de VIAJA PE ("Servicio"), detallado a continuación. Cuando creas una cuenta de VIAJA PE o usas VIAJA PE, aceptas estas condiciones. </p>
        <p>Aceptamos proporcionarte el Servicio de VIAJA PE, que incluye todos los productos, las funciones, las apps, los servicios, las tecnologías y el software que ofrecemos para cumplir la misión de VIAJA PE: acercarte a los lugares que te encantan y a las personas que comparten tu pasión por los viajes. </p>
        <p>Para proporcionar nuestro Servicio, debemos recopilar y usar tu información. Te explicaremos a continuación cómo recopilamos, usamos y compartimos información. Debes aceptar la Política de datos para usar VIAJA PE.</p>

        <h4>Permisos que nos concedes: Como parte de nuestro acuerdo, también nos otorgas los permisos que necesitamos para proporcionarte el Servicio.</h4>
        <ul>
          <li> No reclamamos la propiedad sobre tu contenido, pero nos otorgas una licencia para usarlo.</li>
          <br>
          <li> Permiso para usar tu nombre de usuario, foto del perfil e información sobre tus relaciones y las acciones que realizas con cuentas, anuncios y contenido patrocinado.</li>
          <br>
          <li> Aceptas que podemos descargar e instalar actualizaciones del Servicio en tu dispositivo.</li>
        </ul>

        <h4>Derechos adicionales que nos reservamos</h4>
        <ul>
          <li>Si seleccionas un nombre de usuario o un identificador similar para tu cuenta, podemos cambiarlo si lo consideramos apropiado o necesario. Por ejemplo, si infringe los derechos de propiedad intelectual de otra persona o suplanta la identidad de otro usuario.</li>
          <br>
          <li>Si usas contenido protegido por derechos de propiedad intelectual que poseemos e incluimos en nuestro Servicio, tales como imágenes, diseños, videos o sonidos que ofrecemos y que tú agregas al contenido que creas o compartes, nos reservamos todos los derechos sobre dicho contenido, pero no sobre los tuyos.</li>
          <br>
          <li>Debes obtener nuestro permiso por escrito o un permiso en virtud de una licencia de código abierto para modificar, descompilar o intentar de algún otro modo extraer nuestro código abierto, o bien para crear trabajos derivados de él.</li>
        </ul>

        <h4>Eliminación de contenido e inhabilitación o cancelación de la cuenta</h4>
        <ul>
          <li>Podemos eliminar cualquier contenido o información que compartas en el Servicio si consideramos que infringe estas Condiciones de uso o nuestras políticas, o si la ley nos lo exige o nos lo permite. Podemos negarnos a proporcionarte o dejar de proporcionarte la totalidad o una parte del Servicio inmediatamente para proteger nuestra comunidad o servicios, o bien si supones para nosotros un riesgo o una exposición legal, infringes estas Condiciones de uso o nuestras políticas, vulneras reiteradamente los derechos de propiedad intelectual de otras personas, o si la ley así nos lo exige o nos lo permite. También podemos cancelar o modificar el Servicio, eliminar o bloquear contenido o información que se haya compartido en nuestro Servicio, o dejar de proporcionar la totalidad o parte del Servicio si determinamos que esta medida es razonablemente necesaria para evitar o mitigar repercusiones legales o reglamentarias que resulten adversas para nosotros. </li>
          <br>
          <li>Si eliminas o nosotros inhabilitamos tu cuenta, estas Condiciones finalizarán como un acuerdo entre tú y nosotros. No obstante, esta sección y la que figura debajo, denominada "Nuestro acuerdo y qué ocurre si no estamos de acuerdo con las disposiciones", seguirán en plena vigencia, incluso una vez que se cancele, inhabilite o elimine tu cuenta.</li>
        </ul>

        <h4>Quién asume la responsabilidad si ocurre algo.</h4>
        <ul>
          <li>Nuestro Servicio se proporciona "tal como está", y no podemos garantizar que será seguro o funcionará correctamente en todo momento. EN LA MEDIDA EN QUE LA LEY LO PERMITA, NO ASUMIMOS NINGUNA REPONSABILIDAD, GARANTÍA, YA SEA EXPLÍCITA O IMPLÍCITA, INCLUIDA RESPONSABILIDAD POR DEFECTOS O FALLAS, FALTA DE DERECHOS DE DOMINIO E INFRACCIÓN DE DERECHOS DE PROPIEDAD INTELECTUAL DE TERCEROS.</li>
          <br>
          <li>Tampoco controlamos lo que las personas u otros hacen o dicen, ni somos responsables por sus acciones, conductas (online u offline) o contenidos (ni por los tuyos), incluido contenido ilegal o cuestionable. Tampoco somos responsables por los servicios y las funciones que otras personas o empresas ofrecen, incluso si accedes a ellos mediante nuestro Servicio.</li>
          <br>
          <li>Nuestra responsabilidad por todo lo que ocurre en el Servicio ("responsabilidad") está limitada en la medida en que la ley lo permite. Si hay un problema con nuestro Servicio, no podemos saber cuáles podrían ser todas las posibles consecuencias. Aceptas que no seremos responsables por la pérdida de ganancias, lucro cesante, ingresos, información o datos, ni por daños consecuentes, especiales, indirectos, ejemplares, punitivos, imprevistos o incidentales que surjan a raíz de estas Condiciones, o en relación con ellas, incluso si sabemos que hay posibilidades de que ocurran. Esto incluye cuando eliminamos tu contenido, información o cuenta.</li>
        </ul>

        <h4>Actualización de estas Condiciones.</h4>
          <p>Es posible que modifiquemos nuestro Servicio y las políticas, y que debamos actualizar estas Condiciones de modo que reflejen nuestros Servicios y las políticas con precisión. A menos que la ley disponga lo contrario, te enviaremos una notificación (por ejemplo, mediante nuestro Servicio) antes de modificar estas Condiciones, y te daremos la oportunidad de revisar los cambios antes de que entren en vigor. Si sigues usando el Servicio, quedarás sujeto a las Condiciones actualizadas. </p>

        <div class="logo">
        <img src="img/airplane.png" alt="VIAJAPE"/>
        </div>
      </div>
    </div>
    `;
    const termsDiv = document.createElement('div');
    termsDiv.innerHTML = terms;
    termsDiv.setAttribute('id', 'terms');
    return termsDiv;
};
