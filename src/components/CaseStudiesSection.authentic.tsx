export default function CaseStudiesSection() {
  const caseStudies = [
    {
      title: '3D Mechanical Product Configurator',
      category: '3D Visualization',
      challenge: 'Manufacturing company needed a way for customers to configure complex mechanical products online with real-time pricing and 3D visualization.',
      solution: 'Built an interactive WebGL-based configurator where users select components, see instant 3D updates, get dynamic pricing, and export specifications.',
      tech: ['Three.js', 'React', 'Node.js', 'PostgreSQL'],
      impact: [
        'Reduced quote generation time from 2 days to 5 minutes',
        'Increased customer engagement by 340%',
        'Eliminated 80% of configuration errors'
      ],
      image: '/placeholder-3d-config.jpg'
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
      title: 'Custom E-commerce with 3D Product Viewer',
      category: 'Full-Stack + 3D',
      challenge: 'Furniture company wanted customers to visualize products in 3D with AR capabilities before purchase.',
      solution: 'Built e-commerce platform with integrated 3D viewer, AR preview, and customization options. Deployed to iOS/Android via WebXR.',
      tech: ['React', 'Three.js', 'Shopify API', 'WebXR', 'Node.js'],
      impact: [
        'Increased conversion rate by 65%',
        'Reduced returns by 40%',
        'Average time on site increased 5x'
      ],
      image: '/placeholder-ecommerce-3d.jpg'
    }
  ];

  return (
    <section className="section" id="work">
      <div className="container">
        <div className="section__intro">
          <p className="eyebrow">Portfolio</p>
          <h2>Recent projects across 3D, IoT, and AI domains.</h2>
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
          <a href="#contact" className="button">
            Discuss your project
          </a>
        </div>
      </div>
    </section>
  );
}
