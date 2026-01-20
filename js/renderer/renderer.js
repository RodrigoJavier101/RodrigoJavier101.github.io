import { pages } from "../translations/pages.js";

import { getLang } from "../core/state.js";
import { styleCodeBlocks } from "../ui/codeBlocks.js";

export function renderPage() {
  const hash = window.location.hash.slice(1) || "home";
  const pageName = hash.startsWith("blog/") ? "blog" : hash;

  const contentElement = document.querySelector(".content");
  if (!contentElement) return;

  if (hash.startsWith("blog/")) {
    const postId = hash.split("/")[1];
    contentElement.innerHTML = pages.blogPost(getLang(), postId);
  } else if (pages[pageName]) {
    contentElement.innerHTML = pages[pageName](getLang());
  } else {
    window.location.hash = "home";
    contentElement.innerHTML = pages.home(getLang());
  }

  // Actualizar enlace activo
  document.querySelectorAll("nav a").forEach((link) => {
    link.classList.toggle(
      "active",
      link.getAttribute("href") === `#${pageName}`,
    );
  });

  styleCodeBlocks();
}
