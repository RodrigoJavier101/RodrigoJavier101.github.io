import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  orderBy,
} from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";
// 1. Configuración de tu proyecto Firebase
// Esto lo obtienes de tu consola de Firebase:
// En "Configuración del proyecto" (el icono de engranaje) > "Tus aplicaciones" > "Web"
const firebaseConfig = {
  apiKey: "AIzaSyCOMYMkr3Tyn0I8a0qAurixhqm5Z4ynHhc",
  authDomain: "rodrigo-portfolio-admin.firebaseapp.com",
  projectId: "rodrigo-portfolio-admin",
  storageBucket: "rodrigo-portfolio-admin.firebasestorage.app",
  messagingSenderId: "823981414979",
  appId: "1:823981414979:web:f4a49e30173c46149352f6",
  measurementId: "G-P88R3L2TWR",
};
// 2. Inicializa Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
