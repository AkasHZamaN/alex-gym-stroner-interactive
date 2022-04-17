// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDITHJj48PKd-GTGqaZhm8clF9XIdZKDng",
  authDomain: "alex-gym-stone.firebaseapp.com",
  projectId: "alex-gym-stone",
  storageBucket: "alex-gym-stone.appspot.com",
  messagingSenderId: "471721843745",
  appId: "1:471721843745:web:f9a054d7a969a8194bd760"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;