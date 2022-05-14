import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

let firebaseConfig = {
  apiKey: "AIzaSyDKdkZsXUNU0NpDpWpnxw6F42mj9wErI4s",
  authDomain: "projetofirebaseauth-66edc.firebaseapp.com",
  projectId: "projetofirebaseauth-66edc",
  storageBucket: "projetofirebaseauth-66edc.appspot.com",
  messagingSenderId: "443430762888",
  appId: "1:443430762888:web:56250800b85eb4f3afe23d"
};
// Initialize Firebase
  // Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

  
  export default firebase;