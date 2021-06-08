import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyB7R49MO1ru_EHiNgNaV6Pq4m5yA3ws3no",
  authDomain: "clothes-shop-react.firebaseapp.com",
  databaseURL: "https://clothes-shop-react.firebaseio.com",
  projectId: "clothes-shop-react",
  storageBucket: "clothes-shop-react.appspot.com",
  messagingSenderId: "913354345658",
  appId: "1:913354345658:web:55b2e1b3ba22b3a6e3c683",
  measurementId: "G-2E8F334RVZ"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;