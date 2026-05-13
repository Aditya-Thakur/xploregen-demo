// Product catalog, sourced from xploregen.com/shop-page/
// Categories: Extraction, Reagents, Buffers, Collection

window.XG_PRODUCTS = [
  // ── Extraction Kits ──
  { id: 'xpat22m', name: 'Genomic DNA Extraction Kit · Animal Tissues (Magnetic)', sku: 'XPAT22M-50', cat: 'Extraction', price: 12900, prep: '50 preps', method: 'Magnetic bead',   yield: '≥ 30 µg from 25 mg tissue', tag: 'BESTSELLER', accent: 'red' },
  { id: 'xpat22d', name: 'Genomic DNA Extraction Kit · Animal Tissues (Column)',   sku: 'XPAT22D-50', cat: 'Extraction', price: 9900,  prep: '50 preps', method: 'Silica column',  yield: '≥ 25 µg from 25 mg tissue', accent: 'blue' },
  { id: 'xpba22m', name: 'Genomic DNA Extraction Kit · Bacterial (Magnetic)',      sku: 'XPBA22M-50', cat: 'Extraction', price: 9900,  prep: '50 preps', method: 'Magnetic bead',  yield: '≥ 20 µg per 1×10⁹ cells',   accent: 'green' },
  { id: 'xpba22d', name: 'Genomic DNA Extraction Kit · Bacterial (Column)',        sku: 'XPBA22D-50', cat: 'Extraction', price: 6900,  prep: '50 preps', method: 'Silica column',  yield: '≥ 15 µg per 1×10⁹ cells',   accent: 'yellow' },
  { id: 'xpal22m', name: 'Genomic DNA Extraction Kit · Algal (Magnetic)',          sku: 'XPAL22M-50', cat: 'Extraction', price: 9900,  prep: '50 preps', method: 'Magnetic bead',  yield: '≥ 10 µg per 100 mg algae',  accent: 'green' },
  { id: 'xpal22d', name: 'Genomic DNA Extraction Kit · Algal (Column)',            sku: 'XPAL22D-50', cat: 'Extraction', price: 6900,  prep: '50 preps', method: 'Silica column',  yield: '≥ 8 µg per 100 mg algae',   accent: 'green' },
  { id: 'xpge22',  name: 'Gel Extraction Kit',                                     sku: 'XPGE22-50',  cat: 'Extraction', price: 5900,  prep: '50 preps', method: 'Spin column',    yield: '≥ 70% recovery, 50 bp – 10 kb', accent: 'yellow' },

  // ── Reagents ──
  { id: 'xpff22',  name: 'Firefly Bright Luciferase Reagent',                      sku: 'XPFF22-1',   cat: 'Reagents',   price: 1000,  prep: '1 mL',     method: 'High-output',    yield: '> 2× brighter than competitors', tag: 'NEW', accent: 'red' },
  { id: 'eth',     name: 'Molecular Biology Grade Ethanol (Absolute)',             sku: 'ETH-100',    cat: 'Reagents',   price: 170,   prep: '100 mL',   method: '≥ 99.9% purity', yield: 'DNase/RNase free',          accent: 'blue' },

  // ── Buffers ──
  { id: 'xdche-1', name: '50× TAE Buffer',                                         sku: 'XDCHE-1',    cat: 'Buffers',    price: 450,   prep: '500 mL',   method: 'Electrophoresis',  yield: 'pH 8.3 ± 0.1',             accent: 'blue' },
  { id: 'xdche-2', name: '10× TBE Buffer',                                         sku: 'XDCHE-2',    cat: 'Buffers',    price: 480,   prep: '500 mL',   method: 'Electrophoresis',  yield: 'pH 8.3 ± 0.1',             accent: 'blue' },
  { id: 'xdche-3', name: '10× MOPS Buffer',                                        sku: 'XDCHE-3',    cat: 'Buffers',    price: 520,   prep: '500 mL',   method: 'RNA-grade',        yield: 'pH 7.0 ± 0.1',             accent: 'yellow' },
  { id: 'xdche-4', name: '10× TGS Buffer',                                         sku: 'XDCHE-4',    cat: 'Buffers',    price: 540,   prep: '500 mL',   method: 'Protein gels',     yield: 'pH 8.3 ± 0.1',             accent: 'green' },
  { id: 'xdche-6', name: '1M Tris-HCl Buffer (pH 6.8)',                            sku: 'XDCHE-6',    cat: 'Buffers',    price: 380,   prep: '500 mL',   method: 'Molecular biology', yield: 'pH 6.8 ± 0.05',            accent: 'red' },
  { id: 'xdche-7', name: '1.5M Tris-HCl Buffer (pH 8.8)',                          sku: 'XDCHE-7',    cat: 'Buffers',    price: 380,   prep: '500 mL',   method: 'Molecular biology', yield: 'pH 8.8 ± 0.05',            accent: 'red' },

  // ── Collection ──
  { id: 'bct',     name: 'Blood Collection Tube · K3 EDTA',                        sku: 'BCT-K3',     cat: 'Collection', price: 250,   prep: 'Pack of 50',method: 'K3 EDTA · 4 mL',  yield: 'Sterile, vacuum-filled',    accent: 'red' },
];

// Featured order — best 4 for landing carousel
window.XG_FEATURED_IDS = ['xpat22m', 'xpff22', 'xpge22', 'xpba22m'];

window.XG_FMT_INR = (n) => '₹' + n.toLocaleString('en-IN');

// Accent color resolver
window.XG_ACCENT = {
  red:    '#cf2a23',
  blue:   '#1f4f9b',
  yellow: '#d8aa1b',
  green:  '#2e8a5f',
};
