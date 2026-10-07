import React from 'react';

/** Revenant Systems — Switch. Sliding toggle; jade current when on, glow when live. */
export function Switch({ checked, defaultChecked, onChange, label, disabled = false, id, style }) {
  const rid = id || React.useId();
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const isControlled = checked !== undefined;
  const on = isControlled ? checked : internal;
  const toggle = () => { if (disabled) return; const nv = !on; if (!isControlled) setInternal(nv); onChange && onChange(nv); };
  return (
    <label htmlFor={rid} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1, ...style }}>
      <button
        id={rid} role="switch" aria-checked={on} type="button" onClick={toggle} disabled={disabled}
        style={{
          width: 44, height: 24, borderRadius: 'var(--radius-pill)', padding: 2, border: '1px solid ' + (on ? 'var(--jade-400)' : 'var(--border-strong)'),
          background: on ? 'var(--grad-jade)' : 'var(--bg-inset)',
          boxShadow: on ? 'var(--glow-jade-sm)' : 'inset 0 1px 2px rgba(0,0,0,0.4)',
          cursor: disabled ? 'not-allowed' : 'pointer', transition: 'all var(--dur-base) var(--ease-out)', position: 'relative',
        }}
      >
        <span style={{
          display: 'block', width: 18, height: 18, borderRadius: '50%',
          background: on ? 'var(--jade-950)' : 'var(--bone-300)',
          transform: on ? 'translateX(20px)' : 'translateX(0)',
          transition: 'transform var(--dur-base) var(--ease-out)',
          boxShadow: '0 1px 3px rgba(0,0,0,0.6)',
        }} />
      </button>
      {label && <span style={{ fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--bone-200)' }}>{label}</span>}
    </label>
  );
}
