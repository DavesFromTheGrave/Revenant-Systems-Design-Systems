import React from 'react';

/**
 * Revenant Systems — Tabs
 * Underlined tab bar with a jade indicator. Controlled or uncontrolled.
 */
export function Tabs({ tabs = [], value, defaultValue, onChange, style }) {
  const [internal, setInternal] = React.useState(defaultValue ?? (tabs[0] && (tabs[0].value ?? tabs[0])));
  const active = value ?? internal;
  const select = (v) => { if (value === undefined) setInternal(v); onChange && onChange(v); };
  return (
    <div role="tablist" style={{ display: 'flex', gap: 4, borderBottom: '1px solid var(--border-hair)', ...style }}>
      {tabs.map((t) => {
        const v = t.value ?? t;
        const label = t.label ?? t;
        const on = v === active;
        return (
          <button key={v} role="tab" aria-selected={on} onClick={() => select(v)} style={{
            position: 'relative', padding: '10px 16px 12px', background: 'transparent', border: 'none', cursor: 'pointer',
            fontFamily: 'var(--font-cyber)', fontSize: 13, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase',
            color: on ? 'var(--jade-300)' : 'var(--bone-400)', transition: 'color var(--dur-fast) var(--ease-out)',
          }}>
            {label}
            <span style={{
              position: 'absolute', left: 8, right: 8, bottom: -1, height: 2, borderRadius: 2,
              background: on ? 'var(--grad-jade)' : 'transparent', boxShadow: on ? 'var(--glow-jade-sm)' : 'none',
              transition: 'all var(--dur-base) var(--ease-out)',
            }} />
          </button>
        );
      })}
    </div>
  );
}
