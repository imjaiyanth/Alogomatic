import { useState } from 'react';

const steps = [
  {
    number: '1',
    title: 'Discover & Strategize',
    description: 'We listen to your goals and study your business, then create a clear, custom plan made just for you.'
  },
  {
    number: '2',
    title: 'Create & Deliver',
    description: 'We design a solution just for you, choosing only the services that make sense for your goals. Whether it\'s 3D configurators, IoT apps, or AI workflows, we deliver exactly what your business needs to grow.'
  },
  {
    number: '3',
    title: 'Launch & Improve',
    description: 'We launch your services and watch results closely, making smart updates to boost your outcomes.'
  },
  {
    number: '4',
    title: 'Support & Grow',
    description: 'We don\'t stop at the launch. We analyze performance, gather feedback, and fine-tune to ensure your solutions keep evolving and thriving.'
  }
];

export default function ApproachSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="process-section" id="approach">
      <div className="container">
        <div className="process-section__header">
          <h2 className="process-section__title">Our Approach</h2>
        </div>

        <div className="process-section__layout">
          {/* Main content card */}
          <div className="process-section__main-card">
            <div className="process-step__number-large">{steps[activeStep]?.number}</div>
            <h3 className="process-step__title-large">{steps[activeStep]?.title}</h3>
            <p className="process-step__description-large">{steps[activeStep]?.description}</p>
          </div>

          {/* Vertical pills for all steps */}
          <div className="process-section__pills">
            {steps.map((step, index) => (
              <button
                key={index}
                className={`process-pill ${activeStep === index ? 'process-pill--active' : ''}`}
                onClick={() => setActiveStep(index)}
              >
                <span className="process-pill__number">{step.number}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="process-section__cta">
          <p className="process-section__cta-text">
            You focus on doing what you love, running your business — I'll handle the tech.
          </p>
          <a href="#contact" className="process-section__button">
            Start Your Project
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
