import React from 'react';

/** Revenant Systems — Textarea. Inset multi-line field, jade focus glow. */
export function Textarea({ label, hint, error, rows = 4, disabled = false, style, id, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const rid = id || React.useId();
  const borderColor = error ? 'var(--ember-500)' : focus ? 'var(--jade-500)' : 'var(--border-strong)';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, ...style }}>
      {label && <label htmlFor={rid} style={{ fontFamily: 'var(--font-cyber)', fontSize: 12, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--bone-300)' }}>{label}</label>}
      <textarea
        id={rid} rows={rows} disabled={disabled}
        onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
        style={{
          background: 'var(--bg-inset)', border: '1px solid ' + borderColor, borderRadius: 'var(--radius-md)',
          padding: '10px 12px', color: 'var(--bone-100)', fontFamily: 'var(--font-sans)', fontSize: 15,
          resize: 'vertical', outline: 'none',
          boxShadow: focus ? 'var(--glow-jade-sm)' : 'inset 0 1px 2px rgba(0,0,0,0.4)',
          transition: 'all var(--dur-base) var(--ease-out)', opacity: disabled ? 0.5 : 1,
        }}
        {...rest}
      />
      {(hint || error) && <span style={{ fontSize: 12, color: error ? 'var(--ember-500)' : 'var(--text-faint)' }}>{error || hint}</span>}
    </div>
  );
}
