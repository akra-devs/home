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

const getInitialLocale = (): Locale => {
  if (typeof window === 'undefined') return 'ko';

  const saved = window.localStorage.getItem(LOCALE_STORAGE_KEY);
  return localeOptions.some((option) => option.code === saved) ? (saved as Locale) : 'ko';
};

export const I18nProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale);

  const setLocale = useCallback((nextLocale: Locale) => {
    if (localeOptions.some((option) => option.code === nextLocale)) {
      setLocaleState(nextLocale);
    }
  }, []);

  const t = useCallback(
    (key: TranslationKey, values?: TranslationValues) => translate(locale, key, values),
    [locale],
  );

  useEffect(() => {
    document.documentElement.lang = htmlLanguageByLocale[locale];
    window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
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
