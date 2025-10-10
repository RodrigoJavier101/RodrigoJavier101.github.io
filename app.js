// --- 1. Traducciones ---
const translations = {
  en: {
    home_title: "Hi, I'm Rodrigo",
    home_desc: "Mobile Software Engineer & Content Creator",
    about_title: "About Me",
    about_text: "I build apps and share knowledge.",
    blog_title: "Latest Articles",
    projects_title: "Featured Projects",
    contact_title: "Get in Touch",
    nav_home: "Home",
    nav_about: "About",
    nav_projects: "Projects",
    nav_blog: "Blog",
    nav_contact: "Contact"
  },
  es: {
    home_title: "Hola, soy Rodrigo",
    home_desc: "Ingeniero de Software Móvil y Creador de Contenido",
    about_title: "Sobre Mí",
    about_text: "Desarrollo apps y comparto conocimiento.",
    blog_title: "Últimos Artículos",
    projects_title: "Proyectos Destacados",
    contact_title: "Contáctame",
    nav_home: "Inicio",
    nav_about: "Sobre mí",
    nav_projects: "Proyectos",
    nav_blog: "Blog",
    nav_contact: "Contacto"
  }
};

// --- 2. Contenido de páginas ---
const pages = {
  home: (lang) => `
    <div class="page container">
      <h1>${translations[lang].home_title}</h1>
      <p>${translations[lang].home_desc}</p>
    </div>
  `,
  about: (lang) => `
    <div class="page container">
      <h2>${translations[lang].about_title}</h2>
      <p>${translations[lang].about_text}</p>
    </div>
  `,
  projects: (lang) => `
    <div class="page container">
      <h2>${translations[lang].projects_title}</h2>
      <p>Projects coming soon...</p>
    </div>
  `,
  blog: (lang) => `
    <div class="page container">
      <h2>${translations[lang].blog_title}</h2>
      <p>Blog posts will appear here.</p>
    </div>
  `,
  contact: (lang) => `
    <div class="page container">
      <h2>${translations[lang].contact_title}</h2>
      <p>rodrigo@example.com</p>
    </div>
  `
};

// --- 3. Estado global ---
let currentLang = 'en';
let currentTheme = 'dark';

// --- 4. Funciones ---
function loadPage(pageName) {
  const content = document.querySelector('.content');
  content.innerHTML = pages[pageName](currentLang);
}

function setLanguage(lang) {
  currentLang = lang;
  // Actualizar texto del menú
  document.querySelectorAll('[data-page]').forEach(el => {
    const key = `nav_${el.dataset.page}`;
    el.textContent = translations[lang][key] || el.dataset.page;
  });
  // Recargar página actual
  const currentPage = document.querySelector('.content .page')?.closest('[data-page]') 
    ? document.querySelector('.active')?.dataset.page || 'home'
    : 'home';
  loadPage(currentPage);
  localStorage.setItem('lang', lang);
}

function toggleTheme() {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', currentTheme);
  localStorage.setItem('theme', currentTheme);
}

// --- 5. Eventos ---
document.addEventListener('DOMContentLoaded', () => {
  // Cargar preferencias
  const savedLang = localStorage.getItem('lang') || 'en';
  const savedTheme = localStorage.getItem('theme') || 'dark';
  currentLang = savedLang;
  currentTheme = savedTheme;
  document.documentElement.setAttribute('data-theme', currentTheme);
  document.getElementById('lang-switch').value = savedLang;

  // Cargar página inicial
  loadPage('home');

  // Navegación
  document.querySelectorAll('[data-page]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const page = e.target.dataset.page;
      loadPage(page);
      // Actualizar clase activa (opcional)
      document.querySelectorAll('[data-page]').forEach(el => el.classList.remove('active'));
      e.target.classList.add('active');
    });
  });

  // Cambio de idioma
  document.getElementById('lang-switch').addEventListener('change', (e) => {
    setLanguage(e.target.value);
  });

  // Cambio de tema
  document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
});