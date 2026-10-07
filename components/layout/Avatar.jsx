import React from 'react';

/**
 * Revenant Systems — Avatar
 * Ring-framed identity. Image, initials, or a rune. Optional live status ring.
 */
export function Avatar({ src, name, rune, size = 40, tone = 'jade', live = false, style }) {
  const ring = tone === 'gold' ? 'var(--gold-500)' : 'var(--jade-500)';
  const initials = name ? name.split(/\s+/).map((w) => w[0]).slice(0, 2).join('').toUpperCase() : '';
  return (
    <span style={{
      width: size, height: size, borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      background: src ? 'var(--bg-inset)' : 'var(--grad-jade-soft)',
      border: '2px solid ' + ring, boxShadow: live ? 'var(--glow-jade-md)' : '0 0 0 3px var(--bg-void)',
      overflow: 'hidden', position: 'relative', flex: '0 0 auto', ...style,
    }}>
      {src ? <img src={src} alt={name || ''} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        : rune ? <span style={{ fontFamily: 'var(--font-occult)', fontSize: size * 0.5, color: 'var(--jade-950)' }}>{rune}</span>
        : <span style={{ fontFamily: 'var(--font-cyber)', fontWeight: 700, fontSize: size * 0.36, color: 'var(--jade-950)' }}>{initials}</span>}
    </span>
  );
}
