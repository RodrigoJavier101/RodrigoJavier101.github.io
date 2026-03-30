// renderer/pages/projects.js

// ✅ IMPORTANTE: Importar el helper de traducciones (ruta correcta desde renderer/pages/)
import { getTranslationsForLang } from "../translations/i18n.js";
import { projects } from "./projects.const.js";

export const projectsPage = (lang) => {
  // ✅ Generar objeto plano de traducciones para el idioma actual
  const t = getTranslationsForLang(lang);

  const projList = (projects[lang] || projects.en)
    .map((p) => `
      <div class="project-card" data-project-id="${p.id}">
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <div class="tech-tags">
          ${p.tech.map((tag) => `<span class="tech-tag">${tag}</span>`).join("")}
        </div>
      </div>
    `)
    .join("");

  return `
    <div class="page container">
      <!-- ✅ Usar t.projects_title (objeto plano) en lugar de translations[lang].projects_title -->
      <h2>${t.projects_title}</h2>
      <div class="projects-grid">
        ${projList}
      </div>
    </div>
  `;
};