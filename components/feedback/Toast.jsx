import React from 'react';

/**
 * Revenant Systems — Toast
 * Notification card. Left accent rail keyed to tone; auto-dismiss optional.
 */
export function Toast({ title, message, tone = 'jade', icon, onClose, style }) {
  const tones = {
    jade: 'var(--jade-500)', gold: 'var(--gold-500)', danger: 'var(--ember-500)', warning: 'var(--amber-500)',
  };
  const c = tones[tone] || tones.jade;
  return (
    <div role="status" style={{
      display: 'flex', alignItems: 'flex-start', gap: 12, width: 340, maxWidth: '100%',
      background: 'var(--bg-card)', border: '1px solid var(--border-hair)', borderLeft: '3px solid ' + c,
      borderRadius: 'var(--radius-md)', padding: '12px 14px', boxShadow: 'var(--shadow-lg)',
      backdropFilter: 'var(--blur-panel)', ...style,
    }}>
      {icon && <span style={{ color: c, display: 'flex', marginTop: 1 }}>{icon}</span>}
      <div style={{ flex: 1, minWidth: 0 }}>
        {title && <div style={{ fontFamily: 'var(--font-cyber)', fontSize: 14, fontWeight: 700, color: 'var(--bone-100)', marginBottom: message ? 2 : 0 }}>{title}</div>}
        {message && <div style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.45 }}>{message}</div>}
      </div>
      {onClose && (
        <button onClick={onClose} aria-label="Dismiss" style={{ background: 'transparent', border: 'none', color: 'var(--bone-400)', cursor: 'pointer', padding: 2, display: 'flex' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
        </button>
      )}
    </div>
  );
}
