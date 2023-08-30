// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER,
  // appId: process.env.REACT_APP_APP_ID
  apiKey: "AIzaSyAvnhkVYgE176W3fSZa7b2IAt0ZDmOqLc8",
  authDomain: "netflix-app-ad20c.firebaseapp.com",
  projectId: "netflix-app-ad20c",
  storageBucket: "netflix-app-ad20c.appspot.com",
  messagingSenderId: "89274266511",
  appId: "1:89274266511:web:3455cc706caf351a0211fa"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)