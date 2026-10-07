import React from 'react';
import { Github, Mail } from 'lucide-react';
import { useTranslation } from '../i18n';
import BrandMark from './BrandMark';
import { footerProducts } from '../data/products';
import { company, companyPath, homePath } from '../data/company';

const Footer: React.FC = () => {
  const { locale, localeOptions, t } = useTranslation();
  const companyLinks = [
    { label: t('company.nav'), href: companyPath(locale) },
    { label: t('nav.about'), href: `${homePath(locale)}#philosophy` },
    { label: t('footer.productsAndWork'), href: `${homePath(locale)}#showcase` },
    { label: t('nav.services'), href: `${homePath(locale)}#services` },
    { label: t('footer.mcp'), href: '/mcp/' },
    { label: t('nav.contact'), href: 'mailto:help@akra.kr' },
  ];

  return (
    <footer className="shell-footer">
      <div className="home-container">
        <div className="footer-layout">
          <div className="footer-brand">
            <a href={homePath(locale)} className="shell-brand" aria-label={t('footer.homeAria')}><BrandMark className="h-10 w-auto" /></a>
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
        <div className="footer-business">
          <p>{locale === 'ko' ? company.legalName : `${company.englishName} (${company.legalName})`}{company.representative && ` · ${t('company.representative')}: ${locale === 'ko' ? company.representative : company.representativeEnglish || company.representative}`}</p>
          {company.registrationNumber && <p>{t('company.registration')}: {company.registrationNumber} · {t('company.opening')}: {company.openingDate}</p>}
          <p>{t('company.registrationDate')}: {company.registrationDate}</p>
          <p>{t('company.duns')}: {company.dunsNumber}</p>
          <p>{locale === 'ko' ? company.address : company.addressEnglish}</p>
          <p>{t('company.dunsTrademark')}</p>
          <a href={companyPath(locale)}>{t('company.more')}</a>
          <nav className="company-language-links" aria-label={t('language.select')}>
            {localeOptions.map((option) => <a key={option.code} href={homePath(option.code)} hrefLang={option.code} lang={option.code}>{option.label}</a>)}
          </nav>
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
