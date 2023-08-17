// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAa3-m8qJEjniEpjEGkXO0C-p_AxFQnoHE",
  authDomain: "proyecto-react-74fd7.firebaseapp.com",
  projectId: "proyecto-react-74fd7",
  storageBucket: "proyecto-react-74fd7.appspot.com",
  messagingSenderId: "105769902293",
  appId: "1:105769902293:web:f585fdd9fdca47864b425c",
  measurementId: "G-R6QJBFNTJ8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
