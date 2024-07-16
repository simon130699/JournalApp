// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfnEK32U4mUQ-tERPfjFCmwUjfk-4e_1k",
  authDomain: "react-cursos-f8b3e.firebaseapp.com",
  projectId: "react-cursos-f8b3e",
  storageBucket: "react-cursos-f8b3e.appspot.com",
  messagingSenderId: "298655469715",
  appId: "1:298655469715:web:b6159d73cc7453ec5d3d66"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp); 