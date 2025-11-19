import SEO from '../components/SEO';
import CaseStudiesSection from '../components/CaseStudiesSection';

export default function WorkPage() {
  return (
    <>
      <SEO
        title="Case Studies | Meghamsys Connected Operations"
        description="Review Meghamsys case studies that highlight IoT, automation, and AI copilots delivering measurable outcomes."
        url="https://www.meghamsys.com/work"
        type="article"
      />
      <CaseStudiesSection />
    </>
  );
}
