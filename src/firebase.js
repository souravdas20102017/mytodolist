// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBhtQTUoZhxMSowPVIuZfi3HNidot8HuyA",
    authDomain: "todolist-94db4.firebaseapp.com",
    projectId: "todolist-94db4",
    storageBucket: "todolist-94db4.appspot.com",
    messagingSenderId: "990248760154",
    appId: "1:990248760154:web:4ce499260fdfc71e38b963",
    measurementId: "G-DLYMDLBK9B"
  };
  const firebaseapp= firebase.initializeApp(firebaseConfig);

const db= firebaseapp.firestore();
const auth=firebase.auth();



export { db ,auth};