import { Link } from 'react-router-dom';

const INDUSTRY_FOCUS = [
  {
    title: 'Manufacturing',
    headline: 'Streamline production and customer engagement with smart technology.',
    plays: [
      'IoT asset monitoring dashboards for production lines',
      'Predictive maintenance workflows powered by AI insights',
      'Digital order orchestration aligned with ERP and MES'
    ],
    proof: 'Manufacturing clients gain always-on visibility and reduce unplanned downtime.'
  },
  {
    title: 'Healthcare',
    headline: 'Improve patient care and operational efficiency.',
    plays: [
      'AI chatbots for appointment scheduling and patient inquiries',
      'HIPAA-compliant document processing and automation',
      'Patient engagement tools and automated reminders'
    ],
    proof: 'Healthcare providers typically reduce administrative workload by 60%.'
  },
  {
    title: 'Logistics & Retail',
    headline: 'Keep fulfilment, inventory, and customer teams aligned in real time.',
    plays: [
      'Telemetry-enabled inventory visibility across warehouses and stores',
      'AI assistants that guide support teams with up-to-date order context',
      'Automation that syncs replenishment, routing, and customer notifications'
    ],
    proof: 'Retail operations report higher SLA adherence and faster issue resolution.'
  },
  {
    title: 'Professional Services',
    headline: 'Automate administrative tasks and improve client service.',
    plays: [
      'Document automation and template generation',
      'AI chatbots for client inquiries and appointment booking',
      'Custom web applications for client portals and dashboards'
    ],
    proof: 'Service firms report significant time savings on routine administrative tasks.'
  }
] as const;

export default function IndustriesSection() {
  return (
    <section className="section" id="industries">
      <div className="container">
        <div className="section__header-simple">
          <p className="eyebrow">Industry Focus</p>
          <h2 className="metallic-heading">Tailored solutions for your industry.</h2>
          <p>
            We understand the unique challenges of different industries and deliver technology solutions
            that address your specific operational needs.
          </p>
        </div>

        <div className="industries-showcase" role="list">
          {INDUSTRY_FOCUS.map(industry => (
            <article key={industry.title} className="industry-summary" role="listitem">
              <h3>{industry.title}</h3>
              <p className="industry-summary__headline">{industry.headline}</p>
              <ul className="industry-summary__list">
                {industry.plays.map(play => (
                  <li key={play}>{play}</li>
                ))}
              </ul>
              <p className="industry-summary__proof">{industry.proof}</p>
            </article>
          ))}
        </div>

        <div className="industries-note">
          <p>
            Work in a different industry? Our technology solutions can be adapted to fit various business needs.{' '}
            <Link to="/contact">Let&rsquo;s discuss how we can help.</Link>
          </p>
        </div>
      </div>
    </section>
  );
}
