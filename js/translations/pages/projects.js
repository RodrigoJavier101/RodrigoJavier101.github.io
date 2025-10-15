// translations/pages/projects.js
import { translations } from "../translations.js";
import { projects } from "./projects.const.js";

export const projectsPage = (lang) => {
  const projList = (projects[lang] || projects.en)
    .map(
      (p) => `
    <div class="project-card" data-project-id="${p.id}">
      <h3>${p.title}</h3>
      <p>${p.description}</p>
      <div class="tech-tags">
        ${p.tech.map((tag) => `<span class="tech-tag">${tag}</span>`).join("")}
      </div>
    </div>
  `
    )
    .join("");

  return `
    <div class="page container">
      <h2>${translations[lang].projects_title}</h2>
      <div class="projects-grid">
        ${projList}
      </div>
    </div>
  `;
};
