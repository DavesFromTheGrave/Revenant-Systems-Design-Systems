import React from 'react';

/** Revenant Systems — Checkbox. Carved box, jade fill + check when on. */
export function Checkbox({ checked, defaultChecked, onChange, label, disabled = false, id, style }) {
  const rid = id || React.useId();
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const isControlled = checked !== undefined;
  const on = isControlled ? checked : internal;
  const toggle = (e) => { if (!isControlled) setInternal(e.target.checked); onChange && onChange(e); };
  return (
    <label htmlFor={rid} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1, ...style }}>
      <input id={rid} type="checkbox" checked={on} disabled={disabled} onChange={toggle} style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} />
      <span style={{
        width: 20, height: 20, flex: '0 0 auto', borderRadius: 'var(--radius-sm)',
        border: '1px solid ' + (on ? 'var(--jade-400)' : 'var(--border-strong)'),
        background: on ? 'var(--grad-jade)' : 'var(--bg-inset)',
        boxShadow: on ? 'var(--glow-jade-sm)' : 'inset 0 1px 2px rgba(0,0,0,0.4)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'all var(--dur-fast) var(--ease-out)',
      }}>
        {on && <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--jade-950)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>}
      </span>
      {label && <span style={{ fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--bone-200)' }}>{label}</span>}
    </label>
  );
}
