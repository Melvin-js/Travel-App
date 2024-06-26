// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDk6Bj9FKjogSJJny2eCV5Mj0l5SMFMLuI",
  authDomain: "travel-app-adc11.firebaseapp.com",
  projectId: "travel-app-adc11",
  storageBucket: "travel-app-adc11.appspot.com",
  messagingSenderId: "1079616000151",
  appId: "1:1079616000151:web:3712194ccb0810f76fd9d2",
  measurementId: "G-T9KETCSEN6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);