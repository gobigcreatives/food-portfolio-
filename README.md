# goBIG Creatives — studio site

A React + Vite marketing site for **goBIG Creatives**, built on an immersive
editorial layout (adapted from the cipher.tv structure) and dressed in the
goBIG Creatives brand identity from the Brand Guidelines.

## Brand application

Per the goBIG Creatives Brand Guidelines:

- **Typeface** — Montserrat (self-hosted via `@fontsource/montserrat`, weights
  300–900). Headlines use the heavy weights; body/labels use 500–700.
- **Colours** (`src/index.css`)
  - Prussian Blue `#09235b` — primary (hero + footer grounds, headlines)
  - Dusty Navy `#5c79b1` — secondary
  - Burnt Orange `#b76926` — accent (selection, hovers)
  - White `#ffffff` / soft white `#f4f5f7` — light sections
- **Logo** — the `goBIG Creatives` wordmark is rebuilt from the brand typeface
  in `src/components/Logo.jsx` (`horizontal` for the header, `stacked` for the
  footer lockup — matching the reverse-colour logo on Prussian Blue).

## Sections

- **Hero** — scattered image collage with cursor parallax on the Prussian-Blue
  ground, a pulsing oval mark, and the `006 / BIGGER · BRAVER · BOLDER / WORK`
  footer bar.
- **Works** — scattered editorial grid of 12 portfolio tiles with hover zoom.
- **About** — concentric marquee title stack (goBIG brand lines), twin video
  blocks, the `THINK BIGGER, BRAVER, AND BOLDER.` headline and studio statement.
- **Footer** — the large `goBIG CREATIVES` lockup with the `THINK BIGGER braver
  bolder` tagline and the four-column contact block.
- **Smooth scroll** via [Lenis](https://github.com/darkroomengineering/lenis);
  the header adapts (white over dark grounds, blue over light).

## Running

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build to /dist
npm run preview  # preview the build
```

## Imagery

Neutral duotone placeholders (`src/components/Placeholder.jsx`) stand in for
real work imagery so the repo carries no third-party photography. Swap them for
`<img src="/works/…" />` once you have assets; per-tile tone and aspect ratios
live in `src/data/works.js`.

## Structure

```
src/
  components/   Header, Hero, Works, About, Footer, Logo, Placeholder (+ CSS)
  data/         works.js — portfolio list and hero collage layout
  hooks/        useLenis.js — smooth-scroll driver
  index.css     brand tokens, resets, Montserrat imports, global type
  App.jsx       composition
```
