import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  orderBy,
} from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCOMYMkr3Tyn0I8a0qAurixhqm5Z4ynHhc",
  authDomain: "rodrigo-portfolio-admin.firebaseapp.com",
  projectId: "rodrigo-portfolio-admin",
  storageBucket: "rodrigo-portfolio-admin.firebasestorage.app",
  messagingSenderId: "823981414979",
  appId: "1:823981414979:web:f4a49e30173c46149352f6",
  measurementId: "G-P88R3L2TWR",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const cargarBlogs = async function () {
  try {
    const q = query(collection(db, "blogs"), orderBy("date", "desc"));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      return [{ error: "No hay blogs disponibles" }];
    }

    const blogs = []; // ✅ acumulador

    querySnapshot.forEach((doc) => {
      const blog = doc.data();

      let processedBlog;
      if (blog.date && typeof blog.date === "string") {
        const dateObject = new Date(blog.date);
        if (!isNaN(dateObject.getTime())) {
          processedBlog = {
            ...blog,
            id: doc.id,
            date: blog.date,
            legibleDate: dateObject.toLocaleDateString("es-ES", {
              year: "numeric",
              month: "long",
              day: "numeric",
            }),
          };
        } else {
          processedBlog = { error: "Fecha inválida en el blog ID " + doc.id };
        }
      } else if (blog.date && typeof blog.date.toDate === "function") {
        const jsDate = blog.date.toDate();
        processedBlog = {
          ...blog,
          id: doc.id,
          date: jsDate.toISOString(),
          legibleDate: jsDate.toLocaleDateString("es-ES", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
        };
      } else {
        processedBlog = {
          error: "Formato de fecha desconocido en el blog ID " + doc.id,
        };
      }

      blogs.push(processedBlog); // ✅ acumula
    });

    return blogs; // ✅ devuelve el array completo
  } catch (error) {
    console.error("Error en cargarBlogs:", error);
    return [{ error: "Error al cargar los blogs: " + error.message }];
  }
};

// let blogs = [];
// const initBlogLoad = async () => {
//   blogs = await cargarBlogs();
//   console.log("in blog general .,., ", blogs);
//   return blogs;
// };

// initBlogLoad();
export const getBlogs = async () => cargarBlogs();
