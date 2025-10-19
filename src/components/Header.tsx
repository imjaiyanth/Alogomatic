import useActiveSection from '../hooks/useActiveSection';
import logoSrc from '../assets/meghamsys-logo.svg';
import PillNav from './PillNav';

export default function Header() {
  const { activeHref, setActiveHref } = useActiveSection();

  return (
    <header className="header">
      <PillNav
        logo={logoSrc}
        logoAlt="Meghamsys"
        brandName="Meghamsys"
        items={[
          { label: 'Home', href: '#home' },
          { label: 'About', href: '#about' },
          { label: 'Services', href: '#services' },
          { label: 'Approach', href: '#approach' },
          { label: 'Work', href: '#work' },
          { label: 'Tech', href: '#tech' },
          { label: 'Contact', href: '#contact' }
        ]}
        activeHref={activeHref}
        onItemActivate={setActiveHref}
        initialLoadAnimation
      />
    </header>
  );
}
