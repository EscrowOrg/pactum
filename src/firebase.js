import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const firebaseConfig = {
  apiKey: "AIzaSyBCgJ3ePqsuDPIOQNzPHqe4lRTy-fkRPdE",
  authDomain: "test-message-da7f7.firebaseapp.com",
  projectId: "test-message-da7f7",
  storageBucket: "test-message-da7f7.appspot.com",
  messagingSenderId: "589532830213",
  appId: "1:589532830213:web:db57a7111c62152d125a6c"
  };

  firebase.initializeApp(firebaseConfig);
 const  firestore = firebase.firestore();
const auth = firebase.auth();

export {auth, firestore}
export default firebase;
