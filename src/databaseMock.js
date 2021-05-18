import firebase from "firebase/app";
import "firebase/database";
require("regenerator-runtime/runtime");

const firebaseConfig = {
    apiKey: "AIzaSyBzwy3BfJZEKROWHRAKJ32srrKZWAerU-U",
    authDomain: "jest-project.firebaseapp.com",
    databaseURL: "https://jest-project-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "jest-project",
    storageBucket: "jest-project.appspot.com",
    messagingSenderId: "883177701279",
    appId: "1:883177701279:web:3e0ea188a2e8d74b98c7aa"
  };

export function initializeDatabase() {
    return firebase.initializeApp(firebaseConfig);
};

export function openDatabase() {
    return firebase.database().goOnline();
};

export function closeDatabase() {
    return firebase.database().goOffline();
};

export async function getData() {
    const dbRef = firebase.database().ref("test");  
    const snapshot = await dbRef.once('value');
    return snapshot.val().message;
};

export async function setData(text) {
    const dbRef = firebase.database().ref("test/message");  
    await dbRef.set(text);
};

export async function clearData() {
    const dbRef = firebase.database().ref("test/message");  
    await dbRef.set(null);
};