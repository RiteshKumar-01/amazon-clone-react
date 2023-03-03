import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAhlZXGcUW2l_lohFN1etpVeU1WmMHCEDk",
  authDomain: "clone-9edf4.firebaseapp.com",
  projectId: "clone-9edf4",
  storageBucket: "clone-9edf4.appspot.com",
  messagingSenderId: "525535104328",
  appId: "1:525535104328:web:06dbe9b3a6e0a68aec777d"
};


const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp); 
// const auth = firebase.auth();
const auth = getAuth(firebaseApp);


export {db, auth};