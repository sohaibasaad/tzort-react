import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyAx69mPLR4rxRGDm6lJu93IpNpQBxEof4w",
    authDomain: "tzort-react-72248.firebaseapp.com",
    projectId: "tzort-react-72248",
    storageBucket: "tzort-react-72248.appspot.com",
    messagingSenderId: "472930619738",
    appId: "1:472930619738:web:3a35dbdad0795bc8906363"
};


function requestPermission() {
    Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
            console.log('Notification permission granted.');
            const app = initializeApp(firebaseConfig);

            const messaging = getMessaging(app);

            getToken(messaging, { 
                vapidKey: 'BMhqDLbrD7mpeAYK4oGtp8Xe8RLdxriUO0bHGCFfKNiyZfJ-jath8monnmy4LBy2PYKyhyl9ZJTk36VVFrUGUzM',
            }).then((currentToken) => {
                    if (currentToken) {
                        console.log('currentToken', currentToken);
                    }
                    else {
                        console.log('cannot get token')
                    }
                });
        }
        else {
            console.log('Do not have permission');
        }
    });
}

requestPermission();