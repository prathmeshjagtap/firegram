import firebase from "firebase";
import "firebase/firestore";
import "firebase/storage";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD4uaCcM3ZPUSoA7fWy0bHuirJ_DNjJj-k",
  authDomain: "firegram-77a6d.firebaseapp.com",
  projectId: "firegram-77a6d",
  storageBucket: "firegram-77a6d.appspot.com",
  messagingSenderId: "155786943372",
  appId: "1:155786943372:web:c1a20c575109f4504e94a9",
});

const db = firebaseApp.firestore();
const storage = firebaseApp.storage();

export { db, storage, firebaseApp as default };
