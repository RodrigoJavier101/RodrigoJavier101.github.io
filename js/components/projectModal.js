import { projects } from "../translations/pages/projects.const.js";
import { getLang } from "../core/state.js";

export function initProjectModal() {
  const projectModal = document.getElementById("project-modal");
  const projectClose = document.querySelector(".close-project");

  if (!projectModal) return;

  document.addEventListener("click", (e) => {
    const card = e.target.closest(".project-card");
    if (!card) return;

    const projectId = card.getAttribute("data-project-id");
    const lang = getLang();
    const projList = projects[lang] || projects.en;
    const project = projList.find(p => p.id === projectId);

    if (project) {
      const content = `
        <h2>${project.title}</h2>
        <p>${project.description}</p>
        <div class="tech-tags">
          ${project.tech.map(tag => `<span class="tech-tag">${tag}</span>`).join("")}
        </div>
        <div class="modal-buttons">
          ${project.liveUrl ? `<a href="${project.liveUrl}" target="_blank" class="btn-live">Ver en vivo</a>` : ""}
          ${project.githubUrl ? `<a href="${project.githubUrl}" target="_blank" class="btn-github">Código en GitHub</a>` : ""}
        </div>
      `;
      document.getElementById("project-modal-content").innerHTML = content;
      projectModal.classList.add("is-active");
    }
  });

  if (projectClose) {
    projectClose.addEventListener("click", () => projectModal.classList.remove("is-active"));
  }

  projectModal.addEventListener("click", (e) => {
    if (e.target === projectModal) projectModal.classList.remove("is-active");
  });
}