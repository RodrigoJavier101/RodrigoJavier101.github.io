// articleRenderer.js (Ajuste menor para robustez)

import { formatDateForCard } from "./dateFormatter.js";
import { handleTransition } from "./transition.js";

/**
 * Renderiza los artículos en el idioma especificado.
 * @param {Array<Object>} articlesData - Lista de objetos de artículo multilingües.
 * @param {string} lang - Código del idioma ('en' o 'es').
 */
export function renderArticles(articlesData, lang) {
  const articleList = document.getElementById("article-list");
  articleList.innerHTML = ''; 

  articlesData.forEach((article) => {
    // 💥 AHORA ESTO FUNCIONARÁ: Selecciona la traducción o usa un respaldo (aunque no debería ser necesario)
    const translatedArticle = article[lang] || article['en']; 

    // Combinar datos traducidos con datos fijos (fecha, link)
    const finalArticle = {
        ...translatedArticle,
        date: article.date,
        link: article.link
    };
    
    // ... (el resto del código es correcto)
    const formattedDate = formatDateForCard(finalArticle.date);

    const cardHTML = `
      <div class="article-card">
        <a href="${finalArticle.link}"> 
          <div class="article-content">
            <h2>${finalArticle.title}</h2>
            <p>${finalArticle.summary}</p>
          </div>
          
          <div class="article-meta">
            <span class="tag">${finalArticle.tag}</span>
            <span>${formattedDate}</span> 
          </div>
        </a>
      </div>
    `;
    articleList.insertAdjacentHTML("beforeend", cardHTML);
  });

  // Asigna el Event Listener
  document.querySelectorAll(".article-card a").forEach((link) => {
    link.addEventListener("click", handleTransition);
  });
}