import React from 'react';
import { Github, Mail } from 'lucide-react';
import { useTranslation } from '../i18n';
import BrandMark from './BrandMark';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const products = [
    { label: t('products.waxball.title'), href: '/waxball' },
    { label: t('products.quickTranslate.title'), href: '/quick-translate' },
  ];
  const companyLinks = [
    { label: t('nav.about'), href: '/#philosophy' },
    { label: t('footer.productsAndWork'), href: '/#showcase' },
    { label: t('nav.services'), href: '/#services' },
    { label: t('nav.contact'), href: 'mailto:help@akra.kr' },
  ];

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <a href="/" className="inline-flex items-center gap-2 mb-6" aria-label={t('footer.homeAria')}>
              <BrandMark className="h-12 w-auto" />
            </a>
            <p className="max-w-md text-zinc-500 text-sm leading-relaxed">{t('footer.description')}</p>
            <p className="mt-5 text-zinc-600 text-xs">
              {t('footer.copyright', { year: new Date().getFullYear() })}
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 font-serif tracking-wide">{t('footer.productsHeading')}</h4>
            <ul className="space-y-4">
              {products.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-zinc-500 hover:text-white transition-colors text-sm hover:underline decoration-zinc-700 underline-offset-4">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 font-serif tracking-wide">{t('footer.companyHeading')}</h4>
            <ul className="space-y-4">
              {companyLinks.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-zinc-500 hover:text-white transition-colors text-sm hover:underline decoration-zinc-700 underline-offset-4">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-xs text-zinc-600">
          <div className="flex flex-wrap gap-5">
            <a href="https://waxball.akra.kr/privacy/" target="_blank" rel="noreferrer" className="hover:text-zinc-300 transition-colors">{t('footer.waxballPrivacy')}</a>
            <a href="https://waxball.akra.kr/terms/" target="_blank" rel="noreferrer" className="hover:text-zinc-300 transition-colors">{t('footer.waxballTerms')}</a>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/akra-devs"
              target="_blank"
              rel="noreferrer"
              aria-label={t('footer.githubAria')}
              className="grid w-11 h-11 place-items-center rounded-full bg-zinc-900 text-zinc-400 hover:bg-white hover:text-black transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <Github size={18} />
            </a>
            <a
              href="mailto:help@akra.kr"
              aria-label={t('footer.emailAria')}
              className="grid w-11 h-11 place-items-center rounded-full bg-zinc-900 text-zinc-400 hover:bg-white hover:text-black transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <Mail size={18} />
            </a>
            <a href="mailto:help@akra.kr" className="ml-1 text-zinc-400 hover:text-white transition-colors">
              help@akra.kr
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
