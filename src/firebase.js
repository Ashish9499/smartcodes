import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDtG0HnfdtnAuRxI5fZD1KiNaSxZACEwSY",
  authDomain: "chatapp-62ff7.firebaseapp.com",
  projectId: "chatapp-62ff7",
  storageBucket: "chatapp-62ff7.appspot.com",
  messagingSenderId: "980393952479",
  appId: "1:980393952479:web:9352aff68beb91a25ad56a"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }