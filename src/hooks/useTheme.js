import { useCallback } from "react";

export default function useTheme() {
  return useCallback(() => {
    const root = document.documentElement;
    const dark = root.dataset.theme
      ? root.dataset.theme === "dark"
      : window.matchMedia("(prefers-color-scheme:dark)").matches;
    const next = dark ? "light" : "dark";
    root.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch { /* storage unavailable */ }
  }, []);
}
