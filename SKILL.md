---
name: revenant-systems-design
description: Brand and design system for Revenant Systems LLC, an AI-engineering studio with a Cybernetic Undead Punk identity (obsidian stone, turquoise inlay, muted gold marbling). Use when building anything that carries the Revenant name, including UI mockups, prototypes, production front-end code, decks, marketing pages, social assets and product screens for Warden, Sidekick, Theme Studio, DeadDrop, Charnel House or Algiz Alignment. Covers color and type tokens, fonts, brand voice, logos, marks, runes, sprites (Damien, Baldur), textures, video, React components and templates.
license: Proprietary. Revenant Systems LLC. Brand assets are not for third-party use.
metadata:
  author: Revenant Systems LLC
  version: "2026.09"
---

# Revenant Systems design

Read `references/brand-guide.md` first. It holds the company context, product lineup, voice, visual foundations, iconography and a full asset index. All paths in it are relative to `references/`.

## What's in references/

- `brand-guide.md`: the full brand guide.
- `voice.md`: copy rules for anything shipped under Dave's or Revenant's name. Apply before delivering copy.
- `styles.css`: single CSS entry point. Imports every token file and @font-face. Link this.
- `tokens/`: colors, typography, spacing, effects, fonts, base.
- `assets/brand/`: 2026 obsidian wordmarks, marks, skulls, textures. `jade-gold/` is the retro line. `emerald/` is reserved, don't use yet.
- `assets/fonts/`: Street Reich, Season of the Witch and the display library.
- `assets/sprites/damien/`, `assets/sprites/baldur/`: mascot frames, GIFs and hero art.
- `assets/screens/`: real product screenshots. Build mockups from these, not guesses.
- `assets/video/`: hero and product loops. Always muted, looping, playsinline.
- `guidelines/`: HTML specimen cards for every foundation. Open them to see tokens in use.
- `components/`: 21 React primitives (forms, feedback, layout, brand), each with `.jsx`, `.d.ts` and usage notes. `_ds_bundle.js` exposes them on `window.RevenantSystemsDesignSystem_019ddb`.
- `templates/product-hero/`: copy-to-start marketing hero.
- `ui_kits/algiz/`: pre-restart Algiz console. Visual reference only.

## How to work

- Visual artifacts (mocks, decks, prototypes): copy the assets you need, link `styles.css`, build static HTML. Never redraw marks, sigils or skulls. Copy the files.
- Production code: read the token files and component sources. Use semantic aliases (`--bg-card`, `--text-body`, `--accent-primary`), not raw scales.
- Two voices. Mythic (Street Reich caps, Season of the Witch accents, large and sparing) sets the stage. Enterprise (Chakra Petch headings, Space Grotesk body, JetBrains Mono for machine states) does the work. Never mix them in one sentence.
- Obsidian + turquoise lead. Gold does the lines. Jade only in retro pieces, never alongside turquoise.
- Damien is the primary sprite, Baldur secondary. Valerie is never shown or marketed.
- Icons: Lucide, stroke 1.75. Brand glyphs are skulls, runes (used for their real meaning), sacred geometry and gold circuit traces. No emoji.
- DeadDrop's Gargantua palette belongs to revenantsystems.net only.
- Algiz Alignment restarted from fundamentals. Don't write shipped-product claims for it.
- Charnel House has no GUI. Show it as PowerShell output.

## If invoked with no direction

Ask what they're building, then a few focused questions: surface, audience, production or throwaway, how many variations. Then build.
