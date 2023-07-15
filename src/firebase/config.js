// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwO1W4F1llfh-eaKIUsTer1wWB4Q1UZng",
  authDomain: "bwa-vue-challenge.firebaseapp.com",
  projectId: "bwa-vue-challenge",
  storageBucket: "bwa-vue-challenge.appspot.com",
  messagingSenderId: "457586488326",
  appId: "1:457586488326:web:fa9f9cd456f9e4c1cb3f87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export { app, db }