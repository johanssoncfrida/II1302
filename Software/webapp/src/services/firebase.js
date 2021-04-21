import firebase from "firebase/app";
import "firebase/auth";

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyA2lCBkprY3fFBCZzJVDOHTH7cV8Dnp5xI",
    authDomain: "door-display-74e1f.firebaseapp.com",
    databaseURL: "https://door-display-74e1f-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "door-display-74e1f",
    storageBucket: "door-display-74e1f.appspot.com",
    messagingSenderId: "70131677703",
    appId: "1:70131677703:web:bf9ce6a35a45e63972c8a2"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebaseConfig;
