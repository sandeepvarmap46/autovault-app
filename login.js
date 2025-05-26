import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail
} from "https://www.gstatic.com/firebasejs/11.7.1/firebase-auth.js";

// Your Firebase config (same as splash.html)
const firebaseConfig = {
  apiKey: "AIzaSyBu54ZKJX7ZHeyemLCxej8addexzwbioNA",
  authDomain: "autovault-c2acb.firebaseapp.com",
  projectId: "autovault-c2acb",
  storageBucket: "autovault-c2acb.firebasestorage.app",
  messagingSenderId: "356679832643",
  appId: "1:356679832643:web:90b0626c070c0ffd19f0f6",
  measurementId: "G-4FZYY6PNYP"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Toggle forms
const loginFormDiv = document.getElementById('loginForm');
const signupFormDiv = document.getElementById('signupForm');
document.getElementById('showSignupBtn').onclick = () => {
  loginFormDiv.style.display = 'none';
  signupFormDiv.style.display = '';
};
document.getElementById('showLoginBtn').onclick = () => {
  signupFormDiv.style.display = 'none';
  loginFormDiv.style.display = '';
};

// Handle login
document.getElementById('loginFormElement').onsubmit = async function(e) {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value;
  try {
    await signInWithEmailAndPassword(auth, email, password);
    // Play login audio if present
    const loginAudio = document.getElementById('loginAudio');
    if (loginAudio) {
      loginAudio.currentTime = 0;
      loginAudio.play().catch(() => {});
    }
    window.location.href = "splash.html";
  } catch (err) {
    alert("Login failed: " + (err.message || err));
  }
};

// Handle signup
document.getElementById('signupFormElement').onsubmit = async function(e) {
  e.preventDefault();
  const name = document.getElementById('signupName').value.trim();
  const email = document.getElementById('signupEmail').value.trim();
  const password = document.getElementById('signupPassword').value;
  if (!name) {
    alert("Please enter your name.");
    return;
  }
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    // Play login audio if present
    const loginAudio = document.getElementById('loginAudio');
    if (loginAudio) {
      loginAudio.currentTime = 0;
      loginAudio.play().catch(() => {});
    }
    // Directly redirect to dashboard (splash.html) after registration
    window.location.href = "splash.html";
  } catch (err) {
    alert("Signup failed: " + (err.message || err));
  }
};

// Handle forgot password
document.getElementById('forgotPasswordBtn').onclick = async function() {
  const email = document.getElementById('loginEmail').value.trim();
  if (!email) {
    alert("Please enter your email address first.");
    return;
  }
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset email sent! Please check your inbox.");
  } catch (err) {
    alert("Failed to send reset email: " + (err.message || err));
  }
};