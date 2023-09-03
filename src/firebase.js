import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyD7mwyx1Iapv56ywrj4oMvNrCcJNxmWefE",
  authDomain: "productsproject-5b07e.firebaseapp.com",
  projectId: "productsproject-5b07e",
  storageBucket: "productsproject-5b07e.appspot.com",
  messagingSenderId: "531721023081",
  appId: "1:531721023081:web:173065b2d7aab4f50cfcf8",
  databaseURL: "https://productsproject-5b07e-default-rtdb.firebaseio.com/",
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
