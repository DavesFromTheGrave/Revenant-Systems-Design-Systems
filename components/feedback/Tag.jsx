import React from 'react';

/** Revenant Systems — Tag. Removable keyword/token chip (rounded pill). */
export function Tag({ children, onRemove, tone = 'jade', style }) {
  const tones = {
    jade: { fg: 'var(--jade-300)', bd: 'var(--border-jade)' },
    gold: { fg: 'var(--gold-300)', bd: 'var(--border-gold)' },
    neutral: { fg: 'var(--bone-300)', bd: 'var(--border-hair)' },
  };
  const t = tones[tone] || tones.jade;
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6, padding: '4px 6px 4px 12px',
      background: 'var(--bg-raised)', color: t.fg, border: '1px solid ' + t.bd,
      borderRadius: 'var(--radius-pill)', fontFamily: 'var(--font-mono)', fontSize: 12, lineHeight: 1, ...style,
    }}>
      {children}
      {onRemove && (
        <button onClick={onRemove} aria-label="Remove" style={{
          width: 16, height: 16, display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          background: 'transparent', border: 'none', color: 'currentColor', cursor: 'pointer', opacity: 0.7, borderRadius: '50%', padding: 0,
        }}>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
        </button>
      )}
    </span>
  );
}
