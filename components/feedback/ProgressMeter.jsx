import React from 'react';

/**
 * Revenant Systems — ProgressMeter
 * Metric bar for coherence / entropy / malice. Jade by default, ember for malice.
 */
export function ProgressMeter({ value = 0, max = 1, label, tone = 'jade', showValue = true, style }) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100));
  const fills = {
    jade: 'var(--grad-jade)',
    gold: 'var(--grad-gold)',
    ember: 'linear-gradient(90deg, var(--amber-500), var(--ember-500))',
  };
  const fill = fills[tone] || fills.jade;
  const glow = tone === 'ember' ? 'var(--glow-ember)' : 'var(--glow-jade-sm)';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, ...style }}>
      {(label || showValue) && (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          {label && <span style={{ fontFamily: 'var(--font-cyber)', fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--bone-300)' }}>{label}</span>}
          {showValue && <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: tone === 'ember' ? 'var(--ember-300)' : 'var(--jade-300)' }}>{typeof value === 'number' && max === 1 ? value.toFixed(2) : value}</span>}
        </div>
      )}
      <div style={{ height: 8, borderRadius: 'var(--radius-pill)', background: 'var(--bg-inset)', border: '1px solid var(--border-hair)', overflow: 'hidden', boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.5)' }}>
        <div style={{ height: '100%', width: pct + '%', background: fill, boxShadow: glow, transition: 'width var(--dur-slow) var(--ease-out)' }} />
      </div>
    </div>
  );
}
