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

export const createUserProfileDocument = async (userAuth, additionalData) => {
      if(!userAuth){
        return;
      }
      const userRef = firestore.doc(`user/${userAuth.uid}`)
      const snapShot = await userRef.get();

      if(!snapShot.exists){
        const { displayName, email} = userAuth;
        const createdAt = new Date();

        try{
          await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
          })
        }catch (error){
          console.log('error creating user', error.message);
        }
      }
      return userRef;
};
  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({promt: 'select_account'})
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export default firebase;
