import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCxqfMQ9vrogzKu5ZzKvlhBJ5mooXVc5BI",
  authDomain: "oppsreact.firebaseapp.com",
  databaseURL: "https://oppsreact.firebaseio.com",
  projectId: "oppsreact",
  storageBucket: "",
  messagingSenderId: "618776115471",
  appId: "1:618776115471:web:1a8bfb3bc46b66be"
};

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({promt: 'select_account'})
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export default firebase;
