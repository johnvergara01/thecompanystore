import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAcBO3ajwBIRHpbneQfGJHWFEn0L9swuaQ",
  authDomain: "thecompanystore-910c6.firebaseapp.com",
  projectId: "thecompanystore-910c6",
  storageBucket: "thecompanystore-910c6.appspot.com",
  messagingSenderId: "66741384070",
  appId: "1:66741384070:web:a1875921dc558b0982b207",
  measurementId: "G-R3JFLC067B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

//   const auth = firebase.auth();
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
