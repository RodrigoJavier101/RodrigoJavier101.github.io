import { translations } from "../translations/translations.js";

export const home = (lang) => `
 
  <div class="page container">
    <h1>${translations[lang].home_title}</h1>
    <p>${translations[lang].home_body || ""}</p>
  </div>

    <!-- About Section -->
  <div class="page container">
    <p>${translations[lang].about_text}</p>
    <a href="./assets/cv/Rodrigo_Javier_Garrido_Dagle-resume.pdf" 
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
    <a href="https://credly.com/badges/cc6bc067-4834-468d-9fc2-27c4ea2955ed?source=linked_in_profile" 
       class="cv-link" target="_blank" rel="noopener noreferrer">
      ${translations[lang].download_boot_cert}
    </a>
  </div>

  <br/>

  <div class="page container">
    <h3>${translations[lang].contact_emailme} <strong>${translations[lang].contact_email}</strong></h3>
    <h3>${translations[lang].contact_phoneme} <strong>${translations[lang].contact_phone}</strong></h3>
  </div>
`;
