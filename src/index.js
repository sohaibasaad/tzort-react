import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
    .then((registration) => {
      console.log('Service Worker registered');
    })
    .catch((error) => {
      console.log('Service Worker registration failed:', error);
    });
}

// Check if the browser supports the Add to Home Screen prompt
const isPWAInstallable = () => {
  return 'getInstalledRelatedApps' in navigator;
};

// Show the Add to Home Screen prompt
const showInstallPrompt = () => {
  const handlePrompt = () => {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the install prompt');
      } else {
        console.log('User dismissed the install prompt');
      }
      deferredPrompt = null;
    });
  };

  let deferredPrompt;

  window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    deferredPrompt = event;
    const installButton = (
      <button onClick={handlePrompt}>Install App</button>
    );
    ReactDOM.render(installButton, document.getElementById('install-button'));
  });
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Check if the PWA is installable and show the install prompt
if (isPWAInstallable()) {
  showInstallPrompt();
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
