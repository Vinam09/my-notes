import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import "firebase/compat/firestore";




const firebaseConfig = {
    apiKey: "AIzaSyDGm0xr4BZ1golEb-gs0L7UmL6ADkK40p0",
    authDomain: "mynotes-106d7.firebaseapp.com",
    projectId: "mynotes-106d7",
    storageBucket: "mynotes-106d7.appspot.com",
    messagingSenderId: "318412731896",
    appId: "1:318412731896:web:2ffb8cfc4dc20766ab520d"
  };
  // const app = initializeApp(firebaseConfig);

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export{firebase, db, auth};