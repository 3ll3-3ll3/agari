import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vite.dev/config/
export default defineConfig(() => ({
  // Use the fork's GitHub Pages project path only in GitHub Actions builds.
  // Keep the original root path for local development and other hosting.
  base: process.env.GITHUB_ACTIONS === "true" && process.env.GITHUB_REPOSITORY === "3ll3-3ll3/agari" ? "/agari/" : "/",
  plugins: [svelte()],
  build: {
    target: "esnext",
  },
  optimizeDeps: {
    exclude: ["agari-wasm"],
  },
  server: {
    fs: {
      // Allow serving files from the wasm output directory
      allow: [".."],
    },
  },
}));
