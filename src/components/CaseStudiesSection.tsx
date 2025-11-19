import { Link } from 'react-router-dom';
import FlowingMenu, { FlowingMenuItem } from './FlowingMenu';

const selectedWork: FlowingMenuItem[] = [
  {
    label: 'Operations Copilot',
    summary: 'Automated 68% of weekly incident triage with a multi-agent assistant embedded directly into Slack.',
    meta: ['3 global hubs', '12 min response'],
    image: 'linear-gradient(135deg, #c6ff74 0%, #76ffb3 100%)',
    href: '/contact'
  },
  {
    label: 'Revenue Intelligence',
    summary: 'Merged product telemetry, CRM, and billing to ship a generative insights layer that surfaces upsell plays.',
    meta: ['$24M pipeline', '+5 hrs focus time'],
    image: 'linear-gradient(140deg, #9df1ff 0%, #caa7ff 100%)',
    href: '/contact'
  },
  {
    label: 'AI Concierge',
    summary: 'Conversational concierge coordinating vendors, guest preferences, and on-site teams across premium resorts.',
    meta: ['NPS +34', '2m10s average'],
    image: 'linear-gradient(130deg, #ffecd2 0%, #fcb69f 100%)',
    href: '/contact'
  },
  {
    label: 'Connected Operations Hub',
    summary: 'Launched an IoT command centre that synchronises device health, field service, and customer support teams worldwide.',
    meta: ['40% faster dispatch', 'Global rollout 8 weeks'],
    image: 'linear-gradient(135deg, #f8d0ff 0%, #90f7ec 100%)',
    href: '/contact'
  }
];

export default function CaseStudiesSection() {
  return (
    <section className="section section--accent" id="work">
      <div className="container section__layout">
        <div className="section__intro">
          <p className="eyebrow">Selected work</p>
          <h2>Proof that intelligent systems move the needle.</h2>
          <p>
            Every engagement pairs strategy with production. Whether we are orchestrating autonomous workflows, designing
            premium digital surfaces, or embedding AI copilots into existing tools, Meghamsys stays accountable to the
            metrics that matter. Below is a sampling of programs that illustrate how we translate AI vision into
            measurable business outcomes.
          </p>
          <p>
            Browse the highlights and then explore how similar accelerators could apply to your organization. If you do
            not see your industry represented, reach out—our <Link to="/services">services team</Link> regularly designs bespoke
            automation and data experiences tailored to unique constraints.
          </p>
        </div>
        <div className="section__content section__content--flow">
          <FlowingMenu items={selectedWork} ariaLabel="Selected work case studies" />
          <p className="section__footnote">
            Want the deeper narrative? Request the full case studies package through the
            <Link to="/contact"> contact form</Link>. We cover project objectives, architecture, governance considerations,
            and the measurable lift achieved post-launch.
          </p>
        </div>
      </div>
    </section>
  );
}
