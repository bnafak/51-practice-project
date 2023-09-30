import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBthPs9KupHm7ORUY-rcIGjGzQ-sqFVhLs",
  authDomain: "practice-project-1abdb.firebaseapp.com",
  projectId: "practice-project-1abdb",
  storageBucket: "practice-project-1abdb.appspot.com",
  messagingSenderId: "1051953728831",
  appId: "1:1051953728831:web:d7b44495e83ac2f8c8d78a"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth (app);

export default auth;