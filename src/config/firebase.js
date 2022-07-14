import { initializeApp } from "firebase/app";

import { addDoc, collection, getFirestore } from "firebase/firestore";


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


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const collectionProductos = collection (db, "productos")


