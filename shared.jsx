// shared.jsx — product data, DNA logo animation, helix viz, icons.

// ─────────── Brand palette derived from the Xploregen logo ───────────
const BRAND = {
  red:    '#E63027',  // DNA strand
  blue:   '#2E6FCB',  // bar
  yellow: '#F2C53D',  // bar
  green:  '#3DAD7E',  // bar
  ink:    '#0a0b10',
  paper:  '#fafaf6',
};

// ─────────── Product catalog (real items from xploregen.com/shop) ───────────
const PRODUCTS = [
  { id: 'xpat22m', name: 'Genomic DNA Kit · Animal (Magnetic)', sku: 'XPAT22M-50', cat: 'Extraction', price: 12900, prep: '50 preps', method: 'Magnetic bead', tag: 'BESTSELLER', accent: 'red' },
  { id: 'xpat22d', name: 'Genomic DNA Kit · Animal (Column)',   sku: 'XPAT22D-50', cat: 'Extraction', price: 9900,  prep: '50 preps', method: 'Silica column', accent: 'blue' },
  { id: 'xpba22m', name: 'Genomic DNA Kit · Bacterial (Magnetic)', sku: 'XPBA22M-50', cat: 'Extraction', price: 9900, prep: '50 preps', method: 'Magnetic bead', accent: 'green' },
  { id: 'xpba22d', name: 'Genomic DNA Kit · Bacterial (Column)',    sku: 'XPBA22D-50', cat: 'Extraction', price: 6900, prep: '50 preps', method: 'Silica column', accent: 'yellow' },
  { id: 'xpal22m', name: 'Genomic DNA Kit · Algal (Magnetic)',  sku: 'XPAL22M-50', cat: 'Extraction', price: 9900,  prep: '50 preps', method: 'Magnetic bead', accent: 'green' },
  { id: 'xpal22d', name: 'Genomic DNA Kit · Algal (Column)',    sku: 'XPAL22D-50', cat: 'Extraction', price: 6900,  prep: '50 preps', method: 'Silica column', accent: 'green' },
  { id: 'xpge22',  name: 'Gel Extraction Kit',                  sku: 'XPGE22-50',  cat: 'Extraction', price: 5900,  prep: '50 preps', method: 'Spin column', accent: 'yellow' },
  { id: 'xpff22',  name: 'Firefly Bright Luciferase Reagent',   sku: 'XPFF22-1',   cat: 'Reagents',   price: 1000,  prep: '1 mL',     method: 'High-output', tag: 'NEW', accent: 'red' },
  { id: 'xdche-1', name: '50× TAE Buffer',                      sku: 'XDCHE-1',    cat: 'Buffers',    price: 450,   prep: '500 mL',   method: 'Electrophoresis grade', accent: 'blue' },
  { id: 'xdche-2', name: '10× TBE Buffer',                      sku: 'XDCHE-2',    cat: 'Buffers',    price: 480,   prep: '500 mL',   method: 'Electrophoresis grade', accent: 'blue' },
  { id: 'xdche-3', name: '10× MOPS Buffer',                     sku: 'XDCHE-3',    cat: 'Buffers',    price: 520,   prep: '500 mL',   method: 'RNA-grade', accent: 'yellow' },
  { id: 'xdche-4', name: '10× TGS Buffer',                      sku: 'XDCHE-4',    cat: 'Buffers',    price: 540,   prep: '500 mL',   method: 'Protein gels', accent: 'green' },
  { id: 'xdche-6', name: '1M Tris-HCl pH 6.8',                  sku: 'XDCHE-6',    cat: 'Buffers',    price: 380,   prep: '500 mL',   method: 'Molecular biology grade', accent: 'red' },
  { id: 'xdche-7', name: '1.5M Tris-HCl pH 8.8',                sku: 'XDCHE-7',    cat: 'Buffers',    price: 380,   prep: '500 mL',   method: 'Molecular biology grade', accent: 'red' },
  { id: 'eth',     name: 'Molecular Biology Grade Ethanol',     sku: 'ETH-100',    cat: 'Reagents',   price: 170,   prep: '100 mL',   method: 'Absolute', accent: 'blue' },
];

const SERVICES = [
  { id: 'wgs', code: 'XGS-01', name: 'Whole Genome Sequencing', blurb: 'Short- and long-read assembly with publication-ready outputs.', icon: 'genome' },
  { id: 'rna', code: 'XGS-02', name: 'Bulk & Single-Cell RNA-Seq', blurb: 'Library prep, sequencing, and tertiary analysis pipelines.', icon: 'rna' },
  { id: 'amr', code: 'XGS-03', name: 'Microbial AMR Profiling',   blurb: 'Resistome mapping with curated annotation databases.', icon: 'microbe' },
  { id: 'met', code: 'XGS-04', name: 'Metagenomics & 16S',        blurb: 'Soil, water, gut — taxonomic and functional profiling.', icon: 'community' },
  { id: 'cus', code: 'XGS-05', name: 'Custom Reagent Development', blurb: 'Bespoke buffers, enzymes, and master-mix formulations.', icon: 'flask' },
  { id: 'bio', code: 'XGS-06', name: 'Bioinformatics-as-a-Service', blurb: 'From raw FASTQ to publication-grade figures.', icon: 'graph' },
];

const fmtINR = (n) => '₹' + n.toLocaleString('en-IN');

// ─────────────── Animated DNA-logo component ───────────────
// The four base-pair bars draw upward, then the two red helix strands sweep in,
// then "XPLOREGEN" wordmark fades + locks. Variant prop tweaks size/feel.

function DNALogo({ size = 220, theme = 'dark', autoplay = true, replayKey = 0, wordmark = true }) {
  const ref = React.useRef(null);
  const [done, setDone] = React.useState(false);

  React.useEffect(() => {
    if (!autoplay) return;
    setDone(false);
    const t = setTimeout(() => setDone(true), 2400);
    return () => clearTimeout(t);
  }, [replayKey, autoplay]);

  // Re-trigger the keyframes by remounting the SVG via key.
  const k = `dna-${replayKey}`;
  const labelColor = theme === 'dark' ? '#fff' : '#11131a';
  const stroke = BRAND.red;

  return (
    <div ref={ref} style={{ width: size, height: size * 0.78, position: 'relative', userSelect: 'none' }}>
      <style>{`
        @keyframes xg-bar-rise   { from { transform: scaleY(0); } to { transform: scaleY(1); } }
        @keyframes xg-strand     { from { stroke-dashoffset: 240; } to { stroke-dashoffset: 0; } }
        @keyframes xg-fade-up    { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes xg-glow-pulse { 0%,100% { filter: drop-shadow(0 0 0px rgba(230,48,39,0)); } 50% { filter: drop-shadow(0 0 14px rgba(230,48,39,.55)); } }
      `}</style>
      <svg key={k} viewBox="0 0 320 240" width="100%" height="100%" style={{ display: 'block', overflow: 'visible' }}>
        {/* base-pair bars — 4 each side, rise from origin */}
        {[0, 1, 2, 3].map((i) => {
          const x = 30 + i * 26;
          const colors = [BRAND.blue, BRAND.yellow, BRAND.green, BRAND.yellow];
          const bend = [0, 14, 24, 30][i]; // inward toward the helix waist
          return (
            <g key={'L' + i}>
              <rect x={x} y={50 + bend} width={14} height={140 - bend * 2} rx={7} fill={colors[i]}
                style={{ transformOrigin: `${x + 7}px ${120}px`, animation: `xg-bar-rise .55s ${0.05 + i * 0.08}s cubic-bezier(.2,.9,.3,1.1) backwards` }} />
            </g>
          );
        })}
        {[0, 1, 2, 3].map((i) => {
          const x = 320 - 44 - i * 26;
          const colors = [BRAND.blue, BRAND.yellow, BRAND.green, BRAND.yellow];
          const bend = [0, 14, 24, 30][i];
          return (
            <g key={'R' + i}>
              <rect x={x} y={50 + bend} width={14} height={140 - bend * 2} rx={7} fill={colors[i]}
                style={{ transformOrigin: `${x + 7}px ${120}px`, animation: `xg-bar-rise .55s ${0.05 + i * 0.08}s cubic-bezier(.2,.9,.3,1.1) backwards` }} />
            </g>
          );
        })}
        {/* red helix strands — two crossing arcs forming the X */}
        <g style={{ animation: `xg-glow-pulse 4.2s ${done ? 1.4 : 1.8}s ease-in-out infinite` }}>
          <path d="M 20 40 Q 120 80 160 120 Q 200 160 300 200"
            stroke={stroke} strokeWidth="14" strokeLinecap="round" fill="none"
            strokeDasharray="240" style={{ animation: `xg-strand .85s 0.55s cubic-bezier(.55,.05,.25,1) backwards` }} />
          <path d="M 20 200 Q 120 160 160 120 Q 200 80 300 40"
            stroke={stroke} strokeWidth="14" strokeLinecap="round" fill="none"
            strokeDasharray="240" style={{ animation: `xg-strand .85s 0.70s cubic-bezier(.55,.05,.25,1) backwards` }} />
        </g>
        {/* wordmark */}
        {wordmark && (
          <text x="160" y="135" textAnchor="middle"
            fontFamily="Inter, -apple-system, system-ui"
            fontSize="34" fontWeight="800" letterSpacing="2"
            fill={labelColor}
            style={{ animation: `xg-fade-up .55s 1.35s cubic-bezier(.2,.9,.3,1) backwards` }}>
            XPLOREGEN
          </text>
        )}
      </svg>
    </div>
  );
}

// ─────────────── Interactive DNA helix (touch / scroll responsive) ───────────────
// A rotating double helix made of base pairs. Auto-rotates; touch/drag adjusts speed
// and pivots in/out; used as the hero centerpiece on the Landing screen.
function DNAHelix({ width = 260, height = 360, palette = [BRAND.red, BRAND.blue, BRAND.yellow, BRAND.green], speed = 1, theme = 'dark' }) {
  const ref = React.useRef(null);
  const [t, setT] = React.useState(0);
  const [drag, setDrag] = React.useState(0);
  const draggingRef = React.useRef(false);
  const lastY = React.useRef(0);

  React.useEffect(() => {
    let raf, last = performance.now();
    const tick = (now) => {
      const dt = (now - last) / 1000;
      last = now;
      setT((p) => p + dt * speed * 0.9);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [speed]);

  // 16 base-pair rungs along the height
  const rungs = 16;
  const cy = height / 2;
  const amp = width * 0.32;
  const cx = width / 2;

  const onDown = (e) => { draggingRef.current = true; lastY.current = (e.touches ? e.touches[0].clientY : e.clientY); };
  const onMove = (e) => {
    if (!draggingRef.current) return;
    const y = (e.touches ? e.touches[0].clientY : e.clientY);
    setDrag((d) => d + (y - lastY.current) * 0.02);
    lastY.current = y;
  };
  const onUp = () => { draggingRef.current = false; };

  React.useEffect(() => {
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    window.addEventListener('touchmove', onMove);
    window.addEventListener('touchend', onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('touchend', onUp);
    };
  }, []);

  const dim = theme === 'dark' ? 'rgba(255,255,255,0.16)' : 'rgba(0,0,0,0.18)';

  return (
    <svg ref={ref} width={width} height={height} viewBox={`0 0 ${width} ${height}`}
      onMouseDown={onDown} onTouchStart={onDown}
      style={{ display: 'block', overflow: 'visible', cursor: 'grab', touchAction: 'none' }}>
      {Array.from({ length: rungs }).map((_, i) => {
        const y = (i + 0.5) * (height / rungs);
        const phase = (i / rungs) * Math.PI * 2.4 + t + drag;
        const ax = cx + Math.sin(phase) * amp;
        const bx = cx - Math.sin(phase) * amp;
        const az = Math.cos(phase); // -1..1 for depth shading
        const z = Math.cos(phase);
        const color = palette[i % palette.length];
        const opacityA = 0.35 + (az + 1) * 0.3;
        const opacityB = 0.35 + (-az + 1) * 0.3;
        const rA = 5 + (az + 1) * 2.5;
        const rB = 5 + (-az + 1) * 2.5;
        return (
          <g key={i}>
            {/* rung line behind */}
            <line x1={ax} y1={y} x2={bx} y2={y} stroke={dim} strokeWidth={1.2} />
            {/* two nucleotide dots */}
            <circle cx={ax} cy={y} r={rA} fill={color} opacity={opacityA} />
            <circle cx={bx} cy={y} r={rB} fill={i % 3 === 0 ? BRAND.red : color} opacity={opacityB} />
          </g>
        );
      })}
      {/* backbones — two cosine curves connecting the same dots */}
      {[0, 1].map((sign) => {
        let d = '';
        for (let i = 0; i < rungs; i++) {
          const y = (i + 0.5) * (height / rungs);
          const phase = (i / rungs) * Math.PI * 2.4 + t + drag;
          const x = cx + Math.sin(phase) * amp * (sign === 0 ? 1 : -1);
          d += (i === 0 ? 'M' : 'L') + x.toFixed(1) + ' ' + y.toFixed(1) + ' ';
        }
        return <path key={sign} d={d} stroke={sign === 0 ? BRAND.red : BRAND.red} strokeOpacity={0.85} strokeWidth={2.5} fill="none" strokeLinecap="round" />;
      })}
    </svg>
  );
}

// ─────────────── Tiny SVG icons ───────────────
const I = {
  home:    (c = 'currentColor') => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11l9-8 9 8"/><path d="M5 9v11h14V9"/></svg>,
  shop:    (c = 'currentColor') => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 7h16l-1.5 12a2 2 0 01-2 1.7H7.5a2 2 0 01-2-1.7L4 7z"/><path d="M9 7V5a3 3 0 016 0v2"/></svg>,
  services:(c = 'currentColor') => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3v6a6 6 0 0012 0V3"/><path d="M6 21v-6a6 6 0 0112 0v6"/><path d="M5 3h14"/><path d="M5 21h14"/></svg>,
  about:   (c = 'currentColor') => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="3.2"/><path d="M5 20c1-3.5 4-5.5 7-5.5s6 2 7 5.5"/></svg>,
  cart:    (c = 'currentColor') => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="20" r="1.4"/><circle cx="17" cy="20" r="1.4"/><path d="M3 4h2l2 12h12l2-8H7"/></svg>,
  search:  (c = 'currentColor') => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>,
  arrow:   (c = 'currentColor') => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>,
  spark:   (c = 'currentColor') => <svg width="14" height="14" viewBox="0 0 24 24" fill={c}><path d="M12 2l2 6 6 2-6 2-2 6-2-6-6-2 6-2z"/></svg>,
  check:   (c = 'currentColor') => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12l5 5L20 6"/></svg>,
  flask:   (c = 'currentColor') => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M9 3h6M10 3v6l-5 9a3 3 0 002.7 4.5h8.6A3 3 0 0019 18l-5-9V3"/></svg>,
  genome:  (c = 'currentColor') => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 4c5 4 9 12 14 16M5 20c5-4 9-12 14-16"/><path d="M7 6h10M8 11h8M8 17h10"/></svg>,
  microbe: (c = 'currentColor') => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="6"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2"/></svg>,
  rna:     (c = 'currentColor') => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 3c4 4 10 4 14 0M5 21c4-4 10-4 14 0M9 7v10M15 7v10"/></svg>,
  community: (c = 'currentColor') => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="7" cy="8" r="3"/><circle cx="17" cy="8" r="3"/><circle cx="12" cy="17" r="3"/></svg>,
  graph:   (c = 'currentColor') => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20V4M4 20h16"/><path d="M8 16l3-5 3 3 5-8"/></svg>,
  plus:    (c = 'currentColor') => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2.4" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg>,
  minus:   (c = 'currentColor') => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2.4" strokeLinecap="round"><path d="M5 12h14"/></svg>,
  filter:  (c = 'currentColor') => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 5h18M6 12h12M10 19h4"/></svg>,
  menu:    (c = 'currentColor') => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round"><path d="M3 7h18M3 17h18"/></svg>,
};

Object.assign(window, { BRAND, PRODUCTS, SERVICES, fmtINR, DNALogo, DNAHelix, I });
