// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore} from "firebase/firestore"
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCU6WRigbtw3zAjEuHq_Vn7BLVsN69Ikvs",
  authDomain: "react-firebase-16679.firebaseapp.com",
  projectId: "react-firebase-16679",
  storageBucket: "react-firebase-16679.appspot.com",
  messagingSenderId: "956675398204",
  appId: "1:956675398204:web:c4b35d1ee01f111b574139"
}

// Handle Sign in
export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)

const auth = getAuth(app)
export {auth}