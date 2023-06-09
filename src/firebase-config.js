// firebase-config.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCmpxd-S3td-S4VUE9mRJJ_oy18E2dcbqo",
  authDomain: "lego-react-1afba.firebaseapp.com",
  projectId: "lego-react-1afba",
  storageBucket: "lego-react-1afba.appspot.com",
  messagingSenderId: "437855011892",
  appId: "1:437855011892:web:67f041b445434c43037661"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export default db;
