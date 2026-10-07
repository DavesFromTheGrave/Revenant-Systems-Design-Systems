# Button

Forged-metal action control. Use `primary` (jade) for the main action, `secondary` (gold) for premium/alternate, `ghost` for tertiary, `danger` (ember) for destructive or veto actions.

```jsx
<Button variant="primary" onClick={run}>Run pipeline</Button>
<Button variant="secondary" size="lg">Deploy proxy</Button>
<Button variant="ghost" size="sm">View trace</Button>
<Button variant="danger" iconLeft={<XIcon/>}>Veto output</Button>
<Button loading>Aligning…</Button>
```

Labels are verb-led and render in Chakra Petch, uppercase, tracked. Hover brightens the metal + adds a glow; press seats down 1px. Sizes: `sm` / `md` / `lg`. `full` stretches to container width.
