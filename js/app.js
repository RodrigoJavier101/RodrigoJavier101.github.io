import { pages } from "./translations/pages.js";
import { translations } from "./translations/translations.js";
import { youtubeUrls } from "./translations/constants.js";
import { projects } from "./translations/pages/projects.const.js";

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

async function renderPage() {
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

  // Actualizar enlace de YouTube en el footer
  const ytLink = document.getElementById("youtube-link");
  if (ytLink) {
    ytLink.href = youtubeUrls[currentLang] || youtubeUrls.en;
  }

  // Eventos de UI
  document.getElementById("lang-switch").addEventListener("change", (e) => {
    setLanguage(e.target.value);
  });
  document
    .getElementById("theme-toggle")
    .addEventListener("click", toggleTheme);

  // === Modal de YouTube ===
  const youtubeModal = document.getElementById("youtube-modal");
  const youtubeClose = document.querySelector(".close-button");
  const embedContainer = document.getElementById("youtube-embed-container");

  // Delegación: botones de YouTube
  document.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("youtube-btn") ||
      e.target.classList.contains("youtube-btn-small")
    ) {
      const fullUrl = e.target.getAttribute("data-youtube-url");
      const videoId = extractVideoId(fullUrl);
      if (videoId) {
        embedContainer.innerHTML = `<iframe src="https://www.youtube.com/embed/${videoId}?autoplay=1" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
        youtubeModal.classList.add("is-active");
      } else {
        console.error("URL de YouTube inválida:", fullUrl);
      }
    }
  });

  // Cerrar modal de YouTube
  if (youtubeClose) {
    youtubeClose.addEventListener("click", () => {
      embedContainer.innerHTML = "";
      youtubeModal.classList.remove("is-active");
    });
  }
  window.addEventListener("click", (e) => {
    if (e.target === youtubeModal) {
      embedContainer.innerHTML = "";
      youtubeModal.classList.remove("is-active");
    }
  });

  // === Modal de Proyectos ===
  const projectModal = document.getElementById("project-modal");
  const projectClose = document.querySelector(".close-project");

  // Delegación: cards de proyecto
  document.addEventListener("click", (e) => {
    if (e.target.closest(".project-card")) {
      const card = e.target.closest(".project-card");
      const projectId = card.getAttribute("data-project-id");
      const projList = projects[currentLang] || projects.en;
      const project = projList.find((p) => p.id === projectId);

      if (project) {
        const content = `
          <h2>${project.title}</h2>
          <p>${project.description}</p>
          <div class="tech-tags">
            ${project.tech
              .map((tag) => `<span class="tech-tag">${tag}</span>`)
              .join("")}
          </div>
          <div class="modal-buttons">
            ${
              project.liveUrl
                ? `<a href="${project.liveUrl}" target="_blank" class="btn-live">Ver en vivo</a>`
                : ""
            }
            ${
              project.githubUrl
                ? `<a href="${project.githubUrl}" target="_blank" class="btn-github">Código en GitHub</a>`
                : ""
            }
          </div>
        `;
        document.getElementById("project-modal-content").innerHTML = content;
        projectModal.classList.add("is-active");
      }
    }
  });

  // Cerrar modal de proyecto
  if (projectClose) {
    projectClose.addEventListener("click", () => {
      projectModal.classList.remove("is-active");
    });
  }
  
  if (projectModal) {
    projectModal.addEventListener("click", (e) => {
      if (e.target === projectModal) {
        projectModal.classList.remove("is-active");
      }
    });
  }

  // === Renderizar página inicial ===
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
