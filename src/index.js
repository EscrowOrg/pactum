import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {AuthContextProvider} from "./context/AuthContext";
import firebase from 'firebase/compat/app';
import * as serviceWorker from "./serviceWorker"

import 'firebase/compat/messaging';


const firebaseConfig = {
   apiKey: "AIzaSyDxv41ZMz8DN909QzOz-r9QwvVz-px28-c",
  authDomain: "escrow-4b8af.firebaseapp.com",
  projectId: "escrow-4b8af",
  storageBucket: "escrow-4b8af.appspot.com",
  messagingSenderId: "99423343601",
  appId: "1:99423343601:web:0e04cdd6c137df8804ea50",
  measurementId: "G-17T1LN91KM"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
serviceWorker.unregister()
