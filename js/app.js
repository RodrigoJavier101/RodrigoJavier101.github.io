import { pages } from "./translations/pages.js";
import { translations } from "./translations/translations.js";
import { youtubeUrls } from "./translations/constants.js";

let currentLang = "en";
let currentTheme = "dark";

// ✅ Función para extraer ID de YouTube
function extractVideoId(url) {
  const regExp =
    /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
}

function loadPage(pageName) {
  const content = document.querySelector(".content");
  content.innerHTML = pages[pageName](currentLang);
}

function setLanguage(lang) {
  currentLang = lang;
  document.querySelectorAll("[data-page]").forEach((el) => {
    const key = `nav_${el.dataset.page}`;
    el.textContent = translations[lang][key] || el.dataset.page;
  });

  const ytLink = document.getElementById("youtube-link");
  if (ytLink) {
    ytLink.href = youtubeUrls[lang] || youtubeUrls.en;
  }

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
  const pageName = hash.startsWith("blog/") ? "blog" : hash;

  // Renderizar contenido
  if (hash.startsWith("blog/")) {
    const postId = hash.split("/")[1];
    document.querySelector(".content").innerHTML = pages.blogPost(
      currentLang,
      postId
    );
  } else if (pages[pageName]) {
    document.querySelector(".content").innerHTML = pages[pageName](currentLang);
  } else {
    window.location.hash = "home";
    document.querySelector(".content").innerHTML = pages.home(currentLang);
  }

  // ✅ Actualizar enlace activo en el menú
  document.querySelectorAll("nav a").forEach((link) => {
    const href = link.getAttribute("href");
    if (href === `#${pageName}`) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // Estilos para código
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
  document.getElementById("current-date").textContent = now.toLocaleDateString(
    lang,
    options
  );
}

// --- Inicialización ---
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "en";
  const savedTheme = localStorage.getItem("theme") || "dark";
  currentLang = savedLang;
  currentTheme = savedTheme;
  document.documentElement.setAttribute("data-theme", currentTheme);
  document.getElementById("lang-switch").value = savedLang;

  const ytLink = document.getElementById("youtube-link");
  if (ytLink) {
    ytLink.href = youtubeUrls[currentLang] || youtubeUrls.en;
  }

  document.getElementById("lang-switch").addEventListener("change", (e) => {
    setLanguage(e.target.value);
  });
  document
    .getElementById("theme-toggle")
    .addEventListener("click", toggleTheme);

  // ✅ Modal de YouTube
  const modal = document.getElementById("youtube-modal");
  const closeButton = document.querySelector(".close-button");
  const embedContainer = document.getElementById("youtube-embed-container");

  // 👇 Usa data-youtube-url (no data-video)
  document.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("youtube-btn") ||
      e.target.classList.contains("youtube-btn-small")
    ) {
      console.log("Botón clicado:", e.target);
      const fullUrl = e.target.getAttribute("data-youtube-url");
      console.log("URL completa:", fullUrl);
      const videoId = extractVideoId(fullUrl);
      console.log("Video ID extraído:", videoId);

      if (videoId) {
        embedContainer.innerHTML = `<iframe src="https://www.youtube.com/embed/${videoId}?autoplay=1" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
        modal.style.display = "flex";
      } else {
        console.error("No se pudo extraer el ID de YouTube de:", fullUrl);
      }
    }
  });

  closeButton.addEventListener("click", () => {
    embedContainer.innerHTML = "";
    modal.classList.remove("is-active");
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      embedContainer.innerHTML = "";
      modal.style.display = "none";
    }
  });

  updateCurrentDate(currentLang);
  renderPage();
});

window.checkAdminPass = function () {
  const pass = document.getElementById("admin-pass").value;
  if (pass === "tuclave123") {
    // ❌ visible en el código fuente
    document.getElementById("admin-content").style.display = "block";
  } else {
    alert("Clave incorrecta");
  }
};

window.addEventListener("hashchange", renderPage);
