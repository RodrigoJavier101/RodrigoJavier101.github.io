import { translations } from "../translations.js";
import { blogPosts } from "../blogPosts.js";
// import { getBlogs } from "./firebase.js";

export const blog = async (lang) => {
  // const blogs = await getBlogs();
  // const posts = blogs
  //   .map((b) => {
  //     if (b.lang === lang) {
  //       return b;
  //     }
  //   })
  //   .filter((c) => c !== undefined);

  const posts = blogPosts[lang] || blogPosts.en;
  const postList = posts
    .map((post) => {
      console.log(post.title);

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
  return `
    <div class="page container">
      <h2>${translations[lang].blog_title}</h2>
      ${postList}
    </div>
  `;
};
