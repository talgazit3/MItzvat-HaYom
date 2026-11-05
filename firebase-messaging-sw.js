importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyAfIhwbk3QpKR-QNXPCrH6fVgkvYyTN91E",
  authDomain: "mitzvot-hayom.firebaseapp.com",
  projectId: "mitzvot-hayom",
  storageBucket: "mitzvot-hayom.firebasestorage.app",
  messagingSenderId: "753663994776",
  appId: "1:753663994776:web:7210decf949cef921159ed"
});

const messaging = firebase.messaging();

// חובה להגדיר כאן את מפתח ה-VAPID כדי שה-Service Worker יוכל לקבל הודעות ברקע
messaging.usePublicVapidKey('
BO-3YOab_6jErJzsv68wNLO1k9UBD3pUIqRo9vlOI2l2iCdIHi_ZzjmxCJ-RN19bmQcYvZ7yoidrw8LTdazqdQ0');

messaging.onBackgroundMessage((payload) => {
  const title = payload.notification?.title || 'מצוות היום';
  const options = {
    body: payload.notification?.body || 'מזכירים לך לשמור על הרצף היומי!',
    icon: '/icon.png'
  };
  self.registration.showNotification(title, options);
});
