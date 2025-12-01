import { extractVideoId } from "../utils/youtube.js";

export function initYouTubeModal() {
  const youtubeModal = document.getElementById("youtube-modal");
  const youtubeClose = document.querySelector(".close-button");
  const embedContainer = document.getElementById("youtube-embed-container");

  if (!youtubeModal || !embedContainer) return;

  function openYouTubeModal(videoId) {
    if (!videoId) return;
    embedContainer.innerHTML = `
      <iframe
        src="https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>
    `;
    youtubeModal.classList.add("is-active");
  }

  function closeYouTubeModal() {
    embedContainer.innerHTML = "";
    youtubeModal.classList.remove("is-active");
  }

  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("youtube-btn") ||
        e.target.classList.contains("youtube-btn-small")) {
      const url = e.target.getAttribute("data-youtube-url");
      const id = extractVideoId(url);
      if (id) openYouTubeModal(id);
      else console.error("URL de YouTube inválida:", url);
    }
  });

  if (youtubeClose) {
    youtubeClose.addEventListener("click", closeYouTubeModal);
  }

  youtubeModal.addEventListener("click", (e) => {
    if (e.target === youtubeModal) closeYouTubeModal();
  });
}