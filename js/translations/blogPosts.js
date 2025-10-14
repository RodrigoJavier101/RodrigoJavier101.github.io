export const blogPosts = {
  en: [
    {
      id: "js-tips",
      title: "5 JavaScript Tips Every Developer Should Know",
      date: "2025-04-10",
      excerpt:
        "Learn how to write cleaner, faster, and more maintainable JavaScript code.",
      youtubeUrl: "https://www.youtube.com/watch?v=jNQXAC9IVRw", // 👈 añade esta línea
      content: `
        <p>JavaScript is powerful, but it's easy to fall into bad patterns.</p>
        <p>Here's a pro tip: always use <code>const</code> by default.</p>
        <pre><code>const user = { name: 'Rodrigo' };</code></pre>
      `,
    },
    {
      id: "dark-mode",
      title: "How I Built a Dark Mode Toggle",
      date: "2025-03-22",
      excerpt: "A deep dive into CSS variables and localStorage.",
      youtubeUrl: "https://www.youtube.com/watch?v=jNQXAC9IVRw", // 👈 ejemplo
      content: `
        <p>Dark mode isn't just trendy—it reduces eye strain.</p>
        <p>I used <code>prefers-color-scheme</code> and <code>localStorage</code> to make it persistent.</p>
      `,
    },
  ],
  es: [
    {
      id: "dark-mode",
      title: "Cómo Creé un Interruptor de Modo Oscuro",
      date: "2025-03-22",
      excerpt: "Un vistazo profundo a las variables CSS y localStorage.",
      youtubeUrl: "https://www.youtube.com/watch?v=jNQXAC9IVRw",
      content: `
        <p>El modo oscuro no es solo tendencia: reduce la fatiga visual.</p>
        <p>Usé <code>prefers-color-scheme</code> y <code>localStorage</code> para hacerlo persistente.</p>
      `,
    },
  ],
};
