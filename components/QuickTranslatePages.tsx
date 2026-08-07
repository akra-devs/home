import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  FileText,
  Keyboard,
  Languages,
  Mail,
  MousePointerClick,
  RotateCcw,
  Settings,
  ShieldCheck,
} from 'lucide-react';
import { quickTranslateProduct } from '../data/products';
import { setPageMetadata, useTranslation } from '../i18n';
import type { TranslationKey } from '../i18n/messages';

const product = quickTranslateProduct;
const release = product.release;

const featureDefinitions: Array<{
  icon: typeof Keyboard;
  titleKey: TranslationKey;
  descriptionKey: TranslationKey;
  requiresShortcuts?: boolean;
}> = [
  { icon: Keyboard, titleKey: 'quick.features.shortcut.title', descriptionKey: 'quick.features.shortcut.description', requiresShortcuts: true },
  { icon: Languages, titleKey: 'quick.features.languagePair.title', descriptionKey: 'quick.features.languagePair.description' },
  { icon: RotateCcw, titleKey: 'quick.features.restore.title', descriptionKey: 'quick.features.restore.description' },
  { icon: MousePointerClick, titleKey: 'quick.features.trigger.title', descriptionKey: 'quick.features.trigger.description' },
  { icon: Settings, titleKey: 'quick.features.status.title', descriptionKey: 'quick.features.status.description' },
  { icon: ShieldCheck, titleKey: 'quick.features.privacy.title', descriptionKey: 'quick.features.privacy.description' },
];

const screenshotDefinitions: Array<{ src: string; titleKey: TranslationKey }> = [
  { src: '/quick-translate/screenshot-1-popup-language-select.png', titleKey: 'quick.screens.language' },
  { src: '/quick-translate/screenshot-2-translation-restore-status.png', titleKey: 'quick.screens.restore' },
  { src: '/quick-translate/screenshot-3-options-shortcuts.png', titleKey: 'quick.screens.settings' },
];

interface DocumentTitleProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const DocumentTitle: React.FC<DocumentTitleProps> = ({ title, description, children }) => {
  useEffect(() => {
    setPageMetadata(title, description);
  }, [description, title]);

  return <>{children}</>;
};

const BackLink: React.FC = () => {
  const { t } = useTranslation();

  return (
    <a href="/#showcase" className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors">
      <ArrowLeft size={16} />
      {t('quick.back')}
    </a>
  );
};

export const QuickTranslatePage: React.FC = () => {
  const { t } = useTranslation();
  const browserRequirement = t(release.browserRequirementKey);
  const webStoreStatus = t(release.webStoreStatusKey);
  const features = featureDefinitions.map((feature) => ({
    ...feature,
    title: t(feature.titleKey),
    description: t(
      feature.descriptionKey,
      feature.requiresShortcuts
        ? { shortcut: release.shortcutLabel, macShortcut: release.macShortcutLabel }
        : undefined,
    ),
  }));
  const usageSteps = [
    t('quick.usage.step1', { browserRequirement }),
    t('quick.usage.step2'),
    t('quick.usage.step3', { shortcut: release.shortcutLabel, macShortcut: release.macShortcutLabel }),
    t('quick.usage.step4'),
  ];
  const limitations = [
    t('quick.limitations.chromeInternal'),
    t('quick.limitations.fileAccess'),
    t('quick.limitations.model'),
  ];

  return (
    <DocumentTitle title={t('seo.quick.title')} description={t('seo.quick.description')}>
      <div className="bg-zinc-950 overflow-hidden">
        <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.20),transparent_38%),radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_28%)] pointer-events-none" />
          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <BackLink />
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-12 items-center">
              <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                <div className="flex flex-wrap items-center gap-3 mb-8">
                  <img src="/quick-translate/icon-128.png" alt="" className="w-12 h-12 rounded-lg border border-white/10" />
                  <span className="px-3 py-1 rounded-md bg-white text-black text-xs font-bold tracking-wider">{product.highlightLabelKey && t(product.highlightLabelKey)}</span>
                  <span className="px-3 py-1 rounded-md border border-white/10 text-zinc-300 text-xs font-medium">v{release.version}</span>
                  <span className="px-3 py-1 rounded-md border border-blue-400/30 text-blue-200 text-xs font-medium">{browserRequirement}</span>
                </div>
                <h1 className="font-serif text-5xl md:text-7xl text-white leading-[1.05] mb-8">
                  {t('quick.hero.titleLead')}<span className="block text-blue-100">{t('quick.hero.titleEnd')}</span>
                </h1>
                <p className="text-lg md:text-xl text-zinc-300 leading-relaxed max-w-2xl mb-10">{t('quick.hero.description')}</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href={release.webStoreUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-white text-black rounded-lg font-bold hover:bg-zinc-200 transition-colors">
                    <ExternalLink size={18} />{t('quick.hero.installStore')}
                  </a>
                  <a href={release.supportUrl} className="inline-flex items-center justify-center gap-2 px-6 py-4 border border-white/15 text-white rounded-lg hover:bg-white/10 transition-colors">
                    {t('quick.hero.support')}<ArrowRight size={18} />
                  </a>
                </div>
                <p className="mt-5 max-w-xl text-sm leading-relaxed text-zinc-500">{t('quick.hero.status', { status: webStoreStatus })}</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="relative">
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-2xl shadow-blue-950/30 ring-1 ring-white/5">
                  <img src="/quick-translate/marquee-1400x560.png" alt={t('quick.hero.previewAlt')} className="w-full aspect-[5/2] object-cover" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              [t('quick.facts.browser'), 'Chrome MV3'],
              [t('quick.facts.shortcut'), release.shortcutLabel],
              [t('quick.facts.data'), t('quick.facts.dataValue')],
              [t('quick.facts.distribution'), webStoreStatus],
            ].map(([label, value]) => (
              <div key={label} className="border-l border-white/10 pl-5">
                <p className="text-xs font-semibold tracking-wider text-zinc-500 mb-2">{label}</p>
                <p className="text-white font-serif text-xl">{value}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-14">
              <span className="text-blue-300 text-sm tracking-wider font-bold">{t('quick.features.eyebrow')}</span>
              <h2 className="mt-4 text-3xl md:text-5xl font-serif text-white">{t('quick.features.title')}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.titleKey} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-colors hover:border-blue-300/30 hover:bg-white/[0.06]">
                    <div className="w-11 h-11 rounded-lg bg-white/10 text-blue-200 flex items-center justify-center mb-5"><Icon size={21} /></div>
                    <h3 className="text-white font-serif text-xl mb-3">{feature.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-24 bg-zinc-900/40 border-y border-white/10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between gap-6 mb-12">
              <div>
                <span className="text-blue-300 text-sm tracking-wider font-bold">{t('quick.screens.eyebrow')}</span>
                <h2 className="mt-4 text-3xl md:text-5xl font-serif text-white">{t('quick.screens.title')}</h2>
              </div>
              <p className="text-zinc-400 max-w-lg leading-relaxed">{t('quick.screens.description')}</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              {screenshotDefinitions.map((shot) => (
                <figure key={shot.src} className="rounded-2xl overflow-hidden border border-white/10 bg-zinc-950/70 shadow-lg shadow-black/20">
                  <img src={shot.src} alt={t(shot.titleKey)} className="w-full aspect-[16/10] object-cover" />
                  <figcaption className="px-4 py-3 text-sm text-zinc-400 border-t border-white/10">{t(shot.titleKey)}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <span className="text-blue-300 text-sm tracking-wider font-bold">{t('quick.usage.eyebrow')}</span>
              <h2 className="mt-4 text-3xl md:text-5xl font-serif text-white mb-8">{t('quick.usage.title')}</h2>
              <ol className="space-y-4">
                {usageSteps.map((step, index) => (
                  <li key={step} className="flex gap-4 text-zinc-300 leading-relaxed"><span className="w-8 h-8 shrink-0 rounded-lg bg-white text-black flex items-center justify-center text-sm font-bold">{index + 1}</span><span className="pt-1">{step}</span></li>
                ))}
              </ol>
            </div>
            <div>
              <span className="text-blue-300 text-sm tracking-wider font-bold">{t('quick.limitations.eyebrow')}</span>
              <h2 className="mt-4 text-3xl md:text-5xl font-serif text-white mb-8">{t('quick.limitations.title')}</h2>
              <div className="space-y-4">
                {limitations.map((item) => (
                  <div key={item} className="flex gap-4 rounded-lg border border-white/10 bg-white/[0.03] p-5"><AlertTriangle className="w-5 h-5 shrink-0 text-amber-300 mt-0.5" /><p className="text-zinc-400 leading-relaxed">{item}</p></div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-white to-blue-100 text-black">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1fr_auto] lg:items-center gap-8">
            <div>
              <p className="text-sm tracking-wider font-bold text-zinc-500 mb-3">{webStoreStatus}</p>
              <h2 className="text-3xl md:text-5xl font-serif">{t('quick.cta.title')}</h2>
              <p className="mt-4 max-w-2xl text-zinc-700 leading-relaxed">{t('quick.cta.description')}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href={release.webStoreUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-black text-white rounded-lg font-bold hover:bg-zinc-800 transition-colors">{t('quick.cta.install')}<ExternalLink size={18} /></a>
              <a href={release.privacyUrl} className="inline-flex items-center justify-center gap-2 px-6 py-4 border border-black/15 rounded-lg font-bold hover:bg-black/5 transition-colors">{t('quick.cta.privacy')}</a>
            </div>
          </div>
        </section>
      </div>
    </DocumentTitle>
  );
};

interface StaticPageProps {
  title: string;
  eyebrow: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  children: React.ReactNode;
}

const StaticPage: React.FC<StaticPageProps> = ({ title, eyebrow, description, seoTitle, seoDescription, children }) => (
  <DocumentTitle title={seoTitle} description={seoDescription}>
    <div className="bg-zinc-950 min-h-screen pt-36 md:pt-44 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <BackLink />
        <div className="mt-10 mb-12">
          <span className="text-blue-300 text-sm tracking-wider font-bold">{eyebrow}</span>
          <h1 className="mt-4 text-4xl md:text-6xl font-serif text-white leading-tight">{title}</h1>
          <p className="mt-6 text-lg text-zinc-400 leading-relaxed">{description}</p>
        </div>
        {children}
      </div>
    </div>
  </DocumentTitle>
);

export const QuickTranslatePrivacyPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <StaticPage
      title={t('quick.privacy.title')}
      eyebrow={t('quick.privacy.eyebrow')}
      description={t('quick.privacy.description')}
      seoTitle={t('seo.quickPrivacy.title')}
      seoDescription={t('seo.quickPrivacy.description')}
    >
      <div className="space-y-8">
        <section className="rounded-lg border border-white/10 bg-white/[0.03] p-6">
          <h2 className="flex items-center gap-2 text-xl font-serif text-white mb-4"><FileText size={20} />{t('quick.privacy.processedTitle')}</h2>
          <ul className="space-y-3 text-zinc-400 leading-relaxed"><li>{t('quick.privacy.processedOne')}</li><li>{t('quick.privacy.processedTwo')}</li></ul>
        </section>
        <section className="rounded-lg border border-white/10 bg-white/[0.03] p-6">
          <h2 className="flex items-center gap-2 text-xl font-serif text-white mb-4"><ShieldCheck size={20} />{t('quick.privacy.storageTitle')}</h2>
          <div className="space-y-4 text-zinc-400 leading-relaxed"><p>{t('quick.privacy.storageOne')}</p><p>{t('quick.privacy.storageTwo')}</p></div>
        </section>
        <section className="rounded-lg border border-white/10 bg-white/[0.03] p-6">
          <h2 className="flex items-center gap-2 text-xl font-serif text-white mb-4"><Mail size={20} />{t('quick.privacy.contactTitle')}</h2>
          <a href={`mailto:${release.contactEmail}`} className="text-blue-200 hover:text-white transition-colors">{release.contactEmail}</a>
        </section>
      </div>
    </StaticPage>
  );
};

export const QuickTranslateSupportPage: React.FC = () => {
  const { t } = useTranslation();
  const browserRequirement = t(release.browserRequirementKey);
  const installSteps = [t('quick.support.installStep1'), t('quick.support.installStep2'), t('quick.support.installStep3'), t('quick.support.installStep4')];
  const faqs = [
    { question: t('quick.faq.version.question'), answer: t('quick.faq.version.answer', { browserRequirement }) },
    { question: t('quick.faq.install.question'), answer: t('quick.faq.install.answer') },
    { question: t('quick.faq.shortcut.question'), answer: t('quick.faq.shortcut.answer') },
    { question: t('quick.faq.troubleshooting.question'), answer: t('quick.faq.troubleshooting.answer') },
  ];

  return (
    <StaticPage
      title={t('quick.support.title')}
      eyebrow={t('quick.support.eyebrow')}
      description={t('quick.support.description')}
      seoTitle={t('seo.quickSupport.title')}
      seoDescription={t('seo.quickSupport.description')}
    >
      <section className="rounded-lg border border-white/10 bg-white/[0.03] p-6 mb-8">
        <h2 className="flex items-center gap-2 text-xl font-serif text-white mb-4"><ExternalLink size={20} />{t('quick.support.installTitle')}</h2>
        <p className="text-zinc-400 leading-relaxed mb-5">{t('quick.support.installDescription')}</p>
        <ol className="space-y-3">
          {installSteps.map((step, index) => <li key={step} className="flex gap-3 text-zinc-300 leading-relaxed"><span className="w-7 h-7 shrink-0 rounded-md bg-white text-black flex items-center justify-center text-xs font-bold">{index + 1}</span><span>{step}</span></li>)}
        </ol>
      </section>
      <div className="rounded-lg border border-white/10 bg-white/[0.03] p-6 mb-8">
        <h2 className="flex items-center gap-2 text-xl font-serif text-white mb-4"><Mail size={20} />{t('quick.support.contactTitle')}</h2>
        <a href={`mailto:${release.contactEmail}`} className="text-blue-200 hover:text-white transition-colors">{release.contactEmail}</a>
        <p className="mt-4 text-zinc-500 text-sm">{t('quick.support.contactNote')}</p>
      </div>
      <div className="space-y-4">
        {faqs.map((faq) => (
          <section key={faq.question} className="rounded-lg border border-white/10 bg-white/[0.03] p-6">
            <h2 className="flex items-start gap-3 text-xl font-serif text-white mb-3"><CheckCircle2 className="w-5 h-5 shrink-0 text-blue-200 mt-1" />{faq.question}</h2>
            <p className="text-zinc-400 leading-relaxed">{faq.answer}</p>
          </section>
        ))}
      </div>
    </StaticPage>
  );
};
