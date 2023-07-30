import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAhRjBtfWH65jKHPhcLpyk58I69b0bQW3s",
  authDomain: "netflix-349fa.firebaseapp.com",
  projectId: "netflix-349fa",
  storageBucket: "netflix-349fa.appspot.com",
  messagingSenderId: "753995520072",
  appId: "1:753995520072:web:041847d68d3fa2b880607d"
};

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth();

export  { auth }
export default db;