import React, { useEffect, useState } from 'react';
import { ArrowDown, ArrowLeft, ArrowUpRight } from 'lucide-react';
import { setPageMetadata, useTranslation } from '../i18n';
import './KeyDdalPage.css';

export default function KeyDdalPage() {
  const { t, locale } = useTranslation();
  const [screen, setScreen] = useState<'tap' | 'type'>('tap');
  const policyLocale = locale === 'ko' ? 'ko' : 'en';
  const policy = (kind: string) => `https://akra.kr/akra-config-pages/apps/key-ddal/${kind}/${policyLocale}/`;

  useEffect(() => {
    setPageMetadata(t('seo.keyDdal.title'), t('seo.keyDdal.description'));
  }, [t]);

  return (
    <article className="key-ddal-page">
      <section className="kd-hero kd-container" aria-labelledby="kd-title">
        <a className="kd-back" href="/#showcase"><ArrowLeft size={16} aria-hidden="true" />{t('kd.back')}</a>
        <div className="kd-hero-grid">
          <div className="kd-copy">
            <p className="kd-wordmark">Key Ddal<span aria-hidden="true">.</span></p>
            <h1 id="kd-title">{t('kd.statement')}</h1>
            <p className="kd-intro">{t('kd.intro')}</p>
            <div className="kd-actions">
              <a className="kd-button kd-primary" href="#kd-screens">{t('kd.explore')}<ArrowDown size={18} aria-hidden="true" /></a>
              <a className="kd-button" href="#kd-release">{t('kd.releaseLink')}</a>
            </div>
            <p className="kd-status">{t('kd.status')}</p>
          </div>
          <figure className="kd-art">
            <img src="/key-ddal/hero.webp" width={900} height={900} fetchPriority="high" alt={t('kd.heroAlt')} />
            <figcaption>{t('kd.artCaption')}</figcaption>
          </figure>
        </div>
      </section>

      <section className="kd-section kd-container kd-screens" id="kd-screens" aria-labelledby="kd-screens-title">
        <div className="kd-screen-copy">
          <h2 id="kd-screens-title">{t('kd.screensTitle')}</h2>
          <p>{t('kd.screensBody')}</p>
          <div className="kd-selector" role="group" aria-label={t('kd.screenLabel')}>
            {(['tap', 'type'] as const).map((choice, index) => (
              <button key={choice} type="button" aria-pressed={screen === choice} aria-controls="kd-screen" onClick={() => setScreen(choice)}>
                <span aria-hidden="true">0{index + 1}</span>{t(`kd.${choice}`)}<ArrowUpRight size={18} aria-hidden="true" />
              </button>
            ))}
          </div>
          <p className="kd-note">{t('kd.captureNote')}</p>
        </div>
        <figure className="kd-phone" id="kd-screen" aria-live="polite">
          <img src={`/key-ddal/${screen === 'tap' ? 'tap-lab' : 'typing'}.webp`} width={432} height={768} loading="lazy" alt={t(screen === 'tap' ? 'kd.tapAlt' : 'kd.typeAlt')} />
          <figcaption>{t(`kd.${screen}`)}</figcaption>
        </figure>
      </section>

      <section className="kd-section kd-container kd-how" aria-labelledby="kd-steps-title">
        <h2 id="kd-steps-title">{t('kd.stepsTitle')}</h2>
        <ol className="kd-steps">
          {([1, 2, 3] as const).map(step => (
            <li className="kd-step" key={step}>
              <span aria-hidden="true">0{step}</span>
              <div><h3>{t(`kd.step${step}Title`)}</h3><p>{t(`kd.step${step}Body`)}</p></div>
            </li>
          ))}
        </ol>
      </section>

      <section className="kd-section kd-container kd-release" id="kd-release" aria-labelledby="kd-release-title">
        <div>
          <p className="kd-status">{t('kd.preview')}</p>
          <h2 id="kd-release-title">{t('kd.releaseTitle')}</h2>
          <p>{t('kd.releaseBody')}</p>
          <div className="kd-actions">
            <a className="kd-button kd-primary" href={policy('support')}>{t('kd.support')}<ArrowUpRight size={18} aria-hidden="true" /></a>
          </div>
          <div className="kd-policy-links">
            <a href={policy('privacy')}>{t('kd.privacy')}</a>
            <a href={policy('terms')}>{t('kd.terms')}</a>
          </div>
        </div>
        <div className="kd-faq">
          <details><summary>{t('kd.faq1')}</summary><p>{t('kd.answer1')}</p></details>
          <details><summary>{t('kd.faq2')}</summary><p>{t('kd.answer2')}</p></details>
        </div>
      </section>
    </article>
  );
}
