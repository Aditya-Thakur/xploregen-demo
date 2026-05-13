// ============================================================
// Xploregen — shared front-end JS
// Cart state in localStorage, logo SVG generator + animation,
// interactive helix canvas, page bootstrap helpers.
// ============================================================

(function () {
  const A = window.XG_ACCENT;

  // ─────────── Cart (localStorage) ───────────
  const CART_KEY = 'xg.cart.v1';
  function readCart() {
    try { return JSON.parse(localStorage.getItem(CART_KEY) || '{}'); } catch { return {}; }
  }
  function writeCart(c) { localStorage.setItem(CART_KEY, JSON.stringify(c)); window.dispatchEvent(new CustomEvent('xg-cart-changed', { detail: c })); }
  function addToCart(id, qty = 1) { const c = readCart(); c[id] = (c[id] || 0) + qty; writeCart(c); toast('Added to cart · ' + qty); }
  function setQty(id, qty) { const c = readCart(); if (qty <= 0) delete c[id]; else c[id] = qty; writeCart(c); }
  function removeFromCart(id) { const c = readCart(); delete c[id]; writeCart(c); }
  function cartCount() { return Object.values(readCart()).reduce((s, n) => s + n, 0); }
  function cartTotal() {
    const c = readCart();
    return Object.entries(c).reduce((s, [id, q]) => {
      const p = window.XG_PRODUCTS.find((x) => x.id === id);
      return s + (p ? p.price * q : 0);
    }, 0);
  }
  function clearCart() { writeCart({}); }

  window.XG_CART = { read: readCart, add: addToCart, set: setQty, remove: removeFromCart, count: cartCount, total: cartTotal, clear: clearCart };

  // ─────────── Toast ───────────
  let toastEl, toastTimer;
  function toast(msg) {
    if (!toastEl) {
      toastEl = document.createElement('div');
      toastEl.className = 'toast';
      document.body.appendChild(toastEl);
    }
    toastEl.textContent = msg;
    toastEl.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove('show'), 1800);
  }
  window.XG_toast = toast;

  // ─────────── Logo SVG generator ───────────
  // Faithful to the original: 8 vertical bars (4 each side), red helix
  // strands forming the X, white "XPLOREGEN" wordmark with a white plate
  // behind it. viewBox 600 × 460.
  // animated=true: emits the .x-logo-anim wrapper class so CSS animations fire.
  function logoSvg({ size = 200, wordmark = true } = {}) {
    const w = size;
    const h = Math.round(size * 460 / 600);

    // Bar geometry — 4 each side. Bars are MOSTLY uniform height with a
    // slight inward taper so the inner bars sit just below the red strands.
    const barW = 30;
    const innerBend = [0, 5, 10, 16]; // top crop for each bar going inward
    const cols = [A.blue, A.yellow, A.green, A.yellow];
    const yTop = 90;
    const yBot = 380;
    const leftXs = [50, 90, 130, 170];
    const rightXs = [600 - 50 - barW, 600 - 90 - barW, 600 - 130 - barW, 600 - 170 - barW];

    const bars = [];
    for (let i = 0; i < 4; i++) {
      const x = leftXs[i], bend = innerBend[i];
      bars.push(`<rect class="bar" x="${x}" y="${yTop + bend}" width="${barW}" height="${yBot - yTop - bend * 2}" rx="${barW / 2}" fill="${cols[i]}"/>`);
    }
    for (let i = 0; i < 4; i++) {
      const x = rightXs[i], bend = innerBend[i];
      bars.push(`<rect class="bar" x="${x}" y="${yTop + bend}" width="${barW}" height="${yBot - yTop - bend * 2}" rx="${barW / 2}" fill="${cols[i]}"/>`);
    }

    // Red helix strands: cubic beziers from corner → through center → out corner.
    // Slightly bulged outward so each arm has a curving helix feel.
    const strandStyle = 'stroke:#cf2a23;stroke-width:38;stroke-linecap:round;fill:none';
    const strand1 = `<path class="strand strand-1" d="M 50 90 C 80 40 230 60 300 235 C 320 410 470 420 550 380" style="${strandStyle}"/>`;
    const strand2 = `<path class="strand strand-2" d="M 550 90 C 520 40 370 60 300 235 C 280 410 130 420 50 380" style="${strandStyle}"/>`;

    // Wordmark plate + text. Dark band across the X waist; white bold text on top.
    const plateY = 200, plateH = 64;
    const wordmarkBlock = wordmark ? `
      <g class="wordmark-plate">
        <rect x="36" y="${plateY}" width="528" height="${plateH}" rx="6" fill="rgba(0,0,0,0.82)"/>
      </g>
      <text class="wordmark" x="300" y="${plateY + plateH / 2 + 16}" text-anchor="middle"
        font-family="'Space Grotesk', 'Manrope', 'Avenir Next', 'Segoe UI', sans-serif" font-weight="800" font-size="50"
        letter-spacing="3" fill="#ffffff">XPLOREGEN</text>
    ` : '';

    return `
<svg viewBox="0 0 600 460" width="${w}" height="${h}" style="display:block;overflow:visible" xmlns="http://www.w3.org/2000/svg">
  ${bars.join('\n  ')}
  ${strand1}
  ${strand2}
  ${wordmarkBlock}
</svg>`.trim();
  }
  window.XG_logoSvg = logoSvg;

  // Build the compact brand mark used in headers — just the X, no wordmark
  function brandMark() {
    return `
<svg viewBox="0 0 600 460" width="100%" height="100%" style="display:block">
  ${(() => {
    const cols = [A.blue, A.yellow, A.green, A.yellow];
    const barW = 30, yTop = 90, yBot = 380;
    const bend = [0, 5, 10, 16];
    const leftXs = [50, 90, 130, 170];
    const rightXs = [600 - 50 - barW, 600 - 90 - barW, 600 - 130 - barW, 600 - 170 - barW];
    const out = [];
    for (let i = 0; i < 4; i++) out.push(`<rect x="${leftXs[i]}" y="${yTop + bend[i]}" width="${barW}" height="${yBot - yTop - bend[i] * 2}" rx="${barW / 2}" fill="${cols[i]}"/>`);
    for (let i = 0; i < 4; i++) out.push(`<rect x="${rightXs[i]}" y="${yTop + bend[i]}" width="${barW}" height="${yBot - yTop - bend[i] * 2}" rx="${barW / 2}" fill="${cols[i]}"/>`);
    return out.join('');
  })()}
  <path d="M 50 90 C 80 40 230 60 300 235 C 320 410 470 420 550 380" stroke="#cf2a23" stroke-width="38" stroke-linecap="round" fill="none"/>
  <path d="M 550 90 C 520 40 370 60 300 235 C 280 410 130 420 50 380" stroke="#cf2a23" stroke-width="38" stroke-linecap="round" fill="none"/>
</svg>`.trim();
  }
  window.XG_brandMark = brandMark;

  // ─────────── Product SVG visual (per-card DNA fragment) ───────────
  function productVisual(p) {
    const accent = A[p.accent] || A.red;
    const rungs = 9;
    const w = 300, h = 200;
    const items = [];
    for (let i = 0; i < rungs; i++) {
      const x = 30 + i * 30;
      const ph = i * 0.65;
      const y1 = 50 + Math.sin(ph) * 26;
      const y2 = 150 - Math.sin(ph) * 26;
      items.push(`<line x1="${x}" y1="${y1}" x2="${x}" y2="${y2}" stroke="${accent}" stroke-opacity="0.4" stroke-width="1.6"/>`);
      items.push(`<circle cx="${x}" cy="${y1}" r="4.5" fill="${accent}"/>`);
      items.push(`<circle cx="${x}" cy="${y2}" r="4.5" fill="${i % 2 ? '#cf2a23' : '#13110d'}"/>`);
    }
    return `<svg viewBox="0 0 ${w} ${h}" preserveAspectRatio="xMidYMid meet">${items.join('')}</svg>`;
  }
  window.XG_productVisual = productVisual;

  // ─────────── Helix Canvas Animation ───────────
  // Drop-in animated double helix. canvasEl: a <canvas> element with explicit
  // pixel dimensions set via CSS; we'll match its backing buffer to DPR.
  function startHelix(canvas, opts = {}) {
    const speed = opts.speed || 1;
    const ctx = canvas.getContext('2d');
    let raf, t = 0, drag = 0, dragging = false, lastY = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    function size() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      const r = canvas.getBoundingClientRect();
      canvas.width = Math.max(1, r.width * dpr);
      canvas.height = Math.max(1, r.height * dpr);
    }
    size();
    const ro = new ResizeObserver(size); ro.observe(canvas);

    const palette = [A.red, A.blue, A.yellow, A.green];

    function draw() {
      const W = canvas.width, H = canvas.height;
      ctx.clearRect(0, 0, W, H);
      const cx = W / 2;
      const amp = W * 0.30;
      const rungs = 22;
      // base-pair rungs
      for (let i = 0; i < rungs; i++) {
        const y = (i + 0.5) * (H / rungs);
        const ph = (i / rungs) * Math.PI * 2.4 + t + drag;
        const ax = cx + Math.sin(ph) * amp;
        const bx = cx - Math.sin(ph) * amp;
        const az = Math.cos(ph);
        const c = palette[i % palette.length];

        ctx.strokeStyle = 'rgba(255,255,255,0.13)';
        ctx.lineWidth = 1.2 * dpr;
        ctx.beginPath(); ctx.moveTo(ax, y); ctx.lineTo(bx, y); ctx.stroke();

        const rA = (5 + (az + 1) * 2.6) * dpr;
        const rB = (5 + (-az + 1) * 2.6) * dpr;
        ctx.globalAlpha = 0.35 + (az + 1) * 0.3;
        ctx.fillStyle = c;
        ctx.beginPath(); ctx.arc(ax, y, rA, 0, Math.PI * 2); ctx.fill();
        ctx.globalAlpha = 0.35 + (-az + 1) * 0.3;
        ctx.fillStyle = i % 3 === 0 ? A.red : c;
        ctx.beginPath(); ctx.arc(bx, y, rB, 0, Math.PI * 2); ctx.fill();
      }
      ctx.globalAlpha = 1;
      // backbones
      for (let s = 0; s < 2; s++) {
        ctx.strokeStyle = '#cf2a23';
        ctx.lineWidth = 3 * dpr;
        ctx.lineCap = 'round';
        ctx.beginPath();
        for (let i = 0; i < rungs; i++) {
          const y = (i + 0.5) * (H / rungs);
          const ph = (i / rungs) * Math.PI * 2.4 + t + drag;
          const x = cx + Math.sin(ph) * amp * (s === 0 ? 1 : -1);
          if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
    }

    let last = performance.now();
    function loop(now) {
      const dt = (now - last) / 1000; last = now;
      t += dt * speed * 0.9;
      draw();
      raf = requestAnimationFrame(loop);
    }
    raf = requestAnimationFrame(loop);

    // drag handlers
    const down = (e) => { dragging = true; lastY = (e.touches ? e.touches[0].clientY : e.clientY); };
    const move = (e) => {
      if (!dragging) return;
      const y = (e.touches ? e.touches[0].clientY : e.clientY);
      drag += (y - lastY) * 0.02; lastY = y;
    };
    const up = () => { dragging = false; };
    canvas.addEventListener('mousedown', down);
    canvas.addEventListener('touchstart', down, { passive: true });
    window.addEventListener('mousemove', move);
    window.addEventListener('touchmove', move, { passive: true });
    window.addEventListener('mouseup', up);
    window.addEventListener('touchend', up);

    return () => { cancelAnimationFrame(raf); ro.disconnect(); };
  }
  window.XG_startHelix = startHelix;

  // ─────────── Mobile bottom nav active state ───────────
  function mountMobileBottomNav() {
    const btns = document.querySelectorAll('.mbn-btn');
    if (!btns.length) return;
    const page = window.location.pathname.split('/').pop() || 'index.html';
    btns.forEach((btn) => {
      const href = btn.getAttribute('href');
      if (href === page || (page === '' && href === 'index.html') ||
          (page === 'product.html' && href === 'shop.html') ||
          (page === 'checkout.html' && href === 'cart.html')) {
        btn.classList.add('active');
      }
    });
  }

  // ─────────── Header cart badge syncing ───────────
  function syncCartBadges() {
    document.querySelectorAll('[data-cart-badge]').forEach((el) => {
      const n = cartCount();
      el.textContent = n;
      el.style.display = n > 0 ? '' : 'none';
    });
  }
  window.addEventListener('xg-cart-changed', syncCartBadges);

  // ─────────── Page bootstrap (DOMContentLoaded) ───────────
  document.addEventListener('DOMContentLoaded', () => {
    // Inject brand marks
    document.querySelectorAll('[data-brand-mark]').forEach((el) => { el.innerHTML = brandMark(); });

    // Inject animated landing logos
    document.querySelectorAll('[data-anim-logo]').forEach((el) => {
      const size = parseInt(el.dataset.animLogo, 10) || 200;
      el.innerHTML = logoSvg({ size });
      el.classList.add('x-logo', 'x-logo-anim');
    });

    // Inject helix into canvases
    document.querySelectorAll('[data-helix]').forEach((cv) => {
      window.XG_startHelix(cv);
    });

    // Mobile bottom nav
    mountMobileBottomNav();

    // Cart badges
    syncCartBadges();

    // Bind any add-to-cart buttons on the page
    document.querySelectorAll('[data-add-to-cart]').forEach((b) => {
      b.addEventListener('click', (e) => {
        e.stopPropagation();
        e.preventDefault();
        const id = b.dataset.addToCart;
        const qty = parseInt(b.dataset.qty || '1', 10);
        addToCart(id, qty);
      });
    });
  });
})();
