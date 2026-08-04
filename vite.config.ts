import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GITHUB_PAGES_BASE is set by the deploy workflow to "/<repo-name>/".
// Locally it falls back to "/" so `npm run dev` / `npm run build` work
// before the GitHub repo name is known.
export default defineConfig({
  base: process.env.GITHUB_PAGES_BASE ?? '/',
  plugins: [react(), tailwindcss()],
})
