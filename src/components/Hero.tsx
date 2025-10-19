import DarkVeil from '../DarkVeil';
import RotatingText from './RotatingText';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__veil" aria-hidden="true">
        <DarkVeil hueShift={32} noiseIntensity={0.08} scanlineIntensity={0.18} scanlineFrequency={0.002} warpAmount={0.1} speed={0.8} />
      </div>
      <div className="hero__gradient" aria-hidden="true" />
      <div className="container hero__layout">
        <div className="hero__intro">
          <div className="hero__decor" aria-hidden="true">
            <div className="hero__halo hero__halo--primary" />
            <div className="hero__halo hero__halo--secondary" />
            <div className="hero__ticker">
              <span>DATA-DRIVEN | AUTONOMOUS | HUMAN-IN-THE-LOOP | WEBAPPS | COPILOT DESIGN | </span>
              <span>DATA-DRIVEN | AUTONOMOUS | HUMAN-IN-THE-LOOP | WEBAPPS | COPILOT DESIGN | </span>
            </div>
          </div>
          <span className="hero__badge">Meghamsys · AI-native digital partner</span>
          <h1 className="hero__title">
            <span className="hero__title-text">We craft</span>{' '}
            <span className="hero__rotating" aria-live="polite">
              <RotatingText
                texts={[
                  'AI copilots',
                  'Web apps',
                  'Configurators',
                  'Workflows',
                ]}
                mainClassName="hero__rotating-text"
                splitLevelClassName="hero__rotating-split"
                elementLevelClassName="hero__rotating-char"
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: '-110%', opacity: 0 }}
                staggerDuration={0.018}
                staggerFrom="first"
                rotationInterval={5000}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              />
            </span>{' '}
            <span className="hero__title-text">that feel inevitable.</span>
          </h1>
          <p className="hero__summary">
            Meghamsys transforms ambiguous AI mandates into ship-ready strategies that balance experimental velocity
            with measurable business impact.
          </p>
          <div className="hero__actions">
            <a className="button" href="#contact">
              Book a discovery call
            </a>
            <a className="button button--ghost" href="#work">
              Explore case studies
            </a>
          </div>
        </div>
        <aside className="hero__aside">
          <p className="hero__description">
            From bespoke AI agents to enterprise-grade web applications, we design and ship systems that untangle
            complex business challenges and accelerate growth.
          </p>
          <dl className="hero__metrics" aria-label="Highlights">
            <div>
              <dt>50+</dt>
              <dd>AI copilots deployed across finance, commerce, and operations.</dd>
            </div>
            <div>
              <dt>12x</dt>
              <dd>Average productivity lift delivered in the first 90 days.</dd>
            </div>
            <div>
              <dt>Global</dt>
              <dd>Distributed team of strategists, engineers, and designers.</dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  );
}
