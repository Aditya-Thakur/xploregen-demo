// direction-a.jsx — "Lab Console" — bold scientific, dark, glowing accents, lab-tech.

const A = {
  bg:        '#06080d',
  panel:     '#0e1219',
  panel2:    '#141923',
  hairline:  'rgba(255,255,255,0.08)',
  text:      '#eef1f6',
  textDim:   'rgba(238,241,246,0.62)',
  textFaint: 'rgba(238,241,246,0.35)',
  red:       '#ff3a2b',
  redGlow:   'rgba(255,58,43,0.55)',
  blue:      '#6ea4ff',
  yellow:    '#ffd54a',
  green:     '#4ee0a3',
  mono:      '"JetBrains Mono", "SF Mono", ui-monospace, Menlo, monospace',
  display:   'Inter, -apple-system, system-ui, sans-serif',
};

// ─────────────── Reusable bits ───────────────
function APill({ tone = 'red', children, glow }) {
  const c = A[tone];
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      padding: '4px 9px', borderRadius: 999,
      background: `${c}22`, color: c,
      border: `1px solid ${c}55`,
      fontFamily: A.mono, fontSize: 10.5, letterSpacing: 0.6, textTransform: 'uppercase',
      boxShadow: glow ? `0 0 14px ${c}66` : 'none',
    }}>{children}</span>
  );
}

function AStatusChip({ children, color = A.green }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: A.mono, fontSize: 10, letterSpacing: 0.6,
      color: A.textDim, textTransform: 'uppercase',
    }}>
      <span style={{ width: 6, height: 6, borderRadius: 99, background: color, boxShadow: `0 0 8px ${color}` }} />
      {children}
    </span>
  );
}

// "Sequencer" reading — animated ladder of A/T/G/C with shifting opacities
function SequencerStrip({ height = 28, dense = 110 }) {
  const ref = React.useRef(null);
  const [shift, setShift] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setShift((s) => (s + 1) % 1000), 110);
    return () => clearInterval(id);
  }, []);
  const bases = 'ATGC';
  const cols = { A: A.red, T: A.yellow, G: A.green, C: A.blue };
  return (
    <div ref={ref} style={{
      height, overflow: 'hidden', position: 'relative',
      borderTop: `1px solid ${A.hairline}`, borderBottom: `1px solid ${A.hairline}`,
      fontFamily: A.mono, fontSize: 11, letterSpacing: 2,
      display: 'flex', alignItems: 'center', padding: '0 14px',
    }}>
      <div style={{ display: 'flex', whiteSpace: 'nowrap' }}>
        {Array.from({ length: dense }).map((_, i) => {
          const c = bases[(i + shift) % 4];
          const o = 0.25 + ((i * 7 + shift * 3) % 100) / 130;
          return <span key={i} style={{ color: cols[c], opacity: o, marginRight: 2 }}>{c}</span>;
        })}
      </div>
    </div>
  );
}

// Bottom nav, dark
function ABottomNav({ active, setActive, cartCount }) {
  const items = [
    { key: 'home', icon: I.home, label: 'Home' },
    { key: 'shop', icon: I.shop, label: 'Shop' },
    { key: 'services', icon: I.services, label: 'Services' },
    { key: 'about', icon: I.about, label: 'About' },
    { key: 'cart', icon: I.cart, label: 'Cart' },
  ];
  return (
    <div style={{
      position: 'absolute', left: 0, right: 0, bottom: 0,
      paddingBottom: 30, paddingTop: 8, background: 'linear-gradient(180deg, rgba(6,8,13,0) 0%, rgba(6,8,13,0.95) 60%)',
      zIndex: 30,
    }}>
      <div style={{
        margin: '0 12px', borderRadius: 22, padding: '8px 6px',
        display: 'flex', justifyContent: 'space-between',
        background: 'rgba(20,25,35,0.75)', backdropFilter: 'blur(18px) saturate(160%)',
        WebkitBackdropFilter: 'blur(18px) saturate(160%)',
        border: `1px solid ${A.hairline}`,
        boxShadow: '0 12px 36px rgba(0,0,0,0.5)',
      }}>
        {items.map((it) => {
          const on = active === it.key;
          return (
            <button key={it.key} onClick={() => setActive(it.key)}
              style={{
                background: 'transparent', border: 'none', cursor: 'pointer',
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2,
                padding: '6px 10px', borderRadius: 14, position: 'relative',
                color: on ? A.text : A.textFaint,
              }}>
              {on && <span style={{
                position: 'absolute', inset: 0, borderRadius: 14,
                background: `radial-gradient(circle at center, ${A.red}22, transparent 70%)`,
              }} />}
              <span style={{ color: on ? A.red : 'inherit', filter: on ? `drop-shadow(0 0 6px ${A.redGlow})` : 'none' }}>
                {it.icon(on ? A.red : 'currentColor')}
              </span>
              <span style={{ fontFamily: A.mono, fontSize: 9, letterSpacing: 0.5, textTransform: 'uppercase' }}>{it.label}</span>
              {it.key === 'cart' && cartCount > 0 && (
                <span style={{
                  position: 'absolute', top: 2, right: 6, minWidth: 16, height: 16, padding: '0 4px',
                  background: A.red, color: '#fff', borderRadius: 99,
                  fontSize: 10, fontFamily: A.mono, fontWeight: 700,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>{cartCount}</span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function ATopBar({ onMenu, screen }) {
  return (
    <div style={{
      position: 'absolute', top: 56, left: 0, right: 0, zIndex: 20,
      padding: '0 18px', height: 48,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{ width: 28, height: 28, position: 'relative' }}>
          <MiniLogo />
        </div>
        <div style={{ fontFamily: A.mono, fontSize: 11, letterSpacing: 1.4, color: A.textDim }}>XPLOREGEN<span style={{ color: A.red }}> ▸</span> <span style={{ color: A.text }}>{screen}</span></div>
      </div>
      <AStatusChip>LAB ONLINE</AStatusChip>
    </div>
  );
}

// Compact static logo for header
function MiniLogo() {
  return (
    <svg viewBox="0 0 320 240" width="100%" height="100%">
      {[0, 1, 2, 3].map((i) => {
        const x = 30 + i * 26, bend = [0, 14, 24, 30][i];
        const cs = [A.blue, A.yellow, A.green, A.yellow];
        return <rect key={'L' + i} x={x} y={50 + bend} width={14} height={140 - bend * 2} rx={7} fill={cs[i]} />;
      })}
      {[0, 1, 2, 3].map((i) => {
        const x = 320 - 44 - i * 26, bend = [0, 14, 24, 30][i];
        const cs = [A.blue, A.yellow, A.green, A.yellow];
        return <rect key={'R' + i} x={x} y={50 + bend} width={14} height={140 - bend * 2} rx={7} fill={cs[i]} />;
      })}
      <path d="M 20 40 Q 120 80 160 120 Q 200 160 300 200" stroke={A.red} strokeWidth="20" strokeLinecap="round" fill="none" />
      <path d="M 20 200 Q 120 160 160 120 Q 200 80 300 40" stroke={A.red} strokeWidth="20" strokeLinecap="round" fill="none" />
    </svg>
  );
}

// ─────────────── Landing ───────────────
function ALanding({ go, addCart, replayKey, onReplay }) {
  return (
    <div style={{ paddingTop: 110, paddingBottom: 120, color: A.text }}>
      {/* Grid background overlay */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 560, zIndex: 0, pointerEvents: 'none',
        background:
          'radial-gradient(120% 50% at 50% 0%, rgba(255,58,43,0.18) 0%, transparent 50%),' +
          'radial-gradient(80% 40% at 100% 30%, rgba(110,164,255,0.14) 0%, transparent 60%),' +
          'linear-gradient(180deg, transparent 70%, ' + A.bg + ' 100%),' +
          'repeating-linear-gradient(0deg, rgba(255,255,255,0.025) 0 1px, transparent 1px 48px),' +
          'repeating-linear-gradient(90deg, rgba(255,255,255,0.025) 0 1px, transparent 1px 48px)',
      }} />

      <div style={{ position: 'relative', zIndex: 1, padding: '0 22px' }}>
        {/* Tag line */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 18 }}>
          <APill tone="red" glow>● Now Shipping · India</APill>
          <span style={{ fontFamily: A.mono, fontSize: 10.5, color: A.textDim, letterSpacing: 0.5 }}>ISO 9001 · DSIR</span>
        </div>

        {/* Hero */}
        <h1 style={{
          fontFamily: A.display, fontWeight: 800, letterSpacing: -1.6,
          fontSize: 42, lineHeight: 1.02, margin: 0,
          textWrap: 'pretty',
        }}>
          Molecular biology,<br/>
          <span style={{
            background: `linear-gradient(120deg, ${A.red}, ${A.yellow} 55%, ${A.green})`,
            WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent',
          }}>engineered to perform.</span>
        </h1>
        <p style={{ color: A.textDim, fontSize: 14.5, lineHeight: 1.5, marginTop: 14, maxWidth: 320 }}>
          High-yield extraction kits, validated buffers, and bright luciferase reagents — manufactured in Bengaluru for researchers who can't afford a failed run.
        </p>

        {/* Helix viz centerpiece */}
        <div style={{
          margin: '22px -8px 6px', borderRadius: 18, padding: '8px 0',
          background: 'radial-gradient(circle at 50% 50%, rgba(255,58,43,0.10), transparent 70%)',
          position: 'relative',
        }}>
          <DNAHelix width={340} height={220} theme="dark" speed={1} />
          <div style={{ position: 'absolute', top: 12, left: 12, fontFamily: A.mono, fontSize: 10, color: A.textDim, letterSpacing: 1 }}>HELIX_VIZ · drag to perturb</div>
          <div style={{ position: 'absolute', top: 12, right: 12, fontFamily: A.mono, fontSize: 10, color: A.green }}>● LIVE</div>
        </div>

        {/* CTA row */}
        <div style={{ display: 'flex', gap: 10, marginTop: 16 }}>
          <button onClick={() => go('shop')} style={{
            flex: 1, padding: '14px 16px', borderRadius: 14, border: 'none', cursor: 'pointer',
            background: A.red, color: '#fff', fontFamily: A.display, fontWeight: 700, fontSize: 15,
            boxShadow: `0 0 0 1px ${A.red}, 0 14px 40px ${A.redGlow}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
          }}>Order products {I.arrow('#fff')}</button>
          <button onClick={onReplay} style={{
            padding: '14px 14px', borderRadius: 14, cursor: 'pointer',
            background: 'transparent', color: A.text, border: `1px solid ${A.hairline}`,
            fontFamily: A.mono, fontSize: 12, letterSpacing: 1,
          }}>↻ REPLAY</button>
        </div>

        {/* Quick stats */}
        <div style={{
          marginTop: 24, padding: '14px 16px', borderRadius: 16,
          background: A.panel, border: `1px solid ${A.hairline}`,
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14,
        }}>
          {[
            ['62+', 'SKUs', A.red],
            ['<24h', 'Dispatch', A.yellow],
            ['ISO', 'Certified', A.green],
          ].map(([n, l, c]) => (
            <div key={l}>
              <div style={{ fontFamily: A.display, fontWeight: 800, fontSize: 22, color: c, letterSpacing: -0.5 }}>{n}</div>
              <div style={{ fontFamily: A.mono, fontSize: 10, color: A.textDim, letterSpacing: 0.8, textTransform: 'uppercase', marginTop: 2 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured products carousel */}
      <div style={{ marginTop: 28 }}>
        <div style={{ padding: '0 22px 12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontFamily: A.mono, fontSize: 10, letterSpacing: 1.4, color: A.textDim, textTransform: 'uppercase' }}>// MFG_LINE_01</div>
            <h2 style={{ fontFamily: A.display, fontSize: 22, fontWeight: 700, margin: '4px 0 0', letterSpacing: -0.4 }}>Best-selling kits</h2>
          </div>
          <button onClick={() => go('shop')} style={{ background: 'transparent', border: 'none', color: A.red, fontFamily: A.mono, fontSize: 11, letterSpacing: 1, cursor: 'pointer' }}>ALL →</button>
        </div>

        <div style={{ display: 'flex', gap: 12, overflowX: 'auto', padding: '0 22px 8px', scrollSnapType: 'x mandatory' }}>
          {PRODUCTS.slice(0, 5).map((p) => <AProductCard key={p.id} p={p} go={go} addCart={addCart} />)}
        </div>
      </div>

      <SequencerStrip />

      {/* Why us */}
      <div style={{ padding: '24px 22px' }}>
        <h2 style={{ fontFamily: A.display, fontSize: 22, fontWeight: 700, margin: 0, letterSpacing: -0.4 }}>Built for the bench, not the brochure.</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginTop: 14 }}>
          {[
            { c: A.red,    t: 'Manufactured in-house', d: 'No reselling. Every lot QC-tested in Bengaluru.' },
            { c: A.yellow, t: 'Spectrophotometer-grade', d: 'A260/A280 > 1.8 across 50+ matrices.' },
            { c: A.green,  t: 'Cold chain ready',       d: 'Reagent stability validated at –20°C / 4°C.' },
            { c: A.blue,   t: 'GST invoiced',           d: 'Direct procurement, institutional billing.' },
          ].map((f) => (
            <div key={f.t} style={{
              padding: 14, borderRadius: 14, background: A.panel, border: `1px solid ${A.hairline}`,
              position: 'relative', overflow: 'hidden',
            }}>
              <div style={{ width: 6, height: 6, borderRadius: 99, background: f.c, boxShadow: `0 0 10px ${f.c}`, marginBottom: 10 }} />
              <div style={{ fontFamily: A.display, fontSize: 13.5, fontWeight: 700, color: A.text }}>{f.t}</div>
              <div style={{ fontFamily: A.display, fontSize: 11.5, color: A.textDim, marginTop: 4, lineHeight: 1.4 }}>{f.d}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA card */}
      <div style={{ margin: '8px 22px 12px', borderRadius: 18, padding: 18, background: `linear-gradient(135deg, ${A.red}1f, transparent 80%), ${A.panel2}`, border: `1px solid ${A.red}44` }}>
        <APill tone="red">Bulk · OEM</APill>
        <div style={{ fontFamily: A.display, fontSize: 18, fontWeight: 700, marginTop: 10, letterSpacing: -0.3 }}>Need 500+ preps a month?</div>
        <div style={{ fontFamily: A.display, fontSize: 12.5, color: A.textDim, marginTop: 4, lineHeight: 1.4 }}>We custom-formulate buffers, lyophilize enzymes, and label kits with your institution's branding.</div>
        <button style={{ marginTop: 12, padding: '10px 14px', background: 'transparent', color: A.red, border: `1px solid ${A.red}`, borderRadius: 10, fontFamily: A.mono, fontSize: 11, letterSpacing: 1, cursor: 'pointer' }}>REQUEST QUOTE →</button>
      </div>
    </div>
  );
}

function AProductCard({ p, go, addCart, full }) {
  const accent = A[p.accent] || A.red;
  return (
    <div onClick={() => go('product', p.id)} style={{
      flex: full ? '0 0 auto' : '0 0 220px', width: full ? '100%' : 220,
      borderRadius: 16, padding: 14, scrollSnapAlign: 'start', cursor: 'pointer',
      background: A.panel, border: `1px solid ${A.hairline}`,
      position: 'relative', overflow: 'hidden',
    }}>
      {/* "vial" visual */}
      <div style={{
        height: 110, borderRadius: 12, marginBottom: 12, position: 'relative', overflow: 'hidden',
        background: `radial-gradient(120% 80% at 50% 0%, ${accent}33, transparent 60%), linear-gradient(180deg, #0a0e15, #050709)`,
        border: `1px solid ${A.hairline}`,
      }}>
        {/* DNA fragment graphic */}
        <svg width="100%" height="100%" viewBox="0 0 220 110" style={{ position: 'absolute', inset: 0 }}>
          {Array.from({ length: 9 }).map((_, i) => {
            const x = 24 + i * 22, ph = i * 0.7;
            const y1 = 30 + Math.sin(ph) * 18;
            const y2 = 80 - Math.sin(ph) * 18;
            return <g key={i}>
              <line x1={x} y1={y1} x2={x} y2={y2} stroke={`${accent}88`} strokeWidth="1.4" />
              <circle cx={x} cy={y1} r={3} fill={accent} opacity="0.85" />
              <circle cx={x} cy={y2} r={3} fill={i % 2 ? A.red : '#fff'} opacity="0.85" />
            </g>;
          })}
        </svg>
        <div style={{ position: 'absolute', top: 8, left: 10, fontFamily: A.mono, fontSize: 9, color: A.textDim, letterSpacing: 1 }}>{p.sku}</div>
        {p.tag && <div style={{ position: 'absolute', top: 8, right: 10 }}><APill tone={p.tag === 'NEW' ? 'green' : 'red'}>{p.tag}</APill></div>}
      </div>
      <div style={{ fontFamily: A.display, fontSize: 13.5, fontWeight: 700, color: A.text, lineHeight: 1.25, minHeight: full ? 0 : 32 }}>{p.name}</div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 10 }}>
        <div>
          <div style={{ fontFamily: A.mono, fontSize: 9, color: A.textFaint, letterSpacing: 0.7, textTransform: 'uppercase' }}>{p.prep}</div>
          <div style={{ fontFamily: A.display, fontSize: 16, fontWeight: 800, color: A.text, letterSpacing: -0.2 }}>{fmtINR(p.price)}</div>
        </div>
        <button onClick={(e) => { e.stopPropagation(); addCart(p.id); }} style={{
          width: 34, height: 34, borderRadius: 10, border: 'none', cursor: 'pointer',
          background: accent, color: '#0a0b10',
          boxShadow: `0 0 0 1px ${accent}, 0 8px 22px ${accent}55`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>{I.plus('#0a0b10')}</button>
      </div>
    </div>
  );
}

// ─────────────── Shop ───────────────
function AShop({ go, addCart }) {
  const cats = ['All', 'Extraction', 'Reagents', 'Buffers'];
  const [cat, setCat] = React.useState('All');
  const list = cat === 'All' ? PRODUCTS : PRODUCTS.filter((p) => p.cat === cat);
  return (
    <div style={{ paddingTop: 110, paddingBottom: 120, color: A.text }}>
      <div style={{ padding: '0 22px' }}>
        <div style={{ fontFamily: A.mono, fontSize: 10, letterSpacing: 1.4, color: A.textDim, textTransform: 'uppercase' }}>// CATALOG</div>
        <h1 style={{ fontFamily: A.display, fontSize: 34, fontWeight: 800, letterSpacing: -1.2, margin: '6px 0 12px' }}>Shop</h1>

        {/* Search */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 10, padding: '12px 14px',
          background: A.panel, border: `1px solid ${A.hairline}`, borderRadius: 14,
        }}>
          {I.search(A.textDim)}
          <input placeholder="Search SKU, kit, buffer…" style={{
            flex: 1, background: 'transparent', border: 'none', outline: 'none', color: A.text,
            fontFamily: A.display, fontSize: 14,
          }} />
          <span style={{ fontFamily: A.mono, fontSize: 10, color: A.textFaint, letterSpacing: 0.6 }}>⌘K</span>
        </div>

        {/* Category pills */}
        <div style={{ display: 'flex', gap: 8, marginTop: 14, overflowX: 'auto' }}>
          {cats.map((c) => (
            <button key={c} onClick={() => setCat(c)} style={{
              flexShrink: 0, padding: '8px 14px', borderRadius: 99,
              background: cat === c ? A.text : 'transparent',
              color: cat === c ? A.bg : A.textDim,
              border: cat === c ? 'none' : `1px solid ${A.hairline}`,
              fontFamily: A.mono, fontSize: 11, letterSpacing: 0.8, textTransform: 'uppercase', cursor: 'pointer',
            }}>{c}</button>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 18 }}>
          <div style={{ fontFamily: A.mono, fontSize: 10.5, color: A.textDim, letterSpacing: 0.6 }}>{list.length} RESULTS · sort: relevance</div>
        </div>
      </div>

      {/* Product grid */}
      <div style={{ padding: '16px 22px 0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        {list.map((p) => <AProductCard key={p.id} p={p} go={go} addCart={addCart} full />)}
      </div>
    </div>
  );
}

// ─────────────── Product Detail ───────────────
function AProduct({ id, go, addCart }) {
  const p = PRODUCTS.find((x) => x.id === id) || PRODUCTS[0];
  const accent = A[p.accent] || A.red;
  const [qty, setQty] = React.useState(1);
  return (
    <div style={{ paddingTop: 110, paddingBottom: 130, color: A.text }}>
      {/* Hero visual */}
      <div style={{
        margin: '0 22px', borderRadius: 18,
        background: `radial-gradient(140% 80% at 50% 0%, ${accent}33, transparent 60%), linear-gradient(180deg, ${A.panel}, ${A.bg})`,
        border: `1px solid ${A.hairline}`,
        height: 230, position: 'relative', overflow: 'hidden',
      }}>
        <svg viewBox="0 0 320 240" width="100%" height="100%" style={{ position: 'absolute', inset: 0 }}>
          {Array.from({ length: 14 }).map((_, i) => {
            const x = 20 + i * 21, ph = i * 0.55;
            const y1 = 60 + Math.sin(ph) * 30;
            const y2 = 180 - Math.sin(ph) * 30;
            return <g key={i}>
              <line x1={x} y1={y1} x2={x} y2={y2} stroke={`${accent}77`} strokeWidth="1.4" />
              <circle cx={x} cy={y1} r={4} fill={accent} />
              <circle cx={x} cy={y2} r={4} fill={i % 2 ? A.red : '#fff'} />
            </g>;
          })}
        </svg>
        <div style={{ position: 'absolute', top: 14, left: 16, display: 'flex', gap: 8 }}>
          <APill tone={p.accent === 'red' ? 'red' : p.accent === 'green' ? 'green' : p.accent === 'blue' ? 'blue' : 'yellow'}>{p.cat}</APill>
          {p.tag && <APill tone="red" glow>{p.tag}</APill>}
        </div>
        <div style={{ position: 'absolute', bottom: 12, right: 14, fontFamily: A.mono, fontSize: 10, color: A.textDim, letterSpacing: 1.2 }}>{p.sku}</div>
      </div>

      <div style={{ padding: '18px 22px 0' }}>
        <h1 style={{ fontFamily: A.display, fontSize: 26, fontWeight: 800, lineHeight: 1.1, letterSpacing: -0.8, margin: 0 }}>{p.name}</h1>
        <div style={{ marginTop: 8, display: 'flex', alignItems: 'baseline', gap: 10 }}>
          <span style={{ fontFamily: A.display, fontSize: 28, fontWeight: 800, color: A.text }}>{fmtINR(p.price)}</span>
          <span style={{ fontFamily: A.mono, fontSize: 11, color: A.textDim }}>excl. GST · {p.prep}</span>
        </div>

        {/* Spec strip */}
        <div style={{
          marginTop: 16, padding: 12, borderRadius: 14, border: `1px solid ${A.hairline}`,
          background: A.panel,
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10,
        }}>
          {[
            ['Method', p.method],
            ['Preps', p.prep],
            ['Storage', '4°C / 24mo'],
          ].map(([k, v]) => (
            <div key={k}>
              <div style={{ fontFamily: A.mono, fontSize: 9, color: A.textFaint, letterSpacing: 0.7, textTransform: 'uppercase' }}>{k}</div>
              <div style={{ fontFamily: A.display, fontSize: 12.5, fontWeight: 600, color: A.text, marginTop: 2 }}>{v}</div>
            </div>
          ))}
        </div>

        {/* Description */}
        <div style={{ marginTop: 18 }}>
          <div style={{ fontFamily: A.mono, fontSize: 10, color: A.textDim, letterSpacing: 1.2 }}>// DESCRIPTION</div>
          <p style={{ marginTop: 6, fontFamily: A.display, fontSize: 13.5, color: A.textDim, lineHeight: 1.55 }}>
            Optimised single-tube workflow for high-yield genomic DNA recovery. Validated on the most demanding matrices — produces consistent A260/A280 between 1.8 and 2.0, ready for PCR, NGS library prep, and Sanger sequencing.
          </p>
        </div>

        {/* Bullet specs */}
        <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 8 }}>
          {['≥ 30 µg DNA from 25 mg tissue', 'Inhibitor-free eluate', 'No phenol / chloroform required', '40-minute protocol'].map((f) => (
            <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: A.display, fontSize: 12.5, color: A.text }}>
              <span style={{ color: accent, display: 'inline-flex' }}>{I.check(accent)}</span> {f}
            </div>
          ))}
        </div>

        {/* qty + add */}
        <div style={{
          marginTop: 22, padding: 12, borderRadius: 16, border: `1px solid ${A.hairline}`,
          background: A.panel, display: 'flex', alignItems: 'center', gap: 10,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4, border: `1px solid ${A.hairline}`, borderRadius: 10, padding: 4 }}>
            <button onClick={() => setQty((q) => Math.max(1, q - 1))} style={{ width: 30, height: 30, border: 'none', background: 'transparent', color: A.text, cursor: 'pointer', borderRadius: 8 }}>{I.minus()}</button>
            <span style={{ fontFamily: A.mono, fontSize: 14, width: 22, textAlign: 'center', color: A.text }}>{qty}</span>
            <button onClick={() => setQty((q) => q + 1)} style={{ width: 30, height: 30, border: 'none', background: 'transparent', color: A.text, cursor: 'pointer', borderRadius: 8 }}>{I.plus()}</button>
          </div>
          <button onClick={() => addCart(p.id, qty)} style={{
            flex: 1, padding: '12px', borderRadius: 12, border: 'none', cursor: 'pointer',
            background: A.red, color: '#fff', fontFamily: A.display, fontWeight: 700, fontSize: 14,
            boxShadow: `0 8px 24px ${A.redGlow}`,
          }}>Add to cart · {fmtINR(p.price * qty)}</button>
        </div>
      </div>
    </div>
  );
}

// ─────────────── Services ───────────────
function AServices() {
  return (
    <div style={{ paddingTop: 110, paddingBottom: 120, color: A.text }}>
      <div style={{ padding: '0 22px' }}>
        <div style={{ fontFamily: A.mono, fontSize: 10, letterSpacing: 1.4, color: A.textDim, textTransform: 'uppercase' }}>// SERVICES</div>
        <h1 style={{ fontFamily: A.display, fontSize: 34, fontWeight: 800, letterSpacing: -1.2, margin: '6px 0 6px' }}>Research, end-to-end.</h1>
        <p style={{ fontFamily: A.display, fontSize: 14, color: A.textDim, lineHeight: 1.5, marginTop: 8 }}>
          From sample to publication. Pick a workflow or stitch them together — we'll match the protocol to your hypothesis.
        </p>
      </div>

      <div style={{ padding: '20px 22px 0', display: 'flex', flexDirection: 'column', gap: 12 }}>
        {SERVICES.map((s, i) => {
          const accent = [A.red, A.blue, A.yellow, A.green, A.red, A.blue][i];
          return (
            <div key={s.id} style={{
              padding: 16, borderRadius: 16,
              background: A.panel, border: `1px solid ${A.hairline}`,
              position: 'relative', overflow: 'hidden',
            }}>
              <div style={{ position: 'absolute', right: -30, top: -30, width: 140, height: 140, borderRadius: 99,
                background: `radial-gradient(circle, ${accent}22, transparent 60%)` }} />
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, position: 'relative' }}>
                <div style={{
                  width: 42, height: 42, borderRadius: 12, background: `${accent}1f`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  border: `1px solid ${accent}55`, color: accent,
                }}>{I[s.icon] ? I[s.icon](accent) : I.flask(accent)}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ fontFamily: A.mono, fontSize: 10, color: A.textFaint, letterSpacing: 1 }}>{s.code}</span>
                  </div>
                  <div style={{ fontFamily: A.display, fontSize: 16, fontWeight: 700, marginTop: 2, letterSpacing: -0.2 }}>{s.name}</div>
                  <div style={{ fontFamily: A.display, fontSize: 12.5, color: A.textDim, marginTop: 4, lineHeight: 1.5 }}>{s.blurb}</div>
                </div>
                <div style={{ alignSelf: 'center', color: A.textDim }}>{I.arrow(accent)}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─────────────── About ───────────────
function AAbout() {
  return (
    <div style={{ paddingTop: 110, paddingBottom: 120, color: A.text }}>
      <div style={{ padding: '0 22px' }}>
        <div style={{ fontFamily: A.mono, fontSize: 10, letterSpacing: 1.4, color: A.textDim, textTransform: 'uppercase' }}>// ABOUT</div>
        <h1 style={{ fontFamily: A.display, fontSize: 34, fontWeight: 800, letterSpacing: -1.2, margin: '6px 0 0' }}>We make<br/>the reagents we<br/><span style={{ color: A.red }}>wished we had.</span></h1>
        <p style={{ fontFamily: A.display, fontSize: 14, color: A.textDim, lineHeight: 1.55, marginTop: 14 }}>
          Xploregen Discoveries is a Bengaluru-based molecular biology company building research-grade kits and reagents in-house. We exist because researchers deserve better than failed extractions and brittle import-only supply chains.
        </p>

        {/* Stats */}
        <div style={{
          marginTop: 22, padding: 18, borderRadius: 18,
          background: A.panel, border: `1px solid ${A.hairline}`,
          display: 'grid', gridTemplateColumns: '1fr 1fr', rowGap: 18,
        }}>
          {[
            ['2022', 'Founded', A.red],
            ['62', 'Catalog SKUs', A.yellow],
            ['180+', 'Labs served', A.green],
            ['25k+', 'Preps shipped', A.blue],
          ].map(([n, l, c]) => (
            <div key={l}>
              <div style={{ fontFamily: A.display, fontSize: 30, fontWeight: 800, color: c, letterSpacing: -1 }}>{n}</div>
              <div style={{ fontFamily: A.mono, fontSize: 10, color: A.textDim, textTransform: 'uppercase', letterSpacing: 0.8 }}>{l}</div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div style={{ marginTop: 24 }}>
          <div style={{ fontFamily: A.mono, fontSize: 10, color: A.textDim, letterSpacing: 1.2 }}>// MILESTONES</div>
          <div style={{ marginTop: 12, position: 'relative', paddingLeft: 20 }}>
            <div style={{ position: 'absolute', left: 4, top: 8, bottom: 8, width: 1, background: A.hairline }} />
            {[
              ['2022', 'Lab incorporated in Kasturi Nagar, Bengaluru.'],
              ['2023', 'First buffer line ships. ISO 9001 audit cleared.'],
              ['2024', 'Magnetic-bead extraction series launches.'],
              ['2025', 'Firefly Bright luciferase debuts. 50+ partner labs.'],
            ].map(([y, t], i) => (
              <div key={y} style={{ position: 'relative', paddingBottom: 16 }}>
                <div style={{ position: 'absolute', left: -20, top: 4, width: 9, height: 9, borderRadius: 99, background: A.red, boxShadow: `0 0 8px ${A.redGlow}` }} />
                <div style={{ fontFamily: A.mono, fontSize: 11, color: A.red, letterSpacing: 1 }}>{y}</div>
                <div style={{ fontFamily: A.display, fontSize: 13, color: A.text, marginTop: 2, lineHeight: 1.4 }}>{t}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div style={{ marginTop: 22, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {['ISO 9001:2015', 'DSIR Recognised', 'MSME Registered', 'GST Compliant'].map((c) => <APill key={c} tone="green">✓ {c}</APill>)}
        </div>

        {/* Address card */}
        <div style={{ marginTop: 22, padding: 16, borderRadius: 16, border: `1px solid ${A.hairline}`, background: A.panel2 }}>
          <div style={{ fontFamily: A.mono, fontSize: 10, color: A.textDim, letterSpacing: 1 }}>// HQ</div>
          <div style={{ fontFamily: A.display, fontSize: 14, color: A.text, marginTop: 6, lineHeight: 1.5 }}>
            401, 4AB Cross, Kasturi Nagar Main Rd<br/>
            Doctors Layout · Kasturi Nagar<br/>
            Bengaluru 560043 · KA · India
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────── Cart ───────────────
function ACart({ cart, removeCart, go }) {
  const items = Object.entries(cart).map(([id, qty]) => ({ p: PRODUCTS.find((x) => x.id === id), qty })).filter((x) => x.p);
  const total = items.reduce((s, { p, qty }) => s + p.price * qty, 0);
  return (
    <div style={{ paddingTop: 110, paddingBottom: 130, color: A.text }}>
      <div style={{ padding: '0 22px' }}>
        <div style={{ fontFamily: A.mono, fontSize: 10, letterSpacing: 1.4, color: A.textDim, textTransform: 'uppercase' }}>// CART</div>
        <h1 style={{ fontFamily: A.display, fontSize: 34, fontWeight: 800, letterSpacing: -1.2, margin: '6px 0 16px' }}>Your order</h1>

        {items.length === 0 ? (
          <div style={{ padding: 30, borderRadius: 16, border: `1px dashed ${A.hairline}`, textAlign: 'center', color: A.textDim }}>
            <div style={{ fontFamily: A.mono, fontSize: 12 }}>EMPTY · 0 ITEMS</div>
            <button onClick={() => go('shop')} style={{ marginTop: 12, padding: '10px 16px', background: A.red, color: '#fff', border: 'none', borderRadius: 10, fontFamily: A.display, fontWeight: 600, cursor: 'pointer' }}>Browse catalog</button>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {items.map(({ p, qty }) => (
              <div key={p.id} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 12, borderRadius: 14, background: A.panel, border: `1px solid ${A.hairline}` }}>
                <div style={{ width: 56, height: 56, borderRadius: 10, background: `radial-gradient(circle, ${A[p.accent]}33, transparent 70%), #0a0e15`, border: `1px solid ${A.hairline}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ width: 8, height: 26, borderRadius: 4, background: A[p.accent] }} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontFamily: A.mono, fontSize: 10, color: A.textFaint, letterSpacing: 1 }}>{p.sku}</div>
                  <div style={{ fontFamily: A.display, fontSize: 13, fontWeight: 600, color: A.text, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{p.name}</div>
                  <div style={{ fontFamily: A.mono, fontSize: 11, color: A.textDim, marginTop: 2 }}>×{qty} · {fmtINR(p.price * qty)}</div>
                </div>
                <button onClick={() => removeCart(p.id)} style={{ background: 'transparent', border: 'none', color: A.textDim, cursor: 'pointer', fontSize: 18 }}>×</button>
              </div>
            ))}

            <div style={{ padding: 16, borderRadius: 14, background: A.panel2, border: `1px solid ${A.hairline}`, marginTop: 6 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: A.display, fontSize: 13, color: A.textDim }}>
                <span>Subtotal</span><span>{fmtINR(total)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: A.display, fontSize: 13, color: A.textDim, marginTop: 6 }}>
                <span>GST (18%)</span><span>{fmtINR(Math.round(total * 0.18))}</span>
              </div>
              <div style={{ height: 1, background: A.hairline, margin: '12px 0' }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: A.display, fontSize: 18, fontWeight: 800, color: A.text }}>
                <span>Total</span><span>{fmtINR(Math.round(total * 1.18))}</span>
              </div>
              <button style={{ marginTop: 14, width: '100%', padding: 14, background: A.red, color: '#fff', border: 'none', borderRadius: 12, fontFamily: A.display, fontWeight: 700, fontSize: 15, cursor: 'pointer', boxShadow: `0 10px 28px ${A.redGlow}` }}>
                Proceed to checkout →
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ─────────────── App wrapper for Direction A ───────────────
function DirectionAApp({ screen: forcedScreen }) {
  const [active, setActive] = React.useState(forcedScreen || 'home');
  const [productId, setProductId] = React.useState(PRODUCTS[0].id);
  const [cart, setCart] = React.useState({ [PRODUCTS[0].id]: 1, [PRODUCTS[7].id]: 2 });
  const [replayKey, setReplayKey] = React.useState(0);

  // When this artboard is configured to show a specific screen, lock it.
  React.useEffect(() => { if (forcedScreen) setActive(forcedScreen); }, [forcedScreen]);

  const go = (key, id) => { if (id) setProductId(id); setActive(key === 'product' ? 'product' : key); };
  const addCart = (id, qty = 1) => setCart((c) => ({ ...c, [id]: (c[id] || 0) + qty }));
  const removeCart = (id) => setCart((c) => { const n = { ...c }; delete n[id]; return n; });
  const cartCount = Object.values(cart).reduce((s, n) => s + n, 0);

  const screenLabels = { home: 'HOME', shop: 'CATALOG', services: 'SERVICES', about: 'ABOUT', cart: 'CART', product: 'KIT' };

  let body = null;
  if (active === 'home') body = <ALanding go={go} addCart={addCart} replayKey={replayKey} onReplay={() => setReplayKey((k) => k + 1)} />;
  else if (active === 'shop') body = <AShop go={go} addCart={addCart} />;
  else if (active === 'product') body = <AProduct id={productId} go={go} addCart={addCart} />;
  else if (active === 'services') body = <AServices />;
  else if (active === 'about') body = <AAbout />;
  else if (active === 'cart') body = <ACart cart={cart} removeCart={removeCart} go={go} />;

  return (
    <div style={{ width: '100%', height: '100%', background: A.bg, position: 'relative', overflow: 'hidden', fontFamily: A.display, color: A.text }}>
      <ATopBar screen={screenLabels[active] || ''} />
      <div style={{ width: '100%', height: '100%', overflowY: 'auto', overflowX: 'hidden' }}>
        {body}
      </div>
      <ABottomNav active={active === 'product' ? 'shop' : active} setActive={(k) => setActive(k)} cartCount={cartCount} />
    </div>
  );
}

// Standalone "logo intro" artboard — just the animation, big, replayable
function DirectionAIntro() {
  const [k, setK] = React.useState(0);
  return (
    <div style={{
      width: '100%', height: '100%', background: A.bg, color: A.text,
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      gap: 26, position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.6,
        background:
          'radial-gradient(60% 50% at 50% 40%, rgba(255,58,43,0.18) 0%, transparent 60%),' +
          'repeating-linear-gradient(0deg, rgba(255,255,255,0.025) 0 1px, transparent 1px 48px),' +
          'repeating-linear-gradient(90deg, rgba(255,255,255,0.025) 0 1px, transparent 1px 48px)',
      }} />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <DNALogo size={320} theme="dark" replayKey={k} />
      </div>
      <div style={{ position: 'relative', zIndex: 1, fontFamily: A.mono, fontSize: 11, color: A.textDim, letterSpacing: 1.4 }}>
        DISCOVERIES · BENGALURU · 2026
      </div>
      <button onClick={() => setK((x) => x + 1)} style={{
        position: 'absolute', bottom: 50, padding: '10px 16px', background: 'transparent',
        color: A.text, border: `1px solid ${A.hairline}`, borderRadius: 10,
        fontFamily: A.mono, fontSize: 11, letterSpacing: 1, cursor: 'pointer', zIndex: 2,
      }}>↻ REPLAY ANIMATION</button>
    </div>
  );
}

Object.assign(window, { DirectionAApp, DirectionAIntro, A });
