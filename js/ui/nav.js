// ui/nav.js
import { translations } from "../translations/translations.js";
import { getLang } from "../core/state.js";

const navItems = [
  { id: "home", hash: "#home" },
  { id: "about", hash: "#about" },
  { id: "projects", hash: "#projects" },
  { id: "blog", hash: "#blog" },
];

export function renderNav() {
  const lang = getLang();
  const t = translations[lang];

  const mainNav = document.getElementById("main-nav");
  const drawerNav = document.getElementById("drawer-nav");

  if (!mainNav || !drawerNav) return;

  // Función auxiliar para crear un enlace
  const createLink = (item) => {
    const link = document.createElement("a");
    link.href = item.hash;
    link.setAttribute("data-page", item.id);
    link.textContent = t[`nav_${item.id}`] || item.id.charAt(0).toUpperCase() + item.id.slice(1);
    return link;
  };

  // Limpiar y rellenar ambos menús
  mainNav.innerHTML = "";
  drawerNav.innerHTML = "";

  navItems.forEach((item) => {
    mainNav.appendChild(createLink(item));
    drawerNav.appendChild(createLink(item));
  });
}