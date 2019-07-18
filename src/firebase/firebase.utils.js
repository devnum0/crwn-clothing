import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: `${process.env.REACT_APP_NOT_SECRET_CODE}`,
  authDomain: `${process.env.REACT_APP_DOMAIN}`,
  databaseURL: `${process.env.REACT_APP_DB}`,
  projectId: `${process.env.REACT_APP_PROJECT}`,
  storageBucket: "",
  messagingSenderId: `${process.env.REACT_APP_SENDER_ID}`,
  appId: `${process.env.REACT_APP_APP_ID}`
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
