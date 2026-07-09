# AGENTS.md

## Project Shape
- This repo is only the FinPer marketing landing page; Android app context is in `skills/FINPER_SKILL.md` and the external app repo, not implemented here.
- It is a single Vite React SPA: `index.html` loads `src/index.tsx`, and `src/App.tsx` composes `Navbar`, `Hero`, `Stats`, `Features`, `Mockups`, `HowItWorks`, `Pricing`, `CTA`, `Footer`.
- Use the root `package.json` and `package-lock.json`; `src/package.json` is not a workspace package and lists deps/versions that are not installed by the root project.

## Commands
- Install with `npm install`. If Vite/Rollup reports a missing optional native package such as `@rollup/rollup-linux-x64-gnu`, reinstalling deps hydrates the platform-specific package.
- Dev server: `npm run dev`.
- Production build: `npm run build`; output goes to ignored `dist/`.
- Lint: `npm run lint`; current code emits one warning for unused `motion` in `src/components/AnimatedCounter.tsx`.
- There is no test script or CI config in this repo.
- There is no typecheck script. `npm run build` does not run `tsc`; direct `npx tsc --noEmit` is stricter and currently fails on existing unused React imports because `tsconfig.json` enables `noUnusedLocals`.

## UI And Assets
- Tailwind brand tokens live in `tailwind.config.js` under `finper.*`; reuse them instead of hard-coding new FinPer colors.
- Keep the three Tailwind imports at the top of `src/index.css` in the existing order; the file comment marks them as critical.
- Public images are referenced from the public root as `/Logo.jpeg`, `/Inicio.jpeg`, `/Saldo.jpeg`, `/Transacciones.jpeg`, `/Analisis.jpeg`, `/Categorias.jpeg`, `/Login.jpeg`; there is no `public/mockups/` directory despite older context docs.
- Existing section anchors are route-like contracts for navigation: `#top`, `#caracteristicas`, `#precios`, `#descargar`.
