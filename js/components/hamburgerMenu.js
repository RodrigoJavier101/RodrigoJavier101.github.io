/**
 * Inicializa el menú hamburguesa (drawer) en dispositivos móviles.
 * Sincroniza controles de idioma y tema si existen en el drawer.
 */

import { setLanguage } from "../ui/language.js";
import { toggleTheme } from "../ui/theme.js";

export function initHamburgerMenu() {
  const hamburger = document.querySelector(".hamburger");
  const drawer = document.querySelector(".menu-drawer");
  const closeDrawer = document.querySelector(".close-drawer");

  // Salir si no hay elementos (por ejemplo, en escritorio o HTML incompleto)
  if (!hamburger || !drawer || !closeDrawer) {
    return;
  }

  function toggleDrawer() {
    const isVisible = drawer.getAttribute("data-visible") === "true";
    const newState = !isVisible;
    drawer.setAttribute("data-visible", String(newState));
    hamburger.setAttribute("aria-expanded", String(newState));
  }

  // Abrir/cerrar con botón hamburguesa
  hamburger.addEventListener("click", toggleDrawer);

  // Cerrar con botón ×
  closeDrawer.addEventListener("click", toggleDrawer);

  // Cerrar al hacer clic en el overlay (fondo oscuro)
  drawer.addEventListener("click", (e) => {
    if (e.target === drawer) {
      toggleDrawer();
    }
  });

  // Cerrar al hacer clic en un enlace del menú
  const drawerLinks = drawer.querySelectorAll("a[data-page]");
  drawerLinks.forEach((link) => {
    link.addEventListener("click", toggleDrawer);
  });

  // Sincronizar controles del drawer con los globales (opcional)
  const langSwitchDrawer = document.getElementById("lang-switch-drawer");
  const themeToggleDrawer = document.getElementById("theme-toggle-drawer");

  if (langSwitchDrawer) {
    // Establecer valor inicial
    langSwitchDrawer.value = document.getElementById("lang-switch")?.value || "en";
    // Escuchar cambios
    langSwitchDrawer.addEventListener("change", (e) => {
      setLanguage(e.target.value);
    });
  }

  if (themeToggleDrawer) {
    themeToggleDrawer.addEventListener("click", toggleTheme);
  }
}