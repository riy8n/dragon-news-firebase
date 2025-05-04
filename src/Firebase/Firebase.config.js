// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB__ZITzh6NPEJ82mtvrneTdbygN3JogYI",
  authDomain: "dargon-news-update.firebaseapp.com",
  projectId: "dargon-news-update",
  storageBucket: "dargon-news-update.appspot.com",

  messagingSenderId: "643604903231",
  appId: "1:643604903231:web:c78b43f530df0929fccf8a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;