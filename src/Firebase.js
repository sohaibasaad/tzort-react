import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyAx69mPLR4rxRGDm6lJu93IpNpQBxEof4w",
    authDomain: "tzort-react-72248.firebaseapp.com",
    projectId: "tzort-react-72248",
    storageBucket: "tzort-react-72248.appspot.com",
    messagingSenderId: "472930619738",
    appId: "1:472930619738:web:3a35dbdad0795bc8906363"
};

export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);