# Facundo Baratta's CV

An Astro static site with English at `/cv/` and Spanish at `/cv/es/`.
Both pages use the same template. Each page contains only its own language.
Language navigation and PDF downloads work without JavaScript.
Older `/cv/?lang=es` links redirect to the Spanish page when JavaScript is enabled.

## Editing

- `src/content/sections/`: one file per content section (`education`, `skills`, `experience`, `languages`), each exporting its English and Spanish versions together. `document.ts` owns translated descriptions and controls.
- `src/content/sections/education/` and `src/content/sections/experience/`: one file per entry, with separate English and Spanish exports. Dates and identical metadata are shared within the entry. The parent section files aggregate entries in display order.
- `src/utils/dates.ts`: formats shared year/month values for the page language; use `end: 'present'` for ongoing roles, and omit `end` for a single date.
- `src/content/en.ts` and `src/content/es.ts`: final resume objects that aggregate the corresponding section exports. The content follows `src/types/resume.ts`.
- `src/content/profile.js`: contact details shared with the cover letter.
- `src/utils/locales.js`: language paths, names, and PDF filenames.
- `src/layouts/Resume.astro`: document structure and section order.
- `src/components/`: presentation only; components receive content via typed props.
- `src/styles.css`: responsive web and A4 print layout.
- `scripts/cover-letter.mjs`: cover-letter wording and PDF layout.

## Commands

Requires Node 22.12+ and Chromium for PDF generation and browser checks.

```sh
npm ci
npx playwright install chromium
npm run dev
npm run build
npm test
```

`build` first builds both static pages, exports each to an A4 PDF, and copies
the PDFs into `public/` and `dist/`. `pdf:generate` runs the same complete pipeline.
The export uses the production pages and the base path in `astro.config.mjs`.
`test` checks the built site, including navigation without JavaScript, legacy
links, download responses, content completeness, and mobile overflow.

On macOS the browser scripts can use installed Google Chrome. Set
`PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH` to use another Chromium executable.

`npm run letter` generates the standalone cover-letter PDF after editing its
greeting and paragraphs. GitHub Pages deploys `dist/` on pushes to `main`.
