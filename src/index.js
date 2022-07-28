// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBVwo1BV7BPbHet-lXfOEIfRkoo2l6SCT0",
    authDomain: "jlennieuk.firebaseapp.com",
    projectId: "jlennieuk",
    storageBucket: "jlennieuk.appspot.com",
    messagingSenderId: "466465974230",
    appId: "1:466465974230:web:58c8961fdef19505d36677",
    measurementId: "G-RD074KS2ZJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);