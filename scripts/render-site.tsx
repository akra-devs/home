import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../App';
import { I18nProvider } from '../i18n';
import { translate, type Locale } from '../i18n/messages';
export { company, companyPath, homePath, organizationSchema } from '../data/company';

export function renderSite(pathname: string, locale: Locale) {
  const isCompany = pathname.includes('/company');
  return {
    body: renderToString(<I18nProvider initialLocale={locale}><App pathname={pathname} /></I18nProvider>),
    title: isCompany ? `${translate(locale, 'company.nav')} | Akra Dev` : translate(locale, 'seo.home.title'),
    description: translate(locale, isCompany ? 'company.description' : 'seo.home.description'),
  };
}
