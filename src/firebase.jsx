import { initializeApp } from "firebase/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider, getAuth} from "firebase/auth"
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebase = {
  apiKey: "AIzaSyAWiNMc2wbynG9pr1q4PCKLY97fFqXcXAs",
  authDomain: "highfiblog-6a516.firebaseapp.com",
  projectId: "highfiblog-6a516",
  storageBucket: "highfiblog-6a516.appspot.com",
  messagingSenderId: "483793649917",
  appId: "1:483793649917:web:07b329624a79b2fc5e3e94"
};

// Initialize Firebase
const app = initializeApp(firebase);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const providerGoogle = new GoogleAuthProvider();

export {auth, providerGoogle, db, storage};