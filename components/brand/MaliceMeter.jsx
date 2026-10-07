import React from 'react';

/**
 * Revenant Systems — MaliceMeter
 * Semicircular gauge for the derived Malice safety metric (0–1).
 * Needle + arc shift jade → amber → ember as risk rises.
 */
export function MaliceMeter({ value = 0, size = 160, label = 'Malice', style }) {
  const v = Math.max(0, Math.min(1, value));
  const color = v < 0.34 ? 'var(--jade-500)' : v < 0.67 ? 'var(--amber-500)' : 'var(--ember-500)';
  const glowC = v < 0.34 ? 'rgba(0,192,128,.5)' : v < 0.67 ? 'rgba(232,160,32,.5)' : 'rgba(226,59,30,.6)';
  const r = 42, cx = 50, cy = 50;
  // semicircle from 180deg (left) to 0deg (right)
  const ang = Math.PI * (1 - v);
  const ex = cx + r * Math.cos(ang), ey = cy - r * Math.sin(ang);
  const arcLen = Math.PI * r;
  const level = v < 0.34 ? 'contained' : v < 0.67 ? 'elevated' : 'high';
  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 4, ...style }}>
      <svg viewBox="0 0 100 60" width={size} height={size * 0.6} style={{ filter: 'drop-shadow(0 0 8px ' + glowC + ')' }}>
        <path d="M8 50 A42 42 0 0 1 92 50" fill="none" stroke="var(--bg-inset)" strokeWidth="7" strokeLinecap="round" />
        <path d="M8 50 A42 42 0 0 1 92 50" fill="none" stroke={color} strokeWidth="7" strokeLinecap="round"
          strokeDasharray={arcLen} strokeDashoffset={arcLen * (1 - v)} style={{ transition: 'stroke-dashoffset var(--dur-slow) var(--ease-out), stroke var(--dur-base)' }} />
        <line x1={cx} y1={cy} x2={ex} y2={ey} stroke={color} strokeWidth="2" strokeLinecap="round" style={{ transition: 'all var(--dur-slow) var(--ease-out)' }} />
        <circle cx={cx} cy={cy} r="4" fill={color} />
      </svg>
      <div style={{ textAlign: 'center', marginTop: -4 }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: size * 0.16, fontWeight: 700, color }}>{v.toFixed(2)}</div>
        <div style={{ fontFamily: 'var(--font-cyber)', fontSize: 10, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--bone-400)' }}>{label} · {level}</div>
      </div>
    </div>
  );
}
