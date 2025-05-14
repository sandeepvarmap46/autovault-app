import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBu54ZKJX7ZHeyemLCxej8addexzwbioNA",
  authDomain: "autovault-c2acb.firebaseapp.com",
  projectId: "autovault-c2acb",
  appId: "1:356679832643:web:90b0626c070c0ffd19f0f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Show login form
window.showLogin = () => {
  document.getElementById("form-container").innerHTML = `
    <h2>Login</h2>
    <input type="email" id="email" placeholder="Email" /><br />
    <input type="password" id="password" placeholder="Password" /><br />
    <button onclick="login()">Sign In</button>
  `;
};

// Show signup form
window.showSignup = () => {
  document.getElementById("form-container").innerHTML = `
    <h2>Sign Up</h2>
    <input type="text" id="name" placeholder="Full Name" /><br />
    <input type="email" id="email" placeholder="Email" /><br />
    <input type="password" id="password" placeholder="Password" /><br />
    <button onclick="signup()">Create Account</button>
  `;
};

// Login function
window.login = async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    // Store username (before @) for greeting
    localStorage.setItem('autovault_username', email.split('@')[0]);
    window.location.href = "dashboard.html";
  } catch (error) {
    alert("Login error: " + error.message);
  }
};

// Signup function
window.signup = async () => {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    await setDoc(doc(db, "users", user.uid), {
      name: name,
      email: email
    });

    alert("Signup successful!");
    window.location.href = "dashboard.html";
  } catch (error) {
    alert("Signup error: " + error.message);
  }
};

// Load login form by default
window.addEventListener("DOMContentLoaded", () => {
  showLogin();
});

<meta name="viewport" content="width=device-width, initial-scale=1.0">

