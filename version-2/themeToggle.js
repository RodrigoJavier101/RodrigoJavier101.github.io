// themeToggle.js

/**
 * Alterna entre el modo claro y oscuro.
 */
function toggleTheme() {
  const body = document.body;
  // La clase 'light-mode' indica el modo CLARO
  const isLightMode = body.classList.toggle("light-mode");

  // Guardar la preferencia del usuario en localStorage
  localStorage.setItem("theme", isLightMode ? "light" : "dark");

  // Alternar íconos
  const sunIcon = document.getElementById("sun-icon");
  const moonIcon = document.getElementById("moon-icon");

  if (isLightMode) {
    // Modo Claro: Muestra el sol (para indicar que puedes volver al oscuro)
    sunIcon.style.display = "block";
    moonIcon.style.display = "none";
  } else {
    // Modo Oscuro: Muestra la luna (para indicar que puedes ir al claro)
    sunIcon.style.display = "none";
    moonIcon.style.display = "block";
  }
}

// Inicializar y exportar las funciones
document.addEventListener("DOMContentLoaded", () => {
  applySavedTheme();
  const toggleButton = document.getElementById("theme-toggle");
  if (toggleButton) {
    toggleButton.addEventListener("click", toggleTheme);
  }
});

function applySavedTheme() {
  const savedTheme = localStorage.getItem("theme");
  const body = document.body;
  const sunIcon = document.getElementById("sun-icon");
  const moonIcon = document.getElementById("moon-icon");

  if (savedTheme === "light") {
    // Si hay una preferencia guardada como 'light', aplica el modo claro
    body.classList.add("light-mode");
    sunIcon.style.display = "block";
    moonIcon.style.display = "none";
  } else {
    // 💥 COMPORTAMIENTO POR DEFECTO:
    // Si 'savedTheme' es null (primera visita) o 'dark',
    // se usa el modo oscuro.
    body.classList.remove("light-mode");
    sunIcon.style.display = "none";
    moonIcon.style.display = "block";
  }
}
