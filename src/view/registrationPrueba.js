import { auth, createUserWithEmailAndPassword } from "../firebase/firebase-initializer";


const signupForm = viewRegistrationDiv.querySelector('#formRegistration');
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        //const signupUser = viewRegistrationDiv.querySelector('#signup-user').value;
        const email = viewRegistrationDiv.querySelector('#signup-email').value;
        const password = viewRegistrationDiv.querySelector('#signup-password').value;
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                //limpiar form
                signupForm.reset();
                console.log('sign up');
                // Signed in
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    });