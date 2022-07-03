// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import productos from "../utils/productos";

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

 export const addOrder = async (order) => {
  const docSnap = await addDoc(collection(db, "orders"), order)
  return docSnap.id
}


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const collectionProductos = collection (db, "productos")


