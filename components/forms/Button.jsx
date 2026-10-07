import React from 'react';

/**
 * Revenant Systems — Button
 * Forged-metal control. Jade primary, gold secondary, ghost, danger.
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  disabled = false,
  loading = false,
  full = false,
  type = 'button',
  onClick,
  style,
  ...rest
}) {
  const sizes = {
    sm: { padding: '6px 12px', fontSize: 13, height: 32, gap: 6 },
    md: { padding: '9px 18px', fontSize: 14, height: 40, gap: 8 },
    lg: { padding: '13px 26px', fontSize: 16, height: 50, gap: 10 },
  };
  const s = sizes[size] || sizes.md;

  const base = {
    display: full ? 'flex' : 'inline-flex',
    width: full ? '100%' : undefined,
    alignItems: 'center',
    justifyContent: 'center',
    gap: s.gap,
    height: s.height,
    padding: s.padding,
    fontSize: s.fontSize,
    fontFamily: 'var(--font-cyber)',
    fontWeight: 600,
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    lineHeight: 1,
    borderRadius: 'var(--radius-md)',
    border: '1px solid transparent',
    cursor: disabled || loading ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    transition: 'background var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), transform var(--dur-fast) var(--ease-out), border-color var(--dur-base) var(--ease-out)',
    userSelect: 'none',
    whiteSpace: 'nowrap',
  };

  const variants = {
    primary: {
      background: 'var(--grad-jade)',
      color: 'var(--jade-950)',
      borderColor: 'color-mix(in oklab, var(--jade-300) 60%, transparent)',
      boxShadow: 'var(--bevel-top), var(--glow-jade-sm)',
    },
    secondary: {
      background: 'var(--grad-gold)',
      color: 'var(--gold-900)',
      borderColor: 'color-mix(in oklab, var(--gold-200) 60%, transparent)',
      boxShadow: 'var(--bevel-top), var(--glow-gold-sm)',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--bone-200)',
      borderColor: 'var(--border-strong)',
      boxShadow: 'none',
    },
    danger: {
      background: 'linear-gradient(180deg, var(--ember-500), var(--ember-600))',
      color: '#fff',
      borderColor: 'color-mix(in oklab, var(--ember-300) 55%, transparent)',
      boxShadow: 'var(--bevel-top), var(--glow-ember)',
    },
  };

  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const v = variants[variant] || variants.primary;

  const hoverStyle = hover && !disabled && !loading ? {
    filter: variant === 'ghost' ? 'none' : 'brightness(1.08)',
    background: variant === 'ghost' ? 'color-mix(in oklab, var(--jade-500) 12%, transparent)' : v.background,
    borderColor: variant === 'ghost' ? 'var(--border-jade)' : v.borderColor,
    boxShadow: variant === 'ghost' ? 'var(--glow-jade-sm)' : v.boxShadow,
  } : {};
  const pressStyle = press && !disabled && !loading ? { transform: 'translateY(1px)', filter: 'brightness(0.94)' } : {};

  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)}
      onMouseUp={() => setPress(false)}
      style={{ ...base, ...v, ...hoverStyle, ...pressStyle, ...style }}
      {...rest}
    >
      {loading && (
        <span style={{
          width: s.fontSize, height: s.fontSize, borderRadius: '50%',
          border: '2px solid currentColor', borderTopColor: 'transparent',
          display: 'inline-block', animation: 'rs-spin 0.7s linear infinite', opacity: 0.9,
        }} />
      )}
      {!loading && iconLeft}
      {children}
      {!loading && iconRight}
      <style>{`@keyframes rs-spin{to{transform:rotate(360deg)}}`}</style>
    </button>
  );
}
