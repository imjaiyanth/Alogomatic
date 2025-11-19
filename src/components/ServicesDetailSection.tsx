import { Link } from 'react-router-dom';

const DELIVERY_PROGRAMS = [
  {
    title: 'IoT Platform Sprints',
    focus: 'Connected Operations',
    summary: 'We align hardware, connectivity, and data streams to stand up an IoT control centre that becomes your team’s daily cockpit.',
    commitments: [
      'Week 1: fleet discovery, architecture blueprint, experience brief',
      'Weeks 2-3: data connectors, telemetry pipelines, and interface prototypes',
      'Week 4: pilot launch with instrumentation and operating playbook'
    ],
    cadence: '4-6 week pilots',
    signal: 'Typical outcome: live command centre with adoption plan'
  },
  {
    title: 'AI Automation Projects',
    focus: 'Operations / Support',
    summary: 'We deploy AI copilots and workflow automation systems that turn IoT signals into recommendations, escalations, and measurable action.',
    commitments: [
      'Week 1: process mapping, data readiness, and guardrail design',
      'Weeks 2-3: automation build, copilot training, and integrations',
      'Week 4: enablement, rollout support, and performance dashboards'
    ],
    cadence: '4-6 week projects',
    signal: 'Typical outcome: 60% reduction in manual tasks'
  },
  {
    title: 'Digital Portal Programs',
    focus: 'Customer & Partner Experience',
    summary: 'Experience-led portals and web applications that give customers and partners a self-serve window into your connected products.',
    commitments: [
      'Discovery workshops and UX strategy aligned to brand systems',
      'Iterative design, full-stack build, and systems integration',
      'Launch readiness, QA, and transition to enterprise operations'
    ],
    cadence: '6-10 week programs',
    signal: 'Typical outcome: production-ready portal with adoption toolkit'
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
            custom proposal.{' '}
            <Link to="/contact">Let&rsquo;s discuss your needs.</Link>
          </p>
        </div>
      </div>
    </section>
  );
}
