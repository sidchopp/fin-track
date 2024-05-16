import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_di0_SvzPAD4_XciIMcI928Z7zV7NFbM",
  authDomain: "fintrack-8f7c3.firebaseapp.com",
  projectId: "fintrack-8f7c3",
  storageBucket: "fintrack-8f7c3.appspot.com",
  messagingSenderId: "726269919380",
  appId: "1:726269919380:web:a827945dbbe282fc567481",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize service(s)
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

//time stamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
