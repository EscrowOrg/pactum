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
  apiKey: "AIzaSyBCgJ3ePqsuDPIOQNzPHqe4lRTy-fkRPdE",
  authDomain: "test-message-da7f7.firebaseapp.com",
  projectId: "test-message-da7f7",
  storageBucket: "test-message-da7f7.appspot.com",
  messagingSenderId: "589532830213",
  appId: "1:589532830213:web:db57a7111c62152d125a6c"
};

firebase.initializeApp(firebaseConfig);


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

// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
serviceWorker.register()
