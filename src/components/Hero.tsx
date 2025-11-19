import { Link } from 'react-router-dom';
import DarkVeil from '../DarkVeil';
import RotatingText from './RotatingText';

const statChips = [
  { value: '35+', label: 'Connected platforms launched for global B2B teams' },
  { value: '97%', label: 'Stakeholder satisfaction across transformation programs' },
  { value: '90 days', label: 'Average runway from blueprint to live IoT cockpit' }
];

const servicesList = [
  'IoT telemetry & device management',
  'Operations-grade digital portals',
  'AI copilots for field & support',
  'Data governance & analytics'
];

const processSteps = [
  { number: '01', title: 'Co-design', summary: 'Map journeys, metrics, and governance with business and product leads.' },
  { number: '02', title: 'Prototype', summary: 'Shape north-star UX, architecture, and data flows before writing code.' },
  { number: '03', title: 'Launch', summary: 'Ship instrumented experiences with enablement and change playbooks.' },
  { number: '04', title: 'Scale', summary: 'Expand integrations, automation, and insights with a measured roadmap.' }
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
          <span className="hero__badge">Meghamsys · Connected Product Studio</span>
          <h1 className="hero__title">
            <span className="metallic-heading">We craft</span>{' '}
            <RotatingText
              texts={['IoT Platforms', 'Device Dashboards', 'Field Service Tools', 'AI Automation']}
              rotationInterval={2500}
              staggerDuration={0.03}
              transition={{ type: 'spring', damping: 30, stiffness: 250 }}
              className="hero__title-rotating"
            />{' '}
            <span className="metallic-heading">that feel inevitable.</span>
          </h1>
          <p className="hero__summary hero__summary--wide">
            We partner with ambitious B2B teams to build IoT platforms, portals, and AI copilots that look enterprise-ready and deliver measurable adoption—not vanity demos.
          </p>
          <div className="hero__guarantee">
            If we don’t land the clarity and outcomes your stakeholders expect, we stay on until it’s real.
          </div>
          <div className="hero__actions">
            <Link className="button" to="/contact">
              Book a call
            </Link>
            <Link className="button button--ghost" to="/about">
              Learn about us
            </Link>
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
              We specialise in connected product ecosystems that blend thoughtful UX, robust data pipelines, and automation your operators trust.
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
