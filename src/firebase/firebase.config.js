// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUvh81wZpYT_h6YAFTFq7-zmqafGbVWno",
  authDomain: "auth-moha-milon-5890b.firebaseapp.com",
  projectId: "auth-moha-milon-5890b",
  storageBucket: "auth-moha-milon-5890b.appspot.com",
  messagingSenderId: "224773011152",
  appId: "1:224773011152:web:ecccb4d56c34d9c4d010d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;