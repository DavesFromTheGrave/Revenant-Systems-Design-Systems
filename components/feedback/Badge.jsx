import React from 'react';

/** Revenant Systems — Badge. Small status/label chip. */
export function Badge({ children, variant = 'neutral', size = 'md', dot = false, style }) {
  const variants = {
    neutral: { bg: 'var(--bg-raised)', fg: 'var(--bone-300)', bd: 'var(--border-hair)' },
    jade:    { bg: 'color-mix(in oklab, var(--jade-500) 16%, transparent)', fg: 'var(--jade-300)', bd: 'var(--border-jade)' },
    gold:    { bg: 'color-mix(in oklab, var(--gold-500) 16%, transparent)', fg: 'var(--gold-300)', bd: 'var(--border-gold)' },
    danger:  { bg: 'color-mix(in oklab, var(--ember-500) 18%, transparent)', fg: 'var(--ember-300)', bd: 'color-mix(in oklab, var(--ember-500) 45%, transparent)' },
    warning: { bg: 'color-mix(in oklab, var(--amber-500) 18%, transparent)', fg: 'var(--amber-500)', bd: 'color-mix(in oklab, var(--amber-500) 45%, transparent)' },
  };
  const v = variants[variant] || variants.neutral;
  const pad = size === 'sm' ? '2px 8px' : '3px 10px';
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6, padding: pad,
      background: v.bg, color: v.fg, border: '1px solid ' + v.bd, borderRadius: 'var(--radius-sm)',
      fontFamily: 'var(--font-cyber)', fontSize: size === 'sm' ? 10 : 11, fontWeight: 600,
      letterSpacing: '0.1em', textTransform: 'uppercase', lineHeight: 1.4, ...style,
    }}>
      {dot && <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'currentColor', boxShadow: '0 0 6px currentColor' }} />}
      {children}
    </span>
  );
}
