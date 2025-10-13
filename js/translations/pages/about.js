import { translations } from "../translations.js";

export const about = (lang) => `
  <div class="page container">
    <h2>${translations[lang].about_title}</h2>
    <p>${translations[lang].about_text}</p>
    <a href="./assets/cv/Rodrigo_Javier_Garrido_Dagle-resume-android--.pdf" 
       class="cv-link" target="_blank" rel="noopener noreferrer">
      ${translations[lang].download_cv}
    </a>
    <a href="https://cert.efset.org/pNEGCW" 
       class="cv-link" target="_blank" rel="noopener noreferrer">
      ${translations[lang].download_eng_cert}
    </a>
    <a href="./assets/cert/facilitator_certificate.pdf" 
       class="cv-link" target="_blank" rel="noopener noreferrer">
      ${translations[lang].download_facil_cert}
    </a>
  </div>
`;
