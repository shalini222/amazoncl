import firebase from "firebase"


const firebaseConfig = {
  apiKey: "AIzaSyDaNjRKA0Wt7XSr2S3QqDNtdepjoXGlIEQ",
  authDomain: "azcl444.firebaseapp.com",
  projectId: "azcl444",
  storageBucket: "azcl444.appspot.com",
  messagingSenderId: "586616327701",
  appId: "1:586616327701:web:ddd702d2a56677322ec81c"
};



const app = !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();

export const db = app.firestore();
