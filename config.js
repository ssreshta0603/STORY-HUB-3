import firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyBVahlxK6TGfwdRyM5xeX0RH4ZOIbGRLS0",
    authDomain: "storyhub-bda18.firebaseapp.com",
    databaseURL: "https://storyhub-bda18-default-rtdb.firebaseio.com",
    projectId: "storyhub-bda18",
    storageBucket: "storyhub-bda18.appspot.com",
    messagingSenderId: "393024213830",
    appId: "1:393024213830:web:6738e2ba923404f5b88b47"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();