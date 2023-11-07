// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNLMrTkIoSntWBaLF-tvEE_1JPpBjfVhY",
  authDomain: "the-special-newspaper.firebaseapp.com",
  projectId: "the-special-newspaper",
  storageBucket: "the-special-newspaper.appspot.com",
  messagingSenderId: "503867678577",
  appId: "1:503867678577:web:90a1b1c0f51c3593d0e0d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export  default app;