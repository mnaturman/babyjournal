import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';

const firebaseConfig = {
  apiKey: "AIzaSyBB99dazELjk3vNJZJRR5R2CdCz1aVAXto",
  authDomain: "baby-memory-journal.firebaseapp.com",
  projectId: "baby-memory-journal",
  storageBucket: "baby-memory-journal.firebasestorage.app",
  messagingSenderId: "572125578992",
  appId: "1:572125578992:web:108972e517eba6b6252435",
  measurementId: "G-VBTLYDXZ3D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics
const analytics = getAnalytics(app);

// Initialize App Check
const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider('6LdNMKQqAAAAAGYQiqm4yk_cHtLn-8ibaFgc-duo'),
  isTokenAutoRefreshEnabled: true
});

// Initialize other Firebase services
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, analytics, auth, db, storage };
