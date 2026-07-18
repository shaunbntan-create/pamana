# PAMANA — Full Context & Decision Log

This file is the single source of truth for what this project is, every requirement that
shaped it, and why it looks the way it does. Nothing is git-ignored; the original design
references live in `references/`.

---

## 1. What this is

**PAMANA** is a two-page static website for a (fictional/prototype) Filipino **estate &
inheritance document-processing service**. "Pamana" is Tagalog/Filipino for *inheritance* or
*heritage*. The product helps heirs get through the paperwork of settling an estate in the
Philippines (PSA death certificate → land title → BIR estate tax → extrajudicial settlement).

Copy is intentionally **Taglish** (Tagalog + English), the way this audience actually reads.

Aesthetic: **pointillist / impressionist** landscape art (see the source scene), warm off-white
UI, one heavy geometric display face, one serif display face for the login headline.

---

## 2. Pages & structure

### `index.html` — Home / landing (entry point)
- **Floating dark pill nav:** flower logo + `PAMANA` · `Requirements` · `Contact sales` (button).
  - `Requirements` → smooth-scrolls to the requirements section. **On hover** it auto-travels
    there (not only on click) — this was an explicit request.
  - `Contact sales` → navigates to `login.html`.
- **Hero:** the rainbow-pointillist scene (`scene.png`) + headline **"A place for faster estate
  process."** + a **"Trusted by"** row of placeholder logos (Batasan Trust, Notaryo PH,
  Herencia, Titulo Co., LandBank+ — all fake).
- **Requirements section (`#papeles`):**
  - Heading **"Mga Kailangan Na Papeles Para sa Proseso"**
  - Subheader **"Pakipindot ang mga boxes para makita paano makuha."**
  - A bobbing **"Marami pang requirements sa ibaba ↓"** arrow cue.
  - Four squircle cards. **Default:** card 1 open (wide), the rest narrow with vertical labels.
    **Hover any card** → it expands wide while the others collapse. Each card's CTA is
    **"Pano makuha →"**. Card content = the four real estate-settlement steps.

### `login.html` — "Contact sales" destination
- Blurred rainbow backdrop, white card, left art panel.
- `← Back` → `index.html`.
- Small "Login to" + serif headline **"Where Estate Comes Easy"**.
- Email + password fields (visual only, no backend), "Don't have an account? Sign up".
- Footer lockup: flower logo + `PAMANA` + tagline **"Shared Estate Profession for An Easier Journey."**

---

## 3. Brand

- **Name:** always all-caps **PAMANA**.
- **Logo mark:** an inline SVG (`<symbol id="pmark">`) — a larger bloom with a **smaller bloom
  branching off it on a green stem**. The small flower = the "heir." It encodes inheritance
  (one generation passing to the next). Colors: gold-orange parent petals (`#e5943c`), coral
  heir petals (`#e0664a`), cream centers (`#fcebc9`), green stem (`#7fa24a`). Works on both the
  dark nav and light footer.
- **Type:** Newsreader (serif display, login headline) · Manrope 800 (heavy display headings) ·
  Figtree (UI + body).
- **Palette:** off-white `--bg:#eef0ea`, ink `--ink:#1f2124`, dark pill `--pill:#1a1b1a`,
  blue accent `--accent:#2f5fe0`, warm logo gold/coral.

---

## 4. Artwork

All imagery is the single file **`scene.png`** (a rainbow-pointillist mountain landscape with a
red-roofed house). Swapping that one file re-skins the whole site. Cards show different slices
of it via `object-position`; the login backdrop is the same image blurred. Original source is
`references/ref-04-scene-source.png`.

> Earlier iterations generated the pointillist art procedurally in a `garden.js` canvas script;
> that was removed once the real scene image was adopted.

---

## 5. Requirement / change history

**Phase 0 — initial build**
- Cloned three references (see `references/`): a poieto-style login, a Solidroad-style card row,
  a wrot-style garden landing.
- Decided flow (per user): **landing is the homepage**, and **Contact sales → the login page**.
- Text swaps: "Where Knowledge Comes Alive" → **"Where Estate Comes Easy"**; brand poieto →
  **PAMANA**; tagline → **"Shared Estate Profession for An Easier Journey."**;
  "How top teams…" → **"Mga Kailangan Na Papeles Para sa Proseso"**; subheader →
  **"Pakipindot ang mga boxes para makita paano makuha."**; hero → **"A place for faster estate
  process."** + Trusted-by fake logos.
- Built the hover-expand card interaction.

**Phase 1 — refinements (current)**
1. **PAMANA** set in all-caps everywhere.
2. Header confirmed **"…Para sa Proseso"** + added the bobbing **"more requirements"** down-arrow cue.
3. Card CTA **"Read more" → "Pano makuha"**.
4. `Requirements` nav link now **auto-scrolls to the section on hover**.
5. New **flower-with-heir logo** replacing the old `✦` glyph.
6. All artwork swapped to the **rainbow-pointillist scene** (`scene.png`).

---

## 6. Tech notes

- No framework, no build, no dependencies. Two HTML files with inline `<style>` + a tiny inline
  `<script>` on `index.html` for the hover-scroll.
- Only external fetch is Google Fonts. Everything else is local, so the site works offline once
  fonts are cached.
- Responsive: the card row stacks and the login grid collapses under 720px.
- Verified in a real browser (Playwright) at desktop width: layout, hover-expand, nav wiring,
  logo, and image art all confirmed.
