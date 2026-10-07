# Algiz Alignment Engine — UI Kit

High-fidelity recreation of the **Algiz Alignment Engine** console (SAGE + RAGE) — Revenant Systems' flagship runtime-governance product. Built entirely from the design-system primitives; no bespoke components.

## Screens (`index.html` is an interactive click-through)
- **Pipeline Runner** — enter a prompt, run the RAGE operator sequence (`Containment → Ω → Χ → Σ`), watch stages activate, and stream a governed, grounded response. Live Malice gauge, QC signals (coherence / entropy / malice), and the ethical priority stack.
- **Trace Inspector** — decision-lineage table with per-request Malice, coherence, route, and guardrail verdict (`passed` / `flagged` / `vetoed`). Search + tab filter.
- **Alignment Proxy** — the OpenAI-compatible proxy flow, trace headers, and endpoint map.
- **Personas** — the agent lineup (Keystone, Delta, Karne, Noir, V).

## Files
- `index.html` — app shell + orchestration (mounts the three JSX views).
- `AppShell.jsx` — sidebar (runes, nav, provider select, operator identity) + blurred sticky topbar.
- `PipelineRunner.jsx` — the interactive runner (the heart of the console).
- `TraceInspector.jsx` — trace lineage table.

## Source of truth
Modeled on the real product README + `SageRage_*.md` files at
https://github.com/Revenant-Systems-LLC/Algiz-Alignment *(private)*.
All product vocabulary (operators, VAD/VAM, Malice, ethical layers, proxy headers) is lifted from that source. Explore the repo to build additional surfaces (audio mode, memory/Mnemosyne, CLI) with full fidelity.

## Components used
`AppShell`-composed: `RuneMark`, `Avatar`, `Select`, `StatusPill`, `IconButton`. Runner/inspector: `Panel`, `Card`, `Button`, `Textarea`, `Input`, `Tabs`, `Switch`, `OperatorPill`, `MaliceMeter`, `ProgressMeter`, `Badge`, `Tag`. Icons via Lucide (CDN — documented substitution).
