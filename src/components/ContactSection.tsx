export default function ContactSection() {
  return (
    <section className="section section--contrast" id="contact">
      <div className="container section__layout contact">
        <div className="section__intro contact__intro">
          <p className="eyebrow">Partner with Meghamsys</p>
          <h2>Let's scope the impact we can create together.</h2>
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
            <a href="mailto:hello@meghamsys.com">hello@meghamsys.com</a>
            <span>New York • London • Singapore</span>
          </div>
        </div>
        <form className="contact__form">
          <label>
            <span>Name</span>
            <input type="text" name="name" placeholder="Your name" required />
          </label>
          <label>
            <span>Email</span>
            <input type="email" name="email" placeholder="you@company.com" required />
          </label>
          <label>
            <span>How can we help?</span>
            <select name="interest" defaultValue="">
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
            />
          </label>
          <button type="submit" className="button">
            Submit inquiry
          </button>
          <p className="contact__disclaimer">We respect your privacy and will respond within two business days.</p>
          <p className="contact__assurance">
            Prefer to learn more first? Visit our <a href="#about">about section</a> for background on the team or explore
            the <a href="#services">services overview</a> to see how we structure automation engagements from discovery to scale.
          </p>
        </form>
      </div>
    </section>
  );
}
