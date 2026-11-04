importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyAfIhwbk3QpKR-QNXPCrH6fVgkvYyTN91E",
  authDomain: "mitzvot-hayom.firebaseapp.com",
  projectId: "mitzvot-hayom",
  messagingSenderId: "753663994776",
  appId: "1:753663994776:web:7210decf949cef921159ed"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const title = payload.notification.title || 'מצוות היום';
  const options = {
    body: payload.notification.body || 'מזכירים לך לשמור על הרצף היומי!',
    icon: '/icon.png'
  };
  self.registration.showNotification(title, options);
});
