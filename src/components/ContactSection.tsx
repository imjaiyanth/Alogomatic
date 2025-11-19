import { Link } from 'react-router-dom';
import useContactForm from '../hooks/useContactForm';

export default function ContactSection() {
  const { formData, isSubmitting, isSuccess, error, handleChange, handleSubmit } = useContactForm();

  return (
    <section className="section section--contrast" id="contact">
      <div className="container section__layout contact">
        <div className="section__intro contact__intro">
          <p className="eyebrow">Partner with Meghamsys</p>
          <h2 className="metallic-heading">Let's scope the impact we can create together.</h2>
          <p>
            Share your mandate and we'll assemble the right team to explore solutions within five business days. We work
            across time zones and plug into existing teams or shoulder the full build.
          </p>
          <p>
            Whether you are evaluating an automation roadmap, modernizing data foundations, or designing copilots for
            frontline teams, Meghamsys can help you accelerate confidently. Tell us about the outcomes you are targeting—
            increasing revenue, reducing operational toil, elevating customer experience—and we will outline a tailored plan.
            You can also email us directly or schedule a strategy session to dive deeper into scope, timeline, and success metrics.
          </p>
          <div className="contact__details">
            <a href="mailto:sales@meghamsys.com">sales@meghamsys.com</a>
            <span>India • USA</span>
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
              Thank you! We'll be in touch within two business days.
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
            <span>Name</span>
            <input 
              type="text" 
              name="name" 
              placeholder="Your name" 
              value={formData.name}
              onChange={handleChange}
              required 
              disabled={isSubmitting}
            />
          </label>
          <label>
            <span>Email</span>
            <input 
              type="email" 
              name="email" 
              placeholder="you@company.com" 
              value={formData.email}
              onChange={handleChange}
              required 
              disabled={isSubmitting}
            />
          </label>
          <label>
            <span>How can we help?</span>
            <select 
              name="interest" 
              value={formData.interest}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            >
              <option value="" disabled>
                Select an option
              </option>
              <option>AI agents & automation</option>
              <option>Product strategy & build</option>
              <option>AI advisory & enablement</option>
              <option>Something else</option>
            </select>
          </label>
          <label>
            <span>Project context</span>
            <textarea
              name="details"
              rows={4}
              placeholder="Tell us about the challenge, timeline, and success criteria."
              value={formData.details}
              onChange={handleChange}
              disabled={isSubmitting}
            />
          </label>
          <button type="submit" className="button" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit inquiry'}
          </button>
          <p className="contact__disclaimer">We respect your privacy and will respond within two business days.</p>
          <p className="contact__assurance">
            Prefer to learn more first? Visit our <Link to="/about">about section</Link> for background on the team or explore
            the <Link to="/services">services overview</Link> to see how we structure automation engagements from discovery to scale.
          </p>
        </form>
      </div>
    </section>
  );
}
