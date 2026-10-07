import React from 'react';

/**
 * Revenant Systems — Card
 * Dark raised surface on the void. Hairline border, cold shadow, edge bevel.
 * `active`/`tone` adds a jade or gold rim + glow. `interactive` lifts on hover.
 */
export function Card({ children, tone, active = false, interactive = false, padding = 20, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const lit = active || (interactive && hover);
  const rim = tone === 'gold' ? 'var(--border-gold)' : 'var(--border-jade)';
  const glow = tone === 'gold' ? 'var(--glow-gold-sm)' : 'var(--glow-jade-sm)';
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: 'var(--bg-card)',
        border: '1px solid ' + (lit ? rim : 'var(--border-hair)'),
        borderRadius: 'var(--radius-lg)',
        boxShadow: lit ? 'var(--shadow-lg), ' + glow : 'var(--shadow-md), var(--bevel-top)',
        padding,
        transition: 'all var(--dur-base) var(--ease-out)',
        transform: interactive && hover ? 'translateY(-2px)' : 'none',
        cursor: interactive ? 'pointer' : 'default',
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
