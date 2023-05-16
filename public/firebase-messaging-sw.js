importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");

const firebaseConfig = {
    apiKey: "AIzaSyAx69mPLR4rxRGDm6lJu93IpNpQBxEof4w",
    authDomain: "tzort-react-72248.firebaseapp.com",
    projectId: "tzort-react-72248",
    storageBucket: "tzort-react-72248.appspot.com",
    messagingSenderId: "472930619738",
    appId: "1:472930619738:web:3a35dbdad0795bc8906363"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});