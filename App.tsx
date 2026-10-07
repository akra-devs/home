import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Services from './components/Services';
import Showcase from './components/Showcase';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CompanyPage, { CompanySummary } from './components/Company';
import {
  QuickTranslatePage,
  QuickTranslatePrivacyPage,
  QuickTranslateSupportPage,
} from './components/QuickTranslatePages';
import WaxballPage from './components/WaxballPage';
import StillstampPage from './components/StillstampPage';
import KeyDdalPage from './components/KeyDdalPage';
import { setPageMetadata, useTranslation } from './i18n';

const normalizePath = (path: string) => {
  if (path.length > 1 && path.endsWith('/')) {
    return path.slice(0, -1);
  }

  return path;
};

const productRoutes: Record<string, React.ReactNode> = {
  '/key-ddal': <KeyDdalPage />,
  '/stillstamp': <StillstampPage />,
  '/waxball': <WaxballPage />,
  '/quick-translate': <QuickTranslatePage />,
  '/quick-translate/privacy': <QuickTranslatePrivacyPage />,
  '/quick-translate/support': <QuickTranslateSupportPage />,
};

function App({ pathname = window.location.pathname }: { pathname?: string }) {
  const { t } = useTranslation();
  const path = normalizePath(pathname.replace(/^\/(en|ja|zh)(?=\/|$)/, '') || '/');
  const isCompanyRoute = path === '/company';

  const isProductRoute = path in productRoutes;

  useEffect(() => {
    if (isCompanyRoute) {
      setPageMetadata(`${t('company.nav')} | Akra Dev`, t('company.description'));
    } else if (!isProductRoute) {
      setPageMetadata(t('seo.home.title'), t('seo.home.description'));
    }
  }, [isProductRoute, isCompanyRoute, t]);

  useEffect(() => {
    if (!window.location.hash) return;

    let targetId: string;
    try { targetId = decodeURIComponent(window.location.hash.slice(1)); }
    catch { return; }
    let secondFrame = 0;
    const firstFrame = window.requestAnimationFrame(() => {
      secondFrame = window.requestAnimationFrame(() => {
        document.getElementById(targetId)?.scrollIntoView({ block: 'start' });
      });
    });

    return () => {
      window.cancelAnimationFrame(firstFrame);
      if (secondFrame) window.cancelAnimationFrame(secondFrame);
    };
  }, [path]);

  return (
    <div className="min-h-screen bg-zinc-950 text-white selection:bg-primary-500 selection:text-white">
      <Navbar />
      {isCompanyRoute ? (
        <main id="main-content" tabIndex={-1}><CompanyPage /></main>
      ) : isProductRoute ? (
        <main id="main-content" tabIndex={-1}>{productRoutes[path]}</main>
      ) : (
        <main id="main-content" className="home-page" tabIndex={-1}>
          <Hero />
          <CompanySummary />
          <Showcase />
          <Philosophy />
          <Services />
          <Process />
          <Contact />
        </main>
      )}
      <Footer />
    </div>
  );
}

export default App;
