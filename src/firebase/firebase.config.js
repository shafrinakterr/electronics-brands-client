// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuFhtS4W4U60HH54lrxk7eIwlglY74mLk",
  authDomain: "electronics-brands.firebaseapp.com",
  projectId: "electronics-brands",
  storageBucket: "electronics-brands.appspot.com",
  messagingSenderId: "266235344746",
  appId: "1:266235344746:web:65d5637d1a0ae74def9713"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;