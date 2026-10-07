# Brand components

Signature Revenant Systems components — these carry the product language.

**OperatorPill** — a RAGE operator chip (Ω Χ Σ Ξ ᛉ) with runtime `state`; the active glyph breathes. Chain them to show a pipeline.
**RuneMark** — a framed brand sigil: the Algiz rune (or any glyph/image `src`) inside a Metatron hexagon with a jade glow. Section marks, loaders (`spin`), empty states, watermarks.
**MaliceMeter** — semicircular gauge for the derived Malice safety metric; arc + needle shift jade → amber → ember.

```jsx
<OperatorPill operator="containment" state="done" />
<OperatorPill operator="omega" state="active" />
<OperatorPill operator="sigma" state="idle" />
<RuneMark rune="ᛉ" size={120} />
<RuneMark src="assets/brand/mark-sidekick-vegvisir.png" frame={false} />
<MaliceMeter value={0.12} />
```
