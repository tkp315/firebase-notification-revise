
import { initializeApp } from "firebase/app";
import { getMessaging, isSupported, Messaging } from "firebase/messaging";



const firebaseConfig = {
  apiKey: "AIzaSyA14QNWlG0OyS9UAgMQNzLw2-8_M-h5PIc",
  authDomain: "notification-4338e.firebaseapp.com",
  projectId: "notification-4338e",
  storageBucket: "notification-4338e.firebasestorage.app",
  messagingSenderId: "869593322124",
  appId: "1:869593322124:web:8037e9761097799b2da1a9",
  measurementId: "G-36NNW3GGEF"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
let messaging:Messaging
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      messaging = getMessaging(app);
    } else {
      console.warn("Firebase messaging not supported on this browser.");
    }
  });
}
export {messaging}
