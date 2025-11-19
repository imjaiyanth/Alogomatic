import { useCallback, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import logoSrc from '../assets/meghamsys-logo.svg';
import PillNav, { PillNavItem } from './PillNav';

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = useMemo<PillNavItem[]>(
    () => [
      { label: 'Home', href: '/' },
      { label: 'About Us', href: '/about' },
      { label: 'Services', href: '/services' },
      { label: 'Solutions', href: '/solutions' },
      { label: 'Industries', href: '/industries' },
      { label: 'Case Studies', href: '/work' },
      { label: 'Contact Us', href: '/contact' }
    ],
    []
  );

  const handleActivate = useCallback(
    (href: string) => {
      if (href.startsWith('http://') || href.startsWith('https://') || href.startsWith('mailto:') || href.startsWith('tel:')) {
        window.location.href = href;
        return;
      }

      navigate(href);
    },
    [navigate]
  );

  return (
    <header className="header">
      <PillNav
        logo={logoSrc}
        logoAlt="Meghamsys"
        brandName="Meghamsys"
        items={navItems}
        activeHref={location.pathname}
        onItemActivate={handleActivate}
        initialLoadAnimation
      />
    </header>
  );
}
