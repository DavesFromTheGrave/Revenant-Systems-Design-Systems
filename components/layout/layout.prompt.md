# Layout components

**Card** — the base raised surface. `interactive` lifts on hover; `active`/`tone` lights a jade/gold rim.
**Panel** — titled section with a gold engraved eyebrow header, optional `actions` and a faint `rune` watermark.
**Tabs** — underlined bar with a glowing jade indicator.
**Avatar** — ring-framed identity (image / initials / rune), optional `live` glow.

```jsx
<Panel eyebrow="Operator pipeline" title="RAGE Engine" actions={<IconButton label="Config"><SettingsIcon/></IconButton>} rune="ᛉ">
  <Tabs tabs={['Trace','Metrics','Memory']} />
</Panel>
<Card interactive tone="gold">Premium tier</Card>
<Avatar name="Dave Fisher" live />
<Avatar rune="ᛉ" tone="gold" />
```
