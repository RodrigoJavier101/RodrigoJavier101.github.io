// ui/language.js

// ✅ Importar helper que genera objeto plano (consistente con nav.js y projects.js)
import { getTranslationsForLang } from "../translations/i18n.js";
import { youtubeUrls } from "../utils/constants.js";
import { getLang, setLang } from "../core/state.js";

// ✅ Función privada para sincronizar todos los selects
function syncLanguageSelectors(lang) {
  document.querySelectorAll("#lang-switch, #lang-switch-drawer").forEach((select) => {
    if (select) select.value = lang;
  });
}

export function setLanguage(lang) {
  setLang(lang);
  
  // ✅ Generar objeto plano de traducciones para este idioma
  const t = getTranslationsForLang(lang);

  // Actualizar menú: elementos con data-page
  document.querySelectorAll("[data-page]").forEach((el) => {
    const key = `nav_${el.dataset.page}`;
    // ✅ Ahora t[key] funciona porque t es un objeto plano
    el.textContent = t[key] || el.dataset.page;
  });

  // Actualizar YouTube link
  const ytLink = document.getElementById("youtube-link");
  if (ytLink) {
    ytLink.href = youtubeUrls[lang] || youtubeUrls.en;
    // ✅ Opcional: actualizar aria-label si lo usas
    ytLink.setAttribute("aria-label", `YouTube (${lang === "en" ? "English" : "Español"})`);
  }

  // ✅ Sincronizar ambos selects (header + drawer)
  syncLanguageSelectors(lang);
  
  // ✅ Actualizar atributo lang del HTML para accesibilidad + SEO
  document.documentElement.lang = lang;
}