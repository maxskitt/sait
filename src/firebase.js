import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

const app = initializeApp({
  apiKey: "AIzaSyA1dNKu7DRXqUvN5Kg4u6qT-3H0aqah2EI",
  authDomain: "sait-4a709.firebaseapp.com",
  projectId: "sait-4a709",
  storageBucket: "sait-4a709.appspot.com",
  messagingSenderId: "570794723080",
  appId: "1:570794723080:web:155534eb75d6e0bd4d0ebd"
});

const db = getFirestore(app);

export default db;
