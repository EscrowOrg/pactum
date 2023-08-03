importScripts('https://www.gstatic.com/firebasejs/9.0.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.1/firebase-messaging-compat.js');

const firebaseConfig = {
  apiKey: "AIzaSyBCgJ3ePqsuDPIOQNzPHqe4lRTy-fkRPdE",
  authDomain: "test-message-da7f7.firebaseapp.com",
  projectId: "test-message-da7f7",
  storageBucket: "test-message-da7f7.appspot.com",
  messagingSenderId: "589532830213",
  appId: "1:589532830213:web:db57a7111c62152d125a6c"

};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('Received background message:', payload);
  const notificationTitle = 'New Notification';
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
