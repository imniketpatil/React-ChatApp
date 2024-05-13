import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage, ref } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyARnn7Pt3EZHrsA6VvxwCeZOUQ9cCD2zrM",
  authDomain: "chat-a645e.firebaseapp.com",
  projectId: "chat-a645e",
  storageBucket: "chat-a645e.appspot.com",
  messagingSenderId: "333574919661",
  appId: "1:333574919661:web:c6dcb6ce035ac9c5f503e4",
  measurementId: "G-RPDW2QG98F",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const analytics = getAnalytics(app);
export const storage = getStorage();
export const db = getFirestore();
