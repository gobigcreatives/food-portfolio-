# cīphər — React/Vite replica

A pixel-close front-end recreation of the [cipher.tv](https://cipher.tv/)
landing experience, built with React + Vite.

## What's here

- **Hero** — the scattered diagonal image collage with cursor parallax, a
  pulsing central oval mark, and the `006 / THE ULTIMATE SHIELD / JOUR` footer bar.
- **Works** — the scattered editorial grid of 12 projects with hover zoom and
  index/title metadata.
- **About** — the concentric marquee title stack, twin video blocks, the serif
  headline and the studio statement.
- **Footer** — the large `CIPHER © PROD — FOR CULTURE AND ITS COUNTER` lockup
  and the four-column contact/address block.
- **Smooth scroll** — inertial scrolling via [Lenis](https://github.com/darkroomengineering/lenis).

## Running

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build to /dist
npm run preview  # preview the build
```

## Assets & fonts (important)

To keep the repo free of third-party licensed material, two things are
substituted and wired for easy replacement:

- **Typography** — the original uses the licensed *ABC Favorit* typeface. This
  project falls back to a close grotesque stack. Drop a licensed
  `ABCFavoritVariable.woff2` into `public/fonts/` and uncomment the
  `@font-face` block at the top of `src/index.css` to use the real face.
- **Imagery** — Cipher's photography is replaced by neutral duotone
  placeholders (`src/components/Placeholder.jsx`). Swap those for
  `<img src="/works/…" />` once you have licensed assets; per-tile tone and
  aspect ratios live in `src/data/works.js`.

## Structure

```
src/
  components/   Header, Hero, Works, About, Footer, Placeholder (+ CSS)
  data/         works.js — project list and hero collage layout
  hooks/        useLenis.js — smooth-scroll driver
  index.css     design tokens, resets, global type
  App.jsx       composition
```
