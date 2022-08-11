import firebase from "firebase/compat/app";
import { getDatabase } from "firebase/database";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: "socialdog-p.appspot.com",
  messagingSenderId: "886655917895",
  appId: "1:886655917895:web:6a5abafb3b8814d6747662",
  measurementId: "G-RX909TZ1BS",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = getDatabase(firebaseApp);

export { firebaseApp, database };
