//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
  apiKey: "AIzaSyDugNFZ0aKhKUpxJMWNlm7nQfRXIj8mwHk",
  authDomain: "nutriguard-1cd20.firebaseapp.com",
  projectId: "nutriguard-1cd20",
  storageBucket: "nutriguard-1cd20.firebasestorage.app",
  messagingSenderId: "1030274059988",
  appId: "1:1030274059988:web:89f2779d4edd7bd338b541",
  measurementId: "G-GVRTLBJ56T",
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
