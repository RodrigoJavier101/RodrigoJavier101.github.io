import { getTheme, setTheme } from "../core/state.js";

export function toggleTheme() {
  const newTheme = getTheme() === "dark" ? "light" : "dark";
  setTheme(newTheme);
  document.documentElement.setAttribute("data-theme", newTheme);
}