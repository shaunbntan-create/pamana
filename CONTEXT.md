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

**Phase 2 — team page + nav + carousel (current)**
1. New **`team.html`** — "Why Trust Us? / Meet the Team." Added to the nav on every page.
   - 3 real members: **Shaun Tan** (CMO · Growth & Finance), **Zosimo Nera Jr.** (CTO · Business
     Intelligence), **Ethan Taruc** (Head of Sales · GTM). Photos **background-removed with rembg**
     (`u2net_human_seg`), cropped, saved to `team/`. Placed as cutouts on **rainbow gradients**
     matching the home palette, with a pointillist dot sheen. Each has a **3-line bio**.
   - 3 **"Coming soon"** placeholder cards (Operations, Legal & Compliance, Client Success) in the
     same gradient family with a silhouette instead of a photo.
2. **Requirements** grew from 4 → **8 cards** and became a **horizontal carousel**: the "marami
   pang requirements" line moved **below the grid** as a pager with **left/right arrow buttons**
   (JS scrolls the track). The old bobbing arrow cue above the grid was removed.
3. **Hover-expand slowed** (transition `.55s → .95s`).
4. Nav converted to **Apple liquid-glass** (`backdrop-filter: blur + saturate`, translucent white,
   rim highlight). The **PAMANA logo was removed** from the header; the flower mark is retired
   (footer/login keep only the **PAMANA** wordmark as text).

**Phase 3 — the app after login (current)**
- **`login.html` now logs in → `dashboard.html`** (added a "Log in" button; the form redirects,
  no backend).
- New **`dashboard.html`** (liquid-glass app shell) modelled on the provided reference, with the
  requested revisions:
  - **Sidebar reduced to Dashboard + Quotation** only (+ Log out).
  - **Kept:** Amount Saved (big ₱ + "% CUT" subtext), Quick Overview (8 / 3 / 3 / 2),
    Requirements Overview table (Requirement · Where to Find · Status · **Request** · Last Update,
    with a "marami pang requirements" pager), Status Updates/Logs, and the **PAMANA Assistant
    chatbot** (working suggestion pills + input; canned replies).
  - **Removed completely:** Quotation Summary, Request Government Document card, Value Proposition.
  - **Status Updates are clickable** — each log expands an extra detail line.
  - The per-row **Request** buttons are the "request from contact government" mechanism (the only
    government-request UI that remains; the standalone card was removed).
  - Added an explicit **"not affiliated with any brand, agency, or government entity"** disclaimer.
- New **`quotation.html`** (Quotation sidebar destination): estate-tax estimate without vs. with
  PAMANA (₱792,500 → ₱543,750, **you save ₱248,750 / 31.4%**) plus a line-item breakdown. This is
  where the savings data lives now that it's off the dashboard.

---

## 6. Tech notes

- No framework, no build, no dependencies. Three HTML files with inline `<style>` + a tiny inline
  `<script>` on `index.html` (hover-scroll + carousel arrows).
- The nav uses `backdrop-filter` (liquid glass) — supported in current Chrome/Safari/Firefox.
- Background removal is a one-time build step (rembg), not a runtime dependency; the cutout PNGs
  are committed in `team/`.
- Only external fetch is Google Fonts. Everything else is local, so the site works offline once
  fonts are cached.
- Responsive: the card row stacks and the login grid collapses under 720px.
- Verified in a real browser (Playwright) at desktop width: layout, hover-expand, nav wiring,
  logo, and image art all confirmed.
