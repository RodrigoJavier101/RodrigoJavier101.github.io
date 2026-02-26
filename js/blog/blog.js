import { translations } from "../translations/translations.js";
import { blogPosts } from "../blog/blogPosts.js";
// import { getBlogs } from "./firebase.js";

// mejor a mano, luego lo veo para poder subir blogs de acuerdo a lo que vaya creciendo
export const blog = (lang) => {
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
      const youtubeBtn = post.youtubeUrl
        ? `<button type="button" class="youtube-btn-small" data-youtube-url="${post.youtubeUrl}">🎥 Video</button>`
        : "";
      return `
        <article class="blog-post-preview">
          <h3>
            <a href="#blog/${post.id}">${post.title}</a>
          </h3>
          <span>
            <strong>
              (<time datetime="${post.date}">${post.date}</time>)
            </strong> 
            ${youtubeBtn}
          </span>
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
