// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAf79G0hmjAMUd-7zIsZeLFkgYXBIUdc3c",
  authDomain: "simple-firebase-auth-2-dfc4f.firebaseapp.com",
  projectId: "simple-firebase-auth-2-dfc4f",
  storageBucket: "simple-firebase-auth-2-dfc4f.firebasestorage.app",
  messagingSenderId: "806602359103",
  appId: "1:806602359103:web:57d3e8f660147aad83538a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth2 = getAuth(app);
