// firebase-init.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBu54ZKJX7ZHeyemLCxej8addexzwbioNA",
  authDomain: "autovault-c2acb.firebaseapp.com",
  projectId: "autovault-c2acb",
  storageBucket: "autovault-c2acb.firebasestorage.app",
  messagingSenderId: "356679832643",
  appId: "1:356679832643:web:90b0626c070c0ffd19f0f6",
  measurementId: "G-4FZYY6PNYP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Firestore
export const auth = getAuth(app);
export const db = getFirestore(app);
