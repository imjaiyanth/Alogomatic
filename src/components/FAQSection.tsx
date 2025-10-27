const FAQ_ITEMS = [
  {
    question: 'How quickly can we move from discovery to production?',
    answer:
      'We run lightweight discovery in 1-2 weeks, then structure delivery into 2-week sprints. Most copilots and automation initiatives reach production in 6-10 weeks depending on integration depth.'
  },
  {
    question: 'What does compliance look like for healthcare or regulated industries?',
    answer:
      'We design workflows to respect PHI/PII boundaries, provide audit trails, and integrate with your existing IAM. We have experience navigating HIPAA, SOC 2, and GDPR requirements in collaboration with client security teams.'
  },
  {
    question: 'Do you provide enablement for internal teams?',
    answer:
      'Yes. Every engagement includes playbooks and live training so your teams can extend automations, update prompts, and govern releases without vendor lock-in.'
  },
  {
    question: 'What if we only have an idea and no defined brief?',
    answer:
      'We help shape business cases, map feasibility, and co-author success metrics. Our product strategists can work with stakeholders to define value hypotheses before any build begins.'
  }
];

export default function FAQSection() {
  return (
    <section className="section section--contrast" id="faq">
      <div className="container faq">
        <div className="section__header-simple faq__header">
          <p className="eyebrow">FAQ</p>
          <h2 className="metallic-heading">Answers to the questions prospects ask most.</h2>
          <p>
            Have more? Share them in your inquiry and we will cover them in the intro call.
          </p>
        </div>

        <div className="faq__items">
          {FAQ_ITEMS.map(item => (
            <details key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
