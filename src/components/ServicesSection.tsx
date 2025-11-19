import { Link } from 'react-router-dom';
import MagicBento from './MagicBento';

const SERVICE_CARDS = [
  {
    label: 'Strategy',
    title: 'Copilot roadmapping',
    description: 'Sequence the right AI bets around real workflows, stakeholders, and measurable value.',
    outcomes: ['Opportunity heatmaps and maturity scoring', 'ROI modeling tied to business KPIs', 'Executive-ready roadmap with delivery lanes'],
  },
  {
    label: 'Product',
    title: 'Experience prototyping',
    description: 'Design human-centered copilots, orchestrations, and internal tools that teams love to use.',
    outcomes: ['UX research and journey modelling', 'Interactive prototypes & design systems', 'Prompt and data guardrail libraries'],
  },
  {
    label: 'Build',
    title: 'Launch & enablement',
    description: 'Ship production-ready systems with enablement kits so your team sustains momentum post-launch.',
    outcomes: ['Full-stack implementation pods', 'Governance, rollout, and change playbooks', 'Performance dashboards + KPI guardrails'],
  },
] as const;

const SERVICE_PROOF_POINTS = [
  'Cross-functional pods covering strategy, design, engineering, and ML from day one.',
  '90-day value horizon with instrumentation and adoption metrics pre-defined.',
  'Platform-agnostic integrations matched to your data and compliance requirements.',
];

export default function ServicesSection() {
  return (
    <section className="section section--contrast" id="services">
      <div className="container section__layout section__layout--services">
        <div className="section__intro">
          <p className="eyebrow">What we do</p>
          <h2>Intelligent systems engineered for decisive outcomes.</h2>
          <p>
            We blend applied AI research, product strategy, and full-stack execution to deliver resilient, human-centered
            solutions that compound value across your organisation.
          </p>
          <ul className="section__highlights" aria-label="Engagement proof points">
            {SERVICE_PROOF_POINTS.map(point => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <div className="section__cta-card">
            <span className="section__cta-pill">Need a tailored roadmap?</span>
            <p>
              We scope joint squads in under a week—<Link to="/contact">connect with our strategists</Link> to co-design the first sprint.
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
