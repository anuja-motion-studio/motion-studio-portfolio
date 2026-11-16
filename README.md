# Anuja Vhanamane – Portfolio

Video editor and motion graphic designer portfolio, built with **React + Vite**.

## Quick start

```bash
npm install
npm run dev       # local dev server
npm run build     # production build → dist/
npm run preview   # preview the production build
```

Requires Node 20+ (`.nvmrc` pins 22).

## Edit your content (no component code needed)

| What | File |
|---|---|
| Name, email, bio, tools, services, social links | `src/data/site.js` |
| Portfolio projects (YouTube links, shapes, types) | `src/data/projects.js` |
| Timeline clips in the hero | `src/data/timeline.js` |
| Colours and dark theme | `src/styles/tokens.css` |
| Your own thumbnails | put images in `public/images/` and set `img: "/images/name.jpg"` |

## Project structure

```
src/
  main.jsx            entry
  App.jsx             page layout
  components/         Header, Hero, HeroCards, Timeline, Marquee, Work, WorkCard,
                      About, Contact, Footer, Reveal, RotatingWord, ScrollBar, ...
                      (each with its own .css where needed)
  hooks/              useTheme, useReveal, useColumns, useScrollProgress
  data/               site.js, projects.js, timeline.js
  styles/             tokens.css (colours), base.css (global styles)
  utils/              youtube.js
public/               favicon, robots.txt, _headers, .nojekyll
.github/workflows/    ci.yml + deploy workflows
```

## Deploy

Pushing to `main` deploys automatically. See **[DEPLOYMENT.md](./DEPLOYMENT.md)** for step-by-step
setup for GitHub Pages, Cloudflare Pages, Netlify, Vercel and other hosts.

Before publishing, replace the placeholder YouTube links and the social URLs
(`yourchannel`, `yourhandle`, `yourname`) in `src/data`.
