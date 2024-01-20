import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBQ_AnZsl1DYwQVAIb2Bz9ZIBV2jXtHIcU",
  authDomain: "react-todo-database.firebaseapp.com",
  projectId: "react-todo-database",
  storageBucket: "react-todo-database.appspot.com",
  messagingSenderId: "343378981142",
  appId: "1:343378981142:web:919f3e350003c51d55a037",
  measurementId: "G-E9FNM6VSJ1"
};


const app = initializeApp(firebaseConfig);
const DB = getDatabase(app);
const db = getFirestore(app);
const auth = getAuth();
export{
    DB,db,auth
}
