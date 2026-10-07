# IconButton

Icon-only control for toolbars and dense UI. Always pass an accessible `label`.

```jsx
<IconButton label="Settings"><SettingsIcon size={18}/></IconButton>
<IconButton variant="jade" label="Run"><PlayIcon size={18}/></IconButton>
<IconButton active label="Trace" ><ActivityIcon size={18}/></IconButton>
```

Variants: `ghost` (default), `solid`, `jade`. `active` lights the jade rim for toggle state.
