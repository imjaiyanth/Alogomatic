import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <span className="footer__brand">Meghamsys</span>
          <p>Designing intelligent products and AI systems that drive measurable, human outcomes.</p>
        </div>
        <div className="footer__links">
          <Link to="/services">Services</Link>
          <Link to="/solutions">Solutions</Link>
          <Link to="/industries">Industries</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="footer__smallprint">
          <span>© {new Date().getFullYear()} Meghamsys. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
