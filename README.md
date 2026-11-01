# Ayush Srivastava — Portfolio

Single-page portfolio built with Next.js 16, React 19 and Tailwind CSS v4. Design source: [Figma](https://www.figma.com/design/ZJJtGkRtai11watiSAApvi).

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static production build
```

## Editing content

All copy, links, metrics and skills live in [`lib/content.ts`](lib/content.ts) — edit there, not in the components.

- Résumé: replace `public/Ayush-Srivastava-Resume.pdf` (keep the filename, or update `profile.resume`).
- Role lens (SDE / AI Engineer / Forward Deployed): `roleLens` in `lib/content.ts`.
- Colors: the `@theme` block in [`app/globals.css`](app/globals.css), mirroring the Figma variables.
