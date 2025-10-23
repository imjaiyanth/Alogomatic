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
              <span>3D CONFIGURATORS | IOT APPS | AI WORKFLOWS | FULLSTACK DEV | AUTOMATION | </span>
              <span>3D CONFIGURATORS | IOT APPS | AI WORKFLOWS | FULLSTACK DEV | AUTOMATION | </span>
            </div>
          </div>
          <span className="hero__badge">Alogomatic · Full-Stack Developer & AI Specialist</span>
          <h1 className="hero__title">
            <span className="hero__title-text">I build</span>{' '}
            <span className="hero__rotating" aria-live="polite">
              <RotatingText
                texts={[
                  '3D configurators',
                  'IoT mobile apps',
                  'AI workflows',
                  'Web applications',
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
            <span className="hero__title-text">that solve real problems.</span>
          </h1>
          <p className="hero__summary">
            Full-stack developer specializing in 3D product configurators for mechanical industries, 
            IoT mobile applications, and AI-powered automation workflows. 5 applications shipped, 
            50+ AI agents deployed.
          </p>
          <ul className="hero__points">
            <li><strong>3D Configurators:</strong> Interactive product visualizers for mechanical/manufacturing companies with real-time customization</li>
            <li><strong>IoT Mobile Apps:</strong> Cross-platform iOS & Android applications for industrial IoT devices and sensors</li>
            <li><strong>AI Automation:</strong> 50+ intelligent workflows using n8n and CrewAI for business process automation</li>
          </ul>
          <div className="hero__actions">
            <a className="button" href="#contact">
              Let's discuss your project
            </a>
            <a className="button button--ghost" href="#work">
              View portfolio
            </a>
          </div>
          <div className="hero__trust">
            <span className="hero__trust-label">Technologies & expertise</span>
            <ul className="hero__trust-list" aria-label="Core technologies">
              <li>React & Node.js</li>
              <li>Python & AI</li>
              <li>3D Visualization</li>
            </ul>
          </div>
        </div>
        <aside className="hero__aside">
          <div className="hero__media-card" aria-hidden="true">
            <header className="hero__media-header">
              <span>How I Work</span>
              <span className="hero__media-tag">Process</span>
            </header>
            <ul className="hero__media-list">
              <li>
                <span className="hero__media-step">01</span>
                <div>
                  <strong>Discovery & Requirements</strong>
                  <p>Understand your technical needs, business goals, and timeline through detailed consultation.</p>
                </div>
              </li>
              <li>
                <span className="hero__media-step">02</span>
                <div>
                  <strong>Prototype & Iterate</strong>
                  <p>Build a working prototype within 1-2 weeks for validation and feedback before full development.</p>
                </div>
              </li>
              <li>
                <span className="hero__media-step">03</span>
                <div>
                  <strong>Deploy & Support</strong>
                  <p>Ship production-ready code with documentation, testing, and ongoing maintenance support.</p>
                </div>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
