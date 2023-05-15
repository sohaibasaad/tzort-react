importScripts('https://www.gstatic.com/firebasejs/8.3.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.3.0/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyAx69mPLR4rxRGDm6lJu93IpNpQBxEof4w",
  authDomain: "tzort-react-72248.firebaseapp.com",
  projectId: "tzort-react-72248",
  storageBucket: "tzort-react-72248.appspot.com",
  messagingSenderId: "472930619738",
  appId: "1:472930619738:web:3a35dbdad0795bc8906363"
});

const messaging = firebase.messaging();

// Optional: Customize notification behavior
messaging.setBackgroundMessageHandler((payload) => {
  const { title, body } = payload.notification;
  
  // Customize notification display
  const notificationOptions = {
    body: body,
    icon: './images/favicon-32x32.png'
  };
  
  return self.registration.showNotification(title, notificationOptions);
});

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
  // Customize notification click behavior
  const { click_action } = event.notification.data;
  
  if (click_action) {
    // Perform custom action based on click_action value
    // For example, navigate to a specific page
    self.clients.openWindow(click_action);
  } else {
    // Perform default action
    // For example, open the web app's main page
    self.clients.openWindow('/');
  }
});

// Register the service worker
self.addEventListener('install', (event) => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});
