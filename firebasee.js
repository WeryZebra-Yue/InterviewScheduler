import firebase from "firebase"
import "firebase/storage"
var firebaseConfig = {
    apiKey: "AIzaSyCm12sJtxCef1xBwfpIjU8v3V4Fg4WYPC8",
    authDomain: "interviewschedular-p.firebaseapp.com",
    projectId: "interviewschedular-p",
    storageBucket: "interviewschedular-p.appspot.com",
    messagingSenderId: "565240255705",
    appId: "1:565240255705:web:cf6d22ae9e43eeb47a5ac8",
    measurementId: "G-QRR77BL41D"
  };
  // Initialize Firebase

  const app = !firebase.apps.length?firebase.initializeApp(firebaseConfig):firebase.app();
  const db = app.firestore();
  const stoeage = firebase.storage();
  const rdb = firebase.database();
  export { db,stoeage ,rdb };