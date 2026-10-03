import React, { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useTranslation } from '../i18n';
import BrandMark from './BrandMark';
import { navigationProducts } from '../data/products';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const { locale, localeOptions, setLocale, t } = useTranslation();
  const navLinks = [
    { name: t('nav.products'), href: '/#showcase' },
    { name: t('nav.about'), href: '/#philosophy' },
    ...navigationProducts.map((product) => ({ name: t(product.titleKey), href: product.href })),
    { name: t('nav.services'), href: '/#services' },
  ];

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        menuButton.current?.focus();
      }
    };
    const desktop = window.matchMedia('(min-width: 1024px)');
    const closeOnDesktop = () => { if (desktop.matches) setIsOpen(false); };
    window.addEventListener('keydown', handleKey);
    desktop.addEventListener('change', closeOnDesktop);
    return () => {
      window.removeEventListener('keydown', handleKey);
      desktop.removeEventListener('change', closeOnDesktop);
    };
  }, [isOpen]);

  const languagePicker = () => (
    <label className="shell-language">
      <span className="sr-only">{t('language.select')}</span>
      <select value={locale} aria-label={t('language.select')} onChange={(event) => {
        const next = localeOptions.find((option) => option.code === event.target.value);
        if (next) setLocale(next.code);
      }}>
        {localeOptions.map((option) => <option key={option.code} value={option.code}>{option.label}</option>)}
      </select>
    </label>
  );

  return (
    <>
      <a className="shell-skip-link" href="#main-content">{t('nav.skip')}</a>
      <header className="shell-header">
        <nav className="shell-nav" aria-label={t('footer.companyHeading')}>
          <a href="/" className="shell-brand" aria-label="Akra Dev" onClick={() => setIsOpen(false)}>
            <BrandMark className="h-9 w-auto" />
          </a>
          <div className="shell-desktop-links">
            {navLinks.map((link) => <a key={link.href} href={link.href}>{link.name}</a>)}
          </div>
          <div className="shell-nav-actions">
            {languagePicker()}
            <a className="shell-contact-link" href="mailto:help@akra.kr">{t('nav.contact')}</a>
            <button ref={menuButton} type="button" className="shell-menu-button"
              onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? t('nav.menuClose') : t('nav.menuOpen')}
              aria-expanded={isOpen} aria-controls="mobile-navigation">
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
          {isOpen && (
            <div id="mobile-navigation" className="shell-mobile-links">
              {navLinks.map((link) => <a key={link.href} href={link.href} onClick={() => setIsOpen(false)}>{link.name}</a>)}
              <a href="mailto:help@akra.kr" onClick={() => setIsOpen(false)}>{t('nav.contact')}</a>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Navbar;
