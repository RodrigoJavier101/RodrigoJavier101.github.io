export function updateCurrentDate(lang = "en") {
  const now = new Date();
  const options = { year: "numeric", month: "long" };
  document.getElementById("current-date").textContent = now.toLocaleDateString(lang, options);
}