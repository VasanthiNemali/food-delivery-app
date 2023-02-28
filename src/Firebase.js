// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmxBP2JDoeTWw4cMMGRdNDO9MHFCboIkw",
  authDomain: "signup-750b6.firebaseapp.com",
  databaseURL: "https://signup-750b6-default-rtdb.firebaseio.com",
  projectId: "signup-750b6",
  storageBucket: "signup-750b6.appspot.com",
  messagingSenderId: "718685410260",
  appId: "1:718685410260:web:800f95c8046e9f53f3bc41"
};

// Initialize Firebase
var firebaseDB = firbase.initializeApp(firebaseConfig);
export default firebaseDB.database().ref();