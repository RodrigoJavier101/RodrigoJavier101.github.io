import { translations } from "../translations/translations.js";

export const home = (lang) => `
  <div class="page container">
    <h1>${translations[lang].home_title}</h1>
    <p>${translations[lang].home_desc}</p>
    <p>${translations[lang].home_body || ""}</p>
  </div>
  <div class="page container">
    <h2>${translations[lang].contact_title}</h2>
    <p>rodrigojaviergd@gmail.com</p>
    <p>WSP: +56 996 095 384</p>
  </div>
`;
