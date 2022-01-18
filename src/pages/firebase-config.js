import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDu4eRFuoLagn0wWBzhi8zvn30vwowZyaA",
  authDomain: "mygames-69c5c.firebaseapp.com",
  projectId: "mygames-69c5c",
  storageBucket: "mygames-69c5c.appspot.com",
  messagingSenderId: "846607193668",
  appId: "1:846607193668:web:c0c0f7a5720fc573118e11"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth }
