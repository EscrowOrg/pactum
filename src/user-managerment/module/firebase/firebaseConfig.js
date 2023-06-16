import firebase from 'firebase/compat/app';
import 'firebase/messaging';

const firebaseConfig = {
  // Your Firebase configuration object goes here
  apiKey: "AIzaSyDxv41ZMz8DN909QzOz-r9QwvVz-px28-c",
  authDomain: "escrow-4b8af.firebaseapp.com",
  projectId: "escrow-4b8af",
  storageBucket: "escrow-4b8af.appspot.com",
  messagingSenderId: "99423343601",
  appId: "1:99423343601:web:0e04cdd6c137df8804ea50",
  measurementId: "G-17T1LN91KM"
};

firebase.initializeApp(firebaseConfig);

export const messaging = firebase.messaging();