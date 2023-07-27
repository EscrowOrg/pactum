import { ToastContainer, Zoom, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import MainRouter from './user-managerment/module/router';
 import firebase from 'firebase/compat/app';
 import 'firebase/messaging';
import { AUTH_POST_VALIDATE_DEVICE_TOKEN } from './serivce/apiRoutes.service';
import useMakeReq from './user-managerment/module/hooks/Global/useMakeReq';
import { useEffect } from 'react';
import { getToken } from 'firebase/messaging';


function App() {
  const {makePostRequest} = useMakeReq()
 useEffect(()=>{
  Notification.requestPermission().then((permission) => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register(process.env.PUBLIC_URL + "/firebase-messaging-sw.js")
        .then(function (registration){
             toast.success("Registration successful, scope is", registration)
          if (permission === 'granted') {
            const messaging = firebase.messaging();
            getToken(messaging,{
                vapidKey: 'BLNjIenLs4D2Aw8PQmUIuJnwzHCgungwqnzOxdEH_KqV13NIT29d85FFTUvGw84a7Marnk8SvL68jBRHjEfPFj', // Replace with your public VAPID key
              }).then((currentToken) => {
                if (currentToken) {
                    sendTokenToServer(currentToken)
                } else {
                  toast.error("No registration token available.")
                }
              })
              .catch((err) => {
                toast.error("Error occurred while requesting permission:", err)
              });
          } else {
            toast.error("Notification permission denied.")
          }
        })

    }else {
      toast.error("Notification permission denied.");
    }
    
  });
 
 }, [])

 
 const sendTokenToServer = ((token)=>{
  makePostRequest(`${AUTH_POST_VALIDATE_DEVICE_TOKEN}`, {
       body: JSON.stringify({ token: token }),
      }).then((response)=>{
        if(response.ok){
          toast.success('FCM token sent to server successfully.')
        }else {
          toast.error('Failed to send FCM token to server.')

        }
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
