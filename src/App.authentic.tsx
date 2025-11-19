import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ApproachSection from './components/ApproachSection';
import CaseStudiesSection from './components/CaseStudiesSection';
import TechStackSection from './components/TechStackSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import SEO, { StructuredData } from './components/SEO';

export default function App() {
  return (
    <>
      <SEO 
        title="Alogomatic | Full-Stack Developer & AI Automation Specialist"
        description="Building IoT platforms, mobile apps, and AI automation workflows. 5+ applications delivered, 50+ AI agents deployed. React • Node.js • Python • n8n • CrewAI"
      />
      <StructuredData />
      <a href="#main-content" className="sr-only skip-link">
        Skip to main content
      </a>
      <div className="app-shell">
        <Header />
        <main id="main-content">
          <Hero />
          <AboutSection />
          <ServicesSection />
          <ApproachSection />
          <CaseStudiesSection />
          <TechStackSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
