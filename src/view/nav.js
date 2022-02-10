<<<<<<< HEAD
const templateNav = () => {
  const htmlNav = `
        <li>
          <a href="#/"> Home </a>
        </li>
        <li>
          <a href="#/profile"> Perfil </a>
        </li>
        <li>
          <a href="#/favorites"> Favoritos </a>
        </li>
        <li>
          <a href="#/setting"> Configuración </a>
        </li>
        <li>
          <a href="#/logout"> Cerrar sesión </a>
        </li>
      `;

  const labelNav = document.createElement('nav');
  labelNav.setAttribute('class', 'nav');
  labelNav.innerHTML = htmlNav;
=======
export default () => {
    const templateNav = `
    <nav>
        <img src="../img/home_icon.png">
        <img src="../img/profile_icon.png">
        <img src="../img/setting_icon.png">
        <img src="../img/group_icon.png">
        <img src="../img/logout_icon.png"> 
    </nav>`;

    const labelNav = document.createElement('nav');
    labelNav.setAttribute('class', 'nav');
    labelNav.innerHTML = templateNav;
    return labelNav;
>>>>>>> 3f8d5a58264f586dcc73d9e9869fc0a2f2b4d12a
};
