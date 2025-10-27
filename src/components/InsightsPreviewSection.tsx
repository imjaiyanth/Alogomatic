const INSIGHTS = [
  {
    title: 'AI automation readiness checklist',
    type: 'Guide',
    summary: 'A practical worksheet to align leadership, data, and compliance before the first sprint.',
    availability: 'Publishing Nov 2025'
  },
  {
    title: 'How manufacturers scale 3D configurators beyond launch',
    type: 'Playbook',
    summary: 'Lessons from multi-market rollouts covering asset pipelines, pricing, and change management.',
    availability: 'Download early access'
  },
  {
    title: 'Prompt ops best practices for frontline copilots',
    type: 'Webinar replay',
    summary: 'A 40-minute session on prompt QA, human-in-the-loop guardrails, and measuring adoption.',
    availability: 'Recording available on request'
  }
];

export default function InsightsPreviewSection() {
  return (
    <section className="section" id="insights">
      <div className="container insights">
        <div className="section__header-simple insights__header">
          <p className="eyebrow">Insights & resources</p>
          <h2 className="metallic-heading">Stay ahead with practical guidance, not hype.</h2>
          <p>
            We publish actionable resources grounded in shipped work. Subscribe, and we will send early drafts for feedback before they go live.
          </p>
          <form className="insights__form" onSubmit={event => event.preventDefault()}>
            <label>
              <span className="sr-only">Email</span>
              <input type="email" placeholder="you@company.com" required aria-label="Email" />
            </label>
            <button type="submit" className="button button--ghost">Notify me</button>
          </form>
        </div>

        <div className="insights__grid" role="list">
          {INSIGHTS.map(item => (
            <article key={item.title} className="insight-card" role="listitem">
              <span className="insight-card__type">{item.type}</span>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
              <span className="insight-card__availability">{item.availability}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
