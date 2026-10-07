import React from 'react';

/**
 * Revenant Systems — OperatorPill
 * Renders a RAGE operator as a mono chip with its glyph. The product's
 * signature notation: Containment [...], Omega Ω, Chi Χ, Sigma Σ, Xi Ξ.
 */
const OPERATORS = {
  containment: { glyph: '[…]', name: 'Containment' },
  omega: { glyph: 'Ω', name: 'Omega' },
  chi: { glyph: 'Χ', name: 'Chi' },
  sigma: { glyph: 'Σ', name: 'Sigma' },
  xi: { glyph: 'Ξ', name: 'Xi' },
  algiz: { glyph: 'ᛉ', name: 'Algiz' },
};

export function OperatorPill({ operator = 'omega', state = 'idle', showName = true, style }) {
  const op = OPERATORS[operator] || OPERATORS[String(operator).toLowerCase()] || { glyph: operator, name: operator };
  const states = {
    idle:   { c: 'var(--bone-400)', bd: 'var(--border-hair)', glow: 'none' },
    active: { c: 'var(--jade-400)', bd: 'var(--border-jade)', glow: 'var(--glow-jade-sm)' },
    done:   { c: 'var(--jade-500)', bd: 'color-mix(in oklab, var(--jade-500) 40%, transparent)', glow: 'none' },
    flagged:{ c: 'var(--ember-500)', bd: 'color-mix(in oklab, var(--ember-500) 45%, transparent)', glow: 'none' },
  };
  const s = states[state] || states.idle;
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 12px',
      background: 'var(--bg-inset)', border: '1px solid ' + s.bd, borderRadius: 'var(--radius-md)',
      boxShadow: s.glow, fontFamily: 'var(--font-mono)', color: s.c, lineHeight: 1,
      transition: 'all var(--dur-base) var(--ease-out)', ...style,
    }}>
      <span style={{
        fontSize: 16, fontWeight: 700,
        animation: state === 'active' ? 'rs-op-breathe 1.6s var(--ease-in-out) infinite' : 'none',
      }}>{op.glyph}</span>
      {showName && <span style={{ fontSize: 12, letterSpacing: '0.06em' }}>{op.name}</span>}
      <style>{`@keyframes rs-op-breathe{0%,100%{opacity:1;text-shadow:0 0 10px currentColor}50%{opacity:.55;text-shadow:none}}`}</style>
    </span>
  );
}
