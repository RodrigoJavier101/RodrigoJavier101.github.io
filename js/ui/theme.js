import { getTheme, setTheme } from "../core/state.js";

export function toggleTheme() {
  const newTheme = getTheme() === "light" ? "dark" : "light";
  setTheme(newTheme);
  document.documentElement.setAttribute("data-theme", newTheme);
}