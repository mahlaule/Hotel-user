// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import{getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDx-6KTRJNnU2NuJ9bFzLz3xbEm4tvkI80",
  authDomain: "hotel-app-72314.firebaseapp.com",
  projectId: "hotel-app-72314",
  storageBucket: "hotel-app-72314.appspot.com",
  messagingSenderId: "693495632066",
  appId: "1:693495632066:web:8fcd26914122486c6e2b5b"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);
const auth = getAuth(app);

export {db, auth};



