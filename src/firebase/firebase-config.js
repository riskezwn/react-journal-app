// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
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

const firebaseConfigTesting = {
    apiKey: "AIzaSyD3T0UpBFRhp9-LVzhHQcc9cUYdCwhoIgk",
    authDomain: "sql-demos-6aaea.firebaseapp.com",
    projectId: "sql-demos-6aaea",
    storageBucket: "sql-demos-6aaea.appspot.com",
    messagingSenderId: "489811236640",
    appId: "1:489811236640:web:bde963ce71b6b2f4a46945",
    measurementId: "G-LP6K65KM8R"
  };

if (process.env.NODE_ENV === 'test') {
    // test
    initializeApp(firebaseConfigTesting);
    
} else {
    // dev, prod
    initializeApp(firebaseConfig);
}

const db = getFirestore();
const googleAuthProvider = new GoogleAuthProvider();
const auth = getAuth();

export { db, googleAuthProvider, auth };
