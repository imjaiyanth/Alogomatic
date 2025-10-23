export default function AboutSection() {
  return (
    <section className="section" id="about">
      <div className="container section__layout">
        <div className="section__intro">
          <p className="eyebrow">About</p>
          <h2>Full-stack developer building at the intersection of 3D, IoT, and AI.</h2>
          <p>
            I'm a developer who bridges hardware and software, creating applications that bring 
            physical products to life through code. With expertise spanning web development, 
            mobile apps, 3D visualization, and AI automation, I help businesses modernize 
            their digital presence and streamline operations.
          </p>
        </div>
        <div className="section__content">
          <div className="stats-grid">
            <div className="stat-card">
              <span className="stat-card__number">5+</span>
              <span className="stat-card__label">Applications Delivered</span>
              <p>Full-stack web and mobile applications from concept to production</p>
            </div>
            <div className="stat-card">
              <span className="stat-card__number">50+</span>
              <span className="stat-card__label">AI Workflows Deployed</span>
              <p>Intelligent automation using n8n, CrewAI, and custom Python scripts</p>
            </div>
            <div className="stat-card">
              <span className="stat-card__number">3</span>
              <span className="stat-card__label">Specialized Domains</span>
              <p>3D configurators, IoT mobile apps, and AI automation systems</p>
            </div>
          </div>
          
          <div className="about__expertise">
            <h3>Core Expertise</h3>
            <div className="expertise-grid">
              <div className="expertise-card">
                <h4>🎨 3D Product Configurators</h4>
                <p>
                  Interactive 3D visualizers for mechanical and manufacturing companies. 
                  Customers configure products in real-time with instant visual feedback, 
                  pricing calculations, and export-ready specifications.
                </p>
                <ul>
                  <li>Real-time 3D rendering (Three.js, WebGL)</li>
                  <li>Product customization logic</li>
                  <li>Engineering constraint validation</li>
                  <li>Quote generation & CAD export</li>
                </ul>
              </div>
              
              <div className="expertise-card">
                <h4>📱 IoT Mobile Applications</h4>
                <p>
                  Cross-platform iOS and Android apps for industrial IoT devices. 
                  Real-time sensor monitoring, device control, data visualization, 
                  and cloud synchronization.
                </p>
                <ul>
                  <li>React Native / Flutter development</li>
                  <li>Bluetooth/Wi-Fi device communication</li>
                  <li>Real-time data streaming</li>
                  <li>Offline-first architecture</li>
                </ul>
              </div>
              
              <div className="expertise-card">
                <h4>🤖 AI Workflow Automation</h4>
                <p>
                  Intelligent business process automation using AI agents and workflows. 
                  From data processing to customer service, building systems that work 
                  autonomously while maintaining human oversight.
                </p>
                <ul>
                  <li>n8n workflow orchestration</li>
                  <li>CrewAI multi-agent systems</li>
                  <li>Custom Python automation</li>
                  <li>API integrations & webhooks</li>
                </ul>
              </div>
              
              <div className="expertise-card">
                <h4>⚡ Full-Stack Development</h4>
                <p>
                  Modern web applications built with React, Node.js, and Python. 
                  From MVPs to production systems, focusing on clean code, 
                  performance, and maintainability.
                </p>
                <ul>
                  <li>React, TypeScript, Next.js</li>
                  <li>Node.js, Express, Python/FastAPI</li>
                  <li>PostgreSQL, MongoDB, Redis</li>
                  <li>AWS, Docker, CI/CD</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="about__approach">
            <h3>My Approach</h3>
            <p>
              I work best with businesses that need a technical partner who can understand 
              both the engineering challenges and business objectives. Whether you're a 
              manufacturing company needing a product configurator, an IoT startup building 
              your first mobile app, or a business looking to automate workflows with AI—
              I bring hands-on experience and a pragmatic approach.
            </p>
            <p>
              <strong>I'm ideal for:</strong> MVPs, proof-of-concepts, specialized technical 
              projects, and ongoing development partnerships. Projects typically range from 
              4-12 weeks depending on scope.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
