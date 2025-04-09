// Import the functions you need from the SDKs you need
import { initializeApp ,getApp,getApps} from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAk5yhp_kq7Mwclhp4_e2JpmXWl8STVK8s",
  authDomain: "replica-6116f.firebaseapp.com",
  projectId: "replica-6116f",
  storageBucket: "replica-6116f.firebasestorage.app",
  messagingSenderId: "163101227873",
  appId: "1:163101227873:web:60d65ae8b3bbd555aee320",
  measurementId: "G-GKQ0NE2GBR"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
