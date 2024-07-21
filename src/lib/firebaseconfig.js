

// firebaseconfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDP3d8wGBC79h9AMEuYyGuxbB9WjzDOJps",
  authDomain: "panpaliya-trading.firebaseapp.com",
  projectId: "panpaliya-trading",
  storageBucket: "panpaliya-trading.appspot.com",
  messagingSenderId: "1093008086345",
  appId: "1:1093008086345:web:bdc7eed66c0b429ab17698",
  measurementId: "G-160ZMV8X1G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
