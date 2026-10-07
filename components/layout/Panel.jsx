import React from 'react';

/**
 * Revenant Systems — Panel
 * Titled section container with an engraved eyebrow header + optional rune watermark.
 */
export function Panel({ title, eyebrow, actions, children, rune, padding = 20, style }) {
  return (
    <section style={{
      position: 'relative', overflow: 'hidden',
      background: 'var(--bg-surface)', border: '1px solid var(--border-hair)',
      borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', ...style,
    }}>
      {rune && (
        <span aria-hidden style={{
          position: 'absolute', right: -10, top: -18, fontSize: 120, lineHeight: 1,
          color: 'var(--jade-500)', opacity: 0.05, fontFamily: 'var(--font-occult)', pointerEvents: 'none',
        }}>{rune}</span>
      )}
      {(title || eyebrow || actions) && (
        <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, padding: '14px 18px', borderBottom: '1px solid var(--border-hair)' }}>
          <div>
            {eyebrow && <div style={{ fontFamily: 'var(--font-cyber)', fontSize: 10, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--gold-500)', marginBottom: 3 }}>{eyebrow}</div>}
            {title && <h3 style={{ margin: 0, fontFamily: 'var(--font-cyber)', fontSize: 16, fontWeight: 700, color: 'var(--bone-100)' }}>{title}</h3>}
          </div>
          {actions && <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>{actions}</div>}
        </header>
      )}
      <div style={{ padding, position: 'relative' }}>{children}</div>
    </section>
  );
}
