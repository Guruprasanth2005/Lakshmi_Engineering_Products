import "./Hero.css";

function Hero() {
  return (
    <section id="home" className="hero blueprint-grid">
      <div className="hero__gradient" aria-hidden="true" />

      <div className="hero__corner hero__corner--tl" aria-hidden="true" />
      <div className="hero__corner hero__corner--br" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__tag">
          <span className="eyebrow">Est. Engineering &amp; Manufacturing</span>
        </div>

        <h1 className="hero__title">
          Welcome to
          <span className="hero__title-accent"> Lakshmi Engineering Products</span>
        </h1>

        <p className="hero__tagline">Quality Engineering Products. Reliable Solutions.</p>

        <p className="hero__desc">
          From precision-machined components to complete industrial hardware, we
          supply the parts that keep production lines, plants and workshops
          running without compromise.
        </p>

        <div className="hero__cta">
          <a href="#products" className="btn btn-primary">
            Explore Products
          </a>
          <a href="#contact" className="btn btn-outline">
            Contact Us
          </a>
        </div>

        <div className="hero__specs" role="list" aria-label="Company highlights">
          <div className="hero__spec" role="listitem">
            <span className="hero__spec-value">50+</span>
            <span className="hero__spec-label">Product Lines</span>
          </div>
          <div className="hero__spec" role="listitem">
            <span className="hero__spec-value">100%</span>
            <span className="hero__spec-label">Quality Checked</span>
          </div>
          <div className="hero__spec" role="listitem">
            <span className="hero__spec-value">B2B</span>
            <span className="hero__spec-label">Bulk Supply Ready</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
