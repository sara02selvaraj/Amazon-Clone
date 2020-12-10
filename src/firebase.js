import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyCBj4Copo05oF807BYMEEwkpvEGh800pqc",
    authDomain: "challenge-73a4d.firebaseapp.com",
    databaseURL: "https://challenge-73a4d.firebaseio.com",
    projectId: "challenge-73a4d",
    storageBucket: "challenge-73a4d.appspot.com",
    messagingSenderId: "585408929059",
    appId: "1:585408929059:web:4043be79bb358a86700096",
    measurementId: "G-9PLKCP4L3J"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db= firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth};
  