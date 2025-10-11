
import { translations } from "./translations.js";
import { blogPosts } from "./blogPosts.js";

export const pages = {
  home: (lang) => `<div class="page container">...</div>`,
  about: (lang) => `<div class="page container">...</div>`,
  projects: (lang) =>
    `<div class="page container"><h2>${translations[lang].projects_title}</h2><p>Check my GitHub!</p></div>`,

  // Blog list
  blog: (lang) => {
    const posts = blogPosts[lang] || blogPosts.en;
    const postList = posts
      .map(
        (post) => `
      <article class="blog-post-preview">
        <h3><a href="#blog/${post.id}">${post.title}</a></h3>
        <time datetime="${post.date}">${new Date(post.date).toLocaleDateString(
          lang
        )}</time>
        <p>${post.excerpt}</p>
      </article>
    `
      )
      .join("");
    return `<div class="page container"><h2>${translations[lang].blog_title}</h2>${postList}</div>`;
  },

  // Blog post individual
  blogPost: (lang, postId) => {
    const posts = blogPosts[lang] || blogPosts.en;
    const post = posts.find((p) => p.id === postId);
    if (!post)
      return `<div class="page container"><p>Post not found.</p></div>`;

    return `
      <div class="page container blog-post">
        <a href="#blog" class="back-link">← Back to Blog</a>
        <h1>${post.title}</h1>
        <time datetime="${post.date}">${new Date(post.date).toLocaleDateString(
      lang
    )}</time>
        <div class="blog-content">${post.content}</div>
      </div>
    `;
  },

  contact: (lang) =>
    `<div class="page container"><h2>${translations[lang].contact_title}</h2><p>rodrigo@example.com</p></div>`,
};