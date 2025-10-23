import DarkVeil from '../DarkVeil';
import RotatingText from './RotatingText';

const statChips = [
  { value: '50+', label: 'AI products shipped for growth-focused teams' },
  { value: '98%', label: 'Client satisfaction across long-term retainers' },
  { value: '12x', label: 'Average efficiency lift within the first 90 days' }
];

const servicesList = [
  'AI copilots & automation',
  'Conversion-focused web experiences',
  'Personalized chat assistants',
  '3D product visualisation'
];

const processSteps = [
  { number: '01', title: 'Discover', summary: 'Understand goals, audience, and current gaps.' },
  { number: '02', title: 'Design', summary: 'Plan the right mix of AI, web, and automation services.' },
  { number: '03', title: 'Launch', summary: 'Ship fast, measure results, and refine with real feedback.' },
  { number: '04', title: 'Grow', summary: 'Support your team and keep scaling what works.' }
];

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__veil" aria-hidden="true">
        <DarkVeil hueShift={32} noiseIntensity={0.08} scanlineIntensity={0.18} scanlineFrequency={0.002} warpAmount={0.1} speed={0.8} />
      </div>
      <div className="hero__gradient" aria-hidden="true" />
      <div className="container hero__layout hero__layout--balanced">
        <div className="hero__intro hero__intro--simple">
          <span className="hero__badge">Meghamsys · AI & Automation Studio</span>
          <h1 className="hero__title">
            <span className="metallic-heading">We craft</span>{' '}
            <RotatingText
              texts={['Configurators', 'Web Apps', 'Chatbots', 'AI Automation']}
              rotationInterval={2500}
              staggerDuration={0.03}
              transition={{ type: 'spring', damping: 30, stiffness: 250 }}
              className="hero__title-rotating"
            />{' '}
            <span className="metallic-heading">that feel inevitable.</span>
          </h1>
          <p className="hero__summary hero__summary--wide">
            Our team partners with ambitious businesses to design conversion-ready websites, AI assistants, and automation flows that drive measurable revenue—not vanity metrics.
          </p>
          <div className="hero__guarantee">
            If we don’t deliver adoption-worthy results, we stay on until you do.
          </div>
          <div className="hero__actions">
            <a className="button" href="#contact">
              Book a call
            </a>
            <a className="button button--ghost" href="#about">
              Learn about us
            </a>
          </div>
          <div className="hero__stat-row" aria-label="Key highlights">
            {statChips.map((stat) => (
              <div className="hero__stat-chip" key={stat.value}>
                <span className="hero__stat-chip-value">{stat.value}</span>
                <span className="hero__stat-chip-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
        <aside className="hero__aside hero__aside--simple">
          <div className="hero__aside-card">
            <h3>What we focus on</h3>
            <p>
              We specialise in clean, conversion-first experiences backed by AI so your marketing, sales, and operations teams can scale without chaos.
            </p>
            <ul className="hero__aside-list">
              {servicesList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="hero__aside-card">
            <h3>How we partner</h3>
            <ol className="hero__aside-steps">
              {processSteps.map((step) => (
                <li key={step.number}>
                  <span className="hero__aside-step-number">{step.number}</span>
                  <div>
                    <strong>{step.title}</strong>
                    <p>{step.summary}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </aside>
      </div>
    </section>
  );
}
