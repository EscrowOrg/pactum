import firebase from 'firebase/compat/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBCgJ3ePqsuDPIOQNzPHqe4lRTy-fkRPdE",
  authDomain: "test-message-da7f7.firebaseapp.com",
  projectId: "test-message-da7f7",
  storageBucket: "test-message-da7f7.appspot.com",
  messagingSenderId: "589532830213",
  appId: "1:589532830213:web:db57a7111c62152d125a6c"
  };

const app =  firebase.initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
