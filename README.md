# PAMANA

A two-page static marketing/login site for **PAMANA** — a Filipino estate / inheritance
document-processing service ("pamana" = inheritance / heritage). Copy is written in Taglish.

Pure HTML + CSS. No build step, no framework, no dependencies. Just open the files.

## Pages

| File | What it is |
|------|-----------|
| `index.html` | Home / landing. Rainbow-pointillist hero, "Trusted by" logos, and a scroll-down **Requirements** ("Mga Kailangan Na Papeles Para sa Proseso") section with hover-expanding cards. |
| `login.html` | The "Contact sales" destination. Login screen — "Where Estate Comes Easy". |

## Run it locally

No tooling required. Either:

- **Double-click `index.html`** to open it in your browser, or
- Serve the folder (needed only if a browser blocks `file://` for the images):
  ```bash
  # from this folder
  python -m http.server 8000
  # then open http://localhost:8000/index.html
  ```

## Edit the UI

Everything is inline in the two `.html` files — the CSS lives in a `<style>` block at the
top of each file, the markup below it. Change text directly in the HTML; change colors,
spacing, and fonts in the `:root { ... }` variables and the rules under them.

- **Brand color / accent:** `--accent`, and the flower mark colors in the inline `<symbol id="pmark">`.
- **Artwork:** `scene.png`. Swap this one file to change every image on the site. Card variety
  comes from each card's `object-position` inline style.
- **Fonts:** loaded from Google Fonts in the `<link>` tag — Newsreader (serif display),
  Manrope (heavy display), Figtree (UI/body).

See **`CONTEXT.md`** for the full design brief, decision log, and change history.
