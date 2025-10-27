const IMPACT_STORIES = [
  {
    industry: 'Manufacturing automation',
    headline: '62% faster quote-to-order flow',
    summary:
      'Implemented an AI-assisted configurator that generates manufacturing-ready BOMs and pricing rules on demand, freeing engineers to focus on complex requests.',
    metrics: [
      { label: 'Manual effort reduced', value: '62%' },
      { label: 'Operator adoption', value: '93%' },
      { label: 'Go-live timeline', value: '11 weeks' }
    ]
  },
  {
    industry: 'Healthcare operations',
    headline: 'Triage copilot that closes gaps in care',
    summary:
      'Deployed a HIPAA-conscious chat assistant that drafts responses for nurse navigators, looks up eligibility, and schedules follow-ups without switching systems.',
    metrics: [
      { label: 'First-response time improvement', value: '48%' },
      { label: 'Automation coverage', value: '70% of inbound inquiries' },
      { label: 'Escalation accuracy', value: '95%' }
    ]
  },
  {
    industry: 'B2B services',
    headline: 'AI success desk for revenue teams',
    summary:
      'Built an internal AI desk that briefs sales on customer usage, drafts outreach, and syncs insights with CRM + Slack to keep everyone aligned.',
    metrics: [
      { label: 'Prep time saved per rep', value: '4 hrs / week' },
      { label: 'Meetings booked', value: '+28%' },
      { label: 'Rollout speed', value: '6 sprints' }
    ]
  }
];

export default function ImpactStoriesSection() {
  return (
    <section className="section" id="impact">
      <div className="container impact">
        <div className="section__header-simple impact__header">
          <p className="eyebrow">Impact highlights</p>
          <h2 className="metallic-heading">Proof that pragmatic automation moves the needle.</h2>
          <p>
            Each engagement ships with measurable outcomes, transparent baselines, and co-authored success metrics. Here are
            a few anonymised snapshots our clients approved us to share.
          </p>
        </div>

        <div className="impact__grid" role="list">
          {IMPACT_STORIES.map(story => (
            <article key={story.headline} className="impact-card" role="listitem">
              <header>
                <span className="impact-card__industry">{story.industry}</span>
                <h3>{story.headline}</h3>
              </header>
              <p>{story.summary}</p>
              <dl className="impact-card__metrics">
                {story.metrics.map(metric => (
                  <div key={metric.label}>
                    <dt>{metric.label}</dt>
                    <dd>{metric.value}</dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
