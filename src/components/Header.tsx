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
          { label: 'About Us', href: '#about' },
          { label: 'Services', href: '#services' },
          { label: 'Solutions', href: '#solutions' },
          { label: 'Industries', href: '#industries' },
          { label: 'Contact Us', href: '#contact' }
        ]}
        activeHref={activeHref}
        onItemActivate={setActiveHref}
        initialLoadAnimation
      />
    </header>
  );
}
