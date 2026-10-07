# Feedback components

**Badge** — uppercase status/label chip (`neutral`/`jade`/`gold`/`danger`/`warning`, optional glowing `dot`).
**Tag** — removable mono keyword chip.
**StatusPill** — machine-honest runtime state (`active`/`live`/`passed`/`bypass`/`flagged`/`vetoed`), pulses when live.
**ProgressMeter** — metric bar for coherence/entropy/malice (`ember` tone for malice).
**Tooltip** — hover panel with jade hairline.
**Toast** — notification card with tone-keyed left rail.
**Dialog** — modal on a blurred void scrim.

```jsx
<Badge variant="jade" dot>online</Badge>
<StatusPill status="flagged" />
<ProgressMeter label="Malice" value={0.12} tone="ember" />
<Dialog open={open} onClose={close} title="Veto output?" tone="danger"
  footer={<><Button variant="ghost" onClick={close}>Cancel</Button><Button variant="danger">Veto</Button></>}>
  This response was flagged by the ethics gate.
</Dialog>
```
