// Product catalog, sourced from xploregen.com/shop-page/
// Categories: Extraction, Reagents, Buffers, Collection

window.XG_PRODUCTS = [
  // ── Extraction Kits — DNA ──
  { id: 'xpat22m', name: 'Genomic DNA Extraction Kit · Animal Tissues (Magnetic)', sku: 'XPAT22M-50', cat: 'Extraction', price: 12900, prep: '50 preps', method: 'Magnetic bead',        yield: '≥ 30 µg from 25 mg tissue',      tag: 'BESTSELLER', accent: 'red',
    applications: 'PCR · qPCR · NGS · Sanger Sequencing · Genotyping', storage: '15–25 °C · 24 months' },
  { id: 'xpat22d', name: 'Genomic DNA Extraction Kit · Animal Tissues (Column)',   sku: 'XPAT22D-50', cat: 'Extraction', price: 9900,  prep: '50 preps', method: 'Silica column',        yield: '≥ 25 µg from 25 mg tissue',      accent: 'blue',
    applications: 'PCR · qPCR · NGS · Restriction Digestion', storage: '15–25 °C · 24 months' },
  { id: 'xpba22m', name: 'Genomic DNA Extraction Kit · Bacterial (Magnetic)',      sku: 'XPBA22M-50', cat: 'Extraction', price: 9900,  prep: '50 preps', method: 'Magnetic bead',        yield: '≥ 20 µg per 1×10⁹ cells',       accent: 'green',
    applications: 'WGS · NGS · PCR · Genotyping · MLST', storage: '15–25 °C · 24 months' },
  { id: 'xpba22d', name: 'Genomic DNA Extraction Kit · Bacterial (Column)',        sku: 'XPBA22D-50', cat: 'Extraction', price: 6900,  prep: '50 preps', method: 'Silica column',        yield: '≥ 15 µg per 1×10⁹ cells',       accent: 'yellow',
    applications: 'PCR · RAPD · RFLP · Colony PCR', storage: '15–25 °C · 24 months' },
  { id: 'xpal22m', name: 'Genomic DNA Extraction Kit · Algal (Magnetic)',          sku: 'XPAL22M-50', cat: 'Extraction', price: 9900,  prep: '50 preps', method: 'Magnetic bead',        yield: '≥ 10 µg per 100 mg algae',       accent: 'green',
    applications: 'NGS · Phylogenomics · qPCR · Barcoding', storage: '15–25 °C · 24 months' },
  { id: 'xpal22d', name: 'Genomic DNA Extraction Kit · Algal (Column)',            sku: 'XPAL22D-50', cat: 'Extraction', price: 6900,  prep: '50 preps', method: 'Silica column',        yield: '≥ 8 µg per 100 mg algae',        accent: 'green',
    applications: 'PCR · qPCR · RFLP · Barcoding', storage: '15–25 °C · 24 months' },
  { id: 'xpge22',  name: 'Gel Extraction Kit',                                     sku: 'XPGE22-50',  cat: 'Extraction', price: 5900,  prep: '50 preps', method: 'Spin column',          yield: '≥ 70% recovery, 50 bp – 10 kb', accent: 'yellow',
    applications: 'PCR cleanup · Subcloning · Probe preparation · Sequencing', storage: '15–25 °C · 24 months' },

  // ── Extraction Kits — RNA ──
  { id: 'xprat22m', name: 'RNA Extraction Kit · Animal Tissues (Magnetic)',        sku: 'XPRAT22M-50', cat: 'Extraction', price: 15900, prep: '50 preps', method: 'Magnetic bead',       yield: '≥ 5 µg from 25 mg tissue',       tag: 'NEW', accent: 'green',
    applications: 'RNA-seq · RT-PCR · qRT-PCR · Transcriptomics · miRNA profiling', storage: '-20 °C · 18 months' },
  { id: 'xprat22d', name: 'RNA Extraction Kit · Animal Tissues (Column)',          sku: 'XPRAT22D-50', cat: 'Extraction', price: 12900, prep: '50 preps', method: 'TRIzol-free silica column', yield: '≥ 3 µg from 25 mg tissue',  accent: 'blue',
    applications: 'RT-PCR · qRT-PCR · Northern blotting · cDNA synthesis', storage: '-20 °C · 18 months' },
  { id: 'xprpl22d', name: 'RNA Extraction Kit · Plant Tissues (Column)',           sku: 'XPRPL22D-50', cat: 'Extraction', price: 13900, prep: '50 preps', method: 'Silica column (polysaccharide-removal)', yield: '≥ 4 µg per 100 mg plant tissue', accent: 'green',
    applications: 'Plant RNA-seq · RT-PCR · Gene expression analysis', storage: '-20 °C · 18 months' },

  // ── Extraction Kits — PCR Purification ──
  { id: 'xppcr22', name: 'PCR Purification Kit',                                   sku: 'XPPCR22-50', cat: 'Extraction', price: 5400,  prep: '50 preps', method: 'Spin column',          yield: '≥ 85% recovery, 100 bp – 10 kb', accent: 'yellow',
    applications: 'PCR product cleanup · Sequencing prep · Ligation · Restriction digestion', storage: '15–25 °C · 24 months' },

  // ── Reagents ──
  { id: 'xpff22',  name: 'Firefly Bright Luciferase Reagent',                      sku: 'XPFF22-1',   cat: 'Reagents',   price: 1000,  prep: '1 mL',     method: 'High-output',          yield: '> 2× brighter than competitors', tag: 'NEW', accent: 'red',
    applications: 'Reporter gene assays · Drug screening · Cell viability · Transfection efficiency', storage: '-20 °C · 12 months' },
  { id: 'eth',     name: 'Molecular Biology Grade Ethanol (Absolute)',             sku: 'ETH-100',    cat: 'Reagents',   price: 170,   prep: '100 mL',   method: '≥ 99.9% purity',      yield: 'DNase/RNase free',               accent: 'blue',
    applications: 'DNA/RNA precipitation · Tissue fixation · Wash steps in extraction', storage: '15–25 °C · 36 months' },

  // ── Buffers ──
  { id: 'xdche-1', name: '50× TAE Buffer',                                         sku: 'XDCHE-1',    cat: 'Buffers',    price: 450,   prep: '500 mL',   method: 'Electrophoresis',      yield: 'pH 8.3 ± 0.1',                  accent: 'blue',
    applications: 'Agarose gel electrophoresis · Southern blotting', storage: '15–25 °C · 24 months' },
  { id: 'xdche-2', name: '10× TBE Buffer',                                         sku: 'XDCHE-2',    cat: 'Buffers',    price: 480,   prep: '500 mL',   method: 'Electrophoresis',      yield: 'pH 8.3 ± 0.1',                  accent: 'blue',
    applications: 'Native PAGE · Oligonucleotide gels · EMSA', storage: '15–25 °C · 24 months' },
  { id: 'xdche-3', name: '10× MOPS Buffer',                                        sku: 'XDCHE-3',    cat: 'Buffers',    price: 520,   prep: '500 mL',   method: 'RNA-grade',            yield: 'pH 7.0 ± 0.1',                  accent: 'yellow',
    applications: 'RNA gel electrophoresis · Northern blotting', storage: '15–25 °C · 24 months' },
  { id: 'xdche-4', name: '10× TGS Buffer',                                         sku: 'XDCHE-4',    cat: 'Buffers',    price: 540,   prep: '500 mL',   method: 'Protein gels',         yield: 'pH 8.3 ± 0.1',                  accent: 'green',
    applications: 'SDS-PAGE · Western blotting · Protein analysis', storage: '15–25 °C · 24 months' },
  { id: 'xdche-6', name: '1M Tris-HCl Buffer (pH 6.8)',                            sku: 'XDCHE-6',    cat: 'Buffers',    price: 380,   prep: '500 mL',   method: 'Molecular biology',    yield: 'pH 6.8 ± 0.05',                 accent: 'red',
    applications: 'Stacking gel preparation · SDS-PAGE · Protein solubilization', storage: '4 °C · 24 months' },
  { id: 'xdche-7', name: '1.5M Tris-HCl Buffer (pH 8.8)',                          sku: 'XDCHE-7',    cat: 'Buffers',    price: 380,   prep: '500 mL',   method: 'Molecular biology',    yield: 'pH 8.8 ± 0.05',                 accent: 'red',
    applications: 'Resolving gel preparation · SDS-PAGE · Protein analysis', storage: '4 °C · 24 months' },

  // ── Collection ──
  { id: 'bct',     name: 'Blood Collection Tube · K3 EDTA',                        sku: 'BCT-K3',     cat: 'Collection', price: 250,   prep: 'Pack of 50',method: 'K3 EDTA · 4 mL',      yield: 'Sterile, vacuum-filled',         accent: 'red',
    applications: 'Blood genomic DNA extraction · CBC · EDTA plasma preparation', storage: '15–25 °C · 24 months (sealed)' },
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
