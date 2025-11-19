import { Link } from 'react-router-dom';

export default function CaseStudiesSection() {
  const caseStudies = [
    {
      title: 'Industrial IoT Operations Command Centre',
      category: 'IoT Platform',
      challenge: 'Global manufacturer needed a single pane of glass for machine telemetry, maintenance workflows, and customer commitments across plants.',
      solution: 'Designed and delivered an IoT command centre with live health scoring, alert routing, and integrated work orders that plug into existing ERP systems.',
      tech: ['React', 'TypeScript', 'Node.js', 'Azure IoT Hub', 'PostgreSQL'],
      impact: [
        'Reduced unplanned downtime by 28%',
        'Provided operations leaders with real-time SLA reporting',
        'Scaled to 4 regions within the first quarter'
      ],
      image: '/placeholder-iot-platform.jpg'
    },
    {
      title: 'IoT Device Mobile App (iOS & Android)',
      category: 'Mobile Development',
      challenge: 'IoT company needed a mobile app to control and monitor their smart industrial sensors with real-time data streaming.',
      solution: 'Developed cross-platform mobile app with Bluetooth connectivity, real-time dashboards, offline data sync, and cloud backup.',
      tech: ['React Native', 'TypeScript', 'Python/FastAPI', 'MongoDB'],
      impact: [
        'Supported 10,000+ active devices',
        'Real-time data updates < 100ms latency',
        'Offline-first architecture for factory environments'
      ],
      image: '/placeholder-iot-app.jpg'
    },
    {
      title: 'AI-Powered Workflow Automation System',
      category: 'AI Automation',
      challenge: 'Business had manual data processing workflows taking 40+ hours per week across multiple tools and spreadsheets.',
      solution: 'Built intelligent automation using n8n and CrewAI with 15+ interconnected workflows, automatic data validation, and error handling.',
      tech: ['n8n', 'CrewAI', 'Python', 'OpenAI API', 'Airtable'],
      impact: [
        'Reduced manual work from 40 hours to 2 hours per week',
        'Automated 95% of repetitive tasks',
        'Zero data entry errors after implementation'
      ],
      image: '/placeholder-ai-workflow.jpg'
    },
    {
      title: 'Full-Stack SaaS Application',
      category: 'Web Development',
      challenge: 'Startup needed an MVP for their B2B SaaS platform within 8 weeks to secure Series A funding.',
      solution: 'Delivered production-ready application with user authentication, payment processing, real-time collaboration, and admin dashboard.',
      tech: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
      impact: [
        'Shipped MVP in 7 weeks (ahead of schedule)',
        'Secured $2M Series A funding',
        'Onboarded first 50 paying customers'
      ],
      image: '/placeholder-saas.jpg'
    },
    {
      title: 'Partner Service Portal with Device Insights',
      category: 'Digital Experience',
      challenge: 'Hardware company required a secure partner portal that exposed device health, warranty status, and support tooling.',
      solution: 'Built a responsive portal with SSO, contextual dashboards, and integrated ticketing so partners could self-serve device issues without escalations.',
      tech: ['Next.js', 'GraphQL', 'Node.js', 'AWS DynamoDB', 'Auth0'],
      impact: [
        'Cut partner support tickets by 52%',
        'Improved warranty approval times from days to hours',
        'Delivered brand-consistent experience across 12 markets'
      ],
      image: '/placeholder-partner-portal.jpg'
    }
  ];

  return (
    <section className="section" id="work">
      <div className="container">
        <div className="section__intro">
          <p className="eyebrow">Portfolio</p>
          <h2>Recent projects across IoT, mobile, AI, and SaaS.</h2>
          <p>
            Here are 5 of my recent projects showcasing different technical capabilities. 
            Each project includes the challenge, solution approach, tech stack, and measurable outcomes.
          </p>
        </div>

        <div className="case-studies-grid">
          {caseStudies.map((study, index) => (
            <article key={index} className="case-study-card">
              <div className="case-study-card__header">
                <span className="case-study-card__category">{study.category}</span>
                <h3>{study.title}</h3>
              </div>

              <div className="case-study-card__content">
                <div className="case-study-section">
                  <h4>Challenge</h4>
                  <p>{study.challenge}</p>
                </div>

                <div className="case-study-section">
                  <h4>Solution</h4>
                  <p>{study.solution}</p>
                </div>

                <div className="case-study-section">
                  <h4>Tech Stack</h4>
                  <div className="tech-tags">
                    {study.tech.map(tech => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="case-study-section">
                  <h4>Impact</h4>
                  <ul className="impact-list">
                    {study.impact.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="section__cta-center">
          <p style={{ marginBottom: '1rem', color: 'var(--fg-muted)' }}>
            These are representative examples. Actual client names and specific details 
            are withheld for confidentiality.
          </p>
          <Link to="/contact" className="button">
            Discuss your project
          </Link>
        </div>
      </div>
    </section>
  );
}
