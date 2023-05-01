// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlmA0L39WJSV8P7SNsRdHj5kwQTX6U5Z8",
  authDomain: "assignment10-recipe-hunting.firebaseapp.com",
  projectId: "assignment10-recipe-hunting",
  storageBucket: "assignment10-recipe-hunting.appspot.com",
  messagingSenderId: "619850981228",
  appId: "1:619850981228:web:05bcf07e2d49191921dd49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;