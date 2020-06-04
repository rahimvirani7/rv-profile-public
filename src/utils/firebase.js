import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';
// import 'firebase/analytics';

var firebaseConfig = {
  apiKey: "AIzaSyDrbKBqaJeai3OLke0Csrg9d0IrgxsN61c",
  authDomain: "rahim-virani.firebaseapp.com",
  databaseURL: "https://rahim-virani.firebaseio.com",
  projectId: "rahim-virani",
  storageBucket: "rahim-virani.appspot.com",
  messagingSenderId: "1032160302350",
  appId: "1:1032160302350:web:37d2e02f314fc1dc74735f",
  measurementId: "G-6YBMBRMT1R"
};

// Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig);
// Initialize Firebase Storage
export const firebaseStorage = firebase.storage();

// Initialize Firebase Auth Provider
const provider = new firebase.auth.GoogleAuthProvider();

const googleAuthenticate = () => {
return firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
  .then(function() {
    // Existing and future Auth states are now persisted in the current
    // session only. Closing the window would clear any existing state even
    // if a user forgets to sign out.
    // ...
    // New sign-in will be persisted with session persistence.
    return firebase.auth().signInWithPopup(provider)
    .then(function(result) {
        // // This gives you a Google Access Token. You can use it to access the Google API.
        // var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        const { email, displayName, photoURL } = user;
        //console.log(user) ---
        return { email, displayName, photoURL };
        // ...
    }).catch(function(error) {
        // // Handle Errors here.
        // var errorCode = error.code;
        // var errorMessage = error.message;
        // // The email of the user's account used.
        // var email = error.email;
        // // The firebase.auth.AuthCredential type that was used.
        // var credential = error.credential;
        // // ...
    });
  })
  .catch(function(error) {
    // Handle Errors here.
    //var errorCode = error.code;
    //var errorMessage = error.message;
  });
}

export default googleAuthenticate;