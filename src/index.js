import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './service-worker';

const isPWAInstallable = () => {
  return 'getInstalledRelatedApps' in navigator;
};

const showInstallPrompt = () => {
  const handlePrompt = () => {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the install prompt');
        alert('User accepted the install prompt');
      } else {
        console.log('User dismissed the install prompt');
        alert('User dismissed the install prompt');
      }
      deferredPrompt = null;
    });
  };

  let deferredPrompt;

  window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    deferredPrompt = event;

    // Render a custom download button
    const downloadButton = (
      <button onClick={handlePrompt}>Download App</button>
    );
    ReactDOM.render(downloadButton, document.getElementById('download-button'));
  });
};

const root = ReactDOM.createRoot(document.getElementById('root'));

if (isPWAInstallable()) {
  showInstallPrompt();
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
serviceWorker.register();
