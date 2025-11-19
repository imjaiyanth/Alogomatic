import { Link } from 'react-router-dom';

const categories = [
  {
    title: 'Model & Agent Ops',
    items: ['OpenAI', 'Anthropic', 'Cohere', 'LlamaIndex', 'LangGraph', 'AutoGen', 'Vector DBs']
  },
  {
    title: 'Experience Layer',
    items: ['React', 'Next.js', 'Remix', 'Vite', 'Expo', 'Tailwind CSS', 'Three.js / OGL']
  },
  {
    title: 'Platforms & Data',
    items: ['AWS', 'Azure', 'GCP', 'Supabase', 'Postgres', 'dbt', 'Snowflake', 'Kafka']
  }
];

export default function TechStackSection() {
  return (
    <section className="section" id="tech">
      <div className="container section__layout">
        <div className="section__intro">
          <p className="eyebrow">Tooling</p>
          <h2 className="metallic-heading">Best-in-class technologies, thoughtfully integrated.</h2>
          <p>
            We remain vendor-agnostic and curate the right combination of models, infrastructure, and interfaces for each
            environment. Our engineers have shipped production workloads on all major clouds, orchestrated vector search
            across multiple databases, and tuned copilots on commercial and open models alike. This flexibility allows us
            to meet strict compliance requirements while accelerating delivery with proven reference architectures.
          </p>
          <p>
            Curious about compatibility with your current stack? During discovery, we run a technical assessment to map
            integrations, security considerations, and data readiness. From there, we co-design an implementation plan that
            ensures your internal teams can support and evolve the solution. Review highlights of our ecosystem below and
            connect with us via the <Link to="/contact">contact channel</Link> for a deeper dive.
          </p>
        </div>
        <div className="section__content">
          <div className="stack-grid">
            {categories.map(category => (
              <article key={category.title}>
                <h3>{category.title}</h3>
                <ul>
                  {category.items.map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
