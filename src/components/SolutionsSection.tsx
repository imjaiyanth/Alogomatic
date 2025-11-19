import { Link } from 'react-router-dom';
import { AnimatedChatBotIcon, AnimatedAutomationIcon, AnimatedIoTSignalIcon } from './icons/AnimatedServiceIcons';

const SOLUTION_THEMES = [
  {
    icon: AnimatedIoTSignalIcon,
    title: 'Connected Operations Hub',
    focus: 'IoT Platforms',
    summary: 'Unify device fleets, telemetry, and operations workflows in a single command centre your teams rely on daily.',
    wins: [
      'Device provisioning, firmware orchestration, and role-based access in one place',
      'Real-time anomaly detection with intelligent routing to field or support teams',
      'Data services that sync with ERP, CMMS, and supply chain tooling'
    ],
    signal: 'Operations leaders gain always-on visibility and a shared source of truth for decisions.'
  },
  {
    icon: AnimatedAutomationIcon,
    title: 'Process Automation',
    focus: 'Workflow Automation',
    summary: 'Automated workflows that remove reconciliation work and keep data flowing between your critical systems.',
    wins: [
      'Document processing and insight extraction tied to IoT events',
      'Integrations that sync tickets, inventory, and telemetry across platforms',
      'Exception handling and notification workflows grounded in business rules'
    ],
    signal: 'Teams typically reclaim 20+ hours per week previously lost to repetitive reconciliations.'
  },
  {
    icon: AnimatedChatBotIcon,
    title: 'Field Support Copilots',
    focus: 'AI Assistants',
    summary: 'Guided troubleshooting experiences that blend IoT context with conversational AI for customer and field teams.',
    wins: [
      'Customer self-service experiences with embedded device context',
      'AI-guided diagnostics for technicians with step-by-step playbooks',
      'Closed-loop feedback that enriches your knowledge base over time'
    ],
    signal: 'Service organisations improve resolution speed while reducing escalations.'
  }
] as const;

export default function SolutionsSection() {
  return (
    <section className="section section--contrast" id="solutions">
      <div className="container">
        <div className="section__header-simple">
          <p className="eyebrow">Solutions</p>
          <h2 className="metallic-heading">Technology solutions for your business challenges.</h2>
          <p>
            We design IoT platforms, automation, and AI assistants that match the polish of leading B2B SaaS products while fitting your operating model.
          </p>
        </div>

        <div className="solutions-overview" role="list">
          {SOLUTION_THEMES.map(theme => {
            const IconComponent = theme.icon;
            return (
              <article key={theme.title} className="solution-outline" role="listitem">
                <div className="solution-outline__icon">
                  <IconComponent size={28} />
                </div>
                <header className="solution-outline__header">
                  <h3>{theme.title}</h3>
                  <span className="solution-outline__pill">{theme.focus}</span>
                </header>
                <p className="solution-outline__summary">{theme.summary}</p>
              <ul className="solution-outline__list">
                {theme.wins.map(win => (
                  <li key={win}>{win}</li>
                ))}
              </ul>
              <p className="solution-outline__signal">{theme.signal}</p>
            </article>
            );
          })}
        </div>

        <div className="solutions-footnote">
          <p>
            Not sure which solution fits your needs? We can help you identify the right technology approach for your business.
            <Link to="/contact"> Contact us to discuss.</Link>
          </p>
        </div>
      </div>
    </section>
  );
}
