// core/state.js
let currentLang = localStorage.getItem("lang") || "en";
let currentTheme = localStorage.getItem("theme") || "light";

export function getLang() { return currentLang; }
export function setLang(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);
}

export function getTheme() { return currentTheme; }
export function setTheme(theme) {
  currentTheme = theme;
  localStorage.setItem("theme", theme);
}

// ✅ Nueva función: sincroniza los selectores de idioma con el estado actual
export function syncLanguageSelectors() {
  const lang = getLang();
  const selects = document.querySelectorAll("#lang-switch, #lang-switch-drawer");
  selects.forEach(select => {
    if (select) select.value = lang;
  });
}

// Aplicar estado inicial al DOM
export function initState() {
  document.documentElement.setAttribute("data-theme", currentTheme);
  syncLanguageSelectors(); // 👈 asegura que los <select> muestren el idioma correcto
}