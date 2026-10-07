import React from 'react';

/**
 * Revenant Systems — StatusPill
 * Machine-honest runtime status. Lowercase mono. active/bypass, passed/flagged, etc.
 */
export function StatusPill({ status = 'active', label, pulse, style }) {
  const map = {
    active:  { c: 'var(--jade-400)', t: label || 'active' },
    live:    { c: 'var(--arcane-400)', t: label || 'live' },
    passed:  { c: 'var(--jade-500)', t: label || 'passed' },
    bypass:  { c: 'var(--bone-400)', t: label || 'bypass' },
    flagged: { c: 'var(--ember-500)', t: label || 'flagged' },
    vetoed:  { c: 'var(--ember-500)', t: label || 'vetoed' },
    warning: { c: 'var(--amber-500)', t: label || 'warning' },
  };
  const m = map[status] || map.active;
  const shouldPulse = pulse ?? (status === 'active' || status === 'live');
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 7, padding: '4px 10px 4px 9px',
      background: 'var(--bg-inset)', border: '1px solid color-mix(in oklab, ' + m.c + ' 40%, transparent)',
      borderRadius: 'var(--radius-pill)', fontFamily: 'var(--font-mono)', fontSize: 12, color: m.c, lineHeight: 1, ...style,
    }}>
      <span style={{
        width: 7, height: 7, borderRadius: '50%', background: m.c, boxShadow: '0 0 8px ' + m.c,
        animation: shouldPulse ? 'rs-pulse 1.6s var(--ease-in-out) infinite' : 'none',
      }} />
      {m.t}
      <style>{`@keyframes rs-pulse{0%,100%{opacity:1;box-shadow:0 0 8px currentColor}50%{opacity:.4;box-shadow:0 0 2px currentColor}}`}</style>
    </span>
  );
}
