// firebase-init.js
import { initializeApp, getApps } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-analytics.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBu54ZKJX7ZHeyemLCxej8addexzwbioNA",
  authDomain: "autovault-c2acb.firebaseapp.com",
  projectId: "autovault-c2acb",
  storageBucket: "autovault-c2acb.appspot.com",
  messagingSenderId: "356679832643",
  appId: "1:356679832643:web:90b0626c070c0ffd19f0f6",
  measurementId: "G-4FZYY6PNYP"
};

// Prevent re-initialization if already done
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { auth, db, analytics };
