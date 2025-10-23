// main.js

import { articlesData } from "./articleData.js";
import { renderArticles } from "./articleRenderer.js";
import { initializeI18n } from "./i18n.js";
import "./themeToggle.js";

function showSection(hash) {
  // Define la sección por defecto si el hash es vacío o inválido
  const defaultHash = "#blog-section";
  const targetHash = hash || defaultHash;

  // Oculta todas las secciones
  document.querySelectorAll(".main-content-section").forEach((section) => {
    section.classList.add("hidden");
  });

  // Muestra solo la sección objetivo
  const targetSection = document.querySelector(targetHash);
  if (targetSection) {
    targetSection.classList.remove("hidden");
  } else {
    // Si la sección no existe, muestra la sección por defecto (Blog)
    document.querySelector(defaultHash).classList.remove("hidden");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // Inicializa el año del footer
  document.getElementById("current-year").textContent =
    new Date().getFullYear();

  // // 💥 Lógica de animación de fondo (mantener esta lógica aquí)
  // const ANIMATION_DURATION_MS = 1000;
  // setTimeout(() => {
  //   document.body.classList.add("animation-stop");
  // }, ANIMATION_DURATION_MS);

  // 💥 LÓGICA CLAVE: Se define la función de callback para renderizar
  const articleRenderCallback = (lang) => {
    // Se pasa el array de datos y el idioma requerido al renderizador
    renderArticles(articlesData, lang);
  };

  // 💥 Delega el renderizado al gestor de idiomas
  initializeI18n(articleRenderCallback);
});
