import React, { useEffect, useState } from 'react';
import { ArrowDown, ArrowLeft, ArrowUpRight } from 'lucide-react';
import { setPageMetadata, useTranslation } from '../i18n';
import type { TranslationKey } from '../i18n/messages';
import './StillstampPage.css';

const asset = (name: string) => `/stillstamp/${name}.webp`;
const features = ['photo', 'words', 'keep'] as const;
const steps = [1, 2, 3, 4] as const;
const screens: { name: string; caption: TranslationKey }[] = [
  { name: 'screen-layout', caption: 'ss.screenLayout' },
  { name: 'screen-adjust', caption: 'ss.screenAdjust' },
  { name: 'screen-result', caption: 'ss.screenResult' },
];

export default function StillstampPage() {
  const { t } = useTranslation();
  const [showOriginal, setShowOriginal] = useState(false);

  useEffect(() => {
    setPageMetadata(t('seo.stillstamp.title'), t('seo.stillstamp.description'));
  }, [t]);

  return (
    <article className="stillstamp-page">
      <section className="ss-hero ss-container" aria-labelledby="stillstamp-title">
        <a className="ss-back" href="/#showcase"><ArrowLeft size={16} aria-hidden="true" />{t('ss.back')}</a>
        <div className="ss-hero-grid">
          <div className="ss-hero-copy">
            <p className="ss-brand">stillstamp<span aria-hidden="true">.</span></p>
            <h1 id="stillstamp-title">{t('ss.statement')}</h1>
            <p className="ss-intro">{t('ss.intro')}</p>
            <div className="ss-actions">
              <a className="ss-button ss-primary" href="#postcards">{t('ss.explore')}<ArrowDown size={18} aria-hidden="true" /></a>
              <a className="ss-button ss-secondary" href="#how-it-works">{t('ss.howLink')}</a>
            </div>
            <p className="ss-status"><span aria-hidden="true" />{t('ss.status')}</p>
          </div>
          <figure className="ss-hero-art">
            <img className="ss-hero-postcard" src={asset('postcard')} width={1200} height={900} fetchPriority="high" alt={t('ss.heroAlt')} />
            <div className="ss-source-note">
              <img src={asset('original-small')} width={180} height={135} alt={t('ss.photoAlt')} />
              <span>{t('ss.source')}<br /><small>01 — TONGYEONG</small></span>
            </div>
            <figcaption>{t('ss.heroCaption')}</figcaption>
          </figure>
        </div>
      </section>

      <section className="ss-section ss-container" id="postcards" aria-labelledby="ss-story-title">
        <div className="ss-section-head">
          <h2 id="ss-story-title">{t('ss.storyTitle')}</h2>
          <p>{t('ss.storyBody')}</p>
        </div>
        <div className="ss-comparison">
          <div className="ss-selector" role="group" aria-label={t('ss.compareLabel')}>
            <button type="button" aria-pressed={showOriginal} aria-controls="ss-comparison-image" onClick={() => setShowOriginal(true)}>{t('ss.original')}</button>
            <button type="button" aria-pressed={!showOriginal} aria-controls="ss-comparison-image" onClick={() => setShowOriginal(false)}>{t('ss.generated')}</button>
          </div>
          <figure>
            <div className="ss-media" id="ss-comparison-image" aria-live="polite">
              <img src={asset(showOriginal ? 'original' : 'postcard')} width={1200} height={900} loading="lazy" alt={t(showOriginal ? 'ss.photoAlt' : 'ss.heroAlt')} />
            </div>
            <figcaption>{t('ss.compareNote')}</figcaption>
          </figure>
        </div>
        <div className="ss-features">
          {features.map((feature, index) => (
            <div key={feature}>
              <span className="ss-number">0{index + 1}</span>
              <h3>{t(`ss.${feature}Title`)}</h3>
              <p>{t(`ss.${feature}Body`)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="ss-section ss-process" id="how-it-works" aria-labelledby="ss-steps-title">
        <div className="ss-container ss-process-grid">
          <div className="ss-section-head ss-stacked">
            <h2 id="ss-steps-title">{t('ss.stepsTitle')}</h2>
            <p>{t('ss.stepsIntro')}</p>
          </div>
          <ol className="ss-steps">
            {steps.map(step => (
              <li className="ss-step" key={step}>
                <span className="ss-number">0{step}</span>
                <div><h3>{t(`ss.step${step}Title`)}</h3><p>{t(`ss.step${step}Body`)}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="ss-section ss-container" aria-labelledby="ss-screens-title">
        <div className="ss-section-head">
          <h2 id="ss-screens-title">{t('ss.screensTitle')}</h2>
          <p>{t('ss.screensNote')}</p>
        </div>
        <div className="ss-screens">
          {screens.map(screen => (
            <figure key={screen.name}>
              <img src={asset(screen.name)} width={390} height={844} loading="lazy" alt={t(screen.caption)} />
              <figcaption>{t(screen.caption)}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="ss-section ss-container ss-faq" aria-labelledby="ss-faq-title">
        <h2 id="ss-faq-title">{t('ss.faqTitle')}</h2>
        <div>{([1, 2, 3] as const).map(n => (
          <details key={n}><summary>{t(`ss.faq${n}Q`)}</summary><p>{t(`ss.faq${n}A`)}</p></details>
        ))}</div>
      </section>

      <section className="ss-section ss-final ss-container" aria-labelledby="ss-final-title">
        <h2 id="ss-final-title">{t('ss.finalTitle')}</h2>
        <p>{t('ss.finalBody')}</p>
        <a className="ss-button ss-primary" href="mailto:help@akra.kr?subject=Stillstamp">{t('ss.contact')}<ArrowUpRight size={18} aria-hidden="true" /></a>
        <p className="ss-status"><span aria-hidden="true" />{t('ss.status')}</p>
      </section>
    </article>
  );
}
