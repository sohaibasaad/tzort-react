import React from 'react';

const DownloadButton = () => {
  const handleInstallClick = () => {
    const deferredPrompt = window.deferredPrompt;

    if (deferredPrompt) {
      deferredPrompt.prompt();

      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the installation');
        } else {
          console.log('User dismissed the installation');
        }

        window.deferredPrompt = null;
      });
    }
  };

  return (
    <button onClick={handleInstallClick}>Install App</button>
  );
};

export default DownloadButton;