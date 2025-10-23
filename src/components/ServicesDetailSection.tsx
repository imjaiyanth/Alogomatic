const DELIVERY_PROGRAMS = [
  {
    title: 'AI Automation Projects',
    focus: 'Operations / Support',
    summary: 'We build and deploy AI chatbots and workflow automation systems that handle repetitive tasks and customer inquiries.',
    commitments: [
      'Week 1: requirements analysis and workflow mapping',
      'Weeks 2-3: AI chatbot and automation development',
      'Week 4: testing, deployment, and training'
    ],
    cadence: '4-6 week projects',
    signal: 'Typical outcome: 60% reduction in manual tasks'
  },
  {
    title: 'Web Application Development',
    focus: 'Custom Applications',
    summary: 'Full-stack web applications built with modern frameworks, designed for your specific business processes and workflows.',
    commitments: [
      'Requirements gathering and technical design',
      'Frontend and backend development with testing',
      'Deployment, documentation, and maintenance support'
    ],
    cadence: '6-10 week projects',
    signal: 'Typical outcome: production-ready web application'
  },
  {
    title: '3D Configurator Solutions',
    focus: 'Manufacturing / Product Visualization',
    summary: 'Interactive 3D product configurators with real-time rendering, configuration rules, and dynamic pricing integration.',
    commitments: [
      '3D modeling and asset optimization',
      'Configuration engine and business rules setup',
      'Integration with pricing and ordering systems'
    ],
    cadence: '8-12 week projects',
    signal: 'Typical outcome: interactive product customization'
  }
] as const;

export default function ServicesDetailSection() {
  return (
    <section className="section" id="delivery">
      <div className="container">
        <div className="section__header-simple">
          <p className="eyebrow">Delivery Programs</p>
          <h2 className="metallic-heading">Structured project delivery that meets your needs.</h2>
          <p>
            Every project follows a clear timeline with defined milestones. We work closely with your team to ensure
            successful implementation and ongoing support.
          </p>
        </div>

        <div className="services-detail__grid" role="list">
          {DELIVERY_PROGRAMS.map(program => (
            <article key={program.title} className="services-detail-card" role="listitem">
              <header className="services-detail-card__header">
                <div>
                  <span className="services-detail-card__pill">{program.focus}</span>
                  <h3>{program.title}</h3>
                </div>
              </header>
              <p className="services-detail-card__summary">{program.summary}</p>
              <ul className="services-detail-card__list">
                {program.commitments.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <footer className="services-detail-card__footer">
                <span>{program.cadence}</span>
                <span>{program.signal}</span>
              </footer>
            </article>
          ))}
        </div>

        <div className="services-detail__note">
          <strong>Have a specific project in mind?</strong>
          <p>
            We can tailor our approach to fit your unique requirements. Share your project details and we will create a
            custom proposal. <a href="#contact">Let&rsquo;s discuss your needs.</a>
          </p>
        </div>
      </div>
    </section>
  );
}
