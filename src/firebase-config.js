// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkRmu70nvr-HArUXsSlLDJcGB2I9C07zo",
  authDomain: "rusetada.firebaseapp.com",
  databaseURL: "https://rusetada-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "rusetada",
  storageBucket: "rusetada.firebasestorage.app",
  messagingSenderId: "997724032072",
  appId: "1:997724032072:web:4693ac6aff1b6d63291c7d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};