import React from 'react';

/** Revenant Systems — Tooltip. Dark panel on hover, jade hairline. */
export function Tooltip({ children, content, side = 'top', style }) {
  const [show, setShow] = React.useState(false);
  const pos = {
    top: { bottom: '100%', left: '50%', transform: 'translateX(-50%)', marginBottom: 8 },
    bottom: { top: '100%', left: '50%', transform: 'translateX(-50%)', marginTop: 8 },
    left: { right: '100%', top: '50%', transform: 'translateY(-50%)', marginRight: 8 },
    right: { left: '100%', top: '50%', transform: 'translateY(-50%)', marginLeft: 8 },
  };
  return (
    <span style={{ position: 'relative', display: 'inline-flex', ...style }}
      onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
      {children}
      {show && (
        <span role="tooltip" style={{
          position: 'absolute', ...pos[side], zIndex: 50, whiteSpace: 'nowrap',
          background: 'var(--bg-raised)', color: 'var(--bone-100)', border: '1px solid var(--border-jade)',
          borderRadius: 'var(--radius-md)', padding: '6px 10px', fontFamily: 'var(--font-sans)', fontSize: 12,
          boxShadow: 'var(--shadow-lg), var(--glow-jade-sm)', pointerEvents: 'none',
        }}>{content}</span>
      )}
    </span>
  );
}
