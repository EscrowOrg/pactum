import { getUserData } from '../../../serivce/cookie.service';
import useMakeReq from '../hooks/Global/useMakeReq';
import { messaging } from './firebaseConfig';

// Request permission for push notifications

messaging.onBackgroundMessage((payload) => {
  console.log('Received background message:', payload);
  // Handle the incoming message and display the notification
  const notificationTitle = 'New Notification';
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
})
