import { AnimatedAIBrainIcon, AnimatedWebAppIcon, AnimatedCube3DIcon } from './icons/AnimatedServiceIcons';

const services = [
  {
    icon: AnimatedAIBrainIcon,
    gradient: 'linear-gradient(135deg, #52f0ff 0%, #1ec8ff 100%)',
    title: 'AI Automation & Chatbots',
    description: 'Intelligent AI assistants that handle customer inquiries, automate workflows, and streamline operations across your systems.',
    highlights: ['AI chatbots for customer support', 'Workflow automation with n8n & Make', 'System integrations & data processing']
  },
  {
    icon: AnimatedWebAppIcon,
    gradient: 'linear-gradient(135deg, #52f0ff 0%, #3b82f6 100%)',
    title: 'Web Applications',
    description: 'Modern, responsive web applications built with cutting-edge frameworks for optimal performance and user experience.',
    highlights: ['Custom web applications & dashboards', 'React, Next.js & TypeScript', 'Cloud deployment & scalability']
  },
  {
    icon: AnimatedCube3DIcon,
    gradient: 'linear-gradient(135deg, #52f0ff 0%, #8b5cf6 100%)',
    title: '3D Product Configurators',
    description: 'Interactive 3D visualizations that let customers configure and explore products in real-time with dynamic pricing.',
    highlights: ['Real-time 3D product visualization', 'Three.js & WebGL technology', 'Configuration rules & pricing engines']
  }
];

export default function ServicesShowcase() {
  return (
    <section className="services-showcase" id="services">
      <div className="container">
        <div className="services-showcase__header">
          <p className="eyebrow">Services</p>
          <h2 className="services-showcase__title metallic-heading">Technology solutions that transform your operations.</h2>
          <p className="services-showcase__subtitle">
            We deliver AI automation, web applications, chatbots, and 3D configurators tailored to your industry needs.
          </p>
        </div>

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
              <a className="service-card__cta" href="#contact">
                Learn more
              </a>
            </article>
            );
          })}
        </div>

        <div className="services-banner">
          <div>
            <h3>Need something specific?</h3>
            <p>Share your goals and we’ll tailor a roadmap—no jargon, just clarity on what to build next.</p>
          </div>
          <a className="button" href="#contact">
            Let’s talk
          </a>
        </div>
      </div>
    </section>
  );
}
