// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

/**/
import {getFireStore} from "firebase/firestore"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcWljWGjRlc8Dy67Plqe5lyZBLTXl_Ucg",
  authDomain: "crud-next-js-firebase-5caaf.firebaseapp.com",
  projectId: "crud-next-js-firebase-5caaf",
  storageBucket: "crud-next-js-firebase-5caaf.appspot.com",
  messagingSenderId: "30688631694",
  appId: "1:30688631694:web:f4b2d8e7fb40b39263a2df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Sent firestore
const db= getFireStore();
export {bd}
