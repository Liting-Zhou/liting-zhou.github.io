## Liting Zhou – Personal Website (Next.js + Tailwind)

Static personal site built with Next.js App Router and Tailwind CSS. Configured for static export (GitHub Pages).

### Tech
- Next.js 15 (App Router), React 19, TypeScript
- Tailwind CSS v4

---

## Development

Run the dev server:

```bash
npm run dev
```

Open http://localhost:3000

Edit content in:
- `app/page.tsx` – resume and projects
- `app/layout.tsx` – site metadata, header/footer
- `app/globals.css` – global styles (Tailwind v4)

---

## Build (Static Export)

This project is configured with `output: "export"` and unoptimized images in `next.config.ts` for static hosting.

Produce the static site to `out/`:

```bash
npm run build
```

Optional: copy to `docs/` (useful for GitHub Pages without Actions):

```bash
npm run build:pages
```

Preview the static export locally:

```bash
npx serve out
```

---

## Deploy to GitHub Pages

This repo includes a GitHub Actions workflow at `.github/workflows/deploy.yml` that:
- Installs dependencies
- Builds the static site (`out/`)
- Publishes to GitHub Pages

Steps:
1. Push to the `main` branch.
2. In GitHub → Settings → Pages, set Source to "GitHub Actions" (if not auto-selected).
3. The workflow will publish your site at `https://liting-zhou.github.io`.

Alternative without Actions:
- Run `npm run build:pages` locally to generate `docs/`.
- Commit and push `docs/`.
- In Settings → Pages, select the `main` branch and `/docs` folder.

---

## Notes
- `next/image` is set to `unoptimized: true` for static export.
- Trailing slashes are enabled to keep URLs consistent on Pages.
