// Import the functions you need from the SDKs you need
import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHl2xcFmYtd7jR67SwNmQd7w7NJhMO3So",
  authDomain: "mealstogoreactnative-ffb96.firebaseapp.com",
  projectId: "mealstogoreactnative-ffb96",
  storageBucket: "mealstogoreactnative-ffb96.appspot.com",
  messagingSenderId: "205321208045",
  appId: "1:205321208045:web:f82fe5f64f1be4410d0ce4",
  measurementId: "G-Y08C9MV63M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const googleProvider = new GoogleAuthProvider();

// https://mealstogoreactnative-ffb96.firebaseapp.com/__/auth/handler
