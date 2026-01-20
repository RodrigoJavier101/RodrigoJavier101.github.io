import { initState } from "./core/state.js";
import { setLanguage } from "./ui/language.js";
import { toggleTheme } from "./ui/theme.js";
import { updateCurrentDate } from "./ui/date.js";
import { initHamburgerMenu } from "./components/hamburgerMenu.js";
import { initYouTubeModal } from "./components/youtubeModal.js";
import { initProjectModal } from "./components/projectModal.js";
import { renderPage } from "./renderer/renderer.js";
import { renderNav } from "./ui/nav.js"; // 👈 NUEVA IMPORTACIÓN

// --- Inicialización ---
document.addEventListener("DOMContentLoaded", () => {
  initState();

  // Renderiza el menú inicial ANTES de renderPage, por buenas prácticas
  // (aunque renderPage también lo llama, esto evita flickering si hay retraso)
  renderNav();

  // Eventos globales
  document.getElementById("lang-switch")?.addEventListener("change", (e) => {
    setLanguage(e.target.value);
    updateCurrentDate(e.target.value);
    renderPage(); // Esto ya incluye renderNav()
  });

  // Sincronizar el selector del drawer (opcional pero recomendado)
  document.getElementById("lang-switch-drawer")?.addEventListener("change", (e) => {
    setLanguage(e.target.value);
    updateCurrentDate(e.target.value);
    renderPage();
  });

  document
    .getElementById("theme-toggle")
    ?.addEventListener("click", toggleTheme);

  document
    .getElementById("theme-toggle-drawer")
    ?.addEventListener("click", toggleTheme);

  // Inicializar componentes
  initHamburgerMenu();
  initYouTubeModal();
  initProjectModal();

  // Render inicial del contenido principal
  updateCurrentDate();
  renderPage(); // Ya incluye renderNav(), pero está bien llamarlo aquí
});

// Navegación
window.addEventListener("hashchange", renderPage);

// Función global de admin (opcional)
window.checkAdminPass = function () {
  const pass = document.getElementById("admin-pass")?.value;
  if (pass === "tuclave123") {
    document.getElementById("admin-content").style.display = "block";
  } else {
    alert("Clave incorrecta");
  }
};