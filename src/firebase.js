import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCH6XZ0UFfXnD51pBd772leGxvTH770I50",
    authDomain: "weatherapp-26610.firebaseapp.com",
    projectId: "weatherapp-26610",
    storageBucket: "weatherapp-26610.appspot.com",
    messagingSenderId: "149726848321",
    appId: "1:149726848321:web:8bdcb6e360141df0456dc0",
    measurementId: "G-4KY5153WL7"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  export{db};