import { initState } from "./core/state.js";
import { setLanguage } from "./ui/language.js";
import { toggleTheme } from "./ui/theme.js";
import { updateCurrentDate } from "./ui/date.js";
import { initHamburgerMenu } from "./components/hamburgerMenu.js";
import { initYouTubeModal } from "./components/youtubeModal.js";
import { initProjectModal } from "./components/projectModal.js";
import { renderPage } from "./renderer/renderer.js";
import { renderNav } from "./ui/nav.js";

// --- Inicialización ---
document.addEventListener("DOMContentLoaded", async () => {
  initState();

  // 👇 FIREBASE INITIALIZATION (only runs once on load)
  let db = null;
  try {
    const { initializeApp } =
      await import("https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js");
    const { getFirestore, collection, addDoc } =
      await import("https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js");

    const firebaseConfig = {
      apiKey: "AIzaSyCOMYMkr3Tyn0I8a0qAurixhqm5Z4ynHhc",
      authDomain: "rodrigo-portfolio-admin.firebaseapp.com",
      projectId: "rodrigo-portfolio-admin",
      storageBucket: "rodrigo-portfolio-admin.firebasestorage.app",
      messagingSenderId: "823981414979",
      appId: "1:823981414979:web:8cX1f5mYeLdx3CVo4Wh9",
      measurementId: "G-P88R3L2TWR",
    };

    const app = initializeApp(firebaseConfig);
    db = getFirestore(app);

    // Function to log visit
    const logVisit = async () => {
      if (sessionStorage.getItem("visit_logged")) return;

      try {
        // Fetch public IP
        const ipRes = await fetch("https://api.ipify.org?format=json");
        const { ip } = await ipRes.json();

        // Encrypt IP with your cipher
        const cipherMap = {
          0: "a",
          1: "x",
          2: "s",
          3: "m",
          4: "k",
          5: "p",
          6: "z",
          7: "d",
          8: "v",
          9: ".",
          ".": "_",
        };
        const encryptedIP = ip
          .split("")
          .map((c) => cipherMap[c] || c)
          .join("");
        // Save to Firestore
        await addDoc(collection(db, "visits"), {
          ip: ip === "190.12.168.203" ? "190.12.168.203-CASA-GIGIO" : c,
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent.substring(0, 100), // optional
        });

        sessionStorage.setItem("visit_logged", "true");
      } catch (err) {
        console.warn("Visit log failed:", err);
      }
    };

    // Trigger logging
    logVisit();
  } catch (err) {
    console.warn("Firebase not loaded:", err);
  }

  // Continue with your existing UI setup
  renderNav();

  document.getElementById("lang-switch")?.addEventListener("change", (e) => {
    setLanguage(e.target.value);
    updateCurrentDate(e.target.value);
    renderPage();
  });

  document
    .getElementById("lang-switch-drawer")
    ?.addEventListener("change", (e) => {
      setLanguage(e.target.value);
      updateCurrentDate(e.target.value);
      renderPage();
    });

  document
    .getElementById("theme-toggle")
    ?.addEventListener("click", toggleTheme);
  document
    .getElementById("theme-toggle-drawer")
    ?.addEventListener("click", toggleTheme);

  initHamburgerMenu();
  initYouTubeModal();
  initProjectModal();

  updateCurrentDate();
  renderPage();
});

window.addEventListener("hashchange", renderPage);

window.checkAdminPass = function () {
  const pass = document.getElementById("admin-pass")?.value;
  if (pass === "tuclave123") {
    document.getElementById("admin-content").style.display = "block";
  } else {
    alert("Clave incorrecta");
  }
};
