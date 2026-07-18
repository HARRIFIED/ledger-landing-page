# Harrified Ledger — Landing Page

Marketing / community landing page for [Harrified Ledger](https://github.com/HARRIFIED/finCore-Ledger-as-a-Service),
the open-source core ledger engine. Built with **Next.js (App Router)** and **TypeScript**, using
plain CSS (no UI framework) so it stays lightweight and dependency-free.

This folder is self-contained and deploys independently — it is not part of the Gradle/Java build.

## Develop locally

```bash
cd landing
npm install
npm run dev      # http://localhost:3000
```

Build a production bundle:

```bash
npm run build
npm start
```

## Deploy to Vercel (from this monorepo)

You do **not** need to move this folder out of the repo. Vercel supports deploying a subdirectory:

1. Go to [vercel.com](https://vercel.com) → **Add New… → Project** and import
   `HARRIFIED/finCore-Ledger-as-a-Service`.
2. In the project setup, set **Root Directory** to `landing`.
3. Framework preset auto-detects **Next.js**. Leave build/output settings as-is.
4. Deploy. Vercel only builds this folder and ignores the Java services.

Every push to `main` that touches `landing/` triggers a redeploy. To later split it into its own
repo, just copy this folder out — no code changes required.

### Or via the Vercel CLI

```bash
cd landing
npx vercel          # preview deploy
npx vercel --prod   # production deploy
```

## Editing content

- **Links & contact details** — [`lib/site.ts`](lib/site.ts) (GitHub URL, docs, email, license links).
- **Copy & sections** — [`app/page.tsx`](app/page.tsx).
- **Styling / theme** — [`app/globals.css`](app/globals.css) (colors are CSS variables at the top).
- **Logo** — [`components/Logo.tsx`](components/Logo.tsx); standalone mark in
  [`public/logo.svg`](public/logo.svg); favicon in [`app/icon.svg`](app/icon.svg).

## License

The Harrified Ledger engine is dual-licensed (AGPL-3.0 + commercial). This landing page is part of the same
repository; see the root [`LICENSE`](../LICENSE).
