import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GITHUB_PAGES_BASE is set by the deploy workflow to "/<repo-name>/".
// Locally it falls back to "/" so `npm run dev` / `npm run build` work
// before the GitHub repo name is known.
//
// The site is multi-page: each page is its own HTML entry, so GitHub Pages
// serves it at a real URL (no client-side router, no 404.html redirect).
// To add a page: create <name>/index.html + src/<name>-main.tsx, then list it here.
export default defineConfig({
  base: process.env.GITHUB_PAGES_BASE ?? '/',
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        about: fileURLToPath(new URL('./about/index.html', import.meta.url)),
      },
    },
  },
})
