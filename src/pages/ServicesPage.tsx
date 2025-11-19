import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import ServicesShowcase from '../components/ServicesShowcase';
import ServicesDetailSection from '../components/ServicesDetailSection';
import TechStackSection from '../components/TechStackSection';

export default function ServicesPage() {
  return (
    <>
      <SEO
        title="Services | IoT Platforms, Portals, and AI Automation"
        description="Explore Meghamsys services across IoT platform engineering, digital operations portals, and AI automation programs."
        url="https://www.meghamsys.com/services"
        type="article"
      />
      <ServicesShowcase />
      <div className="section__footnote" style={{ textAlign: 'center', marginTop: '2rem' }}>
        Looking for proof in action? Explore our <Link to="/work">case studies</Link> to see these programs in the wild.
      </div>
      <ServicesDetailSection />
      <TechStackSection />
    </>
  );
}
