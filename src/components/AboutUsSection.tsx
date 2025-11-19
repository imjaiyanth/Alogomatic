import { Link } from 'react-router-dom';

export default function AboutUsSection() {
  return (
    <section className="section section--alt" id="about">
      <div className="container">
        <div className="section__header-center">
          <p className="eyebrow">About Meghamsys</p>
          <h2 className="section__title-center metallic-heading">
            Building the future of intelligent automation
          </h2>
          <p className="section__subtitle-center">
            We're a specialized team of AI engineers, full-stack developers, and product designers 
            dedicated to transforming ambitious ideas into production-ready solutions.
          </p>
        </div>

        {/* Our Story */}
        <div className="about-story">
          <div className="about-story__heading">
            <h3 className="metallic-heading">Our Story</h3>
          </div>
          <div className="about-story__content">
            <p>
              Meghamsys was founded on a simple belief: technology should amplify the people closest to the work. 
              We’ve spent years refining our craft in building intelligent systems that solve
              real business problems—from AI agents that handle complex workflows to IoT ecosystems that 
              keep products, data, and service teams in sync.
            </p>
            <p>
              What started as a passion for solving hard technical challenges has grown into a full-service 
              development agency trusted by businesses across manufacturing, e-commerce, healthcare, and beyond. 
              Our team combines deep technical expertise with a pragmatic approach to delivery.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="values-grid">
          <div className="value-card">
            <div className="value-card__icon">🎯</div>
            <h3>Results-Driven</h3>
            <p>
              Every line of code we write is tied to measurable business outcomes. We don't just build features—we 
              deliver value.
            </p>
          </div>

          <div className="value-card">
            <div className="value-card__icon">🚀</div>
            <h3>Innovation First</h3>
            <p>
              We stay at the cutting edge of AI and web technologies, bringing the latest advancements to solve 
              your toughest challenges.
            </p>
          </div>

          <div className="value-card">
            <div className="value-card__icon">🤝</div>
            <h3>Partnership Mindset</h3>
            <p>
              Your success is our success. We work as an extension of your team, bringing transparency and 
              collaboration to every project.
            </p>
          </div>

          <div className="value-card">
            <div className="value-card__icon">⚡</div>
            <h3>Speed & Quality</h3>
            <p>
              We move fast without compromising on quality. Our agile approach ensures rapid iteration and 
              continuous improvement.
            </p>
          </div>
        </div>

        {/* Expertise Areas */}
        <div className="expertise-section">
          <h3 className="expertise-section__title">Our Expertise</h3>
          <div className="expertise-grid">
            <div className="expertise-item">
              <span className="expertise-item__icon">🤖</span>
              <h4>AI & Machine Learning</h4>
              <p>GPT-4, Claude, CrewAI, AutoGen, NLP, predictive analytics</p>
            </div>

            <div className="expertise-item">
              <span className="expertise-item__icon">💻</span>
              <h4>Full-Stack Development</h4>
              <p>React, Next.js, TypeScript, Node.js, Python, AWS, Docker</p>
            </div>

            <div className="expertise-item">
              <span className="expertise-item__icon">📡</span>
              <h4>Connected Devices</h4>
              <p>IoT platform architecture, telemetry pipelines, device orchestration</p>
            </div>

            <div className="expertise-item">
              <span className="expertise-item__icon">📱</span>
              <h4>IoT & Mobile</h4>
              <p>React Native, Flutter, Bluetooth, Wi-Fi, sensor integration</p>
            </div>
          </div>
        </div>

        {/* Team Stats */}
        <div className="team-stats">
          <div className="stat">
            <span className="stat__number">50+</span>
            <span className="stat__label">Projects Delivered</span>
          </div>
          <div className="stat">
            <span className="stat__number">98%</span>
            <span className="stat__label">Client Satisfaction</span>
          </div>
          <div className="stat">
            <span className="stat__number">5+</span>
            <span className="stat__label">Years Experience</span>
          </div>
          <div className="stat">
            <span className="stat__number">24/7</span>
            <span className="stat__label">Support Available</span>
          </div>
        </div>

        {/* CTA */}
        <div className="about-cta">
          <h3>Ready to work with us?</h3>
          <p>Let's discuss how we can help transform your business with AI and automation.</p>
          <Link to="/contact" className="button">
            Start a Conversation
          </Link>
        </div>
      </div>
    </section>
  );
}
