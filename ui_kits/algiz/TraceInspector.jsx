/* Revenant Systems — Algiz Trace Inspector view. */
const TRACES = [
  { id: 'req_01J8Z3K', input: 'NASA confirmed aliens in Nevada?', route: 'high-stakes', guard: 'flagged', malice: 0.34, coh: 0.96, ops: 'C→Ω→Χ→Σ' },
  { id: 'req_01J8Z2P', input: 'Summarize the Q3 compliance report', route: 'normal', guard: 'passed', malice: 0.06, coh: 0.94, ops: 'C→Ω→Χ' },
  { id: 'req_01J8Z1M', input: 'Draft a refusal for a disallowed request', route: 'high-stakes', guard: 'vetoed', malice: 0.71, coh: 0.88, ops: 'C→Ω→Χ→Σ' },
  { id: 'req_01J8Z0A', input: 'Rewrite this email in a professional tone', route: 'normal', guard: 'passed', malice: 0.04, coh: 0.97, ops: 'C→Ω→Χ' },
  { id: 'req_01J8YZ9', input: 'What is our current uptime SLA?', route: 'normal', guard: 'passed', malice: 0.03, coh: 0.99, ops: 'C→Ω→Χ' },
];

function TraceInspector() {
  const RS = window.RevenantSystemsDesignSystem_019ddb;
  const { Panel, Tabs, StatusPill, Tag, Input, Badge } = RS;
  const [tab, setTab] = React.useState('All');
  const [q, setQ] = React.useState('');
  const rows = TRACES.filter(t => (tab === 'All' || (tab === 'Flagged' && t.guard !== 'passed'))).filter(t => t.input.toLowerCase().includes(q.toLowerCase()));
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', gap: 8 }}>
          {['Total 5','Passed 3','Flagged 1','Vetoed 1'].map((s, i) => (
            <div key={s} style={{ padding: '10px 16px', background: 'var(--bg-card)', border: '1px solid var(--border-hair)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--bevel-top)' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 20, fontWeight: 700, color: i === 2 ? 'var(--amber-500)' : i === 3 ? 'var(--ember-500)' : 'var(--jade-400)' }}>{s.split(' ')[1]}</div>
              <div style={{ fontFamily: 'var(--font-cyber)', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--bone-400)' }}>{s.split(' ')[0]}</div>
            </div>
          ))}
        </div>
        <div style={{ marginLeft: 'auto', width: 240 }}><Input placeholder="Search traces…" value={q} onChange={(e) => setQ(e.target.value)} /></div>
      </div>
      <Panel eyebrow="Decision lineage" title="Trace Inspector">
        <Tabs tabs={['All','Flagged']} value={tab} onChange={setTab} style={{ marginBottom: 4 }} />
        <div style={{ display: 'grid', gridTemplateColumns: '130px 1fr 110px 90px 90px 110px', gap: 10, padding: '12px 0 8px', fontFamily: 'var(--font-cyber)', fontSize: 10, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--bone-400)', borderBottom: '1px solid var(--border-hair)' }}>
          <span>Request</span><span>Input</span><span>Route</span><span>Malice</span><span>Coherence</span><span>Guardrail</span>
        </div>
        {rows.map((t) => (
          <div key={t.id} style={{ display: 'grid', gridTemplateColumns: '130px 1fr 110px 90px 90px 110px', gap: 10, padding: '12px 0', alignItems: 'center', borderBottom: '1px solid var(--border-hair)', fontFamily: 'var(--font-mono)', fontSize: 12.5 }}>
            <span style={{ color: 'var(--gold-300)' }}>{t.id}</span>
            <span style={{ color: 'var(--bone-200)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{t.input}</span>
            <span><Tag tone={t.route === 'high-stakes' ? 'gold' : 'neutral'}>{t.route}</Tag></span>
            <span style={{ color: t.malice > 0.5 ? 'var(--ember-500)' : t.malice > 0.2 ? 'var(--amber-500)' : 'var(--jade-400)' }}>{t.malice.toFixed(2)}</span>
            <span style={{ color: 'var(--bone-200)' }}>{t.coh.toFixed(2)}</span>
            <span><StatusPill status={t.guard} pulse={false} /></span>
          </div>
        ))}
        {rows.length === 0 && <div style={{ padding: 24, textAlign: 'center', color: 'var(--bone-500)', fontFamily: 'var(--font-mono)', fontSize: 13 }}>No traces match.</div>}
      </Panel>
    </div>
  );
}
Object.assign(window, { TraceInspector });
