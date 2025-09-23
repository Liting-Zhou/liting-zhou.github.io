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

## Notes
- `next/image` is set to `unoptimized: true` for static export.
- Trailing slashes are enabled to keep URLs consistent on Pages.
