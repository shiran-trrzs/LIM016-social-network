export default () => {
  const viewProfile = (birthdayUser, placeUser) => `
    <section>
    <div class="containerUserProfile">
        <div class="userProfile">
            <img id="userPhoto">
        </div>
        <p class="user-name"></p>
    </div>
    <div class="infoUser">
        <div class="infoUserBirthday">
        <i class="fa-solid fa-cake-candles"><p> ${birthdayUser} </p></i>
        <p><b> Lugar de residencia </b></p>
        <i class="fa-solid fa-house-chimney-heart"></i> <p> ${placeUser} </p>
        </div>
        <div class="infoUserLastTrip">
        <p><b> Últimos viajes </b></p>
        <i class="fa-solid fa-map-pin"></i> <p> Ayacucho, Perú </p>
        <i class="fa-solid fa-map-pin"></i> <p> Arequipa, Perú </p>
        <i class="fa-solid fa-map-pin"></i> <p> París, Francia </p>
        </div>
    </div>
    </section>

    <section>
    <p><b> Amigos </b></p>
    <img src="./img/dawson.png"> <p> Dawson Leery </p>
    <img src="./img/mimi.png"> <p> Mimi Ortega </p>
    <img src="./img/katy.png"> <p> Katy Dibiasky </p>
    <img src="./img/nico.png"> <p> Nico Traveler </p>
    <img src="./img/leti.png"> <p> Leti Dev </p>
    <img src="./img/airplane_home.png"> <p> VIAJA PE </p>
    </section>
 `;

  const viewProfileDiv = document.createElement('div');
  viewProfileDiv.innerHTML = viewProfile;
  return viewProfileDiv;
};
