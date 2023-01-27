// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCukrqYoWIuvpghj99hGbenAazLGMIayck",
  authDomain: "music-club-10b54.firebaseapp.com",
  projectId: "music-club-10b54",
  storageBucket: "music-club-10b54.appspot.com",
  messagingSenderId: "948247831011",
  appId: "1:948247831011:web:a02d1accac04f955a680d6",
  measurementId: "G-XMSG1P25QZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);