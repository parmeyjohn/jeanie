// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage, ref, listAll } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAftZkg52Yw2zT4qExQw6u9N_G-CiumwVg",
  authDomain: "ecommerce-app-eb24a.firebaseapp.com",
  projectId: "ecommerce-app-eb24a",
  storageBucket: "ecommerce-app-eb24a.appspot.com",
  messagingSenderId: "957375678709",
  appId: "1:957375678709:web:2fa07edd7a9f9bfa089dbc",
  measurementId: "G-B5JPEZP4XG"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage();
export const db = getFirestore(app);
export const auth = getAuth(app);