import type { Locale } from '../i18n/messages';

// Public identity: Google Play developer contact, checked 2026-10-07.
// Registration fields must be confirmed by the owner before publication.
export const company = {
  brand: 'Akra Dev',
  legalName: '아크라데브스튜디오',
  englishName: 'AkraDev Studio',
  representative: '',
  representativeEnglish: '',
  registrationNumber: '',
  openingDate: '',
  address: '서울특별시 마포구 서강로 121, 2층 205호 81호실 (노고산동, 맹그로브신촌), 04057',
  addressEnglish: 'Room 81, Unit 205, 2F, 121 Seogang-ro, Mapo-gu, Seoul 04057, Republic of Korea',
  email: 'help@akra.kr',
  url: 'https://akra.kr',
  github: 'https://github.com/akra-devs',
  developerUrl: 'https://play.google.com/store/apps/developer?id=AkraDev+Studio',
};

export const companyPath = (locale: Locale) => locale === 'ko' ? '/company/' : `/${locale}/company/`;
export const homePath = (locale: Locale) => locale === 'ko' ? '/' : `/${locale}/`;

export const publishedProducts = [
  { id: 'keyDdal', name: 'Key Ddal', page: '/key-ddal/', store: 'https://play.google.com/store/apps/details?id=kr.akra.keyddal', support: '/akra-config-pages/apps/key-ddal/support/ko/' },
  { id: 'callfilm', name: 'CallFilm', page: '/mp4-transition-pages/', store: 'https://play.google.com/store/apps/details?id=kr.akra.callfilm', support: '/mp4-transition-pages/support/' },
  { id: 'stillstamp', name: 'Stillstamp', page: '/stillstamp/', store: 'https://play.google.com/store/apps/details?id=kr.akra.stillstamp', support: '/stillstamp/support/' },
  { id: 'waxball', name: 'WAXBALL / Bubblelock', page: '/waxball/', store: 'https://play.google.com/store/apps/details?id=kr.akra.waxball', support: 'https://waxball.akra.kr/privacy/' },
] as const;

// Dates describe these public site records, not the apps' original launch dates.
export const companyHistory = [
  { date: '2026-06-20', key: 'translate', href: '/quick-translate/' },
  { date: '2026-08-05', key: 'waxball', href: '/waxball/' },
  { date: '2026-09-07', key: 'stillstamp', href: '/stillstamp/' },
  { date: '2026-09-20', key: 'keyDdal', href: '/key-ddal/' },
  { date: '2026-10-03', key: 'support', href: '/stillstamp/support/' },
] as const;

export const organizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${company.url}/#organization`,
  name: company.brand,
  legalName: company.legalName,
  alternateName: company.englishName,
  url: company.url,
  logo: `${company.url}/brand/akra-mark-square.svg`,
  email: company.email,
  ...(company.openingDate ? { foundingDate: company.openingDate } : {}),
  ...(company.registrationNumber ? { identifier: { '@type': 'PropertyValue', propertyID: 'KR Business Registration Number', value: company.registrationNumber } } : {}),
  // Representative does not imply founder, employee count, or corporate status.
  ...(company.representative ? { contactPoint: { '@type': 'ContactPoint', name: company.representativeEnglish || company.representative, contactType: 'Business inquiries', email: company.email, availableLanguage: ['Korean', 'English'] } } : {}),
  address: { '@type': 'PostalAddress', streetAddress: 'Room 81, Unit 205, 2F, 121 Seogang-ro', addressLocality: 'Mapo-gu', addressRegion: 'Seoul', postalCode: '04057', addressCountry: 'KR' },
  sameAs: [company.github, company.developerUrl],
});
