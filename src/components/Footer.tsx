export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <span className="footer__brand">Meghamsys</span>
          <p>Designing intelligent products and AI systems that drive measurable, human outcomes.</p>
        </div>
        <div className="footer__links">
          <a href="#services">Services</a>
          <a href="#approach">Approach</a>
          <a href="#work">Work</a>
          <a href="#tech">Tech</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer__smallprint">
          <span>© {new Date().getFullYear()} Meghamsys. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
