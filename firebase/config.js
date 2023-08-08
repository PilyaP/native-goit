import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA2u5JcsOMHsZR1mjYTylzFunhi9d1IBxQ",
  authDomain: "goit-5444.firebaseapp.com",
  projectId: "goit-5444",
  storageBucket: "goit-5444.appspot.com",
  messagingSenderId: "884337436895",
  appId: "1:884337436895:web:ed083464060b8cc865e16a",
  measurementId: "G-9L2VD9C3ND",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);

const firebase = { auth, storage, db };

export default firebase;
