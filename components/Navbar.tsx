import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useTranslation } from '../i18n';
import BrandMark from './BrandMark';
import { navigationProducts } from '../data/products';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { locale, localeOptions, setLocale, t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.about'), href: '/#philosophy' },
    { name: t('nav.products'), href: '/#showcase' },
    ...navigationProducts.map((product) => ({ name: t(product.titleKey), href: product.href })),
    { name: t('nav.services'), href: '/#services' },
  ];

  const languagePicker = (className = '') => (
    <label className={className}>
      <span className="sr-only">{t('language.select')}</span>
      <select
        value={locale}
        onChange={(event) => {
          const nextLocale = localeOptions.find((option) => option.code === event.target.value);
          if (nextLocale) setLocale(nextLocale.code);
        }}
        aria-label={t('language.select')}
        className="appearance-none bg-white/10 border border-white/15 rounded-full px-3 py-2 text-xs font-semibold tracking-wide text-white outline-none transition-colors hover:bg-white/20 focus-visible:ring-2 focus-visible:ring-white/70"
      >
        {localeOptions.map((option) => (
          <option key={option.code} value={option.code} className="bg-zinc-900 text-white">
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );

  return (
    <nav className={`fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-50 transition-all duration-300 rounded-full border ${scrolled ? 'bg-black/40 backdrop-blur-md border-white/10 py-3 shadow-lg shadow-black/20' : 'bg-transparent border-transparent py-4'}`}>
      <div className="px-6 flex justify-between items-center">
        <a
          href="/"
          className="grid min-h-11 min-w-11 shrink-0 place-items-center rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          aria-label="Akra Dev"
        >
          <BrandMark className="h-10 w-auto md:h-11" />
        </a>

        <div className="hidden md:flex items-center gap-4 lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-serif italic text-zinc-300 hover:text-white transition-colors tracking-wide"
            >
              {link.name}
            </a>
          ))}
          {languagePicker('shrink-0')}
          <a
            href="mailto:help@akra.kr"
            className="group flex items-center gap-2 px-6 py-2 bg-white text-black rounded-full text-xs font-bold uppercase tracking-wider hover:bg-zinc-200 transition-colors"
          >
            {t('nav.contact')}
          </a>
        </div>

        <button
          className="md:hidden grid min-w-11 min-h-11 place-items-center rounded-full text-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? t('nav.menuClose') : t('nav.menuOpen')}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isOpen && (
        <div id="mobile-navigation" className="absolute top-full left-0 mt-4 w-full bg-zinc-900/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:hidden flex flex-col gap-4 shadow-2xl overflow-hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-lg font-serif italic text-zinc-300 hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">{languagePicker()}</div>
          <a
            href="mailto:help@akra.kr"
            className="mt-2 w-full text-center py-3 bg-white text-black rounded-full text-sm font-bold uppercase tracking-wider"
          >
            {t('nav.contact')}
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
