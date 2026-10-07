# ᛉ Revenant Systems — Design System

> *"The idea is not to live forever, but to create something that will."* — Revenant Systems LLC

**Cybernetic Undead Punk — obsidian stone inlaid with turquoise, with gold marbling.**

> **2026 rebrand:** Jade is retired. Turquoise is the primary stone, gold is muted, and surfaces are obsidian/slate. The web presence (revenantsystems.net) plays this as the **Gargantua event horizon** — slate and black with a thin band of muted-gold light. `--jade-*` tokens remain as aliases of `--turq-*` so existing components inherit the new palette.

This is the brand + product design system for **Revenant Systems LLC**, an independent AI‑engineering studio founded by **David Fisher** ("Dave of the Dead"). Revenant builds runtime‑governed AI: alignment engines, local‑first agents, developer tooling, and desktop apps — all under one unmistakable aesthetic where Norse myth, occult sigils, chrome skulls, and circuit‑board gold collide.

Use this system to generate on‑brand interfaces, marketing pages, decks, and throwaway mocks for any Revenant product.

---

## Sources

Everything here was derived from materials the studio provided. You may not have access, but they are recorded so you can go deeper:

- **GitHub org:** https://github.com/Revenant-Systems-LLC
- **Algiz Alignment** — https://github.com/Revenant-Systems-LLC/Algiz-Alignment *(private)* — **restarted from fundamentals (2026).** Symbols are being mapped to their real-world counterparts; no code yet. Do not cite old SAGE/RAGE docs as current product copy.
- **The Charnel House** — https://github.com/Revenant-Systems-LLC/Charnel-House (local: `B:\Charnel-House`) — formerly Revenant RAG.
- Brand emblems, wordmarks, and fonts supplied directly (see `/assets/brand` and `/assets/fonts`).

Explore the GitHub org to build richer, more accurate product surfaces than this kit alone can capture.

---

## The Company & Its Products

Revenant Systems ships a **lineup of AI products** rather than a single app. They share the Revenant wordmark identity; each carries its own sigil. Known surfaces:

| Product | What it is |
| --- | --- |
| **Algiz Alignment** | **Restarted — early fundamentals phase, no code yet.** Its symbol set is being remapped to real-world counterparts. Don't write shipped-product claims (proxy, pipeline, deploy) for it. |
| **Revenant Agents** | The studio's agent lineup (Delta, Karne, Keystone, Noir, V, …) — personas that run on the SAGE‑RAGE runtime. |
| **Revenant Workspace Warden** | Powerful code checker / linter + AI‑engineering tutor. |
| **Revenant Workspace Sidekick** | Windows hardening scanner for AI‑coded desktop apps (MSIX, registry, secrets). |
| **Revenant Workspace Nodes** | Open‑source node‑based generative image/video workflow builder. |
| **Revenant Echo** | Local‑only, wake‑word voice assistant for Windows (no cloud). |
| **Revenant Personas** | Prompt‑engineering workspace / SaaS. |
| **The Charnel House** *(formerly Revenant RAG)* | Knowledge base + retrieval. Repo: `Revenant-Systems-LLC/Charnel-House`. |
| **Revenant Theme Studio** | Windows 11 total theme manager (ember/fire register of the brand). |
| **from‑the‑Grave / Lorelai, Iris, Ishtar** | Companion & assistant sub‑brands. |

**Positioning:** production‑oriented, honest about limits ("not a claim of solved alignment"), enterprise‑credible but built by an underground‑metal soul. The brand makes *governed, auditable, local‑first AI* feel dangerous and alive rather than corporate.

---

## CONTENT FUNDAMENTALS

How Revenant writes. The voice is **two‑layered**, matching the visual dual‑register:

### 1. The Enterprise Layer (product & docs copy)

Direct, technical, confident, and honest. This is how nearly all UI, docs, and marketing body copy reads.

- **Casing:** Sentence case for body and most headings. `SCREAMING CAPS` reserved for eyebrows, sigil labels, and the wordmark.
- **Person:** Speaks to the reader as **you** ("govern existing apps without major rewrites"). Refers to the product by name or as the system, rarely "we."
- **Sentences:** Short, declarative, often fragmentary for emphasis. Stacks contrast: *"This is not prompt engineering alone. This is not a lightweight wrapper. This is a governed runtime."*
- **Verbs first, benefits framed as outcomes:** "Reduce risk exposure." "Improve reliability." "Increase auditability." Bulleted outcome lists are common.
- **Vocabulary:** operator algebra terms (`Containment`, `Omega`, `Chi`, `Sigma`), governance nouns (guardrail, veto, gate, trace, lineage, drift), and enterprise stakes (auditable, provider‑agnostic, high‑stakes routing). Greek letters and runes appear as real operators, not decoration.
- **Honesty is a feature:** limitations are stated plainly. "Entropy/coherence are proxy signals, not ground‑truth measures."
- **No emoji** in product/enterprise copy. Exception: the **ᛉ (Algiz rune)** and other runes are used as brand glyphs/bullets, and product sigils may appear as marks — these are identity, not emoji.

**Example (product):**

> **Runtime governance vs prompt‑only guardrails.** Prompts degrade across long context. Safety checks fire too late. Algiz enforces policy *before and after* inference, with a traceable artifact at every stage.

### 2. The Mythic Layer (brand / hero / ritual copy)

Used sparingly — hero taglines, section openers, product codenames, easter eggs. Occult, defiant, memento‑mori.

- Set in the brand wordmark face (**Street Reich**, ALL-CAPS) for hero headlines, or the occult face (**Season of the Witch**) for ritual/sigil accents — always large.
- Draws on **death‑and‑legacy** ("Revenant" = one who returns from the dead), **Norse myth** (Yggdrasil, Vegvisir, Fenrir, the Algiz rune of protection), and **creation‑beyond‑mortality**.
- The anchor line: *"The idea is not to live forever, but to create something that will."*

**Rule of thumb:** never mix the two layers in one sentence. Mythic sets the stage; enterprise does the work. Product buttons and forms are ALWAYS the enterprise voice — clear, verb‑led, unsentimental.

### Microcopy

- Buttons: verb‑led, terse — "Deploy proxy", "Run pipeline", "Veto output", "View trace".
- Status is machine‑honest: `active` / `bypass`, `passed` / `flagged`. Lowercase mono for machine states.
- Numbers and metrics are cited, not vibed — Malice score, coherence, entropy shown as real values with labels.

---

## VISUAL FOUNDATIONS

### Palette

Stone and metal on obsidian. **Turquoise** is the inlaid stone and the living current (`#1fa9a8` core, `#5ee6e0` live glow). **Gold** is the muted inlay — kintsugi seams and accretion-disk light (`#9c7b45` core, `#d6bb7e` sheen, down to `#654d2d` bronze). Never bright yellow-gold. Everything sits on **obsidian** (`#07080a`) with **slate** surfaces and borders (`#1c2127` card, `#2a3038` hairline) — cool, never green. Text is **bone** (`#e2ddd1`), never pure white. Semantic **ember** red (`#e23b1e`) is Malice/danger; use rarely. See `/tokens/colors.css`.

- **Warm vs cool:** cool turquoise stone vs warm muted gold, set in cold black glass. Turquoise is the accent, not the field — use it in small inlaid doses (active states, live signals, one hero accent). Gold does the lines: seams, rules, eyebrows, borders.
- **Gargantua mode — revenantsystems.net only.** The DeadDrop main site uses an Interstellar/Gargantua palette: slate-to-black field, black disc, one thin band of muted gold light (`--grad-horizon`). This is a **site treatment, not the brand identity** — use it for the website and its marketing heroes; everything else uses obsidian + turquoise + gold.

### Type

Three display registers set in turquoise + gold on obsidian. **Street Reich** = the distressed brand **wordmark** face (`--font-display`/`--font-wordmark`) — hero headlines, product-name lockups, monumental caps; ALL-CAPS, large, sparing. **Season of the Witch** = occult/ritual accent (sigil names, pull quotes), large only. **Chakra Petch** = the cybernetic workhorse for headings, product names, UI labels, and eyebrows — squared, mechanical, on‑brand for "Systems." **Space Grotesk** = body & UI. **JetBrains Mono** = code, operator sequences, machine states, and trace IDs. Eyebrows/labels are `UPPERCASE` with wide tracking (`0.12–0.28em`) and usually gold. *(The earlier "Ghost theory" TTFs were empty stubs, since superseded by the real Street Reich face.)*

> **Valerie (V) is never a product.** She belongs to Revenant Systems but is never marketed, shown in product cards, or used as a brand mascot. Brand sprites are **Damien** (primary) and **Baldur** (secondary).

### Emerald skulls (reserved)

`assets/brand/emerald/` — canonical emerald-style skulls: RS rune hex, gear, Warden shield, Vegvisir, Yggdrasil·Algiz. Not in active use; held for later.

### Written voice

All outbound copy follows `voice.md`: blunt, specific, no em dashes, no AI filler words, no bold-label bullet lists in conversational copy.

### Shipped product reference

DeadDrop is the homepage at revenantsystems.net. It's a 35-level prompt-injection game: you talk the Gravekeeper into giving up one word, and three fails lock a level for a day. The storefront (the Armory) sits below it. The page runs on a Gargantua black-hole palette over `blackhole-montage.mp4`: --bg #050505, --ink #0a0707, --gold #d6a24a, --gold-light #f2d9a8, --gold-dark #8f5d18, --ochre #f3dcb4, --ochre-hi #fff3dc, with --turq #35c9c0 (--turq-light #8ff0ea) only on the eyebrow dot and active nav item. Eight worlds: Shallow Grave, Crypt, Charnel House, Mass Grave, Ossuary, Catacombs, Necropolis, Revenant. The background is a staged video: blackhole-montage.mp4 on load, ocean-gargantua.mp4 after the first click, stage-aura.mp4 at level 15 and stage-glory.mp4 at level 25. All four are muted loops that crossfade. Source: github.com/DavesFromTheGrave/revenant-deaddrop-site. Stage 0 video is `assets/video/deaddrop-blackhole.mp4` (always play muted). Screenshot is `assets/screens/deaddrop-home.png`. That palette belongs to this page. Don't carry it into other products. The tagline is "The dead keep one word. Make them say it." and the footer line is "Machine identity. Human agency."

`assets/screens/` holds real screens. Build app mockups from these, not from guesses.

Revenant Theme Studio is a Windows icon manager. Header has the gold gear-skull and distressed Street Reich wordmark on dark green, with an "RTS PRO" badge top right. Tabs are Folder Icons, Drive Icons, Auto Match [Pro], System Icons [Pro] and Help, and the active tab fills tan-gold. The left Icon Library rail is a 3-up icon grid. Apply is the gold primary and Undo / Restore is the ghost button. Monospace labels in caps, a "Ready." status bar, and a big faint wordmark watermark behind the panel. Auto Match uses "Arise" as its commit verb.

Icon packs: Gunmetal, Ruby, Black Suede & Gold, Jade & Gold (retro).

Charnel House is the bones of Revenant Systems. It is a CLI RAG database, run from PowerShell, holding everything that has ever gone through Dave's machine and beyond. It has no GUI. Show it as terminal output.

The Charnel House shield carries every skull in the system, because every product's bones end up here. Keep that meaning: when a new product mark is added, it belongs on the shield. The amethyst skull is its standalone mark.

Revenant Workspace Warden (`rww-warden-clean.png`) is a multi-pane desktop shell: a file tree on the left, then Warden chat (local Ollama), Course and RWS panes. It has a gold serif pane header, obsidian hex-grid backgrounds, ghost nav pills (◂ WS, ◂ COURSE, ◂ SIDEKICK) and a blue "Warden Active" pill. Locked panes show a gold hex outline, a title, one line of copy and an "Activate Warden Pro" ghost button.

Revenant Workspace Sidekick (`rws-sidekick-clean.png`) is a security audit tool for AI-coded apps. The frame is turquoise-veined obsidian with the rune-hex skull and a crystal wordmark. It has a Findings table, a "Why this matters" pane, a Vegvisir score dial out of 100, and 2×2 severity tiles: low (yellow), medium (orange), high (red), critical (crimson).

Research (`research-role-boundary.png`) runs a separate register: serif display type, gold on warm charcoal, pill nodes with percentages. Use it for research pages only. The live knowledge graph (`assets/research/role-boundary-knowledge-graph.html`) sets the tokens for this register: bg #090d13, panel #121a26, ink #edf3f1, muted #a9b3b7, gold #e6cb88, rule gold #c4a962, teal #21c3c5. Headings and big numbers use Georgia. The canvas carries a gold hex grid at 5.5% opacity. Node colours are teal for instruction forms, gold for delivery channels, slate #aab8c8 for defenses, light teal #57d1c9 for forged reasoning and ochre #c9a65c for tasks. Rates always carry the "descriptive, compare matched cells" caveat.

### Voice (xAI custom voices)

- **Dave of the Dead** — `l0a1hjtxbotl` · male, middle-aged, professional. Brand/founder voice.
- **Luvonna** — `44jn2pupsfe5` · female, young, warm.

Use via `POST https://api.x.ai/v1/tts` with `{ text, voice_id, language:"en" }` (returns MP3 bytes). Supports speech tags like `[laugh]`, `[sigh]`, `<whisper>`. Voice IDs aren't secret; the `XAI_API_KEY` is — server-side only.

### Video

`assets/video/hero-bg.mp4` (Product Hero background, 45% opacity under a left-heavy obsidian scrim so copy stays legible) `assets/video/rsllc.mp4` (logo reveal) and `assets/video/rts.mp4` (Theme Studio). Always muted, looping, `playsinline`, never the only carrier of meaning.

### Sprites

- **Damien** — red devil-ball mascot, gold ribbed horns, arrow tail, angry white eyes. Assets in `assets/sprites/damien/` (192×208 transparent frames + GIFs): `idle`, `waiting`, `active-work`, `review-grin`, `failed`, `wave`, `run-left`, `run-right`, plus `spritesheet-v8.png`, `jump-spin-7-frames.png` (corrected jump, use for success/celebrate), `look-around.png`, `damien-front.png`. Map states to real app events (idle → waiting for input → active work → review/failed). His red is his own — never recolor him to turquoise or jade, and never use him as a danger/error signal outside the `failed` state. Place him on obsidian or bone; he is a mascot, not a logo — never replace the wordmark with him.
- **Baldur** — secondary sprite. Split-face: human on one side, turquoise zombie skull with a glowing ember eye on the other. Spiked red hair, gold horns, brass goggles, lit cigar, black three-piece suit with red trim and tie. Hero art: `hero-smoking.jpg` (lead), `hero-final.png`, `hero-canon-dotd.jpg`, `poster-the-admin.png` ("The Admin"). Sprite assets in `assets/sprites/baldur/`: `portrait.png` (on black), `stand-vest.png`, `stand-red-shirt.png`, `human-run.png`, `zombie-run.png`, `zombie-walk.png`, `human-walk-strip.png` / `zombie-walk-strip.png` (6-frame cycles), `beaten.png`, `throne.png`, `sign-r-cursed.png`. Pixel-art sprites render with `image-rendering: pixelated`. The human side faces right, the zombie side faces left — keep that when flipping. He is secondary to Damien: never the lead mark on a page.

### Jade & gold (secondary line)

The full jade + gold set lives in `assets/brand/jade-gold/` (cards: *Marks*, *Product & persona marks*, *Wordmarks & art* in the **Jade & Gold** group) — Metatron core, RS stamp, gears, Vegvisir, Yggdrasil·Algiz, Fenrir, Warden shield, Charnel House shield + amethyst skull, Agents trio, Dave of the Dead, from the Grave, horns, cyborg skulls, wordmarks, Theme Studio. Use for retro or deliberately old-school pieces. Never mix jade and turquoise in one composition. Obsidian + turquoise leads. `texture-kintsugi-WATERMARKED.png` carries a stock watermark — reference only, never ship. The early flat skull emblems and wordmark lockups in `assets/brand/` root are **deprecated**.

### Runes & operators

- **Elder Futhark** (card *Elder Futhark*): 24 runes in three aettir. Use a rune for its actual meaning (ᛉ Algiz = protection, ᚱ Raido = journey, ᛟ Othala = heritage), never as random decoration. Render with `Noto Sans Runic`.
- **Operator glyphs** (card *Operator glyphs — working draft*): Σ primary, Π pillar, Λ compound and τ chrono operators. **Draft** — being remapped to real-world counterparts during the Algiz restart; do not treat as final.

### Backgrounds & texture

- Base is **obsidian** with a faint **slate rise** from the bottom (`--grad-void`). Heroes may use `--grad-horizon`.
- **Textures** (copy from `/assets/brand`, never redraw): `texture-obsidian-kintsugi.jpg`, `texture-circuit.jpg`, `texture-hex.jpg`. Use behind emblems or as one darkened full-bleed band — never behind body text.
- **Circuit traces** (thin gold lines with turquoise inlay, as on the obsidian cyborg skull `cyborg-skull-obsidian.png`) are the signature background motif — sparse, radiating from a focal mark, never a busy pattern.
- Marks sit on obsidian with a soft **turquoise/gold glow halo**, centered and monumental. Hero imagery = the **obsidian cyborg skull**, the wordmark, or a sigil — not the jade skulls (secondary line).
- No stock photography. No busy gradients-for-gradient's-sake. When a gradient appears it is one of the two **metal fills** (turquoise stone or gold marbling) or the ember forge — always directional, with a hot/bright sheen band.

### Iconography & marks

See the ICONOGRAPHY section below.

### Depth, borders & cards

- **Radii are tight** — 3–8px on controls and cards, 12px max on large panels. This is forged metal and carved bone, not soft plastic. Pills (999px) only for status tags.
- **Cards:** dark raised surface (`--bg-card` `#1c2127`) on the void, a **hairline border** (`--border-hair` `#2a3038`), a deep cold drop shadow (`--shadow-md/lg`), and often a **1px inner top bevel** to catch edge light. Premium/active cards gain a **turquoise or gold gradient hairline** and a glow.
- **Shadows** are deep, cold, and near‑black (`rgba(0,0,0,0.5–0.7)`). Glows are colored: **turquoise glow** for live/active/focus, **gold glint** for hovered metal, **ember glow** for danger.
- Transparency + blur: used for overlays, sticky bars, and dialogs — a dark panel at \~85–92% opacity with `blur(14px) saturate(115%)` backdrop. Not everywhere; reserved for floating chrome.

### Motion

- Purposeful and physical, never bouncy. Standard ease is `cubic-bezier(0.22,1,0.36,1)` (`--ease-out`), 120–360ms.
- **Hover:** metal *brightens* — turquoise/gold surfaces lighten one step and gain a glow; the border warms. Not a scale‑up.
- **Press:** color darkens one step and the element seats down (subtle `translateY(1px)` / reduced shadow) — like pressing a physical key. No large shrink.
- **Live/streaming state:** a slow turquoise pulse (`--glow-jade-md` breathing) signals the runtime is "alive" — used on active pipeline stages, recording, streaming tokens.
- Focus: a **turquoise focus ring** (`--focus-ring`), 2px, always visible for keyboard users.

### Layout

- Generous void margins; content pulled into `--container-*` widths. Emblems and hero marks are allowed to be huge.
- Fixed chrome: sidebar (`264px`) and topbar (`60px`) in product UIs; sticky, blurred, hairline‑bottom.
- Alignment is structured and slightly severe — strong left rules, engraved eyebrow labels, mono metadata in corners.

---

## ICONOGRAPHY

Revenant does **not** ship a custom icon font. Approach:

- **Line UI icons → Lucide** (https://lucide.dev), loaded from CDN. Rationale: Lucide's 1.5–2px even stroke reads as "engraved," pairs cleanly with the tight radii, and tints to jade/gold/bone via `currentColor`. This is a **documented substitution** — there is no proprietary UI icon set in the source. Use `stroke-width:1.75`, size 16/20/24. Default color `--text-muted`; active `--jade-400`; on gold surfaces `--jade-950`.
- **Brand glyphs are the real iconography.** The identity leans on:
  - **Legacy skull emblems — DEPRECATED.** The jade‑marble skull set (cog, hex‑rune, Metatron, crowned) is archived under the *Deprecated* card group. Do not use in new work; lead with the 2026 wordmarks and sigils instead.
  - **Norse runes & sigils** — **Algiz ᛉ** (protection; the Alignment engine's mark), **Vegvisir** (the wayfinder/helm‑of‑awe compass), **Yggdrasil** (tree of life, drawn in jade linework), the **Fenrir bind‑rune** (cracked jade). These are used as section marks, watermarks, loaders, and empty‑state art.
  - **Sacred geometry** — Metatron's‑cube hexagon lattice as a framing device around emblems.
  - **Gold circuit traces** — radiating filament lines as texture/decoration. These live in `/assets/brand` as PNGs — **copy them in; never redraw them as SVG.**
- **Greek letters & runes as operators:** `Ω Χ Σ Ξ ᛉ` appear inline as real operator symbols in Algiz contexts (mono face). This is functional notation, part of the product language.
- **Emoji:** not used in product UI. Runes and sigils carry that role.

---

## INDEX — what's in this system

**Foundations (root)**

- `styles.css` — the single entry point consumers link (imports only).
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `base.css`.
- `assets/brand/` — **2026 obsidian set** (use these):
  - Wordmarks: `wordmark-revsys.png` / `wordmark-revsys-hd.png` (master), `wordmark-sidekick.png`, `wordmark-warden-obsidian.png`, `wordmark-warden-turquoise.png`.
  - Marks: `mark-mainhex.png` (core), `mark-hex-marble-skull.png`, `mark-hex-outline.png`, `mark-hex-lattice.png` / `mark-hex-empty.png` (frames), `mark-bindrune-skull.png`, `mark-sidekick-vegvisir.png`, `mark-vegvisir-gilt.png`, `mark-warden-shield.png`, `mark-warden-gold.png`, `mark-warden-red.png` (danger only), `mark-rockon-inlay.png`, `mark-rockon-gilt.png`.
  - Skulls: `cyborg-skull-obsidian.png` (hero), `skull-obsidian-filigree.jpg`, `skull-obsidian-kintsugi.jpg`, `skull-obsidian-gilt.jpg`.
  - Textures: `texture-obsidian-kintsugi.jpg`, `texture-kintsugi-wide/tall.jpg`, `texture-circuit*.jpg`, `texture-hex-gold.jpg`, `texture-hex-turquoise(-2).jpg`.
  - `icons-reference.png` — desktop/OS icon style reference.
  - Jade skulls, `wordmark-gold/jade`, `texture-jade-gold.jpg`, `cyborg-skull.png` = the **Jade & Gold** secondary line.
- `assets/fonts/` — Street Reich (brand wordmark display), Season of the Witch (occult accent), plus the display library: Sell Your Soul, Shaun of the Dead, Sweet Helloween, Company Problem, Dead Corporation, Sansilk (campaign/poster headlines only, one per piece). GhostTheory TTFs are empty stubs; ignore.

**Specimen cards** (Design System tab): **24 cards** grouped `Brand`, `Colors`, `Type`, `Spacing`, `Effects`, `Components`, `Algiz Console`.

**Components** (`components/`, namespace `window.RevenantSystemsDesignSystem_019ddb`) — **21 primitives** in four groups:

- `forms/` — Button, IconButton, Input, Textarea, Select, Checkbox, Switch
- `feedback/` — Badge, Tag, StatusPill, ProgressMeter, Tooltip, Toast, Dialog
- `layout/` — Card, Panel, Tabs, Avatar
- `brand/` — OperatorPill, RuneMark, MaliceMeter (the RAGE-signature set)

Each has `<Name>.jsx`, `<Name>.d.ts`, and a `.prompt.md`, plus one `@dsCard` per group directory.

**UI Kits** (`ui_kits/`)

- `algiz/` — the Algiz Alignment Engine console: pipeline runner, trace inspector, Malice/coherence meters, proxy status, personas. *(Reflects the pre-restart design; treat as a visual reference only.)*

**Templates** (`templates/`) — copy-to-start artifacts for consuming projects

- `product-hero/` — a branded marketing hero (mythic headline, enterprise subhead, CTAs, live operator pipeline, glowing sigil).

**Skill**

- `../SKILL.md` — the skill entry point. This file lives in `references/`; every path above is relative to `references/`.

---

## Using the system

1. Link `styles.css` for tokens + fonts.
2. Reference **semantic aliases** (`--bg-card`, `--text-body`, `--accent-primary`) in product UI, not raw scales.
3. Compose UI from the `components/` primitives; don't re‑implement them.
4. Copy real brand assets from `/assets/brand` — never redraw emblems or invent new sigils.
5. Keep the two voices separate: mythic sets the stage, enterprise does the work.
