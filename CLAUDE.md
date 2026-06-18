# Krishna's Portfolio — Project Instructions

## Installed skill: UI/UX Pro Max (v2.5.0)
The "UI/UX Pro Max" design-intelligence skill is installed at `skills/ui-ux-pro-max/`.

**When doing any design work in this project (new pages, sections, restyles, components, charts), consult it:**

- `skills/ui-ux-pro-max/SKILL.md` — core skill instructions and workflow
- `skills/ui-ux-pro-max/quick-reference.md` — condensed decision tables (read this first)
- `skills/ui-ux-pro-max/data/*.csv` — searchable databases (use `grep` on these instead of the repo's Python search script, which is not runnable here):
  - `styles.csv` — 67 UI styles with CSS keywords + prompts
  - `colors.csv` — 161 color palettes by product type
  - `typography.csv` — 57 font pairings with Google Fonts imports
  - `ux-guidelines.csv` — 99 UX best practices / anti-patterns
  - `landing.csv` — page structure & CTA strategies
  - `products.csv` — product-type design recommendations
  - `ui-reasoning.csv` — design reasoning rules
  - `charts.csv` — 25 chart types + library recommendations
  - `icons.csv` — icon set guidance
  - `app-interface.csv` — app UI patterns
  - `stacks/threejs.csv`, `stacks/react.csv`, `stacks/html-tailwind.csv` — stack-specific guidelines

Workflow: grep the relevant CSV by keyword (e.g. `grep "portfolio" skills/ui-ux-pro-max/data/products.csv`), apply the matched guidance, and follow the UX guidelines + anti-patterns in `ux-guidelines.csv` as a review checklist before delivering.

## Installed skills: Claude Design Skills (freshtechbro/claudedesignskills)
3D, animation, and motion skills installed under `skills/<name>/SKILL.md` (read the relevant one before doing related work):

**Core 3D & animation:** `threejs-webgl` (+ references: api_reference, materials_guide, optimization_checklist), `react-three-fiber`, `gsap-scrolltrigger` (+ references: common_patterns, easing_guide, api_reference), `motion-framer`, `babylonjs-engine`

**Extended 3D & scroll:** `lightweight-3d-effects`, `locomotive-scroll`, `scroll-reveal-libraries`, `barba-js`, `pixijs-2d`, `aframe-webxr`, `playcanvas-engine`

**Animation & components:** `animejs`, `lottie-animations`, `rive-interactive`, `react-spring-physics`, `animated-component-libraries`

**Authoring & motion pipeline:** `spline-interactive`, `blender-web-pipeline`, `substance-3d-texturing`

**Meta-skills:** `web3d-integration-patterns` (combining 3D + scroll + animation libs), `modern-web-design` (integration patterns & design)

Usage: when a task involves 3D scenes, scroll choreography, or animation, read the matching SKILL.md first and follow its patterns. For this portfolio (Three.js + React via Babel), `threejs-webgl`, `gsap-scrolltrigger`, `web3d-integration-patterns`, and `modern-web-design` are the most relevant.

## Project context
- Academic portfolio: React (UMD) + Three.js, hash routing, rendered from a **pre-compiled bundle**.
- Styles in `src/styles.css` — white background, Instrument Serif + Inter + JetBrains Mono, green/cobalt accents.
- User prefers: white background, top-notch academic feel, 3D animations.

## ★ Editing the site — READ BEFORE ANY CONTENT/CODE CHANGE ★
This repo deploys to GitHub Pages (`hii-saikrishna.github.io`) via `.github/workflows/static.yml`,
which on push to `main` deploys **only**: `index.html`, `src/`, `attached_assets/`, `404.html`.

**The build step is mandatory.** `index.html` loads the pre-compiled `src/bundle.js`, NOT the `.jsx`
sources. So the workflow:
1. Edit the source `.jsx` files in `src/` (content lives in `src/data.jsx`).
2. Run `./build.sh` — recompiles `src/*.jsx` → `src/bundle.js` (uses macOS `jsc`; no Node needed).
3. Commit **both** the edited `.jsx` and the regenerated `src/bundle.js`, then push to `main`.
- If you edit `.jsx` but skip `./build.sh`, **the live site will not change.**
- `src/styles.css` is loaded directly — CSS-only changes don't need a rebuild (but still commit it).

**⛔ Ignore `client/`.** It's a legacy/unused Vite app that is **never deployed**. Editing `client/**`
has zero effect on the live site. Only touch it if the user explicitly asks.

**Where things live**
- `src/data.jsx` — ALL editable content. Has a big header comment + per-section how-to notes. Exports:
  `PROFILE, HOME_GALLERY, TRIP_GALLERY, INTERESTS, THRUSTS, PUBLICATIONS, PUB_GROUPS, BLOG_POSTS, UPDATES, CREDO`.
- `src/app-all.jsx` — pages & components (`HomePage`, `PublicationsPage`, `UpdatesPage`, `PubRow`, `LazyVideo`…).
- `src/robots.jsx`, `world.jsx`, `globe.jsx`, `scenes-pages.jsx` — Three.js scenes/dioramas.
- `attached_assets/` — media. `publication_gallery/` = paper figures/clips, `Gallery/` = trip photos.

**Cross-file links to keep in sync** (the relevant arrays document this inline too)
- `INTERESTS[].id` ⇄ `THRUSTS[].id` — the Home interest card opens the matching Research thrust.
- `INTERESTS/THRUSTS[].scene` must be a real diorama key in `robots.jsx` (`embodied`/`swarm`/`gp`).
- `UPDATES` is the single source for **both** the Milestones page **and** the Home "Recent Milestones"
  cards (items with `home: true` + a short `title`). Never hard-code milestone cards in `app-all.jsx`.
- Internal links use `#/blog/<id>` (must match a `BLOG_POSTS.id`) or `#/<page>`.

**Media rules**
- Publication `image` may be `.png/.jpg` (→ `<img>`), `.mp4` (→ autoplaying muted `LazyVideo`), or `null`
  (→ generated placeholder). Any aspect ratio fits; nothing is cropped.
- **Compress videos before committing.** No ffmpeg here — use macOS `avconvert`, e.g.
  `avconvert -s in.mp4 -o out.mp4 -p Preset960x540 --multiPass --replace` (publication thumbnails),
  `Preset1280x720` for larger gallery clips. Keep paper clips ≲ a few MB.

**Verify a change** by serving locally and screenshotting with headless Chrome:
`python3 -m http.server 8765` then load `http://localhost:8765/index.html#/<page>` (`#/publications`,
`#/updates`, …). The red `#err-overlay` (in `index.html`) surfaces any runtime JS error.
