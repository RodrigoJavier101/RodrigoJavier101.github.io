// transition.js

/**
 * Maneja la transición de fade-out antes de la navegación.
 * Intercepta el evento click, activa la transición CSS y navega.
 * @param {Event} event - El evento click.
 */
export function handleTransition(event) {
  // Detiene la navegación estándar del enlace
  event.preventDefault();
  // Obtiene la URL de destino
  const destinationUrl = event.currentTarget.href;

  // Activa el CSS fade-out
  // document.getElementById("page-transition-layer").classList.add("is-active");
  const transitionLayer = document.getElementById("page-transition-layer");
  if (transitionLayer) {
    transitionLayer.classList.add("is-active");

    // 2. Esperar la duración de la animación antes de redirigir
    // (Ajusta este tiempo a la duración de tu animación CSS)
    const TRANSITION_DURATION_MS = 600;

    setTimeout(() => {
      // 3. Redirigir a la URL de destino
      window.location.href = destinationUrl;
    }, TRANSITION_DURATION_MS);
  } else {
    // Si la capa no existe, redirigir inmediatamente como respaldo
    window.location.href = destinationUrl;
  }
}
