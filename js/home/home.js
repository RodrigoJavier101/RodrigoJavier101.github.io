// import { translations } from "../translations/translations.js";
import { t } from "../translations/i18n.js";

export const home = (lang) => `
 
  <div class="page container">
    <h2>${t("home_title", lang)}</h2>
    <p>${t("home_body", lang) || ""}</p>
  </div>

    <!-- About Section -->
  <div class="page container">
    <a href="./assets/cv/Rodrigo_Javier_Garrido_Dagle-resume.pdf" 
       class="cv-link" target="_blank" rel="noopener noreferrer">
      ${t("download_cv", lang)}
    </a>
    <a href="https://cert.efset.org/pNEGCW" 
       class="cv-link" target="_blank" rel="noopener noreferrer">
      ${t("download_eng_cert", lang)}
    </a>
    <a href="./assets/cert/facilitator_certificate.pdf" 
       class="cv-link" target="_blank" rel="noopener noreferrer">
      ${t("download_facil_cert", lang)}
    </a>
    <a href="https://credly.com/badges/cc6bc067-4834-468d-9fc2-27c4ea2955ed?source=linked_in_profile" 
       class="cv-link" target="_blank" rel="noopener noreferrer">
      ${t("download_boot_cert", lang)}
    </a>
  </div>

  <br/>

  <!-- Contact Section -->
  <div class="page container">
    <p>
    ${t("contact_emailme", lang)}
    <strong>
    <a class="" href="mailto:${t("contact_email", lang)}" target="_blank" rel="noopener noreferrer">${t("contact_email", lang)}</a>
    </strong>
    </p>
    <p>
    ${t("contact_wsp_me", lang)}
    <strong>
    <a class="" href="https://wa.me/${t("contact_phone", lang).replace(/\s/g, "")}" target="_blank" rel="noopener noreferrer">WhatsApp</a>
    </strong>
    <p>
  </div>
`;
