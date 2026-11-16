import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// "./" makes every asset URL relative, so the same build works on
// GitHub Pages (user.github.io/repo/), Cloudflare, Netlify, Vercel,
// a custom domain or any static host without changes.
// Override with VITE_BASE_PATH=/something/ if you ever need an absolute base.
export default defineConfig({
  base: process.env.VITE_BASE_PATH || "./",
  plugins: [react()],
});
