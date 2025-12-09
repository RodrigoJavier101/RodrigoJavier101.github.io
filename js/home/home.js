import { translations } from "../translations/translations.js";

export const home = (lang) => `
  <div class="page container">
    <h1>${translations[lang].home_title}</h1>
    <p>${translations[lang].home_desc}</p>
    <p>${translations[lang].home_body || ''}</p>
  </div>
`;