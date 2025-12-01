import { translations } from "../translations/translations.js";
import { youtubeUrls } from "../translations/constants.js";
import { getLang, setLang } from "../core/state.js";

export function setLanguage(lang) {
  setLang(lang);

  // Actualizar menú
  document.querySelectorAll("[data-page]").forEach((el) => {
    const key = `nav_${el.dataset.page}`;
    el.textContent = translations[lang][key] || el.dataset.page;
  });

  // Actualizar enlace de YouTube
  const ytLink = document.getElementById("youtube-link");
  if (ytLink) ytLink.href = youtubeUrls[lang] || youtubeUrls.en;

  // Actualizar selects del drawer si existen
  const drawerSwitch = document.getElementById("lang-switch-drawer");
  if (drawerSwitch) drawerSwitch.value = lang;
}