import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import * as serviceWorker from './service-worker';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Check if the app is running in standalone mode or on iOS
const isRunningStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone;
const isiOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

if (isiOS) {
  // For iOS, add a "share" button to the app bar
  const shareButton = document.createElement('button');
  shareButton.innerHTML = 'Share';
  shareButton.addEventListener('click', () => {
    window.navigator.share({
      title: document.title,
      url: window.location.href,
    });
  });
  document.querySelector('header').appendChild(shareButton);
} else if (!isRunningStandalone) {
  // For non-iOS devices, show the "Add to Home screen" banner
  let deferredPrompt;

  window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();

    // Stash the event so it can be triggered later
    deferredPrompt = e;

    // Show the banner
    const banner = document.createElement('div');
    banner.id = 'install-banner';
    banner.innerHTML = `
      <div>
        <p>Install this app on your device:</p>
        <button id="install-button">Install</button>
      </div>
      <button id="close-button">Close</button>
    `;
    document.body.appendChild(banner);

    // Add event listeners for the banner buttons
    document.getElementById('install-button').addEventListener('click', () => {
      // Show the install prompt
      deferredPrompt.prompt();

      // Wait for the user to respond to the prompt
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt');
        } else {
          console.log('User dismissed the install prompt');
        }

        // Reset the deferred prompt variable
        deferredPrompt = null;

        // Hide the banner
        document.body.removeChild(banner);
      });
    });
    document.getElementById('close-button').addEventListener('click', () => {
      // Hide the banner
      document.body.removeChild(banner);
    });
  });
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js')
      .then(registration => {
        console.log('Service worker registered:', registration);
      })
      .catch(error => {
        console.log('Service worker registration failed:', error);
      });
  });
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
// serviceWorker.register();
