import React from 'react';

/**
 * Revenant Systems — Input
 * Inset field on the void. Jade focus glow. Optional label / hint / error / adornments.
 */
export function Input({
  label,
  hint,
  error,
  iconLeft,
  iconRight,
  size = 'md',
  disabled = false,
  style,
  id,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const rid = id || React.useId();
  const h = { sm: 34, md: 42, lg: 50 }[size] || 42;

  const borderColor = error ? 'var(--ember-500)' : focus ? 'var(--jade-500)' : 'var(--border-strong)';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, ...style }}>
      {label && (
        <label htmlFor={rid} style={{
          fontFamily: 'var(--font-cyber)', fontSize: 12, fontWeight: 600,
          letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--bone-300)',
        }}>{label}</label>
      )}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 8, height: h, padding: '0 12px',
        background: 'var(--bg-inset)', border: '1px solid ' + borderColor,
        borderRadius: 'var(--radius-md)',
        boxShadow: focus ? 'var(--glow-jade-sm)' : 'inset 0 1px 2px rgba(0,0,0,0.4)',
        transition: 'all var(--dur-base) var(--ease-out)',
        opacity: disabled ? 0.5 : 1,
      }}>
        {iconLeft && <span style={{ color: 'var(--bone-400)', display: 'flex' }}>{iconLeft}</span>}
        <input
          id={rid}
          disabled={disabled}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={{
            flex: 1, minWidth: 0, background: 'transparent', border: 'none', outline: 'none',
            color: 'var(--bone-100)', fontFamily: 'var(--font-sans)', fontSize: size === 'sm' ? 13 : 15,
          }}
          {...rest}
        />
        {iconRight && <span style={{ color: 'var(--bone-400)', display: 'flex' }}>{iconRight}</span>}
      </div>
      {(hint || error) && (
        <span style={{ fontSize: 12, color: error ? 'var(--ember-500)' : 'var(--text-faint)', fontFamily: 'var(--font-sans)' }}>
          {error || hint}
        </span>
      )}
    </div>
  );
}
