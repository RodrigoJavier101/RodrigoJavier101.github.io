// translations/i18n.js
// ✅ Encoding: UTF-8 (sin BOM)
// ✅ Sin caracteres invisibles

import { translations, DEFAULT_LANG, SUPPORTED_LANGS } from "./translations.js";

/**
 * Obtiene una traducción por clave e idioma
 * @param {string} key - Clave de traducción
 * @param {string} lang - Idioma solicitado
 * @param {string} fallbackLang - Idioma de respaldo
 * @returns {string}
 */
export function t(key, lang = DEFAULT_LANG, fallbackLang = DEFAULT_LANG) {
  const entry = translations[key];
  
  if (!entry) {
    console.warn(`⚠️ Translation key not found: "${key}"`);
    return key;
  }
  
  return entry[lang] ?? entry[fallbackLang] ?? entry[DEFAULT_LANG] ?? key;
}

/**
 * Verifica si un idioma está soportado
 * @param {string} lang 
 * @returns {boolean}
 */
export function isSupported(lang) {
  return SUPPORTED_LANGS.includes(lang);
}

/**
 * Obtiene el idioma preferido del usuario
 * @returns {string}
 */
export function getPreferredLanguage() {
  const stored = localStorage.getItem("preferred-lang");
  if (stored && isSupported(stored)) {
    return stored;
  }
  
  const browserLang = navigator.language?.split("-")[0];
  if (browserLang && isSupported(browserLang)) {
    return browserLang;
  }
  
  return DEFAULT_LANG;
}

/**
 * Guarda el idioma preferido
 * @param {string} lang 
 */
export function setPreferredLanguage(lang) {
  if (isSupported(lang)) {
    localStorage.setItem("preferred-lang", lang);
    document.documentElement.lang = lang;
  }
}

/**
 * Genera un objeto plano de traducciones para un idioma
 * @param {string} lang 
 * @returns {Record<string, string>}
 */
export function getTranslationsForLang(lang = DEFAULT_LANG) {
  const result = {};
  
  for (const [key, values] of Object.entries(translations)) {
    result[key] = values[lang] ?? values[DEFAULT_LANG] ?? key;
  }
  
  return result;
}