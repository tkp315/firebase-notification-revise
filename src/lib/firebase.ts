
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";




const firebaseConfig = {
  apiKey: "AIzaSyC7eoKFwpeXNH0KfP5uXzjh1NCmZ4kXXdo",
  authDomain: "fir-61f66.firebaseapp.com",
  projectId: "fir-61f66",
  storageBucket: "fir-61f66.firebasestorage.app",
  messagingSenderId: "731456850392",
  appId: "1:731456850392:web:56db706c0e3de305078aad",
  measurementId: "G-QMQVRQWP4V"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app)
