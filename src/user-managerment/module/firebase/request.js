import { messaging } from './firebaseConfig';

// Request permission for push notifications
messaging.requestPermission()
  .then(() => {
    console.log('Notification permission granted.');
    // Get the device token
    return messaging.getToken();
  })
  .then((token) => {
    console.log('Device token:', token);
    // Send the token to your server to associate it with the user
    
  })
  .catch((error) => {
    console.error('Error obtaining permission:', error);
  });
