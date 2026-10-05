# Adrian Fontanilla — Portfolio

A production-ready portfolio site positioning Adrian Fontanilla for **Technical Program Manager / Technical Project Manager / Program Manager / Technical Product & Product Operations** roles — built with Next.js (App Router), TypeScript, and Tailwind CSS v4.

## Tech stack

- **Next.js 16** (App Router, Turbopack, Server Components by default)
- **TypeScript** (strict mode)
- **Tailwind CSS v4** (CSS-first `@theme` config, no `tailwind.config.js`)
- **Geist Sans / Geist Mono** via `next/font/google`
- Zero icon/animation libraries — hand-written inline SVG icons and pure-CSS, `prefers-reduced-motion`-aware animation only

## Project structure

```
src/
  app/                     Routes, metadata, sitemap/robots, generated icons & OG image
    resume/                Printable résumé page (built from the same content data)
  components/
    layout/                SiteHeader, SiteFooter, MobileNav (client)
    sections/               Hero, About, Experience, FeaturedWork, TechnicalToolkit, Contact
    ui/                     Reusable primitives (Container, Tag, ButtonLink, ProcessFlow, etc.)
  content/                  All copy & structured data lives here, typed — nothing is hardcoded
    site.ts                 Name, title, tagline, social links, contact email, nav
    about.ts                About section copy
    experience.ts           Career progression + role highlights
    caseStudies.ts           TIDAL and Counting House Bookkeeping case studies
    toolkit.ts               Technical Toolkit categories/skills
```

Editing any copy, link, or data point on the site should only ever require touching a file in `src/content/`.

## ⚠️ Before deploying — placeholder checklist

Per the "no fabricated content" requirement, a few fields are **clearly marked placeholders** since the real values weren't provided. Replace all of these in **`src/content/site.ts`** before going live:

| Field | Current placeholder | Where it's used |
|---|---|---|
| `site.url` | `https://adrianfontanilla.com` | Canonical URL, OG/Twitter metadata, sitemap, JSON-LD |
| `site.email` | `hello@adrianfontanilla.com` | Footer, Contact section "Email Adrian" button |
| `site.social.linkedin` | `https://www.linkedin.com/in/adrianfontanilla` | Header, Hero, Footer, Contact, JSON-LD |
| `site.social.github` | `https://github.com/adrianfontanilla` | Header, Hero, Footer, Contact, JSON-LD |

Also:

- **Résumé** — `/resume` is a real, printable page generated from the same content in `src/content/`. "Save as PDF" uses the browser's print dialog. If you'd rather link directly to an uploaded PDF, drop the file at `public/resume.pdf` and change `site.resumeHref` in `src/content/site.ts` to `"/resume.pdf"`.
- **Case study images** — no screenshots were provided for TIDAL or Counting House Bookkeeping, so neither case study uses a fabricated screenshot. TIDAL uses an abstract, generated lifecycle diagram; Counting House Bookkeeping links straight to the live site (`www.chouseb.com`). Swap in real screenshots any time by editing `CaseStudyCard.tsx`.
- **Dates** — no explicit employment dates were provided, so none are shown (only "within the first year," which was given). Add real dates to `src/content/experience.ts` whenever you have them.

## Development

```bash
npm install
npm run dev       # http://localhost:3000
npm run lint
npm run build      # production build (fully static — zero server runtime needed)
npm run start      # serve the production build locally
```

## Deploying to Vercel

1. Push this repo to GitHub/GitLab/Bitbucket (or use the Vercel CLI directly).
2. Import the project at [vercel.com/new](https://vercel.com/new) — no configuration needed, Next.js is auto-detected.
3. Set the production domain, then update `site.url` in `src/content/site.ts` to match and redeploy.

Or via CLI:

```bash
npm i -g vercel
vercel
```

## Notes on design decisions

- **No hero photo / stock imagery** — the hero uses an abstract, animated SVG "delivery pipeline" diagram instead, avoiding developer-portfolio clichés (no code/terminal/matrix visuals).
- **One accent color** (`--color-accent`, a restrained blue) + a warm off-white/ink neutral palette — no gradients, no glassmorphism.
- **Animation is CSS-only** (keyframes + `pathLength`/opacity transitions), gated behind `@media (prefers-reduced-motion: no-preference)`, so there's no client JS cost for motion and reduced-motion users get the static end state immediately.
- **Client components are minimal** — only `MobileNav` (menu open/close state) and `PrintButton` (`window.print()`) run on the client. Every section, and the résumé page, is a Server Component.
