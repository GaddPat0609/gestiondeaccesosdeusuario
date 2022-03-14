// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXHlceedzQG7hcK9p5jBnF5I-m2RAjCN4",
  authDomain: "ciberseguridad-8e9d5.firebaseapp.com",
  projectId: "ciberseguridad-8e9d5",
  storageBucket: "ciberseguridad-8e9d5.appspot.com",
  messagingSenderId: "78377944447",
  appId: "1:78377944447:web:ff5ebb6fce4162a87b464a",
  measurementId: "G-MDS601NMW7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export { app };
