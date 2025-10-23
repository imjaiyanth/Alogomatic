import MagicBento from './MagicBento';

const SERVICE_CARDS = [
  {
    label: '3D Visualization',
    title: '3D Product Configurators',
    description: 'Interactive configurators for mechanical products with real-time 3D visualization, pricing, and specification export.',
    outcomes: [
      'Custom 3D models and rendering pipeline',
      'Configuration logic with engineering constraints',
      'Quote generation and CAD file export',
      'Mobile-responsive WebGL experiences'
    ],
    ideal: 'Manufacturing, Machinery, Industrial Equipment companies'
  },
  {
    label: 'Mobile Development',
    title: 'IoT Mobile Applications',
    description: 'Native iOS and Android apps for controlling and monitoring IoT devices with real-time data visualization.',
    outcomes: [
      'Cross-platform development (React Native/Flutter)',
      'Bluetooth/Wi-Fi device integration',
      'Real-time sensor data dashboards',
      'Offline-first data sync'
    ],
    ideal: 'IoT Startups, Smart Device Manufacturers, Industrial Monitoring'
  },
  {
    label: 'AI Automation',
    title: 'AI Workflows & Agents',
    description: 'Custom AI automation using n8n and CrewAI to streamline repetitive tasks and build intelligent systems.',
    outcomes: [
      'Workflow automation with n8n',
      'Multi-agent AI systems (CrewAI)',
      'Custom Python scripts and APIs',
      'Integration with existing tools'
    ],
    ideal: 'Businesses with repetitive processes, Data-heavy operations'
  },
  {
    label: 'Full-Stack',
    title: 'Web Application Development',
    description: 'Modern, responsive web applications built with React, Node.js, and Python from MVP to production.',
    outcomes: [
      'React/TypeScript frontend',
      'Node.js or Python backend',
      'Database design and optimization',
      'Deployment and DevOps setup'
    ],
    ideal: 'Startups, SaaS Products, Internal Tools'
  },
] as const;

export default function ServicesSection() {
  return (
    <section className="section section--contrast" id="services">
      <div className="container section__layout section__layout--services">
        <div className="section__intro">
          <p className="eyebrow">What I Build</p>
          <h2>Specialized solutions across 3D, IoT, and AI domains.</h2>
          <p>
            I focus on four core service areas where I have proven delivery experience. 
            Each project is custom-built to your specific requirements, not template-based solutions.
          </p>
          <div className="section__cta-card">
            <span className="section__cta-pill">Project timelines</span>
            <p>
              Most projects range from <strong>4-12 weeks</strong> depending on complexity. 
              <a href="#contact"> Get in touch</a> to discuss your timeline and requirements.
            </p>
          </div>
        </div>
        <div className="section__content section__content--features">
          <div className="feature-grid" role="list">
            {SERVICE_CARDS.map(card => (
              <article className="feature-card" role="listitem" key={card.title}>
                <div className="feature-card__meta">
                  <span className="feature-card__label">{card.label}</span>
                  <h3>{card.title}</h3>
                </div>
                <p>{card.description}</p>
                <ul className="feature-card__list">
                  {card.outcomes.map(outcome => (
                    <li key={outcome}>{outcome}</li>
                  ))}
                </ul>
                <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: 'var(--fg-soft)' }}>
                  <strong>Best for:</strong> {card.ideal}
                </p>
              </article>
            ))}
          </div>
          <div className="feature-grid__bento" aria-hidden="true">
            <MagicBento
              textAutoHide
              enableStars
              enableSpotlight
              enableBorderGlow
              enableTilt
              enableMagnetism
              clickEffect
              spotlightRadius={300}
              particleCount={12}
              glowColor="72, 227, 255"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
