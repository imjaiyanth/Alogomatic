import { AnimatedChatBotIcon, AnimatedAutomationIcon, AnimatedCube3DIcon } from './icons/AnimatedServiceIcons';

const SOLUTION_THEMES = [
  {
    icon: AnimatedChatBotIcon,
    title: 'Customer Support Automation',
    focus: 'AI Chatbots & Support',
    summary: 'Intelligent chatbots that handle customer inquiries 24/7, reducing support workload and improving response times.',
    wins: [
      'AI chatbots that answer common customer questions instantly',
      'Multi-channel support across web, mobile, and messaging platforms',
      'Seamless handoff to human agents when needed'
    ],
    signal: 'Customer support teams typically see 60% reduction in manual queries.'
  },
  {
    icon: AnimatedAutomationIcon,
    title: 'Process Automation',
    focus: 'Workflow Automation',
    summary: 'Automated workflows that eliminate repetitive tasks and connect your systems for seamless data flow.',
    wins: [
      'Document processing and data extraction automation',
      'System integrations that sync data across platforms',
      'Scheduled tasks and notification workflows'
    ],
    signal: 'Organizations typically save 20+ hours per week on manual tasks.'
  },
  {
    icon: AnimatedCube3DIcon,
    title: 'Product Visualization',
    focus: '3D Configurators',
    summary: 'Interactive 3D product configurators that let customers explore and customize products with real-time pricing.',
    wins: [
      'Real-time 3D visualization of product configurations',
      'Dynamic pricing based on selected options',
      'Export configurations for manufacturing or ordering'
    ],
    signal: 'Manufacturers see increased engagement and fewer configuration errors.'
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
            We deliver targeted solutions using AI automation, web applications, chatbots, and 3D configurators
            to streamline your operations and enhance customer experience.
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
            <a href="#contact"> Contact us to discuss.</a>
          </p>
        </div>
      </div>
    </section>
  );
}
