import { initializeApp } from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyAbghFlT3pl7BkOjdSFn3AACCoSGRq4W98",
  authDomain: "card-cart-db.firebaseapp.com",
  projectId: "card-cart-db",
  storageBucket: "card-cart-db.firebasestorage.app",
  messagingSenderId: "40219575814",
  appId: "1:40219575814:web:766deddd05c06cb61be587"
}

export const app = initializeApp(firebaseConfig)