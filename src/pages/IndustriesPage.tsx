import SEO from '../components/SEO';
import IndustriesSection from '../components/IndustriesSection';

export default function IndustriesPage() {
  return (
    <>
      <SEO
        title="Industries We Serve | Meghamsys"
        description="See how Meghamsys supports manufacturing, healthcare, logistics, retail, and professional services with connected operations."
        url="https://www.meghamsys.com/industries"
        type="article"
      />
      <IndustriesSection />
    </>
  );
}
