export function formatearFecha(fechaString, lang) {
  const date = new Date(fechaString + "T00:00:00");

  return {
    weekDay: date.toLocaleDateString(lang, { weekday: "long" }),
    month: date.toLocaleDateString(lang, { month: "long" }),
    daynumber: date.getDate(),
    year: date.getFullYear(),
    // Formato completo listo para usar
    complete: date.toLocaleDateString(lang, {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
  };
}
