// blogPost.js - DEBUG VERSION
import { t } from "../translations/i18n.js";
import { getBlogPost, blogPosts } from "./blogPosts.js"; // 👈 Also import raw blogPosts

export const blogPost = (postId, lang) => {
  // 🔍 DEBUG: Log what we're looking for
  // console.log("🔍 Looking for postId:", postId);
  // console.log("🔍 Available post IDs:", Object.keys(blogPosts));
  // console.log("🔍 Requested lang:", lang);

  const post = getBlogPost(lang, postId);
  
  // console.log("🔍 Result from getBlogPost:", post);

  if (!post) {
    return `
      <div class="page container">
        <h2>${t("blog_title", lang)}</h2>
        <p>⚠️ Post not found. ID: "${postId}"</p>
        <p><small>Available: ${Object.keys(blogPosts).join(", ")}</small></p>
        <a href="#blog">← ${t("nav_blog", lang)}</a>
      </div>
    `;
  }

  const youtubeBtn = post.youtubeUrl
    ? `<button type="button" class="youtube-btn" data-youtube-url="${post.youtubeUrl}">🎥 Watch on YouTube</button>`
    : "";

  return `
    <div class="page container">
      <article class="blog-post-full">
        <header>
          <h1>${post.title}</h1>
          <time datetime="${post.date}" class="post-date">${post.date}</time>
          ${youtubeBtn}
        </header>
        <div class="post-content">
          ${post.content}
        </div>
        <footer>
          <a href="#blog">← ${t("nav_blog", lang)}</a>
        </footer>
      </article>
    </div>
  `;
};