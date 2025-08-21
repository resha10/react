// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfJVF44jv4BpNl0NHxtz7YIomBKiVdKCk",
  authDomain: "blinkit-f2c1b.firebaseapp.com",
  projectId: "blinkit-f2c1b",
  storageBucket: "blinkit-f2c1b.firebasestorage.app",
  messagingSenderId: "799947760111",
  appId: "1:799947760111:web:4af3b460c822d7756bd61a",
  measurementId: "G-QC4FMBFLE4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);