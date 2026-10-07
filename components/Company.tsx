import React from 'react';
import { company, companyHistory, companyPath, homePath, publishedProducts } from '../data/company';
import { useTranslation } from '../i18n';

const CompanyFacts: React.FC = () => {
  const { locale, t } = useTranslation();
  const facts = [
    [t('company.legalName'), locale === 'ko' ? company.legalName : `${company.englishName} (${company.legalName})`],
    [t('company.representative'), locale === 'ko' ? company.representative : company.representativeEnglish || company.representative],
    [t('company.registration'), company.registrationNumber],
    [t('company.duns'), company.dunsNumber],
    [t('company.opening'), company.openingDate],
    [t('company.registrationDate'), company.registrationDate],
    [t('company.businessType'), t('company.businessTypeValue')],
    [t('company.businessItem'), t('company.businessItemValue')],
    [t('company.address'), locale === 'ko' ? company.address : company.addressEnglish],
  ];
  return <dl className="company-facts">
    {facts.filter(([, value]) => value).map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
    <div><dt>{t('company.email')}</dt><dd><a href={`mailto:${company.email}`}>{company.email}</a></dd></div>
  </dl>;
};

export const CompanySummary: React.FC = () => {
  const { locale, t } = useTranslation();
  return <section id="company" className="home-section company-summary" aria-labelledby="company-summary-title">
    <div className="home-container company-overview">
      <div>
        <h2 id="company-summary-title" className="home-heading">{t('company.title')}</h2>
        <p className="company-intro">{t('company.intro')}</p>
        <a className="home-button home-button-secondary" href={companyPath(locale)}>{t('company.more')}<span aria-hidden="true">↗</span></a>
      </div>
      <CompanyFacts />
    </div>
  </section>;
};

const CompanyPage: React.FC = () => {
  const { locale, localeOptions, t } = useTranslation();
  return <article className="home-page company-page">
    <div className="home-container">
      <header className="company-header">
        <nav className="company-language-links" aria-label={t('language.select')}>
          {localeOptions.map((option) => <a key={option.code} href={companyPath(option.code)} lang={option.code} hrefLang={option.code} aria-current={locale === option.code ? 'page' : undefined}>{option.label}</a>)}
        </nav>
        <p className="company-brand">{company.brand} / {t('company.nav')}</p>
        <h1>{t('company.subtitle')}</h1>
        <p className="company-intro">{t('company.intro')}</p>
      </header>
      <section className="company-section company-overview" aria-labelledby="business-details">
        <div><h2 id="business-details">{t('company.facts')}</h2><p>{company.englishName}<br /><span lang="ko">{company.legalName}</span></p></div>
        <CompanyFacts />
      </section>
      <section className="company-section" aria-labelledby="operated-products">
        <h2 id="operated-products">{t('company.products')}</h2>
        <p className="company-section-intro">{t('company.productsIntro')}</p>
        <div className="company-products">
          {publishedProducts.map((product) => <article key={product.id} className="company-product">
            <div><h3>{product.name}</h3><p>{t(`company.${product.id}`)}</p></div>
            <div className="company-link-row">
              <a href={product.page}>{t('company.productLink')}</a>
              <a href={product.store}>{t('company.storeLink')} ↗</a>
              <a href={product.support}>{t('company.supportLink')}</a>
            </div>
          </article>)}
        </div>
      </section>
      <section className="company-section company-overview" aria-labelledby="company-history">
        <div><h2 id="company-history">{t('company.history')}</h2><p className="company-section-intro">{t('company.historyNote')}</p></div>
        <ol className="company-history">
          {company.openingDate && <li><time dateTime={company.openingDate}>{company.openingDate}</time><span>{t('company.history.opening')}</span></li>}
          <li><time dateTime={company.registrationDate}>{company.registrationDate}</time><span>{t('company.history.registration')}</span></li>
          {companyHistory.map((event) => <li key={event.key}><time dateTime={event.date}>{event.date}</time><a href={event.href}>{t(`company.history.${event.key}`)}</a></li>)}
        </ol>
      </section>
      <section className="company-section company-overview" aria-labelledby="company-operation">
        <div><h2 id="company-operation">{t('company.operating')}</h2><p className="company-section-intro">{t('company.operatingBody')}</p></div>
        <div><h3>{t('company.publicLinks')}</h3><div className="company-link-row"><a href={company.github}>{t('company.github')} ↗</a><a href={company.developerUrl}>{t('company.developer')} ↗</a></div><p>{t('company.contactBody')}</p><a className="home-button home-button-primary" href={`mailto:${company.email}`}>{company.email}</a></div>
      </section>
      <a className="company-return" href={`${homePath(locale)}#showcase`}>← {t('footer.productsAndWork')}</a>
    </div>
  </article>;
};

export default CompanyPage;
