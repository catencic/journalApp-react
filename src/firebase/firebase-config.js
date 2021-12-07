import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

 
 
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBjNZj_nkzDKVL-6MKtJLWHYMwgDFFHtwk",
    authDomain: "react-app-curso-bbe11.firebaseapp.com",
    projectId: "react-app-curso-bbe11",
    storageBucket: "react-app-curso-bbe11.appspot.com",
    messagingSenderId: "298257537477",
    appId: "1:298257537477:web:fc047b8910ce2cc86dd3ac"
  };
 
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
    db,
    googleAuthProvider,
    firebase
}