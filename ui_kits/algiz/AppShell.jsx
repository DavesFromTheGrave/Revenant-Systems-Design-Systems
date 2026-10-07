/* Revenant Systems — Algiz console shell: sidebar + topbar. */
const shellStyles = {
  app: { display: 'flex', height: '100vh', background: 'var(--bg-void)', color: 'var(--text-body)', fontFamily: 'var(--font-sans)' },
  sidebar: { width: 264, flex: '0 0 264px', background: 'var(--bg-surface)', borderRight: '1px solid var(--border-hair)', display: 'flex', flexDirection: 'column', padding: '18px 14px', gap: 20 },
  brand: { display: 'flex', alignItems: 'center', gap: 10, padding: '2px 6px 14px', borderBottom: '1px solid var(--border-hair)' },
  navLabel: { fontFamily: 'var(--font-cyber)', fontSize: 10, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--gold-500)', padding: '0 6px', marginBottom: 6 },
  navItem: (active) => ({ display: 'flex', alignItems: 'center', gap: 10, padding: '9px 10px', borderRadius: 'var(--radius-md)', fontSize: 13.5, fontWeight: active ? 600 : 400, color: active ? 'var(--jade-300)' : 'var(--bone-300)', background: active ? 'color-mix(in oklab, var(--jade-500) 12%, transparent)' : 'transparent', border: '1px solid ' + (active ? 'var(--border-jade)' : 'transparent'), cursor: 'pointer', transition: 'all var(--dur-fast) var(--ease-out)' }),
  main: { flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 },
  topbar: { height: 60, flex: '0 0 60px', borderBottom: '1px solid var(--border-hair)', background: 'color-mix(in oklab, var(--bg-surface) 88%, transparent)', backdropFilter: 'var(--blur-panel)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 22px', position: 'sticky', top: 0, zIndex: 10 },
  content: { flex: 1, overflow: 'auto', padding: 24 },
};

function LIcon({ n, s = 18 }) {
  const r = React.useRef();
  React.useEffect(() => { if (r.current && window.lucide && window.lucide[n]) { r.current.innerHTML = ''; const el = window.lucide.createElement(window.lucide[n]); el.setAttribute('width', s); el.setAttribute('height', s); r.current.appendChild(el); } });
  return React.createElement('span', { ref: r, style: { display: 'flex' } });
}

function AppShell({ children, nav, active, onNav, provider, onProvider }) {
  const RS = window.RevenantSystemsDesignSystem_019ddb;
  const { RuneMark, StatusPill, Select, Avatar, IconButton } = RS;
  return (
    <div style={shellStyles.app}>
      <aside style={shellStyles.sidebar}>
        <div style={shellStyles.brand}>
          <RuneMark rune="ᛉ" size={40} />
          <div>
            <div style={{ fontFamily: 'var(--font-cyber)', fontSize: 15, fontWeight: 700, color: 'var(--bone-100)', lineHeight: 1 }}>ALGIZ</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--bone-400)', letterSpacing: '0.1em' }}>SAGE · RAGE</div>
          </div>
        </div>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <div style={shellStyles.navLabel}>Runtime</div>
          {nav.map((item) => (
            <div key={item.id} style={shellStyles.navItem(active === item.id)} onClick={() => onNav(item.id)}>
              <LIcon n={item.icon} s={17} />{item.label}
            </div>
          ))}
        </nav>
        <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div>
            <div style={shellStyles.navLabel}>Provider</div>
            <Select options={['claude-sonnet-4','gpt-4o','gemini-2.0-flash','ollama:local']} value={provider} onChange={(e) => onProvider(e.target.value)} size="sm" />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px', background: 'var(--bg-inset)', border: '1px solid var(--border-hair)', borderRadius: 'var(--radius-md)' }}>
            <Avatar name="Dave Fisher" size={34} live />
            <div style={{ minWidth: 0 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--bone-100)', whiteSpace: 'nowrap' }}>Dave of the Dead</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--bone-400)' }}>operator · admin</div>
            </div>
          </div>
        </div>
      </aside>
      <div style={shellStyles.main}>
        <header style={shellStyles.topbar}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontFamily: 'var(--font-cyber)', fontSize: 17, fontWeight: 700, color: 'var(--bone-100)' }}>{nav.find(n => n.id === active)?.label}</span>
            <StatusPill status="active" label="runtime online" />
          </div>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <StatusPill status="passed" label="proxy :9443" pulse={false} />
            <IconButton label="Docs"><LIcon n="BookText" /></IconButton>
            <IconButton label="Settings"><LIcon n="Settings" /></IconButton>
          </div>
        </header>
        <div style={shellStyles.content}>{children}</div>
      </div>
    </div>
  );
}

Object.assign(window, { AppShell, LIcon });
