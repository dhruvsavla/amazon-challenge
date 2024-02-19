import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCVzH1Un-vspWe1aRoL_qweQKRY4Qy1G2Q",
    authDomain: "challenge-4cc94.firebaseapp.com",
    projectId: "challenge-4cc94",
    storageBucket: "challenge-4cc94.appspot.com",
    messagingSenderId: "669689286149",
    appId: "1:669689286149:web:c30fd80a7f8f5d1c90966c",
    measurementId: "G-QLQQNLTGWG"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { db, auth };