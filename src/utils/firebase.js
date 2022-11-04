// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD8QXOvinoSZotAeAQJERJUm2lybm06sgE",
  authDomain: "mern-stack-application-4f490.firebaseapp.com",
  projectId: "mern-stack-application-4f490",
  storageBucket: "mern-stack-application-4f490.appspot.com",
  messagingSenderId: "321299829027",
  appId: "1:321299829027:web:6cfcbadf115df4e69fbc96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);