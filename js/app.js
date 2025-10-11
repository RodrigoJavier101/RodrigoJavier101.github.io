import { pages } from "./translations/pages.js";

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

// --- 3. Estado global ---
let currentLang = "en";
let currentTheme = "dark";

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
