
import firebase from 'firebase/app';

import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBwhD-lNejzJ1yQ-6bAwJoGVJmC3-z1DzA",
    authDomain: "e-commerce-cab88.firebaseapp.com",
    projectId: "e-commerce-cab88",
    storageBucket: "e-commerce-cab88.appspot.com",
    messagingSenderId: "764371539060",
    appId: "1:764371539060:web:374e93ba02b1d414352d21",
    measurementId: "G-S16MWB505Y"
  };

  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  const db = firebase.firestore();
  const storage = firebase.storage();
  
  export { auth, db, storage }