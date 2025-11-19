import SEO from '../components/SEO';
import AboutUsSection from '../components/AboutUsSection';

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About Meghamsys | Connected Product Studio"
        description="Meet the team that designs and ships IoT platforms, digital operations portals, and AI copilots that operators trust."
        url="https://www.meghamsys.com/about"
        type="article"
      />
      <AboutUsSection />
    </>
  );
}
