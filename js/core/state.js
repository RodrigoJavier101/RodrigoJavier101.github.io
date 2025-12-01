let currentLang = localStorage.getItem("lang") || "en";
let currentTheme = localStorage.getItem("theme") || "dark";

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

// Aplicar estado inicial al DOM
export function initState() {
  document.documentElement.setAttribute("data-theme", currentTheme);
  document.getElementById("lang-switch")?.setAttribute("value", currentLang);
}