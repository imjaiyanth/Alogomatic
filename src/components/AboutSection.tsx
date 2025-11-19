import { Link } from 'react-router-dom';

export default function AboutSection() {
  return (
    <section className="section" id="about">
      <div className="container section__layout">
        <div className="section__intro">
          <p className="eyebrow">About Meghamsys</p>
          <h2>An AI-native digital partner focused on measurable business outcomes.</h2>
        </div>
        <div className="section__content section__content--text">
          <p>
            Meghamsys was founded to bridge the gap between ambitious AI vision and production-ready execution.
            Our multidisciplinary team blends product strategy, machine learning research, and human-centered design
            to build automation programs that move the dial on revenue, customer experience, and operational resilience.
            With hubs across North America, Europe, and Asia, we embed alongside clients as an extension of their product,
            data, and innovation organizations.
          </p>
          <p>
            We invest heavily in discovery and measurement so every AI copilot, workflow, and intelligent product we
            deploy has a clear definition of success. From the first workshop, we map key business processes, identify
            where humans add the most value, and architect automation that augments teams rather than replacing them.
            That insight drives a delivery model rooted in rapid experimentation, transparent communication, and a bias
            for launching tangible business outcomes fast.
          </p>
          <p>
            As a full-stack <Link to="/services">AI automation services</Link> partner, Meghamsys guides clients through data
            readiness, platform modernization, and organizational enablement. We ship responsibly from day one with the
            governance, observability, and change management that leadership expects. Explore our <Link to="/work">case studies</Link>
            for proof of impact or <Link to="/contact">connect with our team</Link> to plan your next initiative.
          </p>
          <ul className="about-highlights">
            <li><strong>50+ AI copilots</strong> launched in production for operations, finance, and revenue teams.</li>
            <li><strong>12x productivity lift</strong> average in the first 90 days of a Meghamsys automation engagement.</li>
            <li><strong>Global delivery footprint</strong> with pods spanning strategy, data, design, and engineering.</li>
            <li><strong>Responsible AI frameworks</strong> that embed human-in-the-loop safeguards and compliance controls.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
