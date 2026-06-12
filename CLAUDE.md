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
- Main deliverable: `index.html` — academic portfolio (React + Babel, Three.js scenes, hash routing)
- All content data (publications, blog posts, updates, CV) lives in `src/data.jsx`
- Styles in `src/styles.css` — white background, Instrument Serif + Inter + JetBrains Mono, cobalt accent
- User prefers: white background, top-notch academic feel, 3D animations
