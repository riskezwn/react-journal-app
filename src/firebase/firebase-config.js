// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDrlLwKIv4XVFdL8Jv1nVUECMboGg8XIVk",
    authDomain: "react-apps-cursos-c2958.firebaseapp.com",
    projectId: "react-apps-cursos-c2958",
    storageBucket: "react-apps-cursos-c2958.appspot.com",
    messagingSenderId: "247414867925",
    appId: "1:247414867925:web:3d604f994081b65413df5c",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore();
const googleAuthProvider = new GoogleAuthProvider();

export { db, googleAuthProvider };
