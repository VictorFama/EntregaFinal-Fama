// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPlMpS8zDU1gSk5lOQLPKLoySHg5PkgCg",
  authDomain: "entregafinal-fama.firebaseapp.com",
  projectId: "entregafinal-fama",
  storageBucket: "entregafinal-fama.firebasestorage.app",
  messagingSenderId: "607963637038",
  appId: "1:607963637038:web:a44ea430edacc8f70086bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
