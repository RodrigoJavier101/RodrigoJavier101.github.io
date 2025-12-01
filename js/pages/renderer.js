import { pages } from "../translations/pages.js";
import { getLang } from "../core/state.js";
import { styleCodeBlocks } from "../ui/codeBlocks.js";

export function renderPage() {
  const hash = window.location.hash.slice(1) || "home";
  const pageName = hash.startsWith("blog/") ? "blog" : hash;

  const contentEl = document.querySelector(".content");
  if (!contentEl) return;

  if (hash.startsWith("blog/")) {
    const postId = hash.split("/")[1];
    contentEl.innerHTML = pages.blogPost(getLang(), postId);
  } else if (pages[pageName]) {
    contentEl.innerHTML = pages[pageName](getLang());
  } else {
    window.location.hash = "home";
    contentEl.innerHTML = pages.home(getLang());
  }

  // Actualizar enlace activo
  document.querySelectorAll("nav a").forEach(link => {
    link.classList.toggle("active", link.getAttribute("href") === `#${pageName}`);
  });

  styleCodeBlocks();
}