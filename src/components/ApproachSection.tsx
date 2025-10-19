const steps = [
  {
    title: 'Diagnose',
    description:
      'We co-create clarity on the business challenge, align stakeholders, and benchmark success metrics before any line of code is written.'
  },
  {
    title: 'Design',
    description:
      'Rapid experimentation with interactive prototypes, system architecture, and prompt engineering to validate the experience early.'
  },
  {
    title: 'Deploy',
    description:
      'Ship production-ready solutions with observability, human-in-the-loop safeguards, and training to drive adoption.'
  },
  {
    title: 'Scale',
    description:
      'Continuously optimize models, expand integrations, and instrument feedback loops that compound the value of automation.'
  }
];

export default function ApproachSection() {
  return (
    <section className="section" id="approach">
      <div className="container section__layout">
        <div className="section__intro">
          <p className="eyebrow">How we build</p>
          <h2>A playbook built for speed, rigor, and lasting impact.</h2>
          <p>
            Meghamsys blends design thinking with responsible AI delivery. Each phase of our approach is designed to
            keep humans in the loop while accelerating time-to-value. We partner closely with internal stakeholders to
            co-create a shared definition of success and deploy automation that augments teams instead of replacing them.
            The journey moves from sharp diagnosis to scaled operations, ensuring every AI copilot or workflow is measured,
            observable, and continuously improved.
          </p>
        </div>
        <div className="section__content">
          <ol className="timeline" aria-label="Delivery process">
            {steps.map((step, index) => (
              <li key={step.title}>
                <div className="timeline__index">{String(index + 1).padStart(2, '0')}</div>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="timeline__summary">
            Collaboration continues beyond launch. We conduct retrospectives, capability hand-offs, and executive
            readouts so teams understand how automation affects KPIs. When you are ready to extend into new markets or
            domains, Meghamsys stands up a new roadmap, leveraging performance data to prioritize the next highest-value
            copilots. Discover how this connects to real results in our <a href="#work">selected work</a> section.
          </p>
        </div>
      </div>
    </section>
  );
}
