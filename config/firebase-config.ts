// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6v2gQDn0bwPcrisF_qqFQ7X7pyl9NSlw",
  authDomain: "lms-elearning-app.firebaseapp.com",
  projectId: "lms-elearning-app",
  storageBucket: "lms-elearning-app.firebasestorage.app",
  messagingSenderId: "555078507786",
  appId: "1:555078507786:web:9a133a23c1a76e095f2ef3",
  measurementId: "G-QN97DZ0331",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
