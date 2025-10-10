// --- 1. Traducciones ---
const translations = {
  en: {
    home_title: "Hi, I'm Rodrigo",
    home_desc: "Mobile Software Engineer & Content Creator",
    about_title: "About Me",
    about_text: "I build apps and share knowledge.",
    blog_title: "Latest Articles",
    projects_title: "Featured Projects",
    contact_title: "Get in Touch",
    nav_home: "Home",
    nav_about: "About",
    nav_projects: "Projects",
    nav_blog: "Blog",
    nav_contact: "Contact",
  },
  es: {
    home_title: "Hola, soy Rodrigo",
    home_desc: "Ingeniero de Software Móvil y Creador de Contenido",
    about_title: "Sobre Mí",
    about_text: "Desarrollo apps y comparto conocimiento.",
    blog_title: "Últimos Artículos",
    projects_title: "Proyectos Destacados",
    contact_title: "Contáctame",
    nav_home: "Inicio",
    nav_about: "Sobre mí",
    nav_projects: "Proyectos",
    nav_blog: "Blog",
    nav_contact: "Contacto",
  },
};

// Dentro de app.js, añade esto arriba de "const pages = { ..."

const blogPosts = {
  en: [
    {
      id: "js-tips",
      title: "5 JavaScript Tips Every Developer Should Know",
      date: "2025-04-10",
      excerpt:
        "Learn how to write cleaner, faster, and more maintainable JavaScript code.",
      content: `
        <p>JavaScript is powerful, but it's easy to fall into bad patterns.</p>
        <p>Here's a pro tip: always use <code>const</code> by default.</p>
        <pre><code>const user = { name: 'Rodrigo' };</code></pre>
      `,
    },
    {
      id: "dark-mode",
      title: "How I Built a Dark Mode Toggle",
      date: "2025-03-22",
      excerpt: "A deep dive into CSS variables and localStorage.",
      content: `
        <p>Dark mode isn't just trendy—it reduces eye strain.</p>
        <p>I used <code>prefers-color-scheme</code> and <code>localStorage</code> to make it persistent.</p>
      `,
    },
  ],
  es: [
    {
      id: "js-tips",
      title: "5 Consejos de JavaScript que Todo Desarrollador Debe Saber",
      date: "2025-04-10",
      excerpt:
        "Aprende a escribir código JavaScript más limpio, rápido y mantenible.",
      content: `
        <p>JavaScript es poderoso, pero es fácil caer en malos patrones.</p>
        <p>Consejo profesional: usa siempre <code>const</code> por defecto.</p>
        <pre><code>const usuario = { nombre: 'Rodrigo' };</code></pre>
      `,
    },
    {
      id: "dark-mode",
      title: "Cómo Creé un Interruptor de Modo Oscuro",
      date: "2025-03-22",
      excerpt: "Un vistazo profundo a las variables CSS y localStorage.",
      content: `
        <p>El modo oscuro no es solo tendencia: reduce la fatiga visual.</p>
        <p>Usé <code>prefers-color-scheme</code> y <code>localStorage</code> para hacerlo persistente.</p>
      `,
    },
  ],
};

const pages = {
  home: (lang) => `<div class="page container">...</div>`,
  about: (lang) => `<div class="page container">...</div>`,
  projects: (lang) =>
    `<div class="page container"><h2>${translations[lang].projects_title}</h2><p>Check my GitHub!</p></div>`,

  // Blog list
  blog: (lang) => {
    const posts = blogPosts[lang] || blogPosts.en;
    const postList = posts
      .map(
        (post) => `
      <article class="blog-post-preview">
        <h3><a href="#blog/${post.id}">${post.title}</a></h3>
        <time datetime="${post.date}">${new Date(post.date).toLocaleDateString(
          lang
        )}</time>
        <p>${post.excerpt}</p>
      </article>
    `
      )
      .join("");
    return `<div class="page container"><h2>${translations[lang].blog_title}</h2>${postList}</div>`;
  },

  // Blog post individual
  blogPost: (lang, postId) => {
    const posts = blogPosts[lang] || blogPosts.en;
    const post = posts.find((p) => p.id === postId);
    if (!post)
      return `<div class="page container"><p>Post not found.</p></div>`;

    return `
      <div class="page container blog-post">
        <a href="#blog" class="back-link">← Back to Blog</a>
        <h1>${post.title}</h1>
        <time datetime="${post.date}">${new Date(post.date).toLocaleDateString(
      lang
    )}</time>
        <div class="blog-content">${post.content}</div>
      </div>
    `;
  },

  contact: (lang) =>
    `<div class="page container"><h2>${translations[lang].contact_title}</h2><p>rodrigo@example.com</p></div>`,
};
// --- 3. Estado global ---
let currentLang = "en";
let currentTheme = "dark";

// --- 4. Funciones ---
function loadPage(pageName) {
  const content = document.querySelector(".content");
  content.innerHTML = pages[pageName](currentLang);
}

function setLanguage(lang) {
  currentLang = lang;
  // Actualizar texto del menú
  document.querySelectorAll("[data-page]").forEach((el) => {
    const key = `nav_${el.dataset.page}`;
    el.textContent = translations[lang][key] || el.dataset.page;
  });
  // Recargar página actual
  const currentPage = document
    .querySelector(".content .page")
    ?.closest("[data-page]")
    ? document.querySelector(".active")?.dataset.page || "home"
    : "home";

  updateCurrentDate(lang);
  loadPage(currentPage);
  localStorage.setItem("lang", lang);
}

function toggleTheme() {
  currentTheme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", currentTheme);
  localStorage.setItem("theme", currentTheme);
}

function renderPage() {
  const hash = window.location.hash.slice(1); // quita el #

  if (hash.startsWith("blog/")) {
    const postId = hash.split("/")[1];
    document.querySelector(".content").innerHTML = pages.blogPost(
      currentLang,
      postId
    );
  } else if (pages[hash]) {
    document.querySelector(".content").innerHTML = pages[hash](currentLang);
  } else {
    // Default: home
    window.location.hash = "home";
    document.querySelector(".content").innerHTML = pages.home(currentLang);
  }

  // Resaltar código (si usas highlight.js más tarde)
  // o al menos aplicar estilos básicos
  document.querySelectorAll("pre code").forEach((block) => {
    block.parentElement.style.backgroundColor = "var(--code-bg)";
    block.parentElement.style.padding = "1rem";
    block.parentElement.style.borderRadius = "6px";
    block.parentElement.style.overflowX = "auto";
  });
}

function updateCurrentDate(lang = "en") {
  const now = new Date();
  const options = { year: "numeric", month: "long" };
  const formattedDate = now.toLocaleDateString(lang, options);
  document.getElementById("current-date").textContent = formattedDate;
}

// Escuchar cambios en la URL
window.addEventListener("hashchange", renderPage);
// Cargar al inicio
renderPage();
