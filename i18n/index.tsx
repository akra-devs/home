import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import {
  Locale,
  TranslationKey,
  TranslationValues,
  localeOptions,
  translate,
} from './messages';

const LOCALE_STORAGE_KEY = 'akra-locale';

const htmlLanguageByLocale: Record<Locale, string> = {
  ko: 'ko',
  en: 'en',
  ja: 'ja',
  zh: 'zh-CN',
};

interface TranslationContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: TranslationKey, values?: TranslationValues) => string;
  localeOptions: typeof localeOptions;
}

const TranslationContext = createContext<TranslationContextValue | null>(null);

const isLocale = (value: string | null): value is Locale =>
  localeOptions.some((option) => option.code === value);

export const resolveBrowserLocale = (browserLanguages: readonly string[]): Locale => {
  for (const browserLanguage of browserLanguages) {
    const languageCode = browserLanguage.toLowerCase().split('-')[0];
    if (isLocale(languageCode)) return languageCode;
  }

  return 'ko';
};

export const resolveInitialLocale = (
  savedLocale: string | null,
  browserLanguages: readonly string[],
): Locale => (isLocale(savedLocale) ? savedLocale : resolveBrowserLocale(browserLanguages));

const getInitialLocale = (): Locale => {
  if (typeof window === 'undefined') return 'ko';

  const routeLocale = window.location.pathname.match(/^\/(en|ja|zh)(?:\/|$)/)?.[1];
  if (routeLocale && isLocale(routeLocale)) return routeLocale;
  if (window.location.pathname === '/' || /^\/company\/?$/.test(window.location.pathname)) return 'ko';

  let saved: string | null = null;
  try { saved = window.localStorage.getItem(LOCALE_STORAGE_KEY); } catch { /* Storage is optional. */ }
  const browserLanguages = navigator.languages?.length
    ? navigator.languages
    : [navigator.language];

  return resolveInitialLocale(saved, browserLanguages);
};

export const I18nProvider: React.FC<React.PropsWithChildren<{ initialLocale?: Locale }>> = ({ children, initialLocale }) => {
  const [locale, setLocaleState] = useState<Locale>(() => initialLocale ?? getInitialLocale());

  const setLocale = useCallback((nextLocale: Locale) => {
    if (localeOptions.some((option) => option.code === nextLocale)) {
      const pagePath = window.location.pathname.replace(/^\/(en|ja|zh)(?=\/|$)/, '') || '/';
      if (/^\/(company\/?)?$/.test(pagePath)) {
        const prefix = nextLocale === 'ko' ? '' : `/${nextLocale}`;
        window.location.assign(`${prefix}${pagePath}${window.location.search}${window.location.hash}`);
        return;
      }
      setLocaleState(nextLocale);
    }
  }, []);

  const t = useCallback(
    (key: TranslationKey, values?: TranslationValues) => translate(locale, key, values),
    [locale],
  );

  useEffect(() => {
    document.documentElement.lang = htmlLanguageByLocale[locale];
    try { window.localStorage.setItem(LOCALE_STORAGE_KEY, locale); } catch { /* Storage is optional. */ }
  }, [locale]);

  const value = useMemo(
    () => ({ locale, setLocale, t, localeOptions }),
    [locale, setLocale, t],
  );

  return <TranslationContext.Provider value={value}>{children}</TranslationContext.Provider>;
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);

  if (!context) {
    throw new Error('useTranslation must be used within I18nProvider.');
  }

  return context;
};

export const setPageMetadata = (title: string, description: string) => {
  document.title = title;

  const updateMeta = (selector: string, content: string) => {
    const element = document.querySelector<HTMLMetaElement>(selector);
    if (element) element.content = content;
  };

  updateMeta('meta[name="description"]', description);
  updateMeta('meta[property="og:title"]', title);
  updateMeta('meta[property="og:description"]', description);
};
