import { readdirSync } from 'node:fs'
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
// Project detail pages (projects/<slug>/index.html) are picked up automatically.
const fromRoot = (path: string) => fileURLToPath(new URL(path, import.meta.url))

const projectDetailPages = Object.fromEntries(
  readdirSync(fromRoot('./projects'), { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => [`project-${entry.name}`, fromRoot(`./projects/${entry.name}/index.html`)]),
)

export default defineConfig({
  base: process.env.GITHUB_PAGES_BASE ?? '/',
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: fromRoot('./index.html'),
        about: fromRoot('./about/index.html'),
        projects: fromRoot('./projects/index.html'),
        ...projectDetailPages,
      },
    },
  },
})
