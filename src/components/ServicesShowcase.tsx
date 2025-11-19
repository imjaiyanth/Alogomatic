import { Link } from 'react-router-dom';
import CardSwapShowcase from './CardSwapShowcase';
import { AnimatedAIBrainIcon, AnimatedWebAppIcon, AnimatedIoTSignalIcon } from './icons/AnimatedServiceIcons';

const services = [
  {
    icon: AnimatedIoTSignalIcon,
    gradient: 'linear-gradient(135deg, #52f0ff 0%, #2dd4bf 100%)',
    title: 'IoT Platform Engineering',
    description: 'Connect devices, data, and teams with resilient IoT control centres crafted for operations leaders.',
    highlights: ['Unified device onboarding & fleet management', 'Real-time telemetry dashboards and alerting', 'Edge-to-cloud data pipelines with governance']
  },
  {
    icon: AnimatedWebAppIcon,
    gradient: 'linear-gradient(135deg, #52f0ff 0%, #3b82f6 100%)',
    title: 'Digital Operations Portals',
    description: 'Experience-led portals and service workspaces that keep customers, partners, and internal teams aligned.',
    highlights: ['Self-serve customer and partner portals', 'Workflow-driven escalation management', 'Design systems matched to enterprise brand']
  },
  {
    icon: AnimatedAIBrainIcon,
    gradient: 'linear-gradient(135deg, #52f0ff 0%, #6366f1 100%)',
    title: 'AI Automation & Insights',
    description: 'Operational AI copilots that translate IoT signals into recommendations, automations, and measurable action.',
    highlights: ['Predictive maintenance and anomaly detection', 'Copilot-enabled triage for support & field teams', 'Automations orchestrated with your existing stack']
  }
];

export default function ServicesShowcase() {
  return (
    <section className="services-showcase" id="services">
      <div className="container">
        <div className="services-showcase__header">
          <p className="eyebrow">Services</p>
          <h2 className="services-showcase__title metallic-heading">Platforms and services for connected enterprises.</h2>
          <p className="services-showcase__subtitle">
            We deliver IoT platforms, digital operations portals, and AI copilots that feel as considered as the best B2B SaaS experiences.
          </p>
        </div>

        <CardSwapShowcase />

        <div className="services-grid">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <article className="service-card" key={service.title}>
                <div className="service-card__icon" style={{ background: service.gradient }}>
                  <IconComponent size={40} />
                </div>
                <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__description">{service.description}</p>
              <ul className="service-card__highlights">
                {service.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              <Link className="service-card__cta" to="/contact">
                Learn more
              </Link>
            </article>
            );
          })}
        </div>

        <div className="services-banner">
          <div>
            <h3>Need something specific?</h3>
            <p>Share your goals and we’ll tailor a roadmap—no jargon, just clarity on what to build next.</p>
          </div>
          <Link className="button" to="/contact">
            Let’s talk
          </Link>
        </div>
      </div>
    </section>
  );
}
