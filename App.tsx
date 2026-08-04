import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Services from './components/Services';
import Showcase from './components/Showcase';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import {
  QuickTranslatePage,
  QuickTranslatePrivacyPage,
  QuickTranslateSupportPage,
} from './components/QuickTranslatePages';
import WaxballPage from './components/WaxballPage';

const normalizePath = (path: string) => {
  if (path.length > 1 && path.endsWith('/')) {
    return path.slice(0, -1);
  }

  return path;
};

function App() {
  const path = normalizePath(window.location.pathname);
  const productRoutes: Record<string, React.ReactNode> = {
    '/waxball': <WaxballPage />,
    '/quick-translate': <QuickTranslatePage />,
    '/quick-translate/privacy': <QuickTranslatePrivacyPage />,
    '/quick-translate/support': <QuickTranslateSupportPage />,
  };

  const isProductRoute = path in productRoutes;

  useEffect(() => {
    if (!window.location.hash) return;

    const targetId = decodeURIComponent(window.location.hash.slice(1));
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
      {isProductRoute ? (
        <main>{productRoutes[path]}</main>
      ) : (
        <main>
          <Hero />
          <Philosophy />
          <Showcase />
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
