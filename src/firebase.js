import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "xe-nang-nguoi.firebaseapp.com",
  projectId: "xe-nang-nguoi",
  storageBucket: "xe-nang-nguoi.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);

export const googleProvider = new GoogleAuthProvider();
export const auth = getAuth(app);
export default app;