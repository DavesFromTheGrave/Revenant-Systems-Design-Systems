import React from 'react';

/**
 * Revenant Systems — RuneMark
 * A framed brand sigil. Renders the Algiz rune (or any glyph / image src)
 * inside an optional hexagon (Metatron) frame with a jade glow. Use for
 * section marks, loaders, empty states, watermarks.
 */
export function RuneMark({ rune = 'ᛉ', src, size = 96, tone = 'jade', frame = true, glow = true, spin = false, style }) {
  const color = tone === 'gold' ? 'var(--gold-400)' : 'var(--jade-400)';
  const glowShadow = glow ? (tone === 'gold' ? 'var(--glow-gold-sm)' : 'var(--glow-jade-md)') : 'none';
  const inner = src
    ? <img src={src} alt="" style={{ width: '64%', height: '64%', objectFit: 'contain' }} />
    : <span style={{ fontFamily: 'var(--font-occult)', fontSize: size * 0.5, color, lineHeight: 1, textShadow: glow ? '0 0 16px ' + (tone === 'gold' ? 'var(--gold-500)' : 'var(--jade-500)') : 'none' }}>{rune}</span>;

  return (
    <span style={{
      position: 'relative', width: size, height: size, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', ...style,
    }}>
      {frame && (
        <svg viewBox="0 0 100 100" width={size} height={size} style={{
          position: 'absolute', inset: 0, filter: glow ? 'drop-shadow(0 0 10px ' + (tone === 'gold' ? 'rgba(201,162,78,.4)' : 'rgba(0,192,128,.4)') + ')' : 'none',
          animation: spin ? 'rs-rune-spin 24s linear infinite' : 'none',
        }} aria-hidden>
          <polygon points="50,4 91,27 91,73 50,96 9,73 9,27" fill="none" stroke={color} strokeWidth="1.5" opacity="0.55" />
          <polygon points="50,14 82,32 82,68 50,86 18,68 18,32" fill="none" stroke={color} strokeWidth="0.75" opacity="0.3" />
        </svg>
      )}
      <span style={{ boxShadow: !frame ? glowShadow : 'none', borderRadius: !frame ? '50%' : 0, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>{inner}</span>
      <style>{`@keyframes rs-rune-spin{to{transform:rotate(360deg)}}`}</style>
    </span>
  );
}
