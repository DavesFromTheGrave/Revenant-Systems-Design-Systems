import React from 'react';

/**
 * Revenant Systems — IconButton
 * Square/rounded icon-only control. Pass a Lucide (or any) icon node as children.
 */
export function IconButton({
  children,
  variant = 'ghost',
  size = 'md',
  label,
  disabled = false,
  active = false,
  onClick,
  style,
  ...rest
}) {
  const dims = { sm: 30, md: 38, lg: 46 }[size] || 38;
  const [hover, setHover] = React.useState(false);

  const variants = {
    ghost: { background: active ? 'color-mix(in oklab, var(--jade-500) 16%, transparent)' : 'transparent', color: active ? 'var(--jade-400)' : 'var(--bone-300)', border: '1px solid ' + (active ? 'var(--border-jade)' : 'var(--border-hair)') },
    solid: { background: 'var(--bg-raised)', color: 'var(--bone-200)', border: '1px solid var(--border-strong)' },
    jade: { background: 'var(--grad-jade)', color: 'var(--jade-950)', border: '1px solid color-mix(in oklab, var(--jade-300) 60%, transparent)' },
  };
  const v = variants[variant] || variants.ghost;

  return (
    <button
      aria-label={label}
      title={label}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        width: dims, height: dims,
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        borderRadius: 'var(--radius-md)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.45 : 1,
        transition: 'all var(--dur-fast) var(--ease-out)',
        boxShadow: hover && !disabled && variant !== 'jade' ? 'var(--glow-jade-sm)' : (variant === 'jade' ? 'var(--glow-jade-sm)' : 'none'),
        ...v,
        ...(hover && !disabled ? { color: variant === 'jade' ? 'var(--jade-950)' : 'var(--jade-300)', borderColor: 'var(--border-jade)', filter: variant === 'jade' ? 'brightness(1.08)' : 'none' } : {}),
        ...style,
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
