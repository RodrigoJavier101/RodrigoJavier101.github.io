import { translations } from "./translations.js";
import { blogPosts } from "./blogPosts.js";

export const pages = {
  home: (lang) => `
  <div class="page container">
    <h1>${translations[lang].home_title}</h1>
    <p>${translations[lang].home_desc}</p>
    <p>${translations[lang].home_body}</p>
  </div>
`,

  about: (lang) => `
  <div class="page container">
    <h2>${translations[lang].about_title}</h2>
    <p>${translations[lang].about_text}</p>
     <a 
      href="./assets/cv/Rodrigo_Javier_Garrido_Dagle-resume-android--.pdf" 
      class="cv-link"
      target="_blank"
      rel="noopener noreferrer"
    >
      ${translations[lang].download_cv}
    </a>
    <a 
      href="https://cert.efset.org/pNEGCW" 
      class="cv-link"
      target="_blank"
      rel="noopener noreferrer"
    >
      ${translations[lang].download_eng_cert}
    </a>
    <a 
      href="./assets/cert/facilitator_certificate.pdf" 
      class="cv-link"
      target="_blank"
      rel="noopener noreferrer"
    >
      ${translations[lang].download_facil_cert}
    </a>
  </div>
`,

  projects: (lang) =>
    `<div class="page container">
      <h2>${translations[lang].projects_title}</h2>
      <p>Check my GitHub!</p>
    </div>`,

  // ✅ Blog: lista de posts
  blog: (lang) => {
    const posts = blogPosts[lang] || blogPosts.en;
    const postList = posts
      .map((post) => {
        const youtubeBtn = post.youtubeUrl
          ? `<button type="button" class="youtube-btn-small" data-youtube-url="${post.youtubeUrl}">🎥 Video</button>`
          : "";
        return `
          <article class="blog-post-preview">
            <h3><a href="#blog/${post.id}">${post.title}</a></h3>
            <time datetime="${post.date}">${new Date(
          post.date
        ).toLocaleDateString(lang)}</time>
            <p>${post.excerpt}</p>
            ${youtubeBtn}
          </article>
        `;
      })
      .join("");
    return `<div class="page container">
              <h2>${translations[lang].blog_title}</h2>
              ${postList}
            </div>`;
  },

  // ✅ Blog post individual
  blogPost: (lang, postId) => {
    const posts = blogPosts[lang] || blogPosts.en;
    const post = posts.find((p) => p.id === postId);
    if (!post) {
      return `<div class="page container"><p>Post not found.</p></div>`;
    }

    const youtubeBtn = post.youtubeUrl
      ? `<button type="button" class="youtube-btn" data-youtube-url="${post.youtubeUrl}">Watch on YouTube</button>`
      : "";

    return `
      <div class="page container blog-post">
        <a href="#blog" class="back-link">← Back to Blog</a>
        <h1>${post.title}</h1>
        <time datetime="${post.date}">${new Date(post.date).toLocaleDateString(
      lang
    )}</time>
        ${youtubeBtn}
        <div class="blog-content">${post.content}</div>
      </div>
    `;
  },

  contact: (lang) =>
    `<div class="page container">
      <h2>${translations[lang].contact_title}</h2>
      <p>rodrigojaviergd@gmail.com</p>
      <p>WSP: +56 996 095 384</p>
    </div>`,
};
