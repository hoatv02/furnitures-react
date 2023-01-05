// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtsAJQzQbq6oaQtl4EFjvPBtz_oihDf7Q",
  authDomain: "fileuploadfurniture.firebaseapp.com",
  projectId: "fileuploadfurniture",
  storageBucket: "fileuploadfurniture.appspot.com",
  messagingSenderId: "377115927396",
  appId: "1:377115927396:web:f947818ce5496825281071"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);