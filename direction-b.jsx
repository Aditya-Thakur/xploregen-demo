// direction-b.jsx — "Editorial Bio" — modern minimal, warm off-white, display serif,
// generous whitespace, surgical color from the logo palette. Same screen set.

const B = {
  paper:    '#f4f1ea',
  paper2:   '#ebe6dc',
  card:     '#ffffff',
  ink:      '#13110d',
  inkSoft:  '#3a352c',
  inkMute:  '#6b6358',
  inkFaint: '#a89f8f',
  hair:     'rgba(19,17,13,0.12)',
  red:      '#cf2a23',
  blue:     '#1f4f9b',
  yellow:   '#d8aa1b',
  green:    '#2e8a5f',
  serif:    '"Fraunces", "Cormorant Garamond", "Times New Roman", serif',
  sans:     '"Inter", -apple-system, system-ui, sans-serif',
  mono:     '"JetBrains Mono", ui-monospace, monospace',
};

// ─────────────── Editorial logo (smaller, monochrome-friendly) ───────────────
function BMiniLogo({ size = 26 }) {
  return (
    <svg viewBox="0 0 320 240" width={size} height={size * 0.78}>
      {[0, 1, 2, 3].map((i) => {
        const x = 30 + i * 26, bend = [0, 14, 24, 30][i];
        const cs = [B.blue, B.yellow, B.green, B.yellow];
        return <rect key={'L' + i} x={x} y={50 + bend} width={14} height={140 - bend * 2} rx={7} fill={cs[i]} />;
      })}
      {[0, 1, 2, 3].map((i) => {
        const x = 320 - 44 - i * 26, bend = [0, 14, 24, 30][i];
        const cs = [B.blue, B.yellow, B.green, B.yellow];
        return <rect key={'R' + i} x={x} y={50 + bend} width={14} height={140 - bend * 2} rx={7} fill={cs[i]} />;
      })}
      <path d="M 20 40 Q 120 80 160 120 Q 200 160 300 200" stroke={B.red} strokeWidth="20" strokeLinecap="round" fill="none" />
      <path d="M 20 200 Q 120 160 160 120 Q 200 80 300 40" stroke={B.red} strokeWidth="20" strokeLinecap="round" fill="none" />
    </svg>
  );
}

// ─────────────── Top bar ───────────────
function BTopBar({ go }) {
  return (
    <div style={{
      position: 'absolute', top: 56, left: 0, right: 0, zIndex: 20,
      padding: '0 22px', height: 50,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <BMiniLogo size={26} />
        <span style={{ fontFamily: B.serif, fontSize: 17, fontWeight: 600, letterSpacing: -0.2, color: B.ink }}>Xploregen</span>
      </div>
      <button onClick={() => go('cart')} style={{
        width: 38, height: 38, borderRadius: 99, background: B.ink, color: B.paper, border: 'none', cursor: 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>{I.cart(B.paper)}</button>
    </div>
  );
}

// ─────────────── Bottom nav ───────────────
function BBottomNav({ active, setActive, cartCount }) {
  const items = [
    { key: 'home', label: 'Home' },
    { key: 'shop', label: 'Shop' },
    { key: 'services', label: 'Services' },
    { key: 'about', label: 'About' },
  ];
  return (
    <div style={{
      position: 'absolute', left: 0, right: 0, bottom: 0,
      padding: '12px 16px 30px', zIndex: 30,
      background: 'linear-gradient(180deg, transparent 0%, ' + B.paper + ' 50%)',
    }}>
      <div style={{
        display: 'flex', background: B.ink, color: B.paper, borderRadius: 999, padding: 4,
        boxShadow: '0 14px 36px rgba(19,17,13,0.18)',
      }}>
        {items.map((it) => {
          const on = active === it.key;
          return (
            <button key={it.key} onClick={() => setActive(it.key)} style={{
              flex: 1, padding: '11px 4px', borderRadius: 999, border: 'none', cursor: 'pointer',
              background: on ? B.paper : 'transparent', color: on ? B.ink : 'rgba(244,241,234,0.7)',
              fontFamily: B.sans, fontSize: 12, fontWeight: on ? 600 : 500, letterSpacing: 0.2,
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
            }}>{it.label}</button>
          );
        })}
      </div>
    </div>
  );
}

// ─────────────── Landing ───────────────
function BLanding({ go, addCart, replayKey, onReplay }) {
  return (
    <div style={{ paddingTop: 118, paddingBottom: 120, color: B.ink }}>
      {/* Hero */}
      <div style={{ padding: '0 22px' }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          padding: '6px 12px', borderRadius: 99, background: B.paper2,
          fontFamily: B.mono, fontSize: 10.5, letterSpacing: 0.6, color: B.inkSoft, textTransform: 'uppercase',
        }}>
          <span style={{ width: 6, height: 6, borderRadius: 99, background: B.red }} /> Issue 04 · 2026
        </div>

        <h1 style={{
          fontFamily: B.serif, fontWeight: 500, fontStyle: 'italic',
          fontSize: 56, lineHeight: 0.92, letterSpacing: -1.5, margin: '20px 0 0', color: B.ink,
          textWrap: 'balance',
        }}>
          Better<br/>
          <span style={{ fontStyle: 'normal', fontWeight: 600 }}>reagents.</span>{' '}
          <span style={{ fontStyle: 'italic', color: B.red }}>Bolder</span><br/>
          <span style={{ fontStyle: 'normal', fontWeight: 600 }}>discoveries.</span>
        </h1>

        <p style={{ fontFamily: B.sans, fontSize: 15, lineHeight: 1.55, color: B.inkSoft, marginTop: 18, maxWidth: 320 }}>
          A small Bengaluru lab making the molecular-biology kits we wished we had as researchers. Extraction. Buffers. Bright luciferase. All manufactured in-house.
        </p>

        <div style={{ display: 'flex', gap: 10, marginTop: 22 }}>
          <button onClick={() => go('shop')} style={{
            flex: 1, padding: '14px 18px', borderRadius: 99, border: 'none', cursor: 'pointer',
            background: B.ink, color: B.paper, fontFamily: B.sans, fontSize: 14.5, fontWeight: 600,
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
          }}>Order products {I.arrow(B.paper)}</button>
          <button onClick={() => go('services')} style={{
            padding: '14px 18px', borderRadius: 99, border: `1px solid ${B.ink}`, cursor: 'pointer',
            background: 'transparent', color: B.ink, fontFamily: B.sans, fontSize: 14.5, fontWeight: 500,
          }}>Services</button>
        </div>
      </div>

      {/* Helix card — central feature */}
      <div style={{ margin: '34px 22px 0', position: 'relative' }}>
        <div style={{
          background: B.ink, borderRadius: 26, padding: '24px 18px 18px',
          color: B.paper, position: 'relative', overflow: 'hidden',
        }}>
          {/* paper-grain glow */}
          <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(60% 50% at 50% 30%, ${B.red}33, transparent 70%)`, pointerEvents: 'none' }} />
          <div style={{ position: 'relative', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
            <div style={{ fontFamily: B.mono, fontSize: 10.5, letterSpacing: 1, opacity: 0.6 }}>HELIX // INTERACTIVE</div>
            <button onClick={onReplay} style={{ background: 'transparent', border: `1px solid rgba(244,241,234,0.28)`, color: B.paper, borderRadius: 99, padding: '4px 10px', fontFamily: B.mono, fontSize: 10, letterSpacing: 1, cursor: 'pointer' }}>↻ replay</button>
          </div>
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', marginTop: 4 }}>
            <DNAHelix width={300} height={240} theme="dark" speed={0.9} />
          </div>
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 8 }}>
            <div style={{ fontFamily: B.serif, fontSize: 17, fontStyle: 'italic', maxWidth: 220, lineHeight: 1.25 }}>
              "Drag the helix. Every base pair shipped by us."
            </div>
            <div style={{ fontFamily: B.mono, fontSize: 10, opacity: 0.55, letterSpacing: 1 }}>·LIVE·</div>
          </div>
        </div>
      </div>

      {/* Section header — number + title */}
      <div style={{ padding: '38px 22px 0' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
          <div style={{ fontFamily: B.serif, fontStyle: 'italic', fontSize: 14, color: B.red }}>01</div>
          <div style={{ flex: 1, height: 1, background: B.hair }} />
          <div style={{ fontFamily: B.mono, fontSize: 10, color: B.inkMute, letterSpacing: 1.2, textTransform: 'uppercase' }}>The Catalog</div>
        </div>
        <h2 style={{ fontFamily: B.serif, fontSize: 30, fontWeight: 500, letterSpacing: -0.6, lineHeight: 1.05, margin: '14px 0 6px' }}>
          What's <span style={{ fontStyle: 'italic' }}>moving</span> this quarter.
        </h2>
        <p style={{ fontFamily: B.sans, fontSize: 13.5, color: B.inkMute, marginTop: 4 }}>Five kits researchers reorder most.</p>
      </div>

      {/* Featured products */}
      <div style={{ display: 'flex', gap: 14, overflowX: 'auto', padding: '18px 22px 8px', scrollSnapType: 'x mandatory' }}>
        {PRODUCTS.slice(0, 5).map((p) => <BProductCard key={p.id} p={p} go={go} addCart={addCart} />)}
      </div>

      {/* Editorial split — image + pull quote */}
      <div style={{ padding: '36px 22px 0' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
          <div style={{ fontFamily: B.serif, fontStyle: 'italic', fontSize: 14, color: B.red }}>02</div>
          <div style={{ flex: 1, height: 1, background: B.hair }} />
          <div style={{ fontFamily: B.mono, fontSize: 10, color: B.inkMute, letterSpacing: 1.2, textTransform: 'uppercase' }}>Why us</div>
        </div>
        <h2 style={{ fontFamily: B.serif, fontSize: 30, fontWeight: 500, letterSpacing: -0.6, lineHeight: 1.05, margin: '14px 0 16px' }}>
          A reagent is only<br/>as good as the <span style={{ fontStyle: 'italic', color: B.red }}>run</span> after it.
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 1, background: B.hair, borderRadius: 4, overflow: 'hidden' }}>
          {[
            ['In-house manufacturing', 'Every lot QC-tested in our Bengaluru facility — no resellers, no surprises.', B.red],
            ['Spectrophotometer grade', 'A260/A280 ratios validated across 50+ tissue and bacterial matrices.', B.yellow],
            ['Cold chain ready', 'Reagent stability formally tested at –20°C, –80°C, and 4°C ambient.', B.green],
            ['Institutional billing', 'GST invoices, PO workflows, and bulk pricing for academic procurement.', B.blue],
          ].map(([t, d, c]) => (
            <div key={t} style={{ background: B.paper, padding: '16px 4px', display: 'flex', gap: 14 }}>
              <div style={{ width: 6, borderRadius: 99, background: c, flexShrink: 0 }} />
              <div>
                <div style={{ fontFamily: B.serif, fontSize: 17, fontWeight: 600, color: B.ink, letterSpacing: -0.2 }}>{t}</div>
                <div style={{ fontFamily: B.sans, fontSize: 13, color: B.inkSoft, marginTop: 4, lineHeight: 1.45 }}>{d}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pull quote */}
      <div style={{ padding: '36px 22px 0' }}>
        <div style={{
          padding: '26px 24px', borderRadius: 20,
          background: B.paper2,
          position: 'relative',
        }}>
          <div style={{ fontFamily: B.serif, fontSize: 60, lineHeight: 0.6, color: B.red, height: 24 }}>"</div>
          <div style={{ fontFamily: B.serif, fontSize: 22, lineHeight: 1.25, fontWeight: 500, color: B.ink, letterSpacing: -0.3 }}>
            We switched our entire <span style={{ fontStyle: 'italic' }}>extraction pipeline</span> over in a single week — and the A260 ratios have never been tighter.
          </div>
          <div style={{ fontFamily: B.sans, fontSize: 12, color: B.inkMute, marginTop: 14, textTransform: 'uppercase', letterSpacing: 0.6 }}>
            Dr. R. Iyer · Plant Genomics, IISc
          </div>
        </div>
      </div>

      {/* Bulk CTA */}
      <div style={{ padding: '36px 22px 0' }}>
        <div style={{ padding: '24px', borderRadius: 20, background: B.ink, color: B.paper, position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', right: -50, top: -40, width: 200, height: 200, borderRadius: 99, background: `radial-gradient(circle, ${B.red}55, transparent 60%)` }} />
          <div style={{ position: 'relative' }}>
            <div style={{ fontFamily: B.mono, fontSize: 11, opacity: 0.6, letterSpacing: 1, textTransform: 'uppercase' }}>Bulk & OEM</div>
            <div style={{ fontFamily: B.serif, fontSize: 26, fontWeight: 500, marginTop: 8, letterSpacing: -0.5, lineHeight: 1.05 }}>
              Need <span style={{ fontStyle: 'italic', color: B.yellow }}>500+ preps</span><br/>a month?
            </div>
            <p style={{ fontFamily: B.sans, fontSize: 13, opacity: 0.75, marginTop: 10, lineHeight: 1.5 }}>
              We custom-formulate, lyophilize, and white-label kits for institutions, CROs, and IVD partners.
            </p>
            <button style={{ marginTop: 16, padding: '11px 16px', background: B.paper, color: B.ink, border: 'none', borderRadius: 99, fontFamily: B.sans, fontSize: 13.5, fontWeight: 600, cursor: 'pointer' }}>
              Talk to our team →
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ padding: '36px 22px 0', fontFamily: B.mono, fontSize: 10, letterSpacing: 1, color: B.inkMute, textTransform: 'uppercase' }}>
        © 2026 · XPLOREGEN DISCOVERIES · BENGALURU
      </div>
    </div>
  );
}

function BProductCard({ p, go, addCart, full }) {
  const accent = B[p.accent] || B.red;
  return (
    <div onClick={() => go('product', p.id)} style={{
      flex: full ? '0 0 auto' : '0 0 230px', width: full ? '100%' : 230,
      borderRadius: 18, padding: 14, scrollSnapAlign: 'start', cursor: 'pointer',
      background: B.card, border: `1px solid ${B.hair}`,
      boxShadow: '0 1px 0 rgba(19,17,13,0.04)',
    }}>
      <div style={{
        height: 130, borderRadius: 12, marginBottom: 12, position: 'relative',
        background: B.paper2, overflow: 'hidden',
      }}>
        {/* Editorial visual — DNA fragment */}
        <svg width="100%" height="100%" viewBox="0 0 230 130" style={{ position: 'absolute', inset: 0 }}>
          {Array.from({ length: 9 }).map((_, i) => {
            const x = 22 + i * 24, ph = i * 0.65;
            const y1 = 38 + Math.sin(ph) * 18;
            const y2 = 92 - Math.sin(ph) * 18;
            return <g key={i}>
              <line x1={x} y1={y1} x2={x} y2={y2} stroke={accent} strokeOpacity="0.35" strokeWidth="1.4" />
              <circle cx={x} cy={y1} r={3.5} fill={accent} />
              <circle cx={x} cy={y2} r={3.5} fill={i % 2 ? B.red : B.ink} />
            </g>;
          })}
        </svg>
        <div style={{ position: 'absolute', top: 10, left: 12, fontFamily: B.mono, fontSize: 9.5, color: B.inkMute, letterSpacing: 1 }}>{p.sku}</div>
        {p.tag && (
          <div style={{ position: 'absolute', top: 10, right: 12, padding: '3px 8px', borderRadius: 99, background: B.ink, color: B.paper, fontFamily: B.mono, fontSize: 9, letterSpacing: 0.8 }}>{p.tag}</div>
        )}
      </div>
      <div style={{ fontFamily: B.serif, fontSize: 16, fontWeight: 600, color: B.ink, lineHeight: 1.15, letterSpacing: -0.2, minHeight: full ? 0 : 38 }}>{p.name}</div>
      <div style={{ fontFamily: B.sans, fontSize: 11.5, color: B.inkMute, marginTop: 6 }}>{p.cat} · {p.prep}</div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 12 }}>
        <div style={{ fontFamily: B.serif, fontSize: 19, fontWeight: 600, color: B.ink, letterSpacing: -0.3 }}>{fmtINR(p.price)}</div>
        <button onClick={(e) => { e.stopPropagation(); addCart(p.id); }} style={{
          padding: '7px 12px', borderRadius: 99, border: `1px solid ${B.ink}`, background: B.ink, color: B.paper,
          fontFamily: B.sans, fontSize: 12, fontWeight: 600, cursor: 'pointer',
          display: 'flex', alignItems: 'center', gap: 6,
        }}>{I.plus(B.paper)} Add</button>
      </div>
    </div>
  );
}

// ─────────────── Shop ───────────────
function BShop({ go, addCart }) {
  const cats = ['All', 'Extraction', 'Reagents', 'Buffers'];
  const [cat, setCat] = React.useState('All');
  const list = cat === 'All' ? PRODUCTS : PRODUCTS.filter((p) => p.cat === cat);
  return (
    <div style={{ paddingTop: 118, paddingBottom: 120, color: B.ink }}>
      <div style={{ padding: '0 22px' }}>
        <div style={{ fontFamily: B.mono, fontSize: 10, letterSpacing: 1.2, color: B.inkMute, textTransform: 'uppercase' }}>The Catalog</div>
        <h1 style={{ fontFamily: B.serif, fontSize: 50, fontWeight: 500, letterSpacing: -1.4, margin: '8px 0 6px', lineHeight: 0.95 }}>
          <span style={{ fontStyle: 'italic' }}>Sixty-two</span> ways<br/>to start a run.
        </h1>
        <div style={{ fontFamily: B.sans, fontSize: 13.5, color: B.inkMute, marginTop: 8 }}>{list.length} of {PRODUCTS.length} shown · sorted by popularity</div>

        {/* Search */}
        <div style={{
          marginTop: 18, display: 'flex', alignItems: 'center', gap: 10, padding: '12px 16px',
          background: B.card, border: `1px solid ${B.hair}`, borderRadius: 99,
        }}>
          {I.search(B.inkMute)}
          <input placeholder="Search by SKU or kit name…" style={{
            flex: 1, background: 'transparent', border: 'none', outline: 'none', color: B.ink,
            fontFamily: B.sans, fontSize: 14,
          }} />
        </div>

        {/* Categories */}
        <div style={{ display: 'flex', gap: 8, marginTop: 14, overflowX: 'auto' }}>
          {cats.map((c) => (
            <button key={c} onClick={() => setCat(c)} style={{
              flexShrink: 0, padding: '8px 14px', borderRadius: 99,
              background: cat === c ? B.ink : 'transparent',
              color: cat === c ? B.paper : B.ink,
              border: `1px solid ${cat === c ? B.ink : B.hair}`,
              fontFamily: B.sans, fontSize: 12.5, fontWeight: 500, cursor: 'pointer',
            }}>{c}</button>
          ))}
        </div>
      </div>

      <div style={{ padding: '18px 22px 0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        {list.map((p) => <BProductCard key={p.id} p={p} go={go} addCart={addCart} full />)}
      </div>
    </div>
  );
}

// ─────────────── Product Detail ───────────────
function BProduct({ id, go, addCart }) {
  const p = PRODUCTS.find((x) => x.id === id) || PRODUCTS[0];
  const accent = B[p.accent] || B.red;
  const [qty, setQty] = React.useState(1);
  return (
    <div style={{ paddingTop: 118, paddingBottom: 130, color: B.ink }}>
      {/* Hero */}
      <div style={{
        margin: '0 22px', borderRadius: 22,
        background: B.paper2, height: 260, position: 'relative', overflow: 'hidden',
      }}>
        <svg viewBox="0 0 320 260" width="100%" height="100%" style={{ position: 'absolute', inset: 0 }}>
          {Array.from({ length: 14 }).map((_, i) => {
            const x = 22 + i * 21, ph = i * 0.55;
            const y1 = 70 + Math.sin(ph) * 30;
            const y2 = 190 - Math.sin(ph) * 30;
            return <g key={i}>
              <line x1={x} y1={y1} x2={x} y2={y2} stroke={accent} strokeOpacity="0.5" strokeWidth="1.5" />
              <circle cx={x} cy={y1} r={4} fill={accent} />
              <circle cx={x} cy={y2} r={4} fill={i % 2 ? B.red : B.ink} />
            </g>;
          })}
        </svg>
        <div style={{ position: 'absolute', top: 14, left: 16, fontFamily: B.mono, fontSize: 10, letterSpacing: 1, color: B.inkMute }}>{p.sku} · {p.cat}</div>
        {p.tag && <div style={{ position: 'absolute', top: 14, right: 16, padding: '4px 10px', borderRadius: 99, background: B.ink, color: B.paper, fontFamily: B.mono, fontSize: 10, letterSpacing: 0.8 }}>{p.tag}</div>}
      </div>

      <div style={{ padding: '22px 22px 0' }}>
        <h1 style={{ fontFamily: B.serif, fontSize: 32, fontWeight: 500, letterSpacing: -0.8, lineHeight: 1.05, margin: 0 }}>{p.name}</h1>

        <div style={{ marginTop: 14, display: 'flex', alignItems: 'baseline', gap: 12 }}>
          <div style={{ fontFamily: B.serif, fontSize: 32, fontWeight: 600, letterSpacing: -0.5 }}>{fmtINR(p.price)}</div>
          <div style={{ fontFamily: B.sans, fontSize: 12, color: B.inkMute }}>excl. GST · {p.prep}</div>
        </div>

        <p style={{ fontFamily: B.serif, fontSize: 17, fontStyle: 'italic', color: B.inkSoft, lineHeight: 1.4, marginTop: 16 }}>
          Optimised single-tube workflow for high-yield genomic DNA recovery — consistent A260/A280 of 1.8–2.0, PCR/NGS ready.
        </p>

        <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 0, borderTop: `1px solid ${B.hair}` }}>
          {[
            ['Method', p.method],
            ['Preps per kit', p.prep],
            ['Storage', '4 °C · 24 months'],
            ['Compatibility', 'PCR · qPCR · NGS · Sanger'],
            ['Lead time', '24–48h dispatch'],
          ].map(([k, v]) => (
            <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: `1px solid ${B.hair}`, alignItems: 'baseline' }}>
              <span style={{ fontFamily: B.sans, fontSize: 12.5, color: B.inkMute, textTransform: 'uppercase', letterSpacing: 0.6 }}>{k}</span>
              <span style={{ fontFamily: B.serif, fontSize: 14, fontWeight: 600, color: B.ink, textAlign: 'right' }}>{v}</span>
            </div>
          ))}
        </div>

        {/* Sticky-ish CTA */}
        <div style={{ marginTop: 24, display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', border: `1px solid ${B.ink}`, borderRadius: 99, padding: 4 }}>
            <button onClick={() => setQty((q) => Math.max(1, q - 1))} style={{ width: 32, height: 32, border: 'none', background: 'transparent', cursor: 'pointer', borderRadius: 99 }}>{I.minus(B.ink)}</button>
            <span style={{ fontFamily: B.serif, fontSize: 16, fontWeight: 600, width: 24, textAlign: 'center' }}>{qty}</span>
            <button onClick={() => setQty((q) => q + 1)} style={{ width: 32, height: 32, border: 'none', background: 'transparent', cursor: 'pointer', borderRadius: 99 }}>{I.plus(B.ink)}</button>
          </div>
          <button onClick={() => addCart(p.id, qty)} style={{
            flex: 1, padding: '13px 16px', borderRadius: 99, border: 'none', cursor: 'pointer',
            background: B.ink, color: B.paper, fontFamily: B.sans, fontWeight: 600, fontSize: 14,
          }}>Add · {fmtINR(p.price * qty)}</button>
        </div>
      </div>
    </div>
  );
}

// ─────────────── Services ───────────────
function BServices() {
  return (
    <div style={{ paddingTop: 118, paddingBottom: 120, color: B.ink }}>
      <div style={{ padding: '0 22px' }}>
        <div style={{ fontFamily: B.mono, fontSize: 10, letterSpacing: 1.2, color: B.inkMute, textTransform: 'uppercase' }}>Research Services</div>
        <h1 style={{ fontFamily: B.serif, fontSize: 50, fontWeight: 500, letterSpacing: -1.4, lineHeight: 0.95, margin: '8px 0 6px' }}>
          From <span style={{ fontStyle: 'italic' }}>sample</span><br/>to <span style={{ fontStyle: 'italic', color: B.red }}>publication</span>.
        </h1>
        <p style={{ fontFamily: B.sans, fontSize: 14, color: B.inkMute, marginTop: 12, lineHeight: 1.5 }}>
          A handful of workflows we run alongside our reagent line — pick one, stitch them together, or talk to us about a bespoke pipeline.
        </p>
      </div>

      <div style={{ marginTop: 24 }}>
        {SERVICES.map((s, i) => {
          const accent = [B.red, B.blue, B.yellow, B.green, B.red, B.blue][i];
          return (
            <div key={s.id} style={{
              padding: '22px 22px', borderTop: `1px solid ${B.hair}`,
              display: 'flex', alignItems: 'flex-start', gap: 16,
            }}>
              <div style={{ fontFamily: B.serif, fontStyle: 'italic', fontSize: 28, color: B.inkFaint, fontWeight: 400, width: 42 }}>
                {String(i + 1).padStart(2, '0')}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                  <span style={{ display: 'inline-block', width: 8, height: 8, borderRadius: 99, background: accent }} />
                  <span style={{ fontFamily: B.mono, fontSize: 10, color: B.inkMute, letterSpacing: 1 }}>{s.code}</span>
                </div>
                <div style={{ fontFamily: B.serif, fontSize: 22, fontWeight: 600, letterSpacing: -0.4, color: B.ink, lineHeight: 1.1 }}>{s.name}</div>
                <div style={{ fontFamily: B.sans, fontSize: 13.5, color: B.inkSoft, marginTop: 6, lineHeight: 1.55 }}>{s.blurb}</div>
                <button style={{
                  marginTop: 12, padding: 0, background: 'transparent', border: 'none', cursor: 'pointer',
                  color: B.ink, fontFamily: B.sans, fontSize: 12.5, fontWeight: 600,
                  display: 'flex', alignItems: 'center', gap: 6,
                  borderBottom: `1px solid ${B.ink}`, paddingBottom: 2,
                }}>Learn more {I.arrow(B.ink)}</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─────────────── About ───────────────
function BAbout() {
  return (
    <div style={{ paddingTop: 118, paddingBottom: 120, color: B.ink }}>
      <div style={{ padding: '0 22px' }}>
        <div style={{ fontFamily: B.mono, fontSize: 10, letterSpacing: 1.2, color: B.inkMute, textTransform: 'uppercase' }}>About us</div>

        <h1 style={{ fontFamily: B.serif, fontSize: 52, fontWeight: 500, letterSpacing: -1.4, lineHeight: 0.94, margin: '8px 0 0' }}>
          A small lab<br/>with <span style={{ fontStyle: 'italic', color: B.red }}>big ratios</span>.
        </h1>

        <p style={{ fontFamily: B.serif, fontSize: 18, lineHeight: 1.45, color: B.inkSoft, marginTop: 20 }}>
          Xploregen Discoveries was founded in Bengaluru in 2022 by molecular biologists tired of importing buffers that arrived warm, kits that lost yield by month four, and luciferase reagents that needed a second-opinion plate every time.
        </p>

        {/* Big stat strip */}
        <div style={{ marginTop: 28, borderTop: `1px solid ${B.hair}`, borderBottom: `1px solid ${B.hair}` }}>
          {[
            ['2022', 'Founded in Bengaluru', B.red],
            ['62', 'Catalog SKUs', B.yellow],
            ['180+', 'Labs served', B.green],
            ['25,400', 'Preps shipped', B.blue],
          ].map(([n, l, c], i, arr) => (
            <div key={l} style={{
              display: 'flex', alignItems: 'baseline', gap: 18, padding: '18px 0',
              borderBottom: i < arr.length - 1 ? `1px solid ${B.hair}` : 'none',
            }}>
              <span style={{ width: 6, height: 6, borderRadius: 99, background: c }} />
              <div style={{ fontFamily: B.serif, fontSize: 36, fontWeight: 500, letterSpacing: -1, color: B.ink, flex: '0 0 auto', minWidth: 110 }}>{n}</div>
              <div style={{ fontFamily: B.sans, fontSize: 12.5, color: B.inkMute, textTransform: 'uppercase', letterSpacing: 0.8 }}>{l}</div>
            </div>
          ))}
        </div>

        {/* Mission */}
        <div style={{ marginTop: 28 }}>
          <div style={{ fontFamily: B.mono, fontSize: 10, color: B.inkMute, letterSpacing: 1.2, textTransform: 'uppercase' }}>Our mission</div>
          <h3 style={{ fontFamily: B.serif, fontSize: 26, fontWeight: 500, lineHeight: 1.15, letterSpacing: -0.5, margin: '10px 0 0' }}>
            Make the reagent step so reliable that no one notices it.
          </h3>
        </div>

        {/* Certifications */}
        <div style={{ marginTop: 28, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {['ISO 9001:2015', 'DSIR Recognised', 'MSME Registered', 'GST Compliant'].map((c) => (
            <span key={c} style={{
              padding: '6px 12px', borderRadius: 99,
              background: B.paper2, fontFamily: B.mono, fontSize: 10.5, letterSpacing: 0.5,
              color: B.inkSoft, textTransform: 'uppercase',
            }}>✓ {c}</span>
          ))}
        </div>

        {/* Address */}
        <div style={{ marginTop: 28, padding: 18, borderRadius: 16, background: B.paper2 }}>
          <div style={{ fontFamily: B.mono, fontSize: 10, color: B.inkMute, letterSpacing: 1 }}>HEADQUARTERS</div>
          <div style={{ fontFamily: B.serif, fontSize: 16, color: B.ink, marginTop: 8, lineHeight: 1.5, fontWeight: 500 }}>
            401, 4AB Cross, Kasturi Nagar Main Rd,<br/>
            Doctors Layout, Bengaluru 560043,<br/>
            Karnataka, India
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────── Cart ───────────────
function BCart({ cart, removeCart, go }) {
  const items = Object.entries(cart).map(([id, qty]) => ({ p: PRODUCTS.find((x) => x.id === id), qty })).filter((x) => x.p);
  const total = items.reduce((s, { p, qty }) => s + p.price * qty, 0);
  return (
    <div style={{ paddingTop: 118, paddingBottom: 130, color: B.ink }}>
      <div style={{ padding: '0 22px' }}>
        <div style={{ fontFamily: B.mono, fontSize: 10, letterSpacing: 1.2, color: B.inkMute, textTransform: 'uppercase' }}>Your order</div>
        <h1 style={{ fontFamily: B.serif, fontSize: 44, fontWeight: 500, letterSpacing: -1.2, margin: '6px 0 18px', lineHeight: 1 }}>
          Review <span style={{ fontStyle: 'italic' }}>cart</span>.
        </h1>

        {items.length === 0 ? (
          <div style={{ padding: 24, borderRadius: 16, background: B.paper2, textAlign: 'center', color: B.inkMute, fontFamily: B.serif, fontSize: 17, fontStyle: 'italic' }}>
            Nothing here yet.
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {items.map(({ p, qty }) => (
              <div key={p.id} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 0', borderBottom: `1px solid ${B.hair}` }}>
                <div style={{ width: 52, height: 52, borderRadius: 10, background: B.paper2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ width: 6, height: 26, borderRadius: 3, background: B[p.accent] || B.red }} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontFamily: B.serif, fontSize: 15, fontWeight: 600, color: B.ink, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{p.name}</div>
                  <div style={{ fontFamily: B.sans, fontSize: 12, color: B.inkMute, marginTop: 2 }}>×{qty} · {fmtINR(p.price * qty)}</div>
                </div>
                <button onClick={() => removeCart(p.id)} style={{ background: 'transparent', border: 'none', color: B.inkMute, cursor: 'pointer', fontSize: 20 }}>×</button>
              </div>
            ))}

            <div style={{ marginTop: 18, padding: 18, borderRadius: 18, background: B.ink, color: B.paper }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: B.sans, fontSize: 13, opacity: 0.75 }}>
                <span>Subtotal</span><span>{fmtINR(total)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: B.sans, fontSize: 13, opacity: 0.75, marginTop: 6 }}>
                <span>GST (18%)</span><span>{fmtINR(Math.round(total * 0.18))}</span>
              </div>
              <div style={{ height: 1, background: 'rgba(244,241,234,0.15)', margin: '14px 0' }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: B.serif, fontSize: 22, fontWeight: 500 }}>
                <span>Total</span><span>{fmtINR(Math.round(total * 1.18))}</span>
              </div>
              <button style={{ marginTop: 16, width: '100%', padding: 14, background: B.paper, color: B.ink, border: 'none', borderRadius: 99, fontFamily: B.sans, fontWeight: 600, fontSize: 14, cursor: 'pointer' }}>
                Proceed to checkout →
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ─────────────── App wrapper for Direction B ───────────────
function DirectionBApp({ screen: forcedScreen }) {
  const [active, setActive] = React.useState(forcedScreen || 'home');
  const [productId, setProductId] = React.useState(PRODUCTS[0].id);
  const [cart, setCart] = React.useState({ [PRODUCTS[0].id]: 1, [PRODUCTS[7].id]: 2 });
  const [replayKey, setReplayKey] = React.useState(0);

  React.useEffect(() => { if (forcedScreen) setActive(forcedScreen); }, [forcedScreen]);

  const go = (key, id) => { if (id) setProductId(id); setActive(key === 'product' ? 'product' : key); };
  const addCart = (id, qty = 1) => setCart((c) => ({ ...c, [id]: (c[id] || 0) + qty }));
  const removeCart = (id) => setCart((c) => { const n = { ...c }; delete n[id]; return n; });
  const cartCount = Object.values(cart).reduce((s, n) => s + n, 0);

  let body = null;
  if (active === 'home') body = <BLanding go={go} addCart={addCart} replayKey={replayKey} onReplay={() => setReplayKey((k) => k + 1)} />;
  else if (active === 'shop') body = <BShop go={go} addCart={addCart} />;
  else if (active === 'product') body = <BProduct id={productId} go={go} addCart={addCart} />;
  else if (active === 'services') body = <BServices />;
  else if (active === 'about') body = <BAbout />;
  else if (active === 'cart') body = <BCart cart={cart} removeCart={removeCart} go={go} />;

  return (
    <div style={{ width: '100%', height: '100%', background: B.paper, position: 'relative', overflow: 'hidden', fontFamily: B.sans, color: B.ink }}>
      <BTopBar go={go} />
      <div style={{ width: '100%', height: '100%', overflowY: 'auto', overflowX: 'hidden' }}>
        {body}
      </div>
      <BBottomNav active={active === 'product' || active === 'cart' ? (active === 'cart' ? 'home' : 'shop') : active} setActive={(k) => setActive(k)} cartCount={cartCount} />
    </div>
  );
}

// Standalone intro / cover artboard
function DirectionBIntro() {
  const [k, setK] = React.useState(0);
  return (
    <div style={{
      width: '100%', height: '100%', background: B.paper, color: B.ink,
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      gap: 22, position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', top: 26, left: 22, fontFamily: B.mono, fontSize: 10, letterSpacing: 1.3, color: B.inkMute, textTransform: 'uppercase' }}>
        Issue 04 · 2026
      </div>
      <div style={{ position: 'absolute', top: 26, right: 22, fontFamily: B.mono, fontSize: 10, letterSpacing: 1.3, color: B.inkMute, textTransform: 'uppercase' }}>
        Cover
      </div>

      <DNALogo size={300} theme="light" replayKey={k} />

      <div style={{ textAlign: 'center', fontFamily: B.serif, fontSize: 17, fontStyle: 'italic', color: B.inkSoft, padding: '0 30px' }}>
        Better reagents.<br/>Bolder discoveries.
      </div>

      <button onClick={() => setK((x) => x + 1)} style={{
        position: 'absolute', bottom: 50, padding: '8px 14px', background: 'transparent',
        color: B.ink, border: `1px solid ${B.hair}`, borderRadius: 99,
        fontFamily: B.mono, fontSize: 10.5, letterSpacing: 1.2, cursor: 'pointer',
      }}>↻ REPLAY</button>
    </div>
  );
}

Object.assign(window, { DirectionBApp, DirectionBIntro, B });
