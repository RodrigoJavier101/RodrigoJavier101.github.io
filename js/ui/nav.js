// ui/nav.js

// ✅ Importar helper de traducción
import { t } from "../translations/i18n.js";
import { getLang } from "../core/state.js";

const navItems = [
  { id: "home", hash: "#home" },
  { id: "blog", hash: "#blog" },
  { id: "projects", hash: "#projects" },
];

export function renderNav() {
  const lang = getLang();

  const mainNav = document.getElementById("main-nav");
  const drawerNav = document.getElementById("drawer-nav");

  if (!mainNav || !drawerNav) return;

  // Función auxiliar para crear un enlace
  const createLink = (item) => {
    const link = document.createElement("a");
    link.href = item.hash;
    link.setAttribute("data-page", item.id);
    
    // ✅ Nueva forma: usar t("key", lang)
    link.textContent = t(`nav_${item.id}`, lang) 
      || item.id.charAt(0).toUpperCase() + item.id.slice(1);
    
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