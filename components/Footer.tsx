import React from 'react';
import { Github, Mail } from 'lucide-react';
import { useTranslation } from '../i18n';
import BrandMark from './BrandMark';
import { footerProducts } from '../data/products';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const companyLinks = [
    { label: t('nav.about'), href: '/#philosophy' },
    { label: t('footer.productsAndWork'), href: '/#showcase' },
    { label: t('nav.services'), href: '/#services' },
    { label: t('footer.mcp'), href: '/mcp/' },
    { label: t('nav.contact'), href: 'mailto:help@akra.kr' },
  ];

  return (
    <footer className="shell-footer">
      <div className="home-container">
        <div className="footer-layout">
          <div className="footer-brand">
            <a href="/" className="shell-brand" aria-label={t('footer.homeAria')}><BrandMark className="h-10 w-auto" /></a>
            <p>{t('footer.description')}</p>
            <p className="footer-copyright">{t('footer.copyright', { year: new Date().getFullYear() })}</p>
          </div>
          <div>
            <h2>{t('footer.productsHeading')}</h2>
            <ul>{footerProducts.map((product) => <li key={product.id}><a href={product.href}>{t(product.titleKey)}</a></li>)}</ul>
          </div>
          <div>
            <h2>{t('footer.companyHeading')}</h2>
            <ul>{companyLinks.map((item) => <li key={item.href}><a href={item.href}>{item.label}</a></li>)}</ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-policy-links">
            <a href="https://waxball.akra.kr/privacy/" target="_blank" rel="noreferrer">{t('footer.waxballPrivacy')}</a>
            <a href="https://waxball.akra.kr/terms/" target="_blank" rel="noreferrer">{t('footer.waxballTerms')}</a>
          </div>
          <div className="footer-social-links">
            <a href="https://github.com/akra-devs" target="_blank" rel="noreferrer" aria-label={t('footer.githubAria')}><Github size={18} /></a>
            <a href="mailto:help@akra.kr" aria-label={t('footer.emailAria')}><Mail size={18} /></a>
            <a href="mailto:help@akra.kr">help@akra.kr</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
