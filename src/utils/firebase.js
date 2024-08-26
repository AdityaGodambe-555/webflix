// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAObqeOKOG2NwLOqtwhcokPNR3Fj0hdIOU",
  authDomain: "webflix-aditya.firebaseapp.com",
  projectId: "webflix-aditya",
  storageBucket: "webflix-aditya.appspot.com",
  messagingSenderId: "336335675497",
  appId: "1:336335675497:web:d3520297b0a57a8c1042f8",
  measurementId: "G-ZFWZDF9W64",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
