import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAOErzEXAJ9DJ0bC-t3idBKT_EI6UWmHL8",
    authDomain: "daraz-clone-a0182.firebaseapp.com",
    databaseURL: "https://daraz-clone-a0182.firebaseio.com",
    projectId: "daraz-clone-a0182",
    storageBucket: "daraz-clone-a0182.appspot.com",
    messagingSenderId: "273031538240",
    appId: "1:273031538240:web:192a8bd1346456702ea1a5",
    measurementId: "G-H9F5QN7DMD"
  };

  const firebasseApp = firebase.initializeApp(firebaseConfig);
  const  auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();


  export{auth,provider};
