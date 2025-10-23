// dateFormatter.js

/**
 * Formatea una cadena de fecha a 'Día Mes. Año' (ej: 10 Oct. 2025).
 * @param {string} dateString - La fecha en formato string (YYYY-MM-DD).
 * @returns {string} La fecha formateada.
 */
export function formatDateForCard(dateString) {
  const date = new Date(dateString);
  const months = [
    "Ene",
    "Feb",
    "Mar",
    "Abr",
    "May",
    "Jun",
    "Jul",
    "Ago",
    "Sep",
    "Oct",
    "Nov",
    "Dic",
  ];

  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  return `${day} ${months[monthIndex]}. ${year}`;
}