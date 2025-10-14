import { blogPosts } from "../blogPosts.js";

export const blogPost = async (lang, postId) => {
  const posts = blogPosts[lang] || blogPosts.en;
  const post = posts.find((p) => p.id === postId);

  if (!post) {
    return `<div class="page container"><p>Post not found.</p></div>`;
  }

  const youtubeBtn = post.youtubeUrl
    ? `<button type="button" class="youtube-btn" data-youtube-url="${post.youtubeUrl}">Watch on YouTube</button>`
    : "";

  // Reutilizamos toLocaleDateString con el idioma
  const formattedDate = new Date(post.date).toLocaleDateString(lang);

  return `
    <div class="page container blog-post">
      <a href="#blog" class="back-link">← Back to Blog</a>
      <h1>${post.title}</h1>
      <time datetime="${post.date}">${formattedDate}</time>
      ${youtubeBtn}
      <div class="blog-content">${post.content}</div>
    </div>
  `;
};
