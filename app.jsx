// app.jsx — root DesignCanvas mounting both directions

const PHONE_W = 402;
const PHONE_H = 874;

function Phone({ children, dark = false }) {
  // Wrap children in an iOS device frame. Children should fill 100% of inner area.
  return (
    <IOSDevice width={PHONE_W} height={PHONE_H} dark={dark}>
      <div style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}>
        {children}
      </div>
    </IOSDevice>
  );
}

function App() {
  return (
    <DesignCanvas>
      {/* ─── Intro row ───────────────────────────────────────── */}
      <DCSection id="intro" title="Logo animation" subtitle="The DNA strands draw themselves into place — replay to re-trigger.">
        <DCArtboard id="intro-a" label="A · Lab Console" width={PHONE_W} height={PHONE_H}>
          <Phone dark><DirectionAIntro /></Phone>
        </DCArtboard>
        <DCArtboard id="intro-b" label="B · Editorial Bio" width={PHONE_W} height={PHONE_H}>
          <Phone><DirectionBIntro /></Phone>
        </DCArtboard>
      </DCSection>

      {/* ─── Landing row ─────────────────────────────────────── */}
      <DCSection id="landing" title="Landing — Home"
        subtitle="Hero, interactive helix, best-sellers, value-props. Scroll inside the phone.">
        <DCArtboard id="landing-a" label="A · Lab Console — Landing" width={PHONE_W} height={PHONE_H}>
          <Phone dark><DirectionAApp screen="home" /></Phone>
        </DCArtboard>
        <DCArtboard id="landing-b" label="B · Editorial Bio — Landing" width={PHONE_W} height={PHONE_H}>
          <Phone><DirectionBApp screen="home" /></Phone>
        </DCArtboard>
      </DCSection>

      {/* ─── Shop row ───────────────────────────────────────── */}
      <DCSection id="shop" title="Shop — Catalog"
        subtitle="62 SKUs from xploregen.com — searchable, filterable, two-up grid.">
        <DCArtboard id="shop-a" label="A · Lab Console — Shop" width={PHONE_W} height={PHONE_H}>
          <Phone dark><DirectionAApp screen="shop" /></Phone>
        </DCArtboard>
        <DCArtboard id="shop-b" label="B · Editorial Bio — Shop" width={PHONE_W} height={PHONE_H}>
          <Phone><DirectionBApp screen="shop" /></Phone>
        </DCArtboard>
      </DCSection>

      {/* ─── Product detail ──────────────────────────────────── */}
      <DCSection id="product" title="Product detail"
        subtitle="One representative kit — pricing, specs, add-to-cart.">
        <DCArtboard id="product-a" label="A · Lab Console — Product" width={PHONE_W} height={PHONE_H}>
          <Phone dark><DirectionAApp screen="product" /></Phone>
        </DCArtboard>
        <DCArtboard id="product-b" label="B · Editorial Bio — Product" width={PHONE_W} height={PHONE_H}>
          <Phone><DirectionBApp screen="product" /></Phone>
        </DCArtboard>
      </DCSection>

      {/* ─── Services ───────────────────────────────────────── */}
      <DCSection id="services" title="Services"
        subtitle="Research services as a sibling to the reagent catalog.">
        <DCArtboard id="services-a" label="A · Lab Console — Services" width={PHONE_W} height={PHONE_H}>
          <Phone dark><DirectionAApp screen="services" /></Phone>
        </DCArtboard>
        <DCArtboard id="services-b" label="B · Editorial Bio — Services" width={PHONE_W} height={PHONE_H}>
          <Phone><DirectionBApp screen="services" /></Phone>
        </DCArtboard>
      </DCSection>

      {/* ─── About ──────────────────────────────────────────── */}
      <DCSection id="about" title="About"
        subtitle="Story, stats, certifications, address.">
        <DCArtboard id="about-a" label="A · Lab Console — About" width={PHONE_W} height={PHONE_H}>
          <Phone dark><DirectionAApp screen="about" /></Phone>
        </DCArtboard>
        <DCArtboard id="about-b" label="B · Editorial Bio — About" width={PHONE_W} height={PHONE_H}>
          <Phone><DirectionBApp screen="about" /></Phone>
        </DCArtboard>
      </DCSection>

      {/* ─── Cart ───────────────────────────────────────────── */}
      <DCSection id="cart" title="Cart & checkout"
        subtitle="Order summary with GST breakdown.">
        <DCArtboard id="cart-a" label="A · Lab Console — Cart" width={PHONE_W} height={PHONE_H}>
          <Phone dark><DirectionAApp screen="cart" /></Phone>
        </DCArtboard>
        <DCArtboard id="cart-b" label="B · Editorial Bio — Cart" width={PHONE_W} height={PHONE_H}>
          <Phone><DirectionBApp screen="cart" /></Phone>
        </DCArtboard>
      </DCSection>
    </DesignCanvas>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
