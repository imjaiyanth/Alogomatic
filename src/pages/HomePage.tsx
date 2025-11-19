import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Hero from '../components/Hero';

export default function HomePage() {
  return (
    <>
      <SEO url="https://www.meghamsys.com/" />
      <Hero />
      <section className="section" aria-label="Explore Meghamsys offerings">
        <div className="container" style={{ textAlign: 'center', display: 'grid', gap: '1.5rem' }}>
          <p className="eyebrow">Explore More</p>
          <h2 className="metallic-heading" style={{ margin: 0 }}>Everything you need to orchestrate connected operations.</h2>
          <p style={{ margin: 0, color: 'var(--fg-muted)', maxWidth: '640px', justifySelf: 'center' }}>
            Dive into the areas our teams cover—from services and solution programs to industry expertise. Each page unpacks
            how we deliver adoption-ready platforms, portals, and automation.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem' }}>
            <Link className="button" to="/services">Services</Link>
            <Link className="button button--ghost" to="/solutions">Solutions</Link>
            <Link className="button button--ghost" to="/industries">Industries</Link>
            <Link className="button button--ghost" to="/work">Case Studies</Link>
            <Link className="button button--ghost" to="/contact">Contact</Link>
          </div>
        </div>
      </section>
    </>
  );
}
