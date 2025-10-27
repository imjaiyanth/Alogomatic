const TEAM_MEMBERS = [
  {
    name: 'Arun Prakash',
    role: 'Founder · Principal Architect',
    bio: '15 years building automation platforms for manufacturing and healthcare operators. Previously led AI platform teams at a global industrial OEM.',
    focus: 'Architecture, compliance, enterprise delivery'
  },
  {
    name: 'Divya Menon',
    role: 'Lead, Conversational AI',
    bio: 'Designs chatbots and copilots that blend NLU, retrieval, and service desk workflows. Former product lead at a CX automation startup.',
    focus: 'AI assistants, service automation, adoption design'
  },
  {
    name: 'Rahul Desai',
    role: 'Head of Engineering',
    bio: 'Full-stack engineer with a passion for resilient web systems. Architected multi-tenant SaaS products used by 50k+ monthly users.',
    focus: 'Web apps, scalability, developer experience'
  },
  {
    name: 'Sahana Iyer',
    role: '3D Experience Director',
    bio: 'Creates photoreal configurators and real-time 3D pipelines. Cut her teeth delivering immersive commerce for global furniture brands.',
    focus: 'Visualization, PLM integrations, design ops'
  }
];

export default function TeamSection() {
  return (
    <section className="section section--alt" id="team">
      <div className="container team">
        <div className="section__header-simple team__header">
          <p className="eyebrow">Team</p>
          <h2 className="metallic-heading">Specialists who stay close to the work.</h2>
          <p>
            Meghamsys is a practitioner-led studio. Every engagement is staffed by senior builders who have shipped AI products,
            complex web applications, and immersive 3D experiences in production environments.
          </p>
        </div>

        <div className="team__grid" role="list">
          {TEAM_MEMBERS.map(member => (
            <article key={member.name} className="team-card" role="listitem">
              <header>
                <h3>{member.name}</h3>
                <span>{member.role}</span>
              </header>
              <p>{member.bio}</p>
              <p className="team-card__focus">
                <strong>Focus:</strong> {member.focus}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
