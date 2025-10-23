import { lazy, Suspense } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SEO, { StructuredData } from './components/SEO';

// Lazy load sections below the fold
const AboutSection = lazy(() => import('./components/AboutSection'));
const ServicesSection = lazy(() => import('./components/ServicesSection'));
const ApproachSection = lazy(() => import('./components/ApproachSection'));
const CaseStudiesSection = lazy(() => import('./components/CaseStudiesSection'));
const TechStackSection = lazy(() => import('./components/TechStackSection'));
const ContactSection = lazy(() => import('./components/ContactSection'));
const Footer = lazy(() => import('./components/Footer'));

// Loading component
function SectionLoader() {
  return (
    <div style={{
      minHeight: '400px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--fg-muted)'
    }}>
      <div className="loader">Loading...</div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <SEO />
      <StructuredData />
      <div className="app-shell">
        <Header />
        <main>
          <Hero />
          <Suspense fallback={<SectionLoader />}>
            <AboutSection />
            <ServicesSection />
            <ApproachSection />
            <CaseStudiesSection />
            <TechStackSection />
            <ContactSection />
          </Suspense>
        </main>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>
    </>
  );
}
