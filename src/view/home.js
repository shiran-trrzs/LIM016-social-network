export default () => {
    const viewHome = `
    <section>
        <p> Agregar contacto </p>
        <img src="../img/dawson.png"> <p> Dawson Leery </p>
        <img src="../img/mimi.png"> <p> Mimi Ortega </p>
        <img src="../img/katy.png"> <p> Katy Dibiasky </p>
        <img src="../img/nico.png"> <p> Nico Traveler </p>
        <img src="../img/leti.png"> <p> Leti Dev </p>
        <img src="../img/airplane_home.png"> <p> VIAJA PE </p>
    </section>
    <section>
        <h2> Dev viajera </h2>
        <p> Me gusta viajar </p>
        <form class="postTextBox">
            <textarea class="inputPublish" placeholder="¿Qué estás pensando?"> </textarea>
            <div>
                <i class="fa-solid fa-image-landscape"></i> <p> Imagen </p>
                <i class="fa-solid fa-face-smile-beam"></i> <p> Emoji </p>
                <i class="fa-solid fa-paper-plane"></i> <p> Compartir </p>
            </div>
        </form>
      </section>`;

    const viewHomeDiv = document.createElement('div');
    viewHomeDiv.innerHTML = viewHome;
    return viewHomeDiv;
};
