// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDngpT0edeBf_reJouXWZEmpISsJhwGT8",
  authDomain: "music-8a59e.firebaseapp.com",
  projectId: "music-8a59e",
  storageBucket: "music-8a59e.appspot.com",
  messagingSenderId: "595097650685",
  appId: "1:595097650685:web:cdccb003ca0d14663c8594"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export default app;