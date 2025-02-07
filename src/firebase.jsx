// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOqFSbMxserTSVdpu_BgnuTFd11-vBa64",
  authDomain: "nasgor-db-4b59d.firebaseapp.com",
  projectId: "nasgor-db-4b59d",
  storageBucket: "nasgor-db-4b59d.firebasestorage.app",
  messagingSenderId: "852344012786",
  appId: "1:852344012786:web:fff47fa81a8e975c72b56b",
  measurementId: "G-181227Q3ZM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);