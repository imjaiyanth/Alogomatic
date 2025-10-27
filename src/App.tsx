import Header from './components/Header';
import Hero from './components/Hero';
import ServicesShowcase from './components/ServicesShowcase';
import AboutUsSection from './components/AboutUsSection';
import ServicesDetailSection from './components/ServicesDetailSection';
import SolutionsSection from './components/SolutionsSection';
import ImpactStoriesSection from './components/ImpactStoriesSection';
import IndustriesSection from './components/IndustriesSection';
import TechStackSection from './components/TechStackSection';
import FAQSection from './components/FAQSection';
import InsightsPreviewSection from './components/InsightsPreviewSection';
import AccessibilityStatement from './components/AccessibilityStatement';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import SEO, { StructuredData } from './components/SEO';

export default function App() {
  return (
    <>
      <SEO />
      <StructuredData />
      <a href="#main-content" className="sr-only skip-link">
        Skip to main content
      </a>
      <div className="app-shell">
        <Header />
        <main id="main-content">
          <Hero />
          <ServicesShowcase />
          <AboutUsSection />
          <ServicesDetailSection />
          <SolutionsSection />
          <ImpactStoriesSection />
          <IndustriesSection />
          <TechStackSection />
          <FAQSection />
          <InsightsPreviewSection />
          <AccessibilityStatement />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
