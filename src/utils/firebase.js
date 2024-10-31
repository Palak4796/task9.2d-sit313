import { initializeApp } from "firebase/app";

import {getFirestore} from "@firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from 'firebase/storage'; 

const firebaseConfig = {
  apiKey: "AIzaSyBtPFXSaGg285E-TT2NTVC2XXcTgkD3yIU",
  authDomain: "task91csit313.firebaseapp.com",
  projectId: "task91csit313",
  storageBucket: "task91csit313.appspot.com",
  messagingSenderId: "515409459091",
  appId: "1:515409459091:web:bac97c71c4e2b090c21a66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { auth,db, storage} ;
