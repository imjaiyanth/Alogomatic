import MagicBento from './MagicBento';

export default function ServicesSection() {
  return (
    <section className="section section--contrast" id="services">
      <div className="container section__layout">
        <div className="section__intro">
          <p className="eyebrow">What we do</p>
          <h2>Intelligent systems engineered for decisive outcomes.</h2>
          <p>
            We blend applied AI research, product strategy, and full-stack execution to deliver human-centered,
            resilient solutions.
          </p>
          <p>
            Every engagement begins with a rapid discovery sprint that uncovers automation candidates, data friction,
            and high-impact copilot opportunities. Meghamsys then assembles a cross-functional pod—strategy, design,
            engineering, and ML—tasked with shipping value inside the first 90 days. Our team partners with yours to
            map processes, score feasibility, and define measurable success metrics that prove business impact from day one.
          </p>
          <p>
            Engagements range from focused copilots for customer success to large-scale enterprise automation programs.
            We provide technical accelerators, governance templates, and enablement playbooks so your teams can scale
            responsibly long after our initial launch. Explore detailed offerings on the <a href="#approach">delivery approach</a>
            or reach our strategists via the <a href="#contact">contact section</a> to tailor a roadmap.
          </p>
        </div>
        <div className="section__content section__content--bento">
          <MagicBento
            textAutoHide
            enableStars
            enableSpotlight
            enableBorderGlow
            enableTilt
            enableMagnetism
            clickEffect
            spotlightRadius={320}
            particleCount={14}
            glowColor="88, 166, 255"
          />
        </div>
      </div>
    </section>
  );
}
