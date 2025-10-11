import { pages } from "./translations/pages.js";
import { translations } from "./translations/translations.js";

let currentLang = "en";
let currentTheme = "dark";

// --- Funciones ---
function loadPage(pageName) {
  const content = document.querySelector(".content");
  content.innerHTML = pages[pageName](currentLang);
}

function setLanguage(lang) {
  currentLang = lang;
  // Actualizar menú
  document.querySelectorAll("[data-page]").forEach((el) => {
    const key = `nav_${el.dataset.page}`;
    el.textContent = translations[lang][key] || el.dataset.page;
  });
  // Recargar página actual
  const hash = window.location.hash.slice(1) || "home";
  const pageName = hash.startsWith("blog/") ? "blog" : hash;
  loadPage(pageName);
  updateCurrentDate(lang);
  localStorage.setItem("lang", lang);
}

function toggleTheme() {
  currentTheme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", currentTheme);
  localStorage.setItem("theme", currentTheme);
}

function renderPage() {
  const hash = window.location.hash.slice(1) || "home";

  if (hash.startsWith("blog/")) {
    const postId = hash.split("/")[1];
    document.querySelector(".content").innerHTML = pages.blogPost(
      currentLang,
      postId
    );
  } else if (pages[hash]) {
    document.querySelector(".content").innerHTML = pages[hash](currentLang);
  } else {
    window.location.hash = "home";
    document.querySelector(".content").innerHTML = pages.home(currentLang);
  }

  // Estilos básicos para código
  document.querySelectorAll("pre code").forEach((block) => {
    block.parentElement.style.backgroundColor = "var(--code-bg)";
    block.parentElement.style.padding = "1rem";
    block.parentElement.style.borderRadius = "6px";
    block.parentElement.style.overflowX = "auto";
  });
}

function updateCurrentDate(lang = "en") {
  const now = new Date();
  const options = { year: "numeric" }; // Solo año, como en tu HTML
  document.getElementById("current-year").textContent = now.toLocaleDateString(
    lang,
    options
  );
}

// --- Inicialización ---
document.addEventListener("DOMContentLoaded", () => {
  // Cargar preferencias
  const savedLang = localStorage.getItem("lang") || "en";
  const savedTheme = localStorage.getItem("theme") || "dark";
  currentLang = savedLang;
  currentTheme = savedTheme;
  document.documentElement.setAttribute("data-theme", currentTheme);
  document.getElementById("lang-switch").value = savedLang;

  // Eventos
  document.getElementById("lang-switch").addEventListener("change", (e) => {
    setLanguage(e.target.value);
  });
  document
    .getElementById("theme-toggle")
    .addEventListener("click", toggleTheme);

  // Inicializar
  updateCurrentDate(currentLang);
  renderPage();
});

// Navegación
window.addEventListener("hashchange", renderPage);
