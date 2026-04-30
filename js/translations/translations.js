// translations/translations.js

// ✅ Formato Key-First: cada clave contiene sus traducciones
export const translations = {
  // Home
  home_title: {
    en: "Hi I'm a <u>software engineer</u> and my name is <u>Rodrigo Javier</u>.",
    es: "Hola, soy <u>ingeniero de software</u> y mi nombre es <u>Rodrigo Javier</u>.",
    il: "שלום, אני מהנדס תוכנה ושמי רודריגו חאבייר.",
  },

  home_body: {
    en: `Please, pay attention to the <strong>blog</strong> section and the <strong>projects</strong> that I'm working on.`,
    es: `Por favor, presta atención a la sección de <strong>blog</strong> y a los <strong>proyectos</strong> en los que he trabajado.`,
    il: "אנא שימו לב לאזור ה<strong>בלוג</strong> ול<strong>פרויקטים</strong> עליהם עבדתי",
  },

  // Blog
  blog_title: {
    en: "Articles",
    es: "Artículos",
    il: "מאמרים",
  },

  // Projects
  projects_title: {
    en: "Featured Projects",
    es: "Proyectos Destacados",
    il: "פרויקטים נבחרים",
  },

  // Contact
  contact_emailme: {
    en: "You can email me to ",
    es: "Puedes escribirme a ",
    il: "אתה יכול לשלוח לי מייל ל- ",
  },

  contact_email: {
    en: "rodrigojaviergd@gmail.com",
    es: "rodrigojaviergd@gmail.com", // Same email
    il: "rodrigojaviergd@gmail.com", // Same email
  },

  contact_wsp_me: {
    en: "Or send me a message on ",
    es: "O envíame un mensaje por ",
    il: "או שלח לי הודעה דרך ",
  },

  contact_phoneme: {
    en: "WhatsApp",
    es: "WhatsApp",
    il: "WhatsApp",
  },

  contact_phone: {
    en: "+56 996 095 384",
    es: "+56 996 095 384",
    il: "+56 996 095 384",
  },

  contact_alt: {
    en: "Contact information:",
    es: "Medios de contacto:",
    il: "פרטי קשר",
  },

  // Navigation
  nav_home: {
    en: "Home",
    es: "Inicio",
    il: "הַתחָלָה",
  },
  nav_projects: {
    en: "Projects",
    es: "Proyectos",
    il: "פרויקטים",
  },
  nav_blog: {
    en: "Blog",
    es: "Blog",
    il: "בלוג",
  },
  nav_contact: {
    en: "Contact",
    es: "Contacto",
    il: "מַגָע",
  },
  nav_docendo: {
    en: "DocendoDiscitur",
    es: "DocendoDiscitur",
    il: "DocendoDiscitur",
  },

  // Downloads
  download_cv: {
    en: "Resume",
    es: "Currículum",
    il: "קוֹרוֹת חַיִים",
  },
  download_eng_cert: {
    en: "Eng Cert",
    es: "Cert de Inglés",
    il: "תעודת אנגלית",
  },
  download_facil_cert: {
    en: "Facil Cert",
    es: "Cert de Facilitador",
    il: "תעודת מנחה",
  },
  download_boot_cert: {
    en: "Boot Cert",
    es: "Cert de Bootcamp",
    il: "תעודת אימונים",
  },
};

// ✅ Idioma por defecto (fallback)
export const DEFAULT_LANG = "en";

// ✅ Lista de idiomas soportados
export const SUPPORTED_LANGS = ["en", "es", "il"];
