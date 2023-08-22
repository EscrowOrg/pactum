import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MainRouter from "./user-managerment/module/router";
import firebase from "firebase/compat/app";
import "firebase/messaging";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        const messaging = firebase.messaging();
        return messaging
          .getToken({
            vapidKey:
              "BBy5gxGaPETQQ8CHeSYgEP7bmtuiPQyo145gYE1UC5_AfhW_jxBQILCfDoHHKNLpo2qpI1_sgGlHkfH1XVPWPpo",
          })
          .then((currentToken) => {
            if (currentToken) {
              localStorage.setItem("currentToken", currentToken);
            } else {
              console.log("No registration token available.");
            }
          })
          .catch((err) => {
            console.log("Error occurred while requesting permission:", err);
          });
      } else {
        console.log("Notification permission denied.");
      }
    });
  }, []);

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
        theme="colored"
      />
    </>
  );
}

export default App;
