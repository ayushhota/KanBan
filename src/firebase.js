import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyDKQKfjhnOE6VbCz3y-LkE3tuSCZ7LvWb4",
  authDomain: "kanban-87e8b.firebaseapp.com",
  projectId: "kanban-87e8b",
  storageBucket: "kanban-87e8b.appspot.com",
  messagingSenderId: "81681810303",
  appId: "1:81681810303:web:08c1eae75dc0cb7b2c104a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const fbFunctions = getFunctions(app);

if (process.env.NODE_ENV === "development") {
  connectAuthEmulator(auth, "http://localhost:9098");
  connectFirestoreEmulator(db, "localhost", 8082);
  connectFunctionsEmulator(fbFunctions, "localhost", 5002);
}
