import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAvUvAKaTwFO_xgj6w5GL8mTKX9eP388iw",
    authDomain: "mygames-8dfa0.firebaseapp.com",
    projectId: "mygames-8dfa0",
    storageBucket: "mygames-8dfa0.appspot.com",
    messagingSenderId: "857254329801",
    appId: "1:857254329801:web:45936cc9ef3de4d99a3c18",
    measurementId: "G-Q8RE427MZE"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth }
