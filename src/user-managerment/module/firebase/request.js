import { getUserData } from '../../../serivce/cookie.service';
import BASE_URL from '../../../serivce/url.serice';
import useMakeReq from '../hooks/Global/useMakeReq';
import { messaging } from './firebaseConfig';

// Request permission for push notifications
const {token, userId}= getUserData();

const {data, makePostRequest} = useMakeReq();
messaging.requestPermission()
  .then(() => {
    console.log('Notification permission granted.');
    // Get the device token
    return messaging.getToken();
  })
  .then((res) => {
    console.log('Device token:', token);
    // Send the token to your server to associate it with the user
    makePostRequest(`${BASE_URL}/api/User/ValidateDeviceToken`, {
      userId: userId,
      token: token
     })
  })
  .catch((error) => {
    console.error('Error obtaining permission:', error);
  });
