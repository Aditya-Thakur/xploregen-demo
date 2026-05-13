// print-app.jsx — paged layout for PDF export.
// Each page = one screen, with both directions side-by-side at scale 0.62.

const W = 402, H = 874, S = 0.62;

function PhoneSlot({ children, dark, caption }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, breakInside: 'avoid' }}>
      <div style={{ width: W * S, height: H * S, position: 'relative' }}>
        <div style={{ transform: `scale(${S})`, transformOrigin: 'top left', width: W, height: H, position: 'absolute', top: 0, left: 0 }}>
          <IOSDevice width={W} height={H} dark={dark}>{children}</IOSDevice>
        </div>
      </div>
      <div style={{ fontFamily: 'JetBrains Mono, ui-monospace, monospace', fontSize: 9, letterSpacing: 1.4, color: '#6b6358', textTransform: 'uppercase', textAlign: 'center' }}>
        {caption}
      </div>
    </div>
  );
}

function Page({ pageLabel, title, subtitle, children, dark = false }) {
  return (
    <section className="page" style={{
      display: 'flex', flexDirection: 'column',
      width: '297mm', height: '210mm',
      padding: '12mm 14mm 10mm', boxSizing: 'border-box',
      background: '#fafaf6',
      color: '#13110d',
      pageBreakAfter: 'always', breakAfter: 'page',
    }}>
      <header style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 6 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 22, height: 17 }}>
            <svg viewBox="0 0 320 240" width="100%" height="100%">
              {[0, 1, 2, 3].map((i) => {
                const x = 30 + i * 26, bend = [0, 14, 24, 30][i];
                const cs = ['#1f4f9b', '#d8aa1b', '#2e8a5f', '#d8aa1b'];
                return <rect key={'L' + i} x={x} y={50 + bend} width={14} height={140 - bend * 2} rx={7} fill={cs[i]} />;
              })}
              {[0, 1, 2, 3].map((i) => {
                const x = 320 - 44 - i * 26, bend = [0, 14, 24, 30][i];
                const cs = ['#1f4f9b', '#d8aa1b', '#2e8a5f', '#d8aa1b'];
                return <rect key={'R' + i} x={x} y={50 + bend} width={14} height={140 - bend * 2} rx={7} fill={cs[i]} />;
              })}
              <path d="M 20 40 Q 120 80 160 120 Q 200 160 300 200" stroke="#cf2a23" strokeWidth="20" strokeLinecap="round" fill="none" />
              <path d="M 20 200 Q 120 160 160 120 Q 200 80 300 40" stroke="#cf2a23" strokeWidth="20" strokeLinecap="round" fill="none" />
            </svg>
          </div>
          <span style={{ fontFamily: 'Fraunces, serif', fontSize: 13, fontWeight: 600, letterSpacing: -0.1 }}>Xploregen · Mobile Redesign</span>
        </div>
        <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 9, letterSpacing: 1.4, color: '#6b6358', textTransform: 'uppercase' }}>{pageLabel}</span>
      </header>

      <div style={{ borderTop: '1px solid rgba(19,17,13,0.14)', paddingTop: 8, display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 12 }}>
        <h1 style={{ margin: 0, fontFamily: 'Fraunces, serif', fontSize: 24, fontWeight: 500, letterSpacing: -0.5 }}>{title}</h1>
        {subtitle && <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 11.5, color: '#6b6358' }}>{subtitle}</span>}
      </div>

      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '28mm' }}>
        {children}
      </div>

      <footer style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'JetBrains Mono, monospace', fontSize: 8.5, color: '#a89f8f', letterSpacing: 0.8, textTransform: 'uppercase', marginTop: 6 }}>
        <span>© 2026 Xploregen Discoveries · Bengaluru</span>
        <span>{pageLabel}</span>
      </footer>
    </section>
  );
}

function Cover() {
  return (
    <section className="page" style={{
      width: '297mm', height: '210mm',
      background: '#fafaf6',
      color: '#13110d',
      padding: '20mm 22mm', boxSizing: 'border-box',
      display: 'flex', flexDirection: 'column',
      pageBreakAfter: 'always', breakAfter: 'page',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* subtle grid */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.5,
        background:
          'repeating-linear-gradient(0deg, rgba(19,17,13,0.04) 0 1px, transparent 1px 32px),' +
          'repeating-linear-gradient(90deg, rgba(19,17,13,0.04) 0 1px, transparent 1px 32px)',
      }} />
      <header style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, letterSpacing: 1.4, color: '#6b6358', textTransform: 'uppercase' }}>Mobile redesign · Issue 04 · 2026</span>
        <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, letterSpacing: 1.4, color: '#6b6358', textTransform: 'uppercase' }}>Cover</span>
      </header>

      <div style={{ position: 'relative', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', maxWidth: 700 }}>
        <h1 style={{ fontFamily: 'Fraunces, serif', fontSize: 86, fontWeight: 500, letterSpacing: -2.2, lineHeight: 0.92, margin: 0 }}>
          Better<br/>
          <span style={{ fontWeight: 600 }}>reagents.</span>{' '}
          <span style={{ fontStyle: 'italic', color: '#cf2a23' }}>Bolder</span><br/>
          <span style={{ fontWeight: 600 }}>discoveries.</span>
        </h1>
        <p style={{ fontFamily: 'Fraunces, serif', fontSize: 18, fontStyle: 'italic', color: '#3a352c', marginTop: 22, maxWidth: 540, lineHeight: 1.4 }}>
          Two contrasting design directions for the Xploregen mobile experience, one Lab-Console dark and one Editorial-Bio light — built for scientists and corporate buyers who'd rather not look at another generic biotech homepage.
        </p>
      </div>

      <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 30 }}>
        <div style={{ width: 200 }}>
          <DNALogo size={200} theme="light" wordmark={true} />
        </div>
        <div style={{ flex: 1, borderLeft: '1px solid rgba(19,17,13,0.14)', paddingLeft: 22 }}>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 9.5, letterSpacing: 1.2, color: '#6b6358', textTransform: 'uppercase' }}>Contents</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px 20px', marginTop: 10, fontFamily: 'Inter, sans-serif', fontSize: 12.5, color: '#13110d' }}>
            <div>01 · Logo animation</div><div>05 · Services</div>
            <div>02 · Landing</div><div>06 · About</div>
            <div>03 · Shop</div><div>07 · Cart & checkout</div>
            <div>04 · Product detail</div><div>— · Two directions per page</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PrintApp() {
  return (
    <div>
      <Cover />

      <Page pageLabel="01 · Logo animation" title="Logo · DNA strand-build animation"
        subtitle="Replay icon re-triggers on the live build">
        <PhoneSlot dark caption="Direction A · Lab Console"><DirectionAIntro /></PhoneSlot>
        <PhoneSlot caption="Direction B · Editorial Bio"><DirectionBIntro /></PhoneSlot>
      </Page>

      <Page pageLabel="02 · Landing" title="Landing — Home"
        subtitle="Hero · interactive DNA helix · best-sellers · trust">
        <PhoneSlot dark caption="Direction A · Lab Console"><DirectionAApp screen="home" /></PhoneSlot>
        <PhoneSlot caption="Direction B · Editorial Bio"><DirectionBApp screen="home" /></PhoneSlot>
      </Page>

      <Page pageLabel="03 · Shop" title="Shop — 62-SKU catalog"
        subtitle="Search · category filter · two-up grid">
        <PhoneSlot dark caption="Direction A · Lab Console"><DirectionAApp screen="shop" /></PhoneSlot>
        <PhoneSlot caption="Direction B · Editorial Bio"><DirectionBApp screen="shop" /></PhoneSlot>
      </Page>

      <Page pageLabel="04 · Product detail" title="Product · Genomic DNA Kit"
        subtitle="Specs · pricing · add-to-cart">
        <PhoneSlot dark caption="Direction A · Lab Console"><DirectionAApp screen="product" /></PhoneSlot>
        <PhoneSlot caption="Direction B · Editorial Bio"><DirectionBApp screen="product" /></PhoneSlot>
      </Page>

      <Page pageLabel="05 · Services" title="Services — research workflows"
        subtitle="Sample to publication">
        <PhoneSlot dark caption="Direction A · Lab Console"><DirectionAApp screen="services" /></PhoneSlot>
        <PhoneSlot caption="Direction B · Editorial Bio"><DirectionBApp screen="services" /></PhoneSlot>
      </Page>

      <Page pageLabel="06 · About" title="About — story, stats, address"
        subtitle="Bengaluru · founded 2022">
        <PhoneSlot dark caption="Direction A · Lab Console"><DirectionAApp screen="about" /></PhoneSlot>
        <PhoneSlot caption="Direction B · Editorial Bio"><DirectionBApp screen="about" /></PhoneSlot>
      </Page>

      <Page pageLabel="07 · Cart" title="Cart & checkout"
        subtitle="GST itemised · order review">
        <PhoneSlot dark caption="Direction A · Lab Console"><DirectionAApp screen="cart" /></PhoneSlot>
        <PhoneSlot caption="Direction B · Editorial Bio"><DirectionBApp screen="cart" /></PhoneSlot>
      </Page>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<PrintApp />);

// Auto-print: wait for fonts + JSX babel + DNA animations to settle, then fire.
(async () => {
  try { await document.fonts.ready; } catch {}
  // DNA-logo animations finish ~1.9s after mount; give a comfy 2500ms cushion.
  await new Promise((r) => setTimeout(r, 2500));
  window.print();
})();
