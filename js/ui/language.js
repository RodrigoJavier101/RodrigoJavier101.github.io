// ui/language.js
import { translations } from "../translations/translations.js";
import { youtubeUrls } from "../translations/constants.js";
import { getLang, setLang } from "../core/state.js";

// ✅ Función privada para sincronizar todos los selects
function syncLanguageSelectors(lang) {
  document.querySelectorAll("#lang-switch, #lang-switch-drawer").forEach((select) => {
    if (select) select.value = lang;
  });
}

export function setLanguage(lang) {
  setLang(lang);
  const t = translations[lang] || translations.en;

  // Actualizar menú (aunque ahora usas renderNav, esto puede quedar obsoleto)
  document.querySelectorAll("[data-page]").forEach((el) => {
    const key = `nav_${el.dataset.page}`;
    el.textContent = t[key] || el.dataset.page;
  });

  // Actualizar YouTube
  const ytLink = document.getElementById("youtube-link");
  if (ytLink) ytLink.href = youtubeUrls[lang] || youtubeUrls.en;

  // ✅ Sincronizar ambos selects
  syncLanguageSelectors(lang);
}