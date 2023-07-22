// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/9.0.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.1/firebase-messaging-compat.js');

const firebaseConfig = {
  // Your Firebase config object
  apiKey: "AIzaSyDxv41ZMz8DN909QzOz-r9QwvVz-px28-c",
  authDomain: "escrow-4b8af.firebaseapp.com",
  projectId: "escrow-4b8af",
  storageBucket: "escrow-4b8af.appspot.com",
  messagingSenderId: "99423343601",
  appId: "1:99423343601:web:0e04cdd6c137df8804ea50",
  measurementId: "G-17T1LN91KM"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('Received background message:', payload);
  // Handle the incoming message and display the notification
  const notificationTitle = 'New Notification';
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
