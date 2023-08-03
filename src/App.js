import { ToastContainer, Zoom, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import MainRouter from './user-managerment/module/router';
 import firebase from 'firebase/compat/app';
 import 'firebase/messaging';
import { AUTH_POST_VALIDATE_DEVICE_TOKEN } from './serivce/apiRoutes.service';
import useMakeReq from './user-managerment/module/hooks/Global/useMakeReq';
import { useEffect } from 'react';

function App() {
  const {makePostRequest} = useMakeReq();
useEffect(()=>{
  Notification.requestPermission().then((permission) => {
    if (permission === 'granted') {
      const messaging = firebase.messaging();
     return messaging
        .getToken({
            vapidKey: "BBy5gxGaPETQQ8CHeSYgEP7bmtuiPQyo145gYE1UC5_AfhW_jxBQILCfDoHHKNLpo2qpI1_sgGlHkfH1XVPWPpo"
          }) 
          .then((currentToken) => {
          if (currentToken) {
            console.log('FCM Token:', currentToken);
            sendTokenToServer(currentToken)
          } else {
            console.log('No registration token available.');
          }
        })
        .catch((err) => {
          console.log('Error occurred while requesting permission:', err);
        });
    } else {
      console.log('Notification permission denied.');
    }
  })
},[])

 
 const sendTokenToServer = ((token)=>{
  makePostRequest(`${AUTH_POST_VALIDATE_DEVICE_TOKEN}`, {
       token: token
      })
 })

  return (
    <>
        <MainRouter />

        {/* toast container */}
        <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop
        limit={1}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        transition={Zoom}
        pauseOnHover
        draggablePercent={40}
        theme="colored" />
    </>
  );
}

export default App;
