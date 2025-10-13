import { translations } from "../translations.js";
import { blogPosts } from "../blogPosts.js";

export const blog = (lang) => {
  const posts = blogPosts[lang] || blogPosts.en;
  const postList = posts
    .map((post) => {
      const youtubeBtn = post.youtubeUrl
        ? `<button type="button" class="youtube-btn-small" data-youtube-url="${post.youtubeUrl}">🎥 Video</button>`
        : "";
      return `
        <article class="blog-post-preview">
          <h3><a href="#blog/${post.id}">${post.title}</a></h3>
          <time datetime="${post.date}">${new Date(post.date).toLocaleDateString(lang)}</time>
          <p>${post.excerpt}</p>
          ${youtubeBtn}
        </article>
      `;
    })
    .join("");
  return `
    <div class="page container">
      <h2>${translations[lang].blog_title}</h2>
      ${postList}
    </div>
  `;
};