import firebase from "firebase"
import "firebase/storage"
const firebaseConfig = {
  apiKey: "AIzaSyAgIzdczFjx1-vnHz41uq2rkKDIoWVggg0",
  authDomain: "git-bot-4f246.firebaseapp.com",
  databaseURL: "https://git-bot-4f246-default-rtdb.firebaseio.com",
  projectId: "git-bot-4f246",
  storageBucket: "git-bot-4f246.appspot.com",
  messagingSenderId: "9645080309",
  appId: "1:9645080309:web:1f3de8629c74679053cfbc",
  measurementId: "G-JX0M39B6Z5"
};
  // Initialize Firebase

  const app = !firebase.apps.length?firebase.initializeApp(firebaseConfig):firebase.app();
  const db = app.firestore();
  const stoeage = firebase.storage();
  const rdb = firebase.database();
  export { db,stoeage ,rdb };