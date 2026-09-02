# Portfolio — Frontend Developer

Production-ready personal portfolio built with **Next.js 15 (App Router)**, **React 19** and **TypeScript in strict mode**. No UI framework, no animation library: ~15 kB of CSS and a few dozen lines of client JavaScript.

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
npm run typecheck
```

## Before deploying — fill in `lib/site.ts`

| Field | What to put |
| --- | --- |
| `name` | Your full name (currently first name only) |
| `url` | Your real domain — powers canonical URL, sitemap, Open Graph |
| `contact.email` / `linkedin` / `github` | Real contact details (empty string hides the link) |

Everything else — case studies, experience, technology — lives in `lib/content.ts`. Editing content never means touching a component.

## Structure

```
app/
  layout.tsx          metadata, JSON-LD, fonts, theme bootstrap, landmarks
  page.tsx            homepage composition
  globals.css         design tokens + all component styles
  opengraph-image.tsx generated 1200x630 OG image (next/og, no static asset)
  sitemap.ts robots.ts not-found.tsx
components/
  SiteHeader ThemeToggle Reveal ExternalLink SiteFooter
  sections/  Hero Work Experience Technology About
lib/
  site.ts             identity, URLs, navigation
  content.ts          typed content (case studies, experience, technology)
```

## SEO

- One `<h1>`, `<h2>` per section, `<h3>` inside case studies, `<h4>` per brand.
- Full `metadata` export: title template, description, canonical, robots, keywords.
- Open Graph + Twitter card, with an OG image generated at the edge.
- `schema.org/Person` JSON-LD including `jobTitle` and `worksFor`.
- `sitemap.xml` and `robots.txt` generated from the site config.
- Semantic landmarks: `header`, `nav`, `main`, `article`, `footer`.

## Accessibility

- Skip link, visible `:focus-visible` rings, single `main` landmark, labelled sections (`aria-labelledby`).
- Mobile menu is a proper disclosure: `aria-expanded`, `aria-controls`, Escape closes and returns focus.
- Theme toggle has a stateful accessible name ("Switch to dark theme").
- External links carry a visually hidden "(opens in a new tab)" and `rel="noopener noreferrer"`.
- Project metadata uses `<dl>`, so labels and values are programmatically associated.
- Text contrast meets WCAG AA in both themes; nothing depends on hover alone; tap targets are at least 44 px tall.
- `prefers-reduced-motion` disables all animation, and a `<noscript>` fallback keeps revealed content visible without JavaScript.

## Responsive

Single fluid layout, mobile first. Type and spacing scale with `clamp()`, so there are only three real breakpoints (48rem, 55rem, 62rem). No horizontal scroll at 320 px.

## Content accuracy

Every project is presented as consulting work. The footer states that client names and links are used for identification only. No metrics, features, internal tooling or confidential information appear anywhere — add them yourself only if you are allowed to.

## Styling note

Styles are centralised in one token-driven stylesheet rather than split into CSS Modules, which keeps the cascade predictable at this size. If you prefer CSS Modules, each block in `globals.css` is already scoped by a single class prefix and can be moved to a `*.module.css` file next to its component with no rewriting.
