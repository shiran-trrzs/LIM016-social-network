<<<<<<< HEAD
// Este es el punto de entrada de tu aplicacion

/* import { myFunction } from './lib/index.js';

myFunction();
=======
import './firebase/firebase-initializer.js';
import { changeView } from './viewController/router.js';
>>>>>>> 3f8d5a58264f586dcc73d9e9869fc0a2f2b4d12a

const init = () => {
    changeView(window.location.hash);
    window.addEventListener('hashchange', () => changeView(window.location.hash)); // evento para que cambie la url
};

<<<<<<< HEAD
window.addEventListener('load', init) */
=======
window.addEventListener('load', init);
>>>>>>> 3f8d5a58264f586dcc73d9e9869fc0a2f2b4d12a
