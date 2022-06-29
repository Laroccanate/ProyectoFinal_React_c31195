// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcfK0q7r9iObQG7hAljU_wOBiD45OlpCM",
  authDomain: "laroccanate-e5800.firebaseapp.com",
  projectId: "laroccanate-e5800",
  storageBucket: "laroccanate-e5800.appspot.com",
  messagingSenderId: "1082097671630",
  appId: "1:1082097671630:web:938b3e6caaea183663df9f",
  measurementId: "G-G7YDZZ91S9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)