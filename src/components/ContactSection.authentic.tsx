import useContactForm from '../hooks/useContactForm';

export default function ContactSection() {
  const { formData, isSubmitting, isSuccess, error, handleChange, handleSubmit } = useContactForm();

  return (
    <section className="section section--contrast" id="contact">
      <div className="container section__layout contact">
        <div className="section__intro contact__intro">
          <p className="eyebrow">Get in Touch</p>
          <h2>Let's discuss your project.</h2>
          <p>
            I work with businesses that need a technical partner for specialized projects—
            3D configurators, IoT apps, AI automation, or full-stack development. 
          </p>
          <p>
            Whether you need an MVP, proof-of-concept, or a specific technical solution, 
            share your requirements below and I'll respond within 24 hours with an initial 
            assessment and timeline estimate.
          </p>
          
          <div className="contact__details">
            <a href="mailto:hello@alogomatic.dev">hello@alogomatic.dev</a>
            <span>Available for remote projects worldwide</span>
          </div>

          <div className="contact__info-boxes">
            <div className="info-box">
              <h4>Project Timelines</h4>
              <ul>
                <li><strong>Proof of Concept:</strong> 1-2 weeks</li>
                <li><strong>MVP:</strong> 4-8 weeks</li>
                <li><strong>Full Application:</strong> 8-12 weeks</li>
              </ul>
            </div>

            <div className="info-box">
              <h4>Ideal Projects</h4>
              <ul>
                <li>3D product configurators for manufacturers</li>
                <li>IoT mobile apps (iOS & Android)</li>
                <li>AI workflow automation (50+ built)</li>
                <li>Custom web applications (React/Node/Python)</li>
              </ul>
            </div>
          </div>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          {isSuccess && (
            <div style={{ 
              padding: '1rem', 
              marginBottom: '1rem', 
              background: 'rgba(82, 240, 255, 0.1)', 
              borderRadius: '8px',
              color: 'var(--accent)'
            }}>
              Thanks! I'll review your project details and respond within 24 hours.
            </div>
          )}
          {error && (
            <div style={{ 
              padding: '1rem', 
              marginBottom: '1rem', 
              background: 'rgba(255, 82, 82, 0.1)', 
              borderRadius: '8px',
              color: '#ff5252'
            }}>
              {error}
            </div>
          )}

          <label>
            <span>Your Name</span>
            <input 
              type="text" 
              name="name" 
              placeholder="John Smith" 
              value={formData.name}
              onChange={handleChange}
              required 
              disabled={isSubmitting}
            />
          </label>

          <label>
            <span>Email Address</span>
            <input 
              type="email" 
              name="email" 
              placeholder="john@company.com" 
              value={formData.email}
              onChange={handleChange}
              required 
              disabled={isSubmitting}
            />
          </label>

          <label>
            <span>Project Type</span>
            <select 
              name="interest" 
              value={formData.interest}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            >
              <option value="" disabled>Select your project type</option>
              <option>3D Product Configurator</option>
              <option>IoT Mobile App (iOS/Android)</option>
              <option>AI Workflow Automation</option>
              <option>Full-Stack Web Application</option>
              <option>Custom/Combination</option>
              <option>Just exploring options</option>
            </select>
          </label>

          <label>
            <span>Project Details</span>
            <textarea
              name="details"
              rows={5}
              placeholder="Describe your project: What problem are you solving? What are your technical requirements? What's your timeline? Any specific technologies needed?"
              value={formData.details}
              onChange={handleChange}
              disabled={isSubmitting}
            />
          </label>

          <label>
            <span>Estimated Budget (Optional)</span>
            <select 
              name="budget" 
              value={formData.budget || ''}
              onChange={handleChange}
              disabled={isSubmitting}
            >
              <option value="">Not sure yet</option>
              <option>Under $5k (Proof of Concept)</option>
              <option>$5k - $15k (MVP)</option>
              <option>$15k - $30k (Full Application)</option>
              <option>$30k+ (Complex/Enterprise)</option>
            </select>
          </label>

          <button type="submit" className="button" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Project Inquiry'}
          </button>

          <p className="contact__disclaimer">
            I review all inquiries personally and respond within 24 hours. 
            Your information is kept confidential.
          </p>
        </form>
      </div>
    </section>
  );
}
