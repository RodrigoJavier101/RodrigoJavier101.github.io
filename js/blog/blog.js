// blog.js
import { t } from "../translations/i18n.js";
import { getAllBlogPosts } from "./blogPosts.js"; // 👈 Import helper

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

  // 👇 NEW: Use helper to get posts with resolved translations
  const posts = getAllBlogPosts(lang);
  
  const postList = posts
    .map((post) => {
      const youtubeBtn = post.youtubeUrl
        ? `<button type="button" class="youtube-btn-small" data-youtube-url="${post.youtubeUrl}">🎥 Video</button>`
        : "";
      
      return `
        <article class="blog-post-preview">
          <h3>
            <a href="#blog/${post.id}">${post.title}</a> <!-- ✅ post.title is now a resolved string -->
          </h3>
          <span class="post-meta">
            <strong>
              <time datetime="${post.date}">${post.date}</time> <!-- ✅ post.date is formatted for lang -->
            </strong> 
          <!--   ${youtubeBtn} -->
          </span>
        </article>
      `;
    })
    .join("");
    
  return `
    <div class="page container">
      <!-- ✅ Nueva forma: usar t("key", lang) -->
      <h2>${t("blog_title", lang)}</h2>
      ${postList}
    </div>
  `;
};