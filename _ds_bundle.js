/* @ds-bundle: {"format":4,"namespace":"RevenantSystemsDesignSystem_019ddb","components":[{"name":"MaliceMeter","sourcePath":"components/brand/MaliceMeter.jsx"},{"name":"OperatorPill","sourcePath":"components/brand/OperatorPill.jsx"},{"name":"RuneMark","sourcePath":"components/brand/RuneMark.jsx"},{"name":"Badge","sourcePath":"components/feedback/Badge.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"ProgressMeter","sourcePath":"components/feedback/ProgressMeter.jsx"},{"name":"StatusPill","sourcePath":"components/feedback/StatusPill.jsx"},{"name":"Tag","sourcePath":"components/feedback/Tag.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"IconButton","sourcePath":"components/forms/IconButton.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Avatar","sourcePath":"components/layout/Avatar.jsx"},{"name":"Card","sourcePath":"components/layout/Card.jsx"},{"name":"Panel","sourcePath":"components/layout/Panel.jsx"},{"name":"Tabs","sourcePath":"components/layout/Tabs.jsx"}],"sourceHashes":{"components/brand/MaliceMeter.jsx":"a254b2d8fdcc","components/brand/OperatorPill.jsx":"bdbc6855e6c4","components/brand/RuneMark.jsx":"8953713de1ad","components/feedback/Badge.jsx":"0741c472e093","components/feedback/Dialog.jsx":"54f532f26fd1","components/feedback/ProgressMeter.jsx":"c3ec05d83864","components/feedback/StatusPill.jsx":"2be884b9f48a","components/feedback/Tag.jsx":"8c3a67fe7a10","components/feedback/Toast.jsx":"9303ab4141a7","components/feedback/Tooltip.jsx":"024b2bdb3c30","components/forms/Button.jsx":"1259b92eec20","components/forms/Checkbox.jsx":"58f1c76bfa2c","components/forms/IconButton.jsx":"68a5309b25dd","components/forms/Input.jsx":"9a48c31d4caf","components/forms/Select.jsx":"14744eb84a9f","components/forms/Switch.jsx":"9dad2d03318b","components/forms/Textarea.jsx":"01aa85166cbe","components/layout/Avatar.jsx":"f91fabf8b1f7","components/layout/Card.jsx":"245df631f839","components/layout/Panel.jsx":"86f979cb7830","components/layout/Tabs.jsx":"725cbd8060f6","ui_kits/algiz/AppShell.jsx":"bf279254deac","ui_kits/algiz/PipelineRunner.jsx":"d07dd80b8b1b","ui_kits/algiz/TraceInspector.jsx":"fbeaa1e1607e"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.RevenantSystemsDesignSystem_019ddb = window.RevenantSystemsDesignSystem_019ddb || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/MaliceMeter.jsx
try { (() => {
/**
 * Revenant Systems — MaliceMeter
 * Semicircular gauge for the derived Malice safety metric (0–1).
 * Needle + arc shift jade → amber → ember as risk rises.
 */
function MaliceMeter({
  value = 0,
  size = 160,
  label = 'Malice',
  style
}) {
  const v = Math.max(0, Math.min(1, value));
  const color = v < 0.34 ? 'var(--jade-500)' : v < 0.67 ? 'var(--amber-500)' : 'var(--ember-500)';
  const glowC = v < 0.34 ? 'rgba(0,192,128,.5)' : v < 0.67 ? 'rgba(232,160,32,.5)' : 'rgba(226,59,30,.6)';
  const r = 42,
    cx = 50,
    cy = 50;
  // semicircle from 180deg (left) to 0deg (right)
  const ang = Math.PI * (1 - v);
  const ex = cx + r * Math.cos(ang),
    ey = cy - r * Math.sin(ang);
  const arcLen = Math.PI * r;
  const level = v < 0.34 ? 'contained' : v < 0.67 ? 'elevated' : 'high';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 4,
      ...style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 60",
    width: size,
    height: size * 0.6,
    style: {
      filter: 'drop-shadow(0 0 8px ' + glowC + ')'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8 50 A42 42 0 0 1 92 50",
    fill: "none",
    stroke: "var(--bg-inset)",
    strokeWidth: "7",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 50 A42 42 0 0 1 92 50",
    fill: "none",
    stroke: color,
    strokeWidth: "7",
    strokeLinecap: "round",
    strokeDasharray: arcLen,
    strokeDashoffset: arcLen * (1 - v),
    style: {
      transition: 'stroke-dashoffset var(--dur-slow) var(--ease-out), stroke var(--dur-base)'
    }
  }), /*#__PURE__*/React.createElement("line", {
    x1: cx,
    y1: cy,
    x2: ex,
    y2: ey,
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    style: {
      transition: 'all var(--dur-slow) var(--ease-out)'
    }
  }), /*#__PURE__*/React.createElement("circle", {
    cx: cx,
    cy: cy,
    r: "4",
    fill: color
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: -4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: size * 0.16,
      fontWeight: 700,
      color
    }
  }, v.toFixed(2)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-cyber)',
      fontSize: 10,
      fontWeight: 600,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--bone-400)'
    }
  }, label, " \xB7 ", level)));
}
Object.assign(__ds_scope, { MaliceMeter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/MaliceMeter.jsx", error: String((e && e.message) || e) }); }

// components/brand/OperatorPill.jsx
try { (() => {
/**
 * Revenant Systems — OperatorPill
 * Renders a RAGE operator as a mono chip with its glyph. The product's
 * signature notation: Containment [...], Omega Ω, Chi Χ, Sigma Σ, Xi Ξ.
 */
const OPERATORS = {
  containment: {
    glyph: '[…]',
    name: 'Containment'
  },
  omega: {
    glyph: 'Ω',
    name: 'Omega'
  },
  chi: {
    glyph: 'Χ',
    name: 'Chi'
  },
  sigma: {
    glyph: 'Σ',
    name: 'Sigma'
  },
  xi: {
    glyph: 'Ξ',
    name: 'Xi'
  },
  algiz: {
    glyph: 'ᛉ',
    name: 'Algiz'
  }
};
function OperatorPill({
  operator = 'omega',
  state = 'idle',
  showName = true,
  style
}) {
  const op = OPERATORS[operator] || OPERATORS[String(operator).toLowerCase()] || {
    glyph: operator,
    name: operator
  };
  const states = {
    idle: {
      c: 'var(--bone-400)',
      bd: 'var(--border-hair)',
      glow: 'none'
    },
    active: {
      c: 'var(--jade-400)',
      bd: 'var(--border-jade)',
      glow: 'var(--glow-jade-sm)'
    },
    done: {
      c: 'var(--jade-500)',
      bd: 'color-mix(in oklab, var(--jade-500) 40%, transparent)',
      glow: 'none'
    },
    flagged: {
      c: 'var(--ember-500)',
      bd: 'color-mix(in oklab, var(--ember-500) 45%, transparent)',
      glow: 'none'
    }
  };
  const s = states[state] || states.idle;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '5px 12px',
      background: 'var(--bg-inset)',
      border: '1px solid ' + s.bd,
      borderRadius: 'var(--radius-md)',
      boxShadow: s.glow,
      fontFamily: 'var(--font-mono)',
      color: s.c,
      lineHeight: 1,
      transition: 'all var(--dur-base) var(--ease-out)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 700,
      animation: state === 'active' ? 'rs-op-breathe 1.6s var(--ease-in-out) infinite' : 'none'
    }
  }, op.glyph), showName && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      letterSpacing: '0.06em'
    }
  }, op.name), /*#__PURE__*/React.createElement("style", null, `@keyframes rs-op-breathe{0%,100%{opacity:1;text-shadow:0 0 10px currentColor}50%{opacity:.55;text-shadow:none}}`));
}
Object.assign(__ds_scope, { OperatorPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/OperatorPill.jsx", error: String((e && e.message) || e) }); }

// components/brand/RuneMark.jsx
try { (() => {
/**
 * Revenant Systems — RuneMark
 * A framed brand sigil. Renders the Algiz rune (or any glyph / image src)
 * inside an optional hexagon (Metatron) frame with a jade glow. Use for
 * section marks, loaders, empty states, watermarks.
 */
function RuneMark({
  rune = 'ᛉ',
  src,
  size = 96,
  tone = 'jade',
  frame = true,
  glow = true,
  spin = false,
  style
}) {
  const color = tone === 'gold' ? 'var(--gold-400)' : 'var(--jade-400)';
  const glowShadow = glow ? tone === 'gold' ? 'var(--glow-gold-sm)' : 'var(--glow-jade-md)' : 'none';
  const inner = src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    style: {
      width: '64%',
      height: '64%',
      objectFit: 'contain'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-occult)',
      fontSize: size * 0.5,
      color,
      lineHeight: 1,
      textShadow: glow ? '0 0 16px ' + (tone === 'gold' ? 'var(--gold-500)' : 'var(--jade-500)') : 'none'
    }
  }, rune);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: size,
      height: size,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      ...style
    }
  }, frame && /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 100",
    width: size,
    height: size,
    style: {
      position: 'absolute',
      inset: 0,
      filter: glow ? 'drop-shadow(0 0 10px ' + (tone === 'gold' ? 'rgba(201,162,78,.4)' : 'rgba(0,192,128,.4)') + ')' : 'none',
      animation: spin ? 'rs-rune-spin 24s linear infinite' : 'none'
    },
    "aria-hidden": true
  }, /*#__PURE__*/React.createElement("polygon", {
    points: "50,4 91,27 91,73 50,96 9,73 9,27",
    fill: "none",
    stroke: color,
    strokeWidth: "1.5",
    opacity: "0.55"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "50,14 82,32 82,68 50,86 18,68 18,32",
    fill: "none",
    stroke: color,
    strokeWidth: "0.75",
    opacity: "0.3"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      boxShadow: !frame ? glowShadow : 'none',
      borderRadius: !frame ? '50%' : 0,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%'
    }
  }, inner), /*#__PURE__*/React.createElement("style", null, `@keyframes rs-rune-spin{to{transform:rotate(360deg)}}`));
}
Object.assign(__ds_scope, { RuneMark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/RuneMark.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Badge.jsx
try { (() => {
/** Revenant Systems — Badge. Small status/label chip. */
function Badge({
  children,
  variant = 'neutral',
  size = 'md',
  dot = false,
  style
}) {
  const variants = {
    neutral: {
      bg: 'var(--bg-raised)',
      fg: 'var(--bone-300)',
      bd: 'var(--border-hair)'
    },
    jade: {
      bg: 'color-mix(in oklab, var(--jade-500) 16%, transparent)',
      fg: 'var(--jade-300)',
      bd: 'var(--border-jade)'
    },
    gold: {
      bg: 'color-mix(in oklab, var(--gold-500) 16%, transparent)',
      fg: 'var(--gold-300)',
      bd: 'var(--border-gold)'
    },
    danger: {
      bg: 'color-mix(in oklab, var(--ember-500) 18%, transparent)',
      fg: 'var(--ember-300)',
      bd: 'color-mix(in oklab, var(--ember-500) 45%, transparent)'
    },
    warning: {
      bg: 'color-mix(in oklab, var(--amber-500) 18%, transparent)',
      fg: 'var(--amber-500)',
      bd: 'color-mix(in oklab, var(--amber-500) 45%, transparent)'
    }
  };
  const v = variants[variant] || variants.neutral;
  const pad = size === 'sm' ? '2px 8px' : '3px 10px';
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: pad,
      background: v.bg,
      color: v.fg,
      border: '1px solid ' + v.bd,
      borderRadius: 'var(--radius-sm)',
      fontFamily: 'var(--font-cyber)',
      fontSize: size === 'sm' ? 10 : 11,
      fontWeight: 600,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      lineHeight: 1.4,
      ...style
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'currentColor',
      boxShadow: '0 0 6px currentColor'
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Badge.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
/** Revenant Systems — Dialog. Modal on a blurred void scrim, jade/gold hairline. */
function Dialog({
  open,
  onClose,
  title,
  children,
  footer,
  width = 460,
  tone = 'jade',
  style
}) {
  if (!open) return null;
  const rim = tone === 'gold' ? 'var(--border-gold)' : tone === 'danger' ? 'color-mix(in oklab, var(--ember-500) 45%, transparent)' : 'var(--border-jade)';
  const glow = tone === 'gold' ? 'var(--glow-gold-sm)' : tone === 'danger' ? 'var(--glow-ember)' : 'var(--glow-jade-sm)';
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'color-mix(in oklab, var(--ink-900) 78%, transparent)',
      backdropFilter: 'blur(6px)',
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    role: "dialog",
    "aria-modal": "true",
    style: {
      width,
      maxWidth: '100%',
      background: 'var(--bg-card)',
      border: '1px solid ' + rim,
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-xl), ' + glow,
      overflow: 'hidden',
      animation: 'rs-rise var(--dur-slow) var(--ease-out)',
      ...style
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 20px 14px',
      borderBottom: '1px solid var(--border-hair)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-cyber)',
      fontSize: 18,
      fontWeight: 700,
      color: 'var(--bone-100)'
    }
  }, title)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 20px',
      color: 'var(--text-body)',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      lineHeight: 1.55
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 20px 18px',
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 10,
      borderTop: '1px solid var(--border-hair)'
    }
  }, footer), /*#__PURE__*/React.createElement("style", null, `@keyframes rs-rise{from{opacity:0;transform:translateY(10px) scale(0.98)}to{opacity:1;transform:none}}`)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ProgressMeter.jsx
try { (() => {
/**
 * Revenant Systems — ProgressMeter
 * Metric bar for coherence / entropy / malice. Jade by default, ember for malice.
 */
function ProgressMeter({
  value = 0,
  max = 1,
  label,
  tone = 'jade',
  showValue = true,
  style
}) {
  const pct = Math.max(0, Math.min(100, value / max * 100));
  const fills = {
    jade: 'var(--grad-jade)',
    gold: 'var(--grad-gold)',
    ember: 'linear-gradient(90deg, var(--amber-500), var(--ember-500))'
  };
  const fill = fills[tone] || fills.jade;
  const glow = tone === 'ember' ? 'var(--glow-ember)' : 'var(--glow-jade-sm)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, (label || showValue) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-cyber)',
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--bone-300)'
    }
  }, label), showValue && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: tone === 'ember' ? 'var(--ember-300)' : 'var(--jade-300)'
    }
  }, typeof value === 'number' && max === 1 ? value.toFixed(2) : value)), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 8,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--bg-inset)',
      border: '1px solid var(--border-hair)',
      overflow: 'hidden',
      boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      width: pct + '%',
      background: fill,
      boxShadow: glow,
      transition: 'width var(--dur-slow) var(--ease-out)'
    }
  })));
}
Object.assign(__ds_scope, { ProgressMeter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ProgressMeter.jsx", error: String((e && e.message) || e) }); }

// components/feedback/StatusPill.jsx
try { (() => {
/**
 * Revenant Systems — StatusPill
 * Machine-honest runtime status. Lowercase mono. active/bypass, passed/flagged, etc.
 */
function StatusPill({
  status = 'active',
  label,
  pulse,
  style
}) {
  const map = {
    active: {
      c: 'var(--jade-400)',
      t: label || 'active'
    },
    live: {
      c: 'var(--arcane-400)',
      t: label || 'live'
    },
    passed: {
      c: 'var(--jade-500)',
      t: label || 'passed'
    },
    bypass: {
      c: 'var(--bone-400)',
      t: label || 'bypass'
    },
    flagged: {
      c: 'var(--ember-500)',
      t: label || 'flagged'
    },
    vetoed: {
      c: 'var(--ember-500)',
      t: label || 'vetoed'
    },
    warning: {
      c: 'var(--amber-500)',
      t: label || 'warning'
    }
  };
  const m = map[status] || map.active;
  const shouldPulse = pulse ?? (status === 'active' || status === 'live');
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      padding: '4px 10px 4px 9px',
      background: 'var(--bg-inset)',
      border: '1px solid color-mix(in oklab, ' + m.c + ' 40%, transparent)',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: m.c,
      lineHeight: 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: m.c,
      boxShadow: '0 0 8px ' + m.c,
      animation: shouldPulse ? 'rs-pulse 1.6s var(--ease-in-out) infinite' : 'none'
    }
  }), m.t, /*#__PURE__*/React.createElement("style", null, `@keyframes rs-pulse{0%,100%{opacity:1;box-shadow:0 0 8px currentColor}50%{opacity:.4;box-shadow:0 0 2px currentColor}}`));
}
Object.assign(__ds_scope, { StatusPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/StatusPill.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tag.jsx
try { (() => {
/** Revenant Systems — Tag. Removable keyword/token chip (rounded pill). */
function Tag({
  children,
  onRemove,
  tone = 'jade',
  style
}) {
  const tones = {
    jade: {
      fg: 'var(--jade-300)',
      bd: 'var(--border-jade)'
    },
    gold: {
      fg: 'var(--gold-300)',
      bd: 'var(--border-gold)'
    },
    neutral: {
      fg: 'var(--bone-300)',
      bd: 'var(--border-hair)'
    }
  };
  const t = tones[tone] || tones.jade;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '4px 6px 4px 12px',
      background: 'var(--bg-raised)',
      color: t.fg,
      border: '1px solid ' + t.bd,
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      lineHeight: 1,
      ...style
    }
  }, children, onRemove && /*#__PURE__*/React.createElement("button", {
    onClick: onRemove,
    "aria-label": "Remove",
    style: {
      width: 16,
      height: 16,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'transparent',
      border: 'none',
      color: 'currentColor',
      cursor: 'pointer',
      opacity: 0.7,
      borderRadius: '50%',
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "10",
    height: "10",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6L6 18M6 6l12 12"
  }))));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
/**
 * Revenant Systems — Toast
 * Notification card. Left accent rail keyed to tone; auto-dismiss optional.
 */
function Toast({
  title,
  message,
  tone = 'jade',
  icon,
  onClose,
  style
}) {
  const tones = {
    jade: 'var(--jade-500)',
    gold: 'var(--gold-500)',
    danger: 'var(--ember-500)',
    warning: 'var(--amber-500)'
  };
  const c = tones[tone] || tones.jade;
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12,
      width: 340,
      maxWidth: '100%',
      background: 'var(--bg-card)',
      border: '1px solid var(--border-hair)',
      borderLeft: '3px solid ' + c,
      borderRadius: 'var(--radius-md)',
      padding: '12px 14px',
      boxShadow: 'var(--shadow-lg)',
      backdropFilter: 'var(--blur-panel)',
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      color: c,
      display: 'flex',
      marginTop: 1
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-cyber)',
      fontSize: 14,
      fontWeight: 700,
      color: 'var(--bone-100)',
      marginBottom: message ? 2 : 0
    }
  }, title), message && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--text-muted)',
      lineHeight: 1.45
    }
  }, message)), onClose && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Dismiss",
    style: {
      background: 'transparent',
      border: 'none',
      color: 'var(--bone-400)',
      cursor: 'pointer',
      padding: 2,
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6L6 18M6 6l12 12"
  }))));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
/** Revenant Systems — Tooltip. Dark panel on hover, jade hairline. */
function Tooltip({
  children,
  content,
  side = 'top',
  style
}) {
  const [show, setShow] = React.useState(false);
  const pos = {
    top: {
      bottom: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginBottom: 8
    },
    bottom: {
      top: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginTop: 8
    },
    left: {
      right: '100%',
      top: '50%',
      transform: 'translateY(-50%)',
      marginRight: 8
    },
    right: {
      left: '100%',
      top: '50%',
      transform: 'translateY(-50%)',
      marginLeft: 8
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false)
  }, children, show && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      ...pos[side],
      zIndex: 50,
      whiteSpace: 'nowrap',
      background: 'var(--bg-raised)',
      color: 'var(--bone-100)',
      border: '1px solid var(--border-jade)',
      borderRadius: 'var(--radius-md)',
      padding: '6px 10px',
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      boxShadow: 'var(--shadow-lg), var(--glow-jade-sm)',
      pointerEvents: 'none'
    }
  }, content));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Revenant Systems — Button
 * Forged-metal control. Jade primary, gold secondary, ghost, danger.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  disabled = false,
  loading = false,
  full = false,
  type = 'button',
  onClick,
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '6px 12px',
      fontSize: 13,
      height: 32,
      gap: 6
    },
    md: {
      padding: '9px 18px',
      fontSize: 14,
      height: 40,
      gap: 8
    },
    lg: {
      padding: '13px 26px',
      fontSize: 16,
      height: 50,
      gap: 10
    }
  };
  const s = sizes[size] || sizes.md;
  const base = {
    display: full ? 'flex' : 'inline-flex',
    width: full ? '100%' : undefined,
    alignItems: 'center',
    justifyContent: 'center',
    gap: s.gap,
    height: s.height,
    padding: s.padding,
    fontSize: s.fontSize,
    fontFamily: 'var(--font-cyber)',
    fontWeight: 600,
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    lineHeight: 1,
    borderRadius: 'var(--radius-md)',
    border: '1px solid transparent',
    cursor: disabled || loading ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    transition: 'background var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), transform var(--dur-fast) var(--ease-out), border-color var(--dur-base) var(--ease-out)',
    userSelect: 'none',
    whiteSpace: 'nowrap'
  };
  const variants = {
    primary: {
      background: 'var(--grad-jade)',
      color: 'var(--jade-950)',
      borderColor: 'color-mix(in oklab, var(--jade-300) 60%, transparent)',
      boxShadow: 'var(--bevel-top), var(--glow-jade-sm)'
    },
    secondary: {
      background: 'var(--grad-gold)',
      color: 'var(--gold-900)',
      borderColor: 'color-mix(in oklab, var(--gold-200) 60%, transparent)',
      boxShadow: 'var(--bevel-top), var(--glow-gold-sm)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--bone-200)',
      borderColor: 'var(--border-strong)',
      boxShadow: 'none'
    },
    danger: {
      background: 'linear-gradient(180deg, var(--ember-500), var(--ember-600))',
      color: '#fff',
      borderColor: 'color-mix(in oklab, var(--ember-300) 55%, transparent)',
      boxShadow: 'var(--bevel-top), var(--glow-ember)'
    }
  };
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const v = variants[variant] || variants.primary;
  const hoverStyle = hover && !disabled && !loading ? {
    filter: variant === 'ghost' ? 'none' : 'brightness(1.08)',
    background: variant === 'ghost' ? 'color-mix(in oklab, var(--jade-500) 12%, transparent)' : v.background,
    borderColor: variant === 'ghost' ? 'var(--border-jade)' : v.borderColor,
    boxShadow: variant === 'ghost' ? 'var(--glow-jade-sm)' : v.boxShadow
  } : {};
  const pressStyle = press && !disabled && !loading ? {
    transform: 'translateY(1px)',
    filter: 'brightness(0.94)'
  } : {};
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled || loading,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      ...base,
      ...v,
      ...hoverStyle,
      ...pressStyle,
      ...style
    }
  }, rest), loading && /*#__PURE__*/React.createElement("span", {
    style: {
      width: s.fontSize,
      height: s.fontSize,
      borderRadius: '50%',
      border: '2px solid currentColor',
      borderTopColor: 'transparent',
      display: 'inline-block',
      animation: 'rs-spin 0.7s linear infinite',
      opacity: 0.9
    }
  }), !loading && iconLeft, children, !loading && iconRight, /*#__PURE__*/React.createElement("style", null, `@keyframes rs-spin{to{transform:rotate(360deg)}}`));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
/** Revenant Systems — Checkbox. Carved box, jade fill + check when on. */
function Checkbox({
  checked,
  defaultChecked,
  onChange,
  label,
  disabled = false,
  id,
  style
}) {
  const rid = id || React.useId();
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const isControlled = checked !== undefined;
  const on = isControlled ? checked : internal;
  const toggle = e => {
    if (!isControlled) setInternal(e.target.checked);
    onChange && onChange(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: rid,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    id: rid,
    type: "checkbox",
    checked: on,
    disabled: disabled,
    onChange: toggle,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      flex: '0 0 auto',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid ' + (on ? 'var(--jade-400)' : 'var(--border-strong)'),
      background: on ? 'var(--grad-jade)' : 'var(--bg-inset)',
      boxShadow: on ? 'var(--glow-jade-sm)' : 'inset 0 1px 2px rgba(0,0,0,0.4)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all var(--dur-fast) var(--ease-out)'
    }
  }, on && /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--jade-950)",
    strokeWidth: "4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6L9 17l-5-5"
  }))), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--bone-200)'
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Revenant Systems — IconButton
 * Square/rounded icon-only control. Pass a Lucide (or any) icon node as children.
 */
function IconButton({
  children,
  variant = 'ghost',
  size = 'md',
  label,
  disabled = false,
  active = false,
  onClick,
  style,
  ...rest
}) {
  const dims = {
    sm: 30,
    md: 38,
    lg: 46
  }[size] || 38;
  const [hover, setHover] = React.useState(false);
  const variants = {
    ghost: {
      background: active ? 'color-mix(in oklab, var(--jade-500) 16%, transparent)' : 'transparent',
      color: active ? 'var(--jade-400)' : 'var(--bone-300)',
      border: '1px solid ' + (active ? 'var(--border-jade)' : 'var(--border-hair)')
    },
    solid: {
      background: 'var(--bg-raised)',
      color: 'var(--bone-200)',
      border: '1px solid var(--border-strong)'
    },
    jade: {
      background: 'var(--grad-jade)',
      color: 'var(--jade-950)',
      border: '1px solid color-mix(in oklab, var(--jade-300) 60%, transparent)'
    }
  };
  const v = variants[variant] || variants.ghost;
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    title: label,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: dims,
      height: dims,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'all var(--dur-fast) var(--ease-out)',
      boxShadow: hover && !disabled && variant !== 'jade' ? 'var(--glow-jade-sm)' : variant === 'jade' ? 'var(--glow-jade-sm)' : 'none',
      ...v,
      ...(hover && !disabled ? {
        color: variant === 'jade' ? 'var(--jade-950)' : 'var(--jade-300)',
        borderColor: 'var(--border-jade)',
        filter: variant === 'jade' ? 'brightness(1.08)' : 'none'
      } : {}),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Revenant Systems — Input
 * Inset field on the void. Jade focus glow. Optional label / hint / error / adornments.
 */
function Input({
  label,
  hint,
  error,
  iconLeft,
  iconRight,
  size = 'md',
  disabled = false,
  style,
  id,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const rid = id || React.useId();
  const h = {
    sm: 34,
    md: 42,
    lg: 50
  }[size] || 42;
  const borderColor = error ? 'var(--ember-500)' : focus ? 'var(--jade-500)' : 'var(--border-strong)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: rid,
    style: {
      fontFamily: 'var(--font-cyber)',
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--bone-300)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      height: h,
      padding: '0 12px',
      background: 'var(--bg-inset)',
      border: '1px solid ' + borderColor,
      borderRadius: 'var(--radius-md)',
      boxShadow: focus ? 'var(--glow-jade-sm)' : 'inset 0 1px 2px rgba(0,0,0,0.4)',
      transition: 'all var(--dur-base) var(--ease-out)',
      opacity: disabled ? 0.5 : 1
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--bone-400)',
      display: 'flex'
    }
  }, iconLeft), /*#__PURE__*/React.createElement("input", _extends({
    id: rid,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      background: 'transparent',
      border: 'none',
      outline: 'none',
      color: 'var(--bone-100)',
      fontFamily: 'var(--font-sans)',
      fontSize: size === 'sm' ? 13 : 15
    }
  }, rest)), iconRight && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--bone-400)',
      display: 'flex'
    }
  }, iconRight)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: error ? 'var(--ember-500)' : 'var(--text-faint)',
      fontFamily: 'var(--font-sans)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Revenant Systems — Select. Styled native select on the void with jade focus. */
function Select({
  label,
  hint,
  options = [],
  size = 'md',
  disabled = false,
  value,
  onChange,
  style,
  id,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const rid = id || React.useId();
  const h = {
    sm: 34,
    md: 42,
    lg: 50
  }[size] || 42;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: rid,
    style: {
      fontFamily: 'var(--font-cyber)',
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--bone-300)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: h
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: rid,
    value: value,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      height: '100%',
      appearance: 'none',
      WebkitAppearance: 'none',
      background: 'var(--bg-inset)',
      color: 'var(--bone-100)',
      border: '1px solid ' + (focus ? 'var(--jade-500)' : 'var(--border-strong)'),
      borderRadius: 'var(--radius-md)',
      padding: '0 36px 0 12px',
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      outline: 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      boxShadow: focus ? 'var(--glow-jade-sm)' : 'inset 0 1px 2px rgba(0,0,0,0.4)',
      transition: 'all var(--dur-base) var(--ease-out)',
      opacity: disabled ? 0.5 : 1
    }
  }, rest), options.map(o => {
    const val = typeof o === 'string' ? o : o.value;
    const lab = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: val,
      value: val,
      style: {
        background: '#0f1611',
        color: '#e7e1cf'
      }
    }, lab);
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 12,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--jade-400)',
      fontSize: 12
    }
  }, "\u25BE")), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--text-faint)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
/** Revenant Systems — Switch. Sliding toggle; jade current when on, glow when live. */
function Switch({
  checked,
  defaultChecked,
  onChange,
  label,
  disabled = false,
  id,
  style
}) {
  const rid = id || React.useId();
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const isControlled = checked !== undefined;
  const on = isControlled ? checked : internal;
  const toggle = () => {
    if (disabled) return;
    const nv = !on;
    if (!isControlled) setInternal(nv);
    onChange && onChange(nv);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: rid,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    id: rid,
    role: "switch",
    "aria-checked": on,
    type: "button",
    onClick: toggle,
    disabled: disabled,
    style: {
      width: 44,
      height: 24,
      borderRadius: 'var(--radius-pill)',
      padding: 2,
      border: '1px solid ' + (on ? 'var(--jade-400)' : 'var(--border-strong)'),
      background: on ? 'var(--grad-jade)' : 'var(--bg-inset)',
      boxShadow: on ? 'var(--glow-jade-sm)' : 'inset 0 1px 2px rgba(0,0,0,0.4)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'all var(--dur-base) var(--ease-out)',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      width: 18,
      height: 18,
      borderRadius: '50%',
      background: on ? 'var(--jade-950)' : 'var(--bone-300)',
      transform: on ? 'translateX(20px)' : 'translateX(0)',
      transition: 'transform var(--dur-base) var(--ease-out)',
      boxShadow: '0 1px 3px rgba(0,0,0,0.6)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--bone-200)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Revenant Systems — Textarea. Inset multi-line field, jade focus glow. */
function Textarea({
  label,
  hint,
  error,
  rows = 4,
  disabled = false,
  style,
  id,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const rid = id || React.useId();
  const borderColor = error ? 'var(--ember-500)' : focus ? 'var(--jade-500)' : 'var(--border-strong)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: rid,
    style: {
      fontFamily: 'var(--font-cyber)',
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--bone-300)'
    }
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    id: rid,
    rows: rows,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      background: 'var(--bg-inset)',
      border: '1px solid ' + borderColor,
      borderRadius: 'var(--radius-md)',
      padding: '10px 12px',
      color: 'var(--bone-100)',
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      resize: 'vertical',
      outline: 'none',
      boxShadow: focus ? 'var(--glow-jade-sm)' : 'inset 0 1px 2px rgba(0,0,0,0.4)',
      transition: 'all var(--dur-base) var(--ease-out)',
      opacity: disabled ? 0.5 : 1
    }
  }, rest)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: error ? 'var(--ember-500)' : 'var(--text-faint)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/layout/Avatar.jsx
try { (() => {
/**
 * Revenant Systems — Avatar
 * Ring-framed identity. Image, initials, or a rune. Optional live status ring.
 */
function Avatar({
  src,
  name,
  rune,
  size = 40,
  tone = 'jade',
  live = false,
  style
}) {
  const ring = tone === 'gold' ? 'var(--gold-500)' : 'var(--jade-500)';
  const initials = name ? name.split(/\s+/).map(w => w[0]).slice(0, 2).join('').toUpperCase() : '';
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: src ? 'var(--bg-inset)' : 'var(--grad-jade-soft)',
      border: '2px solid ' + ring,
      boxShadow: live ? 'var(--glow-jade-md)' : '0 0 0 3px var(--bg-void)',
      overflow: 'hidden',
      position: 'relative',
      flex: '0 0 auto',
      ...style
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name || '',
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : rune ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-occult)',
      fontSize: size * 0.5,
      color: 'var(--jade-950)'
    }
  }, rune) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-cyber)',
      fontWeight: 700,
      fontSize: size * 0.36,
      color: 'var(--jade-950)'
    }
  }, initials));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/layout/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Revenant Systems — Card
 * Dark raised surface on the void. Hairline border, cold shadow, edge bevel.
 * `active`/`tone` adds a jade or gold rim + glow. `interactive` lifts on hover.
 */
function Card({
  children,
  tone,
  active = false,
  interactive = false,
  padding = 20,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const lit = active || interactive && hover;
  const rim = tone === 'gold' ? 'var(--border-gold)' : 'var(--border-jade)';
  const glow = tone === 'gold' ? 'var(--glow-gold-sm)' : 'var(--glow-jade-sm)';
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: 'var(--bg-card)',
      border: '1px solid ' + (lit ? rim : 'var(--border-hair)'),
      borderRadius: 'var(--radius-lg)',
      boxShadow: lit ? 'var(--shadow-lg), ' + glow : 'var(--shadow-md), var(--bevel-top)',
      padding,
      transition: 'all var(--dur-base) var(--ease-out)',
      transform: interactive && hover ? 'translateY(-2px)' : 'none',
      cursor: interactive ? 'pointer' : 'default',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Card.jsx", error: String((e && e.message) || e) }); }

// components/layout/Panel.jsx
try { (() => {
/**
 * Revenant Systems — Panel
 * Titled section container with an engraved eyebrow header + optional rune watermark.
 */
function Panel({
  title,
  eyebrow,
  actions,
  children,
  rune,
  padding = 20,
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--bg-surface)',
      border: '1px solid var(--border-hair)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-md)',
      ...style
    }
  }, rune && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      position: 'absolute',
      right: -10,
      top: -18,
      fontSize: 120,
      lineHeight: 1,
      color: 'var(--jade-500)',
      opacity: 0.05,
      fontFamily: 'var(--font-occult)',
      pointerEvents: 'none'
    }
  }, rune), (title || eyebrow || actions) && /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12,
      padding: '14px 18px',
      borderBottom: '1px solid var(--border-hair)'
    }
  }, /*#__PURE__*/React.createElement("div", null, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-cyber)',
      fontSize: 10,
      fontWeight: 600,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--gold-500)',
      marginBottom: 3
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-cyber)',
      fontSize: 16,
      fontWeight: 700,
      color: 'var(--bone-100)'
    }
  }, title)), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, actions)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding,
      position: 'relative'
    }
  }, children));
}
Object.assign(__ds_scope, { Panel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Panel.jsx", error: String((e && e.message) || e) }); }

// components/layout/Tabs.jsx
try { (() => {
/**
 * Revenant Systems — Tabs
 * Underlined tab bar with a jade indicator. Controlled or uncontrolled.
 */
function Tabs({
  tabs = [],
  value,
  defaultValue,
  onChange,
  style
}) {
  const [internal, setInternal] = React.useState(defaultValue ?? (tabs[0] && (tabs[0].value ?? tabs[0])));
  const active = value ?? internal;
  const select = v => {
    if (value === undefined) setInternal(v);
    onChange && onChange(v);
  };
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'flex',
      gap: 4,
      borderBottom: '1px solid var(--border-hair)',
      ...style
    }
  }, tabs.map(t => {
    const v = t.value ?? t;
    const label = t.label ?? t;
    const on = v === active;
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      role: "tab",
      "aria-selected": on,
      onClick: () => select(v),
      style: {
        position: 'relative',
        padding: '10px 16px 12px',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        fontFamily: 'var(--font-cyber)',
        fontSize: 13,
        fontWeight: 600,
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        color: on ? 'var(--jade-300)' : 'var(--bone-400)',
        transition: 'color var(--dur-fast) var(--ease-out)'
      }
    }, label, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: 8,
        right: 8,
        bottom: -1,
        height: 2,
        borderRadius: 2,
        background: on ? 'var(--grad-jade)' : 'transparent',
        boxShadow: on ? 'var(--glow-jade-sm)' : 'none',
        transition: 'all var(--dur-base) var(--ease-out)'
      }
    }));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/algiz/AppShell.jsx
try { (() => {
/* Revenant Systems — Algiz console shell: sidebar + topbar. */
const shellStyles = {
  app: {
    display: 'flex',
    height: '100vh',
    background: 'var(--bg-void)',
    color: 'var(--text-body)',
    fontFamily: 'var(--font-sans)'
  },
  sidebar: {
    width: 264,
    flex: '0 0 264px',
    background: 'var(--bg-surface)',
    borderRight: '1px solid var(--border-hair)',
    display: 'flex',
    flexDirection: 'column',
    padding: '18px 14px',
    gap: 20
  },
  brand: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    padding: '2px 6px 14px',
    borderBottom: '1px solid var(--border-hair)'
  },
  navLabel: {
    fontFamily: 'var(--font-cyber)',
    fontSize: 10,
    fontWeight: 600,
    letterSpacing: '0.16em',
    textTransform: 'uppercase',
    color: 'var(--gold-500)',
    padding: '0 6px',
    marginBottom: 6
  },
  navItem: active => ({
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    padding: '9px 10px',
    borderRadius: 'var(--radius-md)',
    fontSize: 13.5,
    fontWeight: active ? 600 : 400,
    color: active ? 'var(--jade-300)' : 'var(--bone-300)',
    background: active ? 'color-mix(in oklab, var(--jade-500) 12%, transparent)' : 'transparent',
    border: '1px solid ' + (active ? 'var(--border-jade)' : 'transparent'),
    cursor: 'pointer',
    transition: 'all var(--dur-fast) var(--ease-out)'
  }),
  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    minWidth: 0
  },
  topbar: {
    height: 60,
    flex: '0 0 60px',
    borderBottom: '1px solid var(--border-hair)',
    background: 'color-mix(in oklab, var(--bg-surface) 88%, transparent)',
    backdropFilter: 'var(--blur-panel)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 22px',
    position: 'sticky',
    top: 0,
    zIndex: 10
  },
  content: {
    flex: 1,
    overflow: 'auto',
    padding: 24
  }
};
function LIcon({
  n,
  s = 18
}) {
  const r = React.useRef();
  React.useEffect(() => {
    if (r.current && window.lucide && window.lucide[n]) {
      r.current.innerHTML = '';
      const el = window.lucide.createElement(window.lucide[n]);
      el.setAttribute('width', s);
      el.setAttribute('height', s);
      r.current.appendChild(el);
    }
  });
  return React.createElement('span', {
    ref: r,
    style: {
      display: 'flex'
    }
  });
}
function AppShell({
  children,
  nav,
  active,
  onNav,
  provider,
  onProvider
}) {
  const RS = window.RevenantSystemsDesignSystem_019ddb;
  const {
    RuneMark,
    StatusPill,
    Select,
    Avatar,
    IconButton
  } = RS;
  return /*#__PURE__*/React.createElement("div", {
    style: shellStyles.app
  }, /*#__PURE__*/React.createElement("aside", {
    style: shellStyles.sidebar
  }, /*#__PURE__*/React.createElement("div", {
    style: shellStyles.brand
  }, /*#__PURE__*/React.createElement(RuneMark, {
    rune: "\u16C9",
    size: 40
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-cyber)',
      fontSize: 15,
      fontWeight: 700,
      color: 'var(--bone-100)',
      lineHeight: 1
    }
  }, "ALGIZ"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      color: 'var(--bone-400)',
      letterSpacing: '0.1em'
    }
  }, "SAGE \xB7 RAGE"))), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 3
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: shellStyles.navLabel
  }, "Runtime"), nav.map(item => /*#__PURE__*/React.createElement("div", {
    key: item.id,
    style: shellStyles.navItem(active === item.id),
    onClick: () => onNav(item.id)
  }, /*#__PURE__*/React.createElement(LIcon, {
    n: item.icon,
    s: 17
  }), item.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: shellStyles.navLabel
  }, "Provider"), /*#__PURE__*/React.createElement(Select, {
    options: ['claude-sonnet-4', 'gpt-4o', 'gemini-2.0-flash', 'ollama:local'],
    value: provider,
    onChange: e => onProvider(e.target.value),
    size: "sm"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '10px',
      background: 'var(--bg-inset)',
      border: '1px solid var(--border-hair)',
      borderRadius: 'var(--radius-md)'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Dave Fisher",
    size: 34,
    live: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--bone-100)',
      whiteSpace: 'nowrap'
    }
  }, "Dave of the Dead"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      color: 'var(--bone-400)'
    }
  }, "operator \xB7 admin"))))), /*#__PURE__*/React.createElement("div", {
    style: shellStyles.main
  }, /*#__PURE__*/React.createElement("header", {
    style: shellStyles.topbar
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-cyber)',
      fontSize: 17,
      fontWeight: 700,
      color: 'var(--bone-100)'
    }
  }, nav.find(n => n.id === active)?.label), /*#__PURE__*/React.createElement(StatusPill, {
    status: "active",
    label: "runtime online"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(StatusPill, {
    status: "passed",
    label: "proxy :9443",
    pulse: false
  }), /*#__PURE__*/React.createElement(IconButton, {
    label: "Docs"
  }, /*#__PURE__*/React.createElement(LIcon, {
    n: "BookText"
  })), /*#__PURE__*/React.createElement(IconButton, {
    label: "Settings"
  }, /*#__PURE__*/React.createElement(LIcon, {
    n: "Settings"
  })))), /*#__PURE__*/React.createElement("div", {
    style: shellStyles.content
  }, children)));
}
Object.assign(window, {
  AppShell,
  LIcon
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/algiz/AppShell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/algiz/PipelineRunner.jsx
try { (() => {
/* Revenant Systems — Algiz Pipeline Runner (interactive heart of the console). */
const runnerStyles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'minmax(0,1fr) 340px',
    gap: 20,
    alignItems: 'start'
  },
  pipeRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    flexWrap: 'wrap',
    marginBottom: 16
  },
  arrow: {
    color: 'var(--bone-500)',
    fontFamily: 'var(--font-mono)'
  },
  output: {
    background: 'var(--bg-inset)',
    border: '1px solid var(--border-hair)',
    borderRadius: 'var(--radius-md)',
    padding: 16,
    fontFamily: 'var(--font-sans)',
    fontSize: 14.5,
    lineHeight: 1.6,
    color: 'var(--bone-100)',
    minHeight: 90
  },
  traceRow: {
    display: 'flex',
    gap: 10,
    padding: '9px 0',
    borderBottom: '1px solid var(--border-hair)',
    fontFamily: 'var(--font-mono)',
    fontSize: 12
  },
  metric: {
    marginBottom: 14
  }
};
const STAGES = [{
  op: 'containment',
  s: 'S1',
  note: 'Bounds context; trims charged phrasing.'
}, {
  op: 'omega',
  s: 'S2',
  note: 'Recursive refinement converges.'
}, {
  op: 'chi',
  s: 'S3',
  note: 'Selects candidate by coherence/entropy.'
}, {
  op: 'sigma',
  s: 'S4',
  note: 'Skeptical contrast on high-stakes route.'
}];
const SAMPLE = 'Is it true that NASA confirmed aliens landed in Nevada yesterday?';
const ALIGNED = 'There is no credible evidence or NASA confirmation of alien landings in Nevada. No such announcement exists in the public record.';
function PipelineRunner({
  provider
}) {
  const RS = window.RevenantSystemsDesignSystem_019ddb;
  const {
    Panel,
    Card,
    Button,
    Textarea,
    OperatorPill,
    MaliceMeter,
    ProgressMeter,
    StatusPill,
    Badge,
    Tag,
    Switch
  } = RS;
  const [input, setInput] = React.useState(SAMPLE);
  const [stage, setStage] = React.useState(-1); // -1 idle, 0..3 running, 4 done
  const [highStakes, setHighStakes] = React.useState(true);
  const [output, setOutput] = React.useState('');
  const timers = React.useRef([]);
  const activeStages = highStakes ? STAGES : STAGES.slice(0, 3);
  const run = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    setOutput('');
    setStage(0);
    activeStages.forEach((_, i) => {
      timers.current.push(setTimeout(() => setStage(i + 1 < activeStages.length ? i + 1 : activeStages.length), (i + 1) * 720));
    });
    timers.current.push(setTimeout(() => {
      setStage(activeStages.length);
      typeOut();
    }, activeStages.length * 720));
  };
  const typeOut = () => {
    let i = 0;
    const step = () => {
      i += 2;
      setOutput(ALIGNED.slice(0, i));
      if (i < ALIGNED.length) timers.current.push(setTimeout(step, 16));
    };
    step();
  };
  React.useEffect(() => () => timers.current.forEach(clearTimeout), []);
  const stateFor = i => stage === -1 ? 'idle' : i < stage ? 'done' : i === stage ? 'active' : 'idle';
  const running = stage >= 0 && stage < activeStages.length;
  const done = stage >= activeStages.length && output.length >= ALIGNED.length;
  return /*#__PURE__*/React.createElement("div", {
    style: runnerStyles.grid
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Panel, {
    eyebrow: "Governed inference",
    title: "Pipeline Runner",
    rune: "\u16C9",
    actions: /*#__PURE__*/React.createElement(Switch, {
      checked: highStakes,
      onChange: setHighStakes,
      label: "High-stakes"
    })
  }, /*#__PURE__*/React.createElement(Textarea, {
    label: "User input",
    value: input,
    onChange: e => setInput(e.target.value),
    rows: 3
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 14,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: run,
    loading: running
  }, running ? 'Aligning' : 'Run pipeline'), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => {
      setStage(-1);
      setOutput('');
    }
  }, "Reset"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--bone-400)'
    }
  }, provider))), /*#__PURE__*/React.createElement(Panel, {
    eyebrow: "RAGE operator sequence",
    title: highStakes ? 'Containment → Ω → Χ → Σ' : 'Containment → Ω → Χ'
  }, /*#__PURE__*/React.createElement("div", {
    style: runnerStyles.pipeRow
  }, activeStages.map((st, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: st.op
  }, /*#__PURE__*/React.createElement(OperatorPill, {
    operator: st.op,
    state: stateFor(i)
  }), i < activeStages.length - 1 && /*#__PURE__*/React.createElement("span", {
    style: runnerStyles.arrow
  }, "\u2192")))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--bone-400)',
      minHeight: 18
    }
  }, stage >= 0 && stage < activeStages.length ? activeStages[stage].s + ' · ' + activeStages[stage].note : done ? 'Converged. QC + ethics passed.' : 'Idle — awaiting input.')), /*#__PURE__*/React.createElement(Panel, {
    eyebrow: "Aligned response",
    title: "Agent Output",
    actions: done ? /*#__PURE__*/React.createElement(Badge, {
      variant: "jade",
      dot: true
    }, "grounded") : /*#__PURE__*/React.createElement(StatusPill, {
      status: running ? 'live' : 'bypass',
      label: running ? 'streaming' : 'idle'
    })
  }, /*#__PURE__*/React.createElement("div", {
    style: runnerStyles.output
  }, output || /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--bone-500)'
    }
  }, "Run the pipeline to generate a governed, grounded response."), running && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--jade-400)'
    }
  }, "\u258D")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Card, {
    active: done,
    tone: done ? 'jade' : undefined,
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-cyber)',
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--gold-500)',
      alignSelf: 'flex-start'
    }
  }, "Emotional substrate \xB7 VAM"), /*#__PURE__*/React.createElement(MaliceMeter, {
    value: done ? 0.08 : running ? 0.34 : 0.21,
    size: 190
  })), /*#__PURE__*/React.createElement(Panel, {
    eyebrow: "Runtime signals",
    title: "Quality Control"
  }, /*#__PURE__*/React.createElement("div", {
    style: runnerStyles.metric
  }, /*#__PURE__*/React.createElement(ProgressMeter, {
    label: "Coherence",
    value: done ? 0.96 : 0.62
  })), /*#__PURE__*/React.createElement("div", {
    style: runnerStyles.metric
  }, /*#__PURE__*/React.createElement(ProgressMeter, {
    label: "Entropy",
    value: done ? 0.18 : 0.44,
    tone: "gold"
  })), /*#__PURE__*/React.createElement("div", {
    style: runnerStyles.metric
  }, /*#__PURE__*/React.createElement(ProgressMeter, {
    label: "Malice",
    value: done ? 0.08 : 0.34,
    tone: "ember"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap',
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "jade",
    size: "sm",
    dot: true
  }, "grounding"), /*#__PURE__*/React.createElement(Badge, {
    variant: "jade",
    size: "sm",
    dot: true
  }, "consistency"), /*#__PURE__*/React.createElement(Badge, {
    variant: done ? 'jade' : 'warning',
    size: "sm"
  }, done ? 'no unsupported claims' : 'checking claims'))), /*#__PURE__*/React.createElement(Panel, {
    eyebrow: "Ethical priority stack",
    title: "Gate"
  }, ['L0 · Hard prohibitions', 'L1 · Safety constraints', 'L2 · Contextual risk', 'L3 · Stylistic alignment'].map((l, i) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: runnerStyles.traceRow
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--jade-400)'
    }
  }, "\u2713"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--bone-300)'
    }
  }, l))))));
}
Object.assign(window, {
  PipelineRunner
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/algiz/PipelineRunner.jsx", error: String((e && e.message) || e) }); }

// ui_kits/algiz/TraceInspector.jsx
try { (() => {
/* Revenant Systems — Algiz Trace Inspector view. */
const TRACES = [{
  id: 'req_01J8Z3K',
  input: 'NASA confirmed aliens in Nevada?',
  route: 'high-stakes',
  guard: 'flagged',
  malice: 0.34,
  coh: 0.96,
  ops: 'C→Ω→Χ→Σ'
}, {
  id: 'req_01J8Z2P',
  input: 'Summarize the Q3 compliance report',
  route: 'normal',
  guard: 'passed',
  malice: 0.06,
  coh: 0.94,
  ops: 'C→Ω→Χ'
}, {
  id: 'req_01J8Z1M',
  input: 'Draft a refusal for a disallowed request',
  route: 'high-stakes',
  guard: 'vetoed',
  malice: 0.71,
  coh: 0.88,
  ops: 'C→Ω→Χ→Σ'
}, {
  id: 'req_01J8Z0A',
  input: 'Rewrite this email in a professional tone',
  route: 'normal',
  guard: 'passed',
  malice: 0.04,
  coh: 0.97,
  ops: 'C→Ω→Χ'
}, {
  id: 'req_01J8YZ9',
  input: 'What is our current uptime SLA?',
  route: 'normal',
  guard: 'passed',
  malice: 0.03,
  coh: 0.99,
  ops: 'C→Ω→Χ'
}];
function TraceInspector() {
  const RS = window.RevenantSystemsDesignSystem_019ddb;
  const {
    Panel,
    Tabs,
    StatusPill,
    Tag,
    Input,
    Badge
  } = RS;
  const [tab, setTab] = React.useState('All');
  const [q, setQ] = React.useState('');
  const rows = TRACES.filter(t => tab === 'All' || tab === 'Flagged' && t.guard !== 'passed').filter(t => t.input.toLowerCase().includes(q.toLowerCase()));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, ['Total 5', 'Passed 3', 'Flagged 1', 'Vetoed 1'].map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s,
    style: {
      padding: '10px 16px',
      background: 'var(--bg-card)',
      border: '1px solid var(--border-hair)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--bevel-top)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 20,
      fontWeight: 700,
      color: i === 2 ? 'var(--amber-500)' : i === 3 ? 'var(--ember-500)' : 'var(--jade-400)'
    }
  }, s.split(' ')[1]), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-cyber)',
      fontSize: 10,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--bone-400)'
    }
  }, s.split(' ')[0])))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      width: 240
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Search traces\u2026",
    value: q,
    onChange: e => setQ(e.target.value)
  }))), /*#__PURE__*/React.createElement(Panel, {
    eyebrow: "Decision lineage",
    title: "Trace Inspector"
  }, /*#__PURE__*/React.createElement(Tabs, {
    tabs: ['All', 'Flagged'],
    value: tab,
    onChange: setTab,
    style: {
      marginBottom: 4
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '130px 1fr 110px 90px 90px 110px',
      gap: 10,
      padding: '12px 0 8px',
      fontFamily: 'var(--font-cyber)',
      fontSize: 10,
      fontWeight: 600,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--bone-400)',
      borderBottom: '1px solid var(--border-hair)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Request"), /*#__PURE__*/React.createElement("span", null, "Input"), /*#__PURE__*/React.createElement("span", null, "Route"), /*#__PURE__*/React.createElement("span", null, "Malice"), /*#__PURE__*/React.createElement("span", null, "Coherence"), /*#__PURE__*/React.createElement("span", null, "Guardrail")), rows.map(t => /*#__PURE__*/React.createElement("div", {
    key: t.id,
    style: {
      display: 'grid',
      gridTemplateColumns: '130px 1fr 110px 90px 90px 110px',
      gap: 10,
      padding: '12px 0',
      alignItems: 'center',
      borderBottom: '1px solid var(--border-hair)',
      fontFamily: 'var(--font-mono)',
      fontSize: 12.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gold-300)'
    }
  }, t.id), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--bone-200)',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, t.input), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Tag, {
    tone: t.route === 'high-stakes' ? 'gold' : 'neutral'
  }, t.route)), /*#__PURE__*/React.createElement("span", {
    style: {
      color: t.malice > 0.5 ? 'var(--ember-500)' : t.malice > 0.2 ? 'var(--amber-500)' : 'var(--jade-400)'
    }
  }, t.malice.toFixed(2)), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--bone-200)'
    }
  }, t.coh.toFixed(2)), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(StatusPill, {
    status: t.guard,
    pulse: false
  })))), rows.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      textAlign: 'center',
      color: 'var(--bone-500)',
      fontFamily: 'var(--font-mono)',
      fontSize: 13
    }
  }, "No traces match.")));
}
Object.assign(window, {
  TraceInspector
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/algiz/TraceInspector.jsx", error: String((e && e.message) || e) }); }

__ds_ns.MaliceMeter = __ds_scope.MaliceMeter;

__ds_ns.OperatorPill = __ds_scope.OperatorPill;

__ds_ns.RuneMark = __ds_scope.RuneMark;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.ProgressMeter = __ds_scope.ProgressMeter;

__ds_ns.StatusPill = __ds_scope.StatusPill;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Panel = __ds_scope.Panel;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
