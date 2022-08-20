// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAGdH5I6iD4B2D-V9Bm2BN4upCgCdGEDd0",
    authDomain: "ed-company.firebaseapp.com",
    projectId: "ed-company",
    storageBucket: "ed-company.appspot.com",
    messagingSenderId: "357344202611",
    appId: "1:357344202611:web:4ff0567ecf18d03a663f06",
    measurementId: "G-TQ2PR92GFT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

export default auth;