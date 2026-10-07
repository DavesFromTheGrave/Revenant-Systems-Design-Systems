import React from 'react';

/** Revenant Systems — Select. Styled native select on the void with jade focus. */
export function Select({ label, hint, options = [], size = 'md', disabled = false, value, onChange, style, id, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const rid = id || React.useId();
  const h = { sm: 34, md: 42, lg: 50 }[size] || 42;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, ...style }}>
      {label && <label htmlFor={rid} style={{ fontFamily: 'var(--font-cyber)', fontSize: 12, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--bone-300)' }}>{label}</label>}
      <div style={{ position: 'relative', height: h }}>
        <select
          id={rid} value={value} onChange={onChange} disabled={disabled}
          onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
          style={{
            width: '100%', height: '100%', appearance: 'none', WebkitAppearance: 'none',
            background: 'var(--bg-inset)', color: 'var(--bone-100)',
            border: '1px solid ' + (focus ? 'var(--jade-500)' : 'var(--border-strong)'),
            borderRadius: 'var(--radius-md)', padding: '0 36px 0 12px',
            fontFamily: 'var(--font-sans)', fontSize: 15, outline: 'none', cursor: disabled ? 'not-allowed' : 'pointer',
            boxShadow: focus ? 'var(--glow-jade-sm)' : 'inset 0 1px 2px rgba(0,0,0,0.4)',
            transition: 'all var(--dur-base) var(--ease-out)', opacity: disabled ? 0.5 : 1,
          }}
          {...rest}
        >
          {options.map((o) => {
            const val = typeof o === 'string' ? o : o.value;
            const lab = typeof o === 'string' ? o : o.label;
            return <option key={val} value={val} style={{ background: '#0f1611', color: '#e7e1cf' }}>{lab}</option>;
          })}
        </select>
        <span style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: 'var(--jade-400)', fontSize: 12 }}>▾</span>
      </div>
      {hint && <span style={{ fontSize: 12, color: 'var(--text-faint)' }}>{hint}</span>}
    </div>
  );
}
