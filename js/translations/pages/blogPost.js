import { blogPosts } from "../blogPosts.js";

async function cargarBlogs() {
  const blogsContainer = document.getElementById("blogs-container");
  blogsContainer.innerHTML = "<p>Cargando blogs...</p>"; // Restablecer mensaje de carga
  try {
    // Crear una consulta para la colección 'blogs', ordenados por el campo 'date' descendente.
    // ¡Importante! Para que el ordenamiento funcione cronológicamente con strings,
    // el formato de la fecha en Firestore debe ser 'YYYY-MM-DD'.
    const q = query(collection(db, "blogs"), orderBy("date", "desc"));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
      blogsContainer.innerHTML = "<p>No hay blogs disponibles.</p>";
      return;
    }
    // Limpiar el mensaje de carga si hay blogs
    blogsContainer.innerHTML = "";
    querySnapshot.forEach((doc) => {
      const blog = doc.data(); // Obtiene los datos del documento
      const blogElement = document.createElement("div");
      blogElement.classList.add("blog-post"); // Para aplicar estilos si quieres
      let legibleDate = "Fecha no disponible"; // Valor por defecto si no se puede procesar la fecha
      // Procesar el campo 'date' (que es un string) del documento
      if (blog.date && typeof blog.date === "string") {
        try {
          // Intentar parsear el string a un objeto Date de JavaScript
          const dateObject = new Date(blog.date);
          // Comprobar si la fecha parseada es válida
          if (!isNaN(dateObject.getTime())) {
            legibleDate = dateObject.toLocaleDateString("es-ES", {
              year: "numeric",
              month: "long",
              day: "numeric",
            });
          } else {
            console.warn(
              `Fecha inválida (string) para el blog ID ${doc.id}: ${blog.date}`
            );
          }
        } catch (error) {
          console.error(
            `Error al procesar la fecha (string) para el blog ID ${doc.id}:`,
            error
          );
        }
      } else if (blog.date && typeof blog.date.toDate === "function") {
        // Fallback: Si el campo 'date' fuera un Timestamp de Firestore
        legibleDate = blog.date.toDate().toLocaleDateString("es-ES", {
          year: "numeric",
          month: "long",
          day: "numeric",
        });
      }
      // Construir el HTML para cada blog
      blogElement.innerHTML = `
                          <h2>${blog.title || "Título no disponible"}</h2>
                          <p>
                            <strong>Publicado el:</strong> ${legibleDate}
                            ${
                              blog.lang
                                ? `(Idioma: ${blog.lang.toUpperCase()})`
                                : ""
                            }
                          </p>
                          <p>${
                            blog.content ? blog.content.substring(0, 200) : ""
                          }... <a href="#${
        blog.slug || doc.id
      }">Leer más</a></p>
                          ${
                            blog.youtubeUrl
                              ? `<p>Ver video: <a href="${blog.youtubeUrl}" target="_blank">YouTube</a></p>`
                              : ""
                          }
                          <hr>
                      `;
      blogsContainer.appendChild(blogElement);
    });
  } catch (error) {
    console.error("Error al cargar los blogs:", error);
    blogsContainer.innerHTML =
      "<p>Hubo un error al cargar los blogs. Por favor, inténtalo de nuevo más tarde.</p>";
  }
}

export const blogPost = (lang, postId) => {
  const posts = blogPosts[lang] || blogPosts.en;
  const post = posts.find((p) => p.id === postId);
  if (!post) {
    return `<div class="page container"><p>Post not found.</p></div>`;
  }

  const youtubeBtn = post.youtubeUrl
    ? `<button type="button" class="youtube-btn" data-youtube-url="${post.youtubeUrl}">Watch on YouTube</button>`
    : "";

  // Reutilizamos toLocaleDateString con el idioma
  const formattedDate = new Date(post.date).toLocaleDateString(lang);

  return `
    <div class="page container blog-post">
      <a href="#blog" class="back-link">← Back to Blog</a>
      <h1>${post.title}</h1>
      <time datetime="${post.date}">${formattedDate}</time>
      ${youtubeBtn}
      <div class="blog-content">${post.content}</div>
    </div>
  `;
};
