import { initState } from "./core/state.js";
import { setLanguage } from "./ui/language.js";
import { toggleTheme } from "./ui/theme.js";
import { updateCurrentDate } from "./ui/date.js";
import { initHamburgerMenu } from "./components/hamburgerMenu.js";
import { initYouTubeModal } from "./components/youtubeModal.js";
import { initProjectModal } from "./components/projectModal.js";
import { renderPage } from "./pages/renderer.js";

// --- Inicialización ---
document.addEventListener("DOMContentLoaded", () => {
  initState();

  // Eventos globales
  document.getElementById("lang-switch")?.addEventListener("change", (e) => {
    setLanguage(e.target.value);
    updateCurrentDate(e.target.value);
    renderPage();
  });

  document
    .getElementById("theme-toggle")
    ?.addEventListener("click", toggleTheme);

  // Inicializar componentes
  initHamburgerMenu();
  initYouTubeModal();
  initProjectModal();

  // Render inicial
  updateCurrentDate();
  renderPage();
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
