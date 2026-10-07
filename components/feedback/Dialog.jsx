import React from 'react';

/** Revenant Systems — Dialog. Modal on a blurred void scrim, jade/gold hairline. */
export function Dialog({ open, onClose, title, children, footer, width = 460, tone = 'jade', style }) {
  if (!open) return null;
  const rim = tone === 'gold' ? 'var(--border-gold)' : tone === 'danger' ? 'color-mix(in oklab, var(--ember-500) 45%, transparent)' : 'var(--border-jade)';
  const glow = tone === 'gold' ? 'var(--glow-gold-sm)' : tone === 'danger' ? 'var(--glow-ember)' : 'var(--glow-jade-sm)';
  return (
    <div onClick={onClose} style={{
      position: 'fixed', inset: 0, zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'color-mix(in oklab, var(--ink-900) 78%, transparent)', backdropFilter: 'blur(6px)', padding: 20,
    }}>
      <div onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" style={{
        width, maxWidth: '100%', background: 'var(--bg-card)', border: '1px solid ' + rim,
        borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-xl), ' + glow, overflow: 'hidden',
        animation: 'rs-rise var(--dur-slow) var(--ease-out)', ...style,
      }}>
        {title && (
          <div style={{ padding: '18px 20px 14px', borderBottom: '1px solid var(--border-hair)' }}>
            <h3 style={{ margin: 0, fontFamily: 'var(--font-cyber)', fontSize: 18, fontWeight: 700, color: 'var(--bone-100)' }}>{title}</h3>
          </div>
        )}
        <div style={{ padding: '18px 20px', color: 'var(--text-body)', fontFamily: 'var(--font-sans)', fontSize: 14, lineHeight: 1.55 }}>{children}</div>
        {footer && <div style={{ padding: '14px 20px 18px', display: 'flex', justifyContent: 'flex-end', gap: 10, borderTop: '1px solid var(--border-hair)' }}>{footer}</div>}
        <style>{`@keyframes rs-rise{from{opacity:0;transform:translateY(10px) scale(0.98)}to{opacity:1;transform:none}}`}</style>
      </div>
    </div>
  );
}
