import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"; // Import the necessary functions

const firebaseConfig = {
  apiKey: "AIzaSyAQuyrnmLk6Oyc9IYmSKM_C8gluwcbcnwg",
  authDomain: "netlfix-clone-b3a54.firebaseapp.com",
  projectId: "netlfix-clone-b3a54",
  storageBucket: "netlfix-clone-b3a54.appspot.com",
  messagingSenderId: "207121307853",
  appId: "1:207121307853:web:d580bec14fb33eead27184",
  measurementId: "G-0SBDCYK0VK",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { auth, db, signInWithEmailAndPassword }; // Export signInWithEmailAndPassword as well
