// core/state.js

// 🎯 Single source of truth for app state
const state = {
  theme: "dark",
  lang: "en", // Default language
};

// 📢 Subscribers for reactive updates
const subscribers = {
  theme: [],
  lang: [],
};

/* ───────────────────────────────────────── */
/* 🎨 THEME STATE */
/* ───────────────────────────────────────── */

export function getTheme() {
  return state.theme;
}

export function setTheme(newTheme) {
  if (newTheme !== "light" && newTheme !== "dark") {
    console.warn(`⚠️ Invalid theme: "${newTheme}". Expected "light" or "dark".`);
    return;
  }
  state.theme = newTheme;
  subscribers.theme.forEach(cb => { try { cb(newTheme); } catch(e) { console.error(e); } });
}

export function onThemeChange(callback) {
  if (typeof callback !== "function") return () => {};
  subscribers.theme.push(callback);
  return () => { subscribers.theme = subscribers.theme.filter(cb => cb !== callback); };
}

/* ───────────────────────────────────────── */
/* 🌐 LANGUAGE STATE */
/* ───────────────────────────────────────── */

/**
 * Gets current language
 * @returns {string} e.g., "en" | "es" | "il"
 */
export function getLang() {
  return state.lang;
}

/**
 * Sets language and notifies subscribers
 * @param {string} newLang - Language code ("en", "es", "il")
 */
export function setLang(newLang) {
  const SUPPORTED = ["en", "es", "il"];
  if (!SUPPORTED.includes(newLang)) {
    console.warn(`⚠️ Unsupported language: "${newLang}". Expected: ${SUPPORTED.join(", ")}`);
    return;
  }
  state.lang = newLang;
  
  // Update HTML lang attribute for accessibility/SEO
  document.documentElement.lang = newLang;
  
  // Notify subscribers (e.g., components that need to re-render)
  subscribers.lang.forEach(cb => {
    try {
      cb(newLang);
    } catch (err) {
      console.error("❌ Error in lang subscriber:", err);
    }
  });
  
  // Optional: Dispatch custom event for non-subscriber listeners
  window.dispatchEvent(new CustomEvent("langChanged", { detail: { lang: newLang } }));
}

/**
 * Subscribe to language changes
 * @param {(lang: string) => void} callback 
 * @returns {() => void} Unsubscribe function
 */
export function onLangChange(callback) {
  if (typeof callback !== "function") return () => {};
  subscribers.lang.push(callback);
  return () => { subscribers.lang = subscribers.lang.filter(cb => cb !== callback); };
}

/* ───────────────────────────────────────── */
/* 🚀 INITIALIZATION */
/* ───────────────────────────────────────── */

/**
 * Initialize state from localStorage + browser preferences
 * Call this once at app startup
 */
export function initState() {
  // 🎨 Theme: respect saved preference or default to light
  const savedTheme = localStorage.getItem("preferred-theme");
  if (savedTheme === "light" || savedTheme === "dark") {
    state.theme = savedTheme;
  }
  
  // 🌐 Language: respect saved preference → browser lang → default
  const savedLang = localStorage.getItem("preferred-lang");
  const browserLang = navigator.language?.split("-")[0];
  const SUPPORTED = ["en", "es", "il"];
  
  if (savedLang && SUPPORTED.includes(savedLang)) {
    state.lang = savedLang;
  } else if (browserLang && SUPPORTED.includes(browserLang)) {
    state.lang = browserLang;
  }
  // else keep default "en"
  
  // Apply initial values to DOM
  document.documentElement.setAttribute("data-theme", state.theme);
  document.documentElement.lang = state.lang;
}