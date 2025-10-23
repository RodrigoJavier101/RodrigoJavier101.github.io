const PENCIL_SVG = `<svg viewBox="0 0 24 24" class="h1-icon" fill="currentColor">
    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
</svg> `;
// 💥 TRADUCCIONES DE TEXTOS FIJOS (HEADER, FOOTER, TÍTULOS)
const fixedTranslations = {
  en: {
    articles: "Articles",
    projects: "Projects",
    "about-me": "About Me",
    "main-title": "Latest Articles",
    "footer-text": "© Rodrigo Javier. ",
    "github-link": "https://github.com/RodrigoJavier101", // Asumiendo que es la misma
    "linkedin-link": "URL_LINKEDIN", // Asumiendo que es la misma
    "youtube-link": "https://www.youtube.com/@DocendoDiscitur-EN", // ⬅️ Canal en ingles
  },
  es: {
    articles: "Artículos",
    projects: "Proyectos",
    "about-me": "Sobre Mí",
    "main-title": "Últimos Artículos",
    "footer-text": "© Rodrigo Javier. ",
    "github-link": "https://github.com/RodrigoJavier101/", // Asumiendo que es la misma
    "linkedin-link": "https://www.linkedin.com/in/rodrigo-javier-gd/en/", // Asumiendo que es la misma
    "youtube-link": "https://www.youtube.com/@DocendoDiscitur-ES", // ⬅️ Canal en Español
  },
};

/**
 * Aplica las traducciones a los elementos fijos de la página.
 * @param {string} lang - Código del idioma ('en' o 'es').
 */
function applyFixedTranslations(lang) {
  const translations = fixedTranslations[lang];
  if (!translations) return;

  // Traducir enlaces de navegación (TEXTO)
  document.querySelector('nav a[href="#articulos"]').textContent =
    translations["articles"];
  document.querySelector('nav a[href="#proyectos"]').textContent =
    translations["projects"];
  document.querySelector('nav a[href="#sobre-mi"]').textContent =
    translations["about-me"];

  // Usar innerHTML para el título principal (con SVG)
  document.getElementById("main-title").innerHTML = translations["main-title"];

  // 💥 NUEVA LÓGICA: Actualizar URLs de enlaces sociales
  document.querySelector('a[aria-label="GitHub"]').href =
    translations["github-link"];
  document.querySelector('a[aria-label="LinkedIn"]').href =
    translations["linkedin-link"];
  document.querySelector('a[aria-label="YouTube"]').href =
    translations["youtube-link"]; // ⬅️ ¡Aquí se actualiza el enlace de YouTube!

  // Traducir texto de footer
  const footerElement = document.getElementById("footer-text");
  const yearSpan = document.getElementById("current-year").outerHTML;
  footerElement.innerHTML = translations["footer-text"] + yearSpan;
}
// ... (El resto del archivo initializeI18n es el mismo) ...

/**
 * Inicializa la gestión de idiomas: carga la preferencia guardada o el inglés por defecto
 * y asigna el evento 'change' al selector.
 * @param {function} renderCallback - Función a llamar para re-renderizar los artículos.
 */
export function initializeI18n(renderCallback) {
  const selector = document.getElementById("language-selector");

  // 1. Obtener idioma guardado o usar 'en' por defecto
  const savedLang = localStorage.getItem("lang") || "en";

  // 2. Establecer el valor del selector y la etiqueta HTML
  selector.value = savedLang;
  document.documentElement.lang = savedLang;

  // 3. Aplicar traducciones y renderizar el contenido
  applyFixedTranslations(savedLang);
  renderCallback(savedLang);

  // 4. Asignar el evento de cambio
  selector.addEventListener("change", (event) => {
    const newLang = event.target.value;
    localStorage.setItem("lang", newLang);
    document.documentElement.lang = newLang;

    applyFixedTranslations(newLang);
    renderCallback(newLang); // Re-renderizar artículos con el nuevo idioma
  });
}
