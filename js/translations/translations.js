// translations/translations.js

// ✅ Formato Key-First: cada clave contiene sus traducciones
export const translations = {
  // Home
  home_title: {
    en: "Hi, my name is Rodrigo Javier, Software Engineer.",
    es: "Hola, mi nombre es Rodrigo Javier, Ingeniero de Software.",
    // il: "שלום, שמי רודריגו חאווייר, מהנדס תוכנה." // ✅ Fácil de agregar
  },
  
  home_body: {
    en: `Please, pay attention to the <strong>blog</strong> section and the <strong>projects</strong> that I'm working on.`,
    es: `Por favor, presta atención a la sección de <strong>blog</strong> y a los <strong>proyectos</strong> en los que he trabajado.`,
    // il: `...`,
  },

  // Blog
  blog_title: {
    en: "Articles",
    es: "Artículos",
    // il: "מאמרים",
  },

  // Projects
  projects_title: {
    en: "Featured Projects",
    es: "Proyectos Destacados",
  },

  // Contact
  contact_emailme: {
    en: "Email me:",
    es: "Escríbeme:",
  },
  
  contact_email: {
    en: "rodrigojaviergd@gmail.com",
    es: "rodrigojaviergd@gmail.com", // Same email
  },
  
  contact_phoneme: {
    en: "WhatsApp",
    es: "WhatsApp",
  },
  
  contact_phone: {
    en: "+56 996 095 384",
    es: "+56 996 095 384",
  },
  
  contact_alt: {
    en: "Contact:",
    es: "Medios de contacto:",
  },

  // Navigation
  nav_home: {
    en: "Home",
    es: "Inicio",
  },
  nav_projects: {
    en: "Projects",
    es: "Proyectos",
  },
  nav_blog: {
    en: "Blog",
    es: "Blog",
  },
  nav_contact: {
    en: "Contact",
    es: "Contacto",
  },
  nav_docendo: {
    en: "DocendoDiscitur",
    es: "DocendoDiscitur",
  },

  // Downloads
  download_cv: {
    en: "Resume",
    es: "Currículum",
  },
  download_eng_cert: {
    en: "Eng Cert",
    es: "Cert de Inglés",
  },
  download_facil_cert: {
    en: "Facil Cert",
    es: "Cert de Facilitador",
  },
  download_boot_cert: {
    en: "Boot Cert",
    es: "Cert de Bootcamp",
  },
};

// ✅ Idioma por defecto (fallback)
export const DEFAULT_LANG = "en";

// ✅ Lista de idiomas soportados
export const SUPPORTED_LANGS = ["en", "es"]; // Agrega "il" cuando lo necesites