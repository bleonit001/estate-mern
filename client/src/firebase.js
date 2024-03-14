// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-73f5b.firebaseapp.com",
  projectId: "mern-estate-73f5b",
  storageBucket: "mern-estate-73f5b.appspot.com",
  messagingSenderId: "683549836814",
  appId: "1:683549836814:web:ad90bd5d5cdaf0c37d5e5f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);