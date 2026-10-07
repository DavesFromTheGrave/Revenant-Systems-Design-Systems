/* Revenant Systems — Algiz Pipeline Runner (interactive heart of the console). */
const runnerStyles = {
  grid: { display: 'grid', gridTemplateColumns: 'minmax(0,1fr) 340px', gap: 20, alignItems: 'start' },
  pipeRow: { display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', marginBottom: 16 },
  arrow: { color: 'var(--bone-500)', fontFamily: 'var(--font-mono)' },
  output: { background: 'var(--bg-inset)', border: '1px solid var(--border-hair)', borderRadius: 'var(--radius-md)', padding: 16, fontFamily: 'var(--font-sans)', fontSize: 14.5, lineHeight: 1.6, color: 'var(--bone-100)', minHeight: 90 },
  traceRow: { display: 'flex', gap: 10, padding: '9px 0', borderBottom: '1px solid var(--border-hair)', fontFamily: 'var(--font-mono)', fontSize: 12 },
  metric: { marginBottom: 14 },
};

const STAGES = [
  { op: 'containment', s: 'S1', note: 'Bounds context; trims charged phrasing.' },
  { op: 'omega', s: 'S2', note: 'Recursive refinement converges.' },
  { op: 'chi', s: 'S3', note: 'Selects candidate by coherence/entropy.' },
  { op: 'sigma', s: 'S4', note: 'Skeptical contrast on high-stakes route.' },
];

const SAMPLE = 'Is it true that NASA confirmed aliens landed in Nevada yesterday?';
const ALIGNED = 'There is no credible evidence or NASA confirmation of alien landings in Nevada. No such announcement exists in the public record.';

function PipelineRunner({ provider }) {
  const RS = window.RevenantSystemsDesignSystem_019ddb;
  const { Panel, Card, Button, Textarea, OperatorPill, MaliceMeter, ProgressMeter, StatusPill, Badge, Tag, Switch } = RS;
  const [input, setInput] = React.useState(SAMPLE);
  const [stage, setStage] = React.useState(-1); // -1 idle, 0..3 running, 4 done
  const [highStakes, setHighStakes] = React.useState(true);
  const [output, setOutput] = React.useState('');
  const timers = React.useRef([]);

  const activeStages = highStakes ? STAGES : STAGES.slice(0, 3);

  const run = () => {
    timers.current.forEach(clearTimeout); timers.current = [];
    setOutput(''); setStage(0);
    activeStages.forEach((_, i) => {
      timers.current.push(setTimeout(() => setStage(i + 1 < activeStages.length ? i + 1 : activeStages.length), (i + 1) * 720));
    });
    timers.current.push(setTimeout(() => { setStage(activeStages.length); typeOut(); }, activeStages.length * 720));
  };
  const typeOut = () => {
    let i = 0; const step = () => { i += 2; setOutput(ALIGNED.slice(0, i)); if (i < ALIGNED.length) timers.current.push(setTimeout(step, 16)); };
    step();
  };
  React.useEffect(() => () => timers.current.forEach(clearTimeout), []);

  const stateFor = (i) => stage === -1 ? 'idle' : (i < stage ? 'done' : i === stage ? 'active' : 'idle');
  const running = stage >= 0 && stage < activeStages.length;
  const done = stage >= activeStages.length && output.length >= ALIGNED.length;

  return (
    <div style={runnerStyles.grid}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <Panel eyebrow="Governed inference" title="Pipeline Runner" rune="ᛉ"
          actions={<Switch checked={highStakes} onChange={setHighStakes} label="High-stakes" />}>
          <Textarea label="User input" value={input} onChange={(e) => setInput(e.target.value)} rows={3} />
          <div style={{ display: 'flex', gap: 10, marginTop: 14, alignItems: 'center' }}>
            <Button variant="primary" onClick={run} loading={running}>{running ? 'Aligning' : 'Run pipeline'}</Button>
            <Button variant="ghost" onClick={() => { setStage(-1); setOutput(''); }}>Reset</Button>
            <span style={{ marginLeft: 'auto', fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--bone-400)' }}>{provider}</span>
          </div>
        </Panel>

        <Panel eyebrow="RAGE operator sequence" title={highStakes ? 'Containment → Ω → Χ → Σ' : 'Containment → Ω → Χ'}>
          <div style={runnerStyles.pipeRow}>
            {activeStages.map((st, i) => (
              <React.Fragment key={st.op}>
                <OperatorPill operator={st.op} state={stateFor(i)} />
                {i < activeStages.length - 1 && <span style={runnerStyles.arrow}>→</span>}
              </React.Fragment>
            ))}
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--bone-400)', minHeight: 18 }}>
            {stage >= 0 && stage < activeStages.length ? activeStages[stage].s + ' · ' + activeStages[stage].note : done ? 'Converged. QC + ethics passed.' : 'Idle — awaiting input.'}
          </div>
        </Panel>

        <Panel eyebrow="Aligned response" title="Agent Output"
          actions={done ? <Badge variant="jade" dot>grounded</Badge> : <StatusPill status={running ? 'live' : 'bypass'} label={running ? 'streaming' : 'idle'} />}>
          <div style={runnerStyles.output}>
            {output || <span style={{ color: 'var(--bone-500)' }}>Run the pipeline to generate a governed, grounded response.</span>}
            {running && <span style={{ color: 'var(--jade-400)' }}>▍</span>}
          </div>
        </Panel>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <Card active={done} tone={done ? 'jade' : undefined} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <div style={{ fontFamily: 'var(--font-cyber)', fontSize: 11, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--gold-500)', alignSelf: 'flex-start' }}>Emotional substrate · VAM</div>
          <MaliceMeter value={done ? 0.08 : running ? 0.34 : 0.21} size={190} />
        </Card>

        <Panel eyebrow="Runtime signals" title="Quality Control">
          <div style={runnerStyles.metric}><ProgressMeter label="Coherence" value={done ? 0.96 : 0.62} /></div>
          <div style={runnerStyles.metric}><ProgressMeter label="Entropy" value={done ? 0.18 : 0.44} tone="gold" /></div>
          <div style={runnerStyles.metric}><ProgressMeter label="Malice" value={done ? 0.08 : 0.34} tone="ember" /></div>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 4 }}>
            <Badge variant="jade" size="sm" dot>grounding</Badge>
            <Badge variant="jade" size="sm" dot>consistency</Badge>
            <Badge variant={done ? 'jade' : 'warning'} size="sm">{done ? 'no unsupported claims' : 'checking claims'}</Badge>
          </div>
        </Panel>

        <Panel eyebrow="Ethical priority stack" title="Gate">
          {['L0 · Hard prohibitions','L1 · Safety constraints','L2 · Contextual risk','L3 · Stylistic alignment'].map((l, i) => (
            <div key={l} style={runnerStyles.traceRow}>
              <span style={{ color: 'var(--jade-400)' }}>✓</span>
              <span style={{ color: 'var(--bone-300)' }}>{l}</span>
            </div>
          ))}
        </Panel>
      </div>
    </div>
  );
}

Object.assign(window, { PipelineRunner });
