# Elena Zhuang ｜ 莊詒安 · PM Portfolio

An interactive, bilingual (繁中／English) portfolio site built from a PM
competency framework and STAR case studies — React + Vite + TypeScript +
Tailwind CSS v4.

## Local development

Requires Node.js (see `.nvmrc` for the version this was built with).

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build to dist/
npm run preview  # preview the production build locally
```

## Content

All copy lives in `src/content/` as typed data (not hardcoded in
components), so updates don't require touching any component code:

- `competencies.ts` — the nine-competency matrix
- `projects.southone.ts` / `projects.hotai.ts` — case studies
- `futurePillars.ts` — the "Strategy TPM" next-stage framework
- `heroQuotes.ts` — hero positioning copy

Every text field is `{ zh, en }` — edit both sides to keep the language
toggle in sync. UI chrome strings (nav labels, buttons) live separately in
`src/i18n/strings.zh.ts` / `strings.en.ts`.

## Deploying to GitHub Pages

This repo ships with `.github/workflows/deploy.yml`, which builds and
publishes to GitHub Pages automatically on every push to `main`. To turn it
on:

1. Create a new GitHub repository and push this project to it.
2. In the repo's **Settings → Pages**, set **Source** to **GitHub Actions**.
3. Push to `main` (or run the workflow manually from the **Actions** tab).

The site will be published at `https://<your-username>.github.io/<repo-name>/`.
The workflow passes the repo name to Vite automatically — no config changes
needed regardless of what you name the repository.
