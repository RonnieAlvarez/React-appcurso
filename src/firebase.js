// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCU6WRigbtw3zAjEuHq_Vn7BLVsN69Ikvs",
  authDomain: "react-firebase-16679.firebaseapp.com",
  projectId: "react-firebase-16679",
  storageBucket: "react-firebase-16679.appspot.com",
  messagingSenderId: "956675398204",
  appId: "1:956675398204:web:c4b35d1ee01f111b574139"
};

//doc - getDoc - getDocs - where


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);