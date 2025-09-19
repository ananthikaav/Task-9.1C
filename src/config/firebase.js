// src/config/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDDTcRkOwBTnJOeFWudiloXSKfQQRfeyXI",
  authDomain: "login-2dc1e.firebaseapp.com",
  projectId: "login-2dc1e",
  storageBucket: "login-2dc1e.firebasestorage.app",
  messagingSenderId: "576140140967",
  appId: "1:576140140967:web:c7897d845619e9c6531682"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app); // ← export db
export default app;
