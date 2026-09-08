import React, { useEffect, useState } from 'react';
import { ArrowDown, ArrowLeft, ArrowUpRight } from 'lucide-react';
import { setPageMetadata, useTranslation } from '../i18n';
import './StillstampPage.css';

const asset = (name: string) => `/stillstamp/${name}.webp`;
const responsive = (name: string) => `${asset(`${name}-640`)} 640w, ${asset(`${name}-960`)} 960w, ${asset(name)} 1448w`;
const screens = ['layout', 'message', 'result'] as const;

export default function StillstampPage() {
  const { t, locale } = useTranslation();
  const [layout, setLayout] = useState<'composite' | 'postcard'>('composite');
  const mediaLocale = locale === 'ko' ? 'ko' : 'en';
  const sunset = `sunset-${layout}-${mediaLocale}`;

  useEffect(() => {
    setPageMetadata(t('seo.stillstamp.title'), t('seo.stillstamp.description'));
  }, [t]);

  return (
    <article className="stillstamp-page">
      <section className="ss-hero ss-container" aria-labelledby="stillstamp-title">
        <a className="ss-back" href="/#showcase"><ArrowLeft size={16} aria-hidden="true" />{t('ss.back')}</a>
        <div className="ss-hero-grid">
          <div className="ss-hero-copy">
            <p className="ss-brand">stillstamp.</p>
            <h1 id="stillstamp-title">{t('ss.statement')}</h1>
            <p className="ss-intro">{t('ss.intro')}</p>
            <a className="ss-button ss-primary" href="#postcards">{t('ss.explore')}<ArrowDown size={18} aria-hidden="true" /></a>
            <p className="ss-status">{t('ss.status')}</p>
          </div>
          <figure className="ss-hero-art">
            <img src={asset('flowers-note')} srcSet={responsive('flowers-note')} sizes="(max-width: 900px) calc(100vw - 32px), 62vw" width={1448} height={1086} fetchPriority="high" alt={t('ss.heroAlt')} />
            <figcaption><span>{t('ss.flowerNote')}</span><span>{t('ss.styleExample')}</span></figcaption>
          </figure>
        </div>
      </section>

      <section className="ss-section ss-container" id="postcards" aria-labelledby="ss-story-title">
        <div className="ss-section-head">
          <h2 id="ss-story-title">{t('ss.storyTitle')}</h2>
          <p>{t('ss.storyBody')}</p>
        </div>
        <div className="ss-layout-toolbar">
          <div className="ss-selector" role="group" aria-label={t('ss.compareLabel')}>
            <button type="button" aria-pressed={layout === 'composite'} aria-controls="ss-layout-preview" onClick={() => setLayout('composite')}>{t('ss.composite')}</button>
            <button type="button" aria-pressed={layout === 'postcard'} aria-controls="ss-layout-preview" onClick={() => setLayout('postcard')}>{t('ss.postcardOnly')}</button>
          </div>
          <span className="ss-format">4:3 · PNG</span>
        </div>
        <figure className="ss-layout-figure">
          <div className="ss-media" id="ss-layout-preview" aria-live="polite">
            <img key={sunset} src={asset(sunset)} srcSet={responsive(sunset)} sizes="(max-width: 900px) calc(100vw - 32px), min(100vw - 48px, 1120px)" width={1448} height={1086} loading="lazy" alt={t(layout === 'composite' ? 'ss.sunsetCompositeAlt' : 'ss.sunsetPostcardAlt')} />
          </div>
          <figcaption><span>{t(layout === 'composite' ? 'ss.compositeNote' : 'ss.postcardNote')}</span><span>{t('ss.previewNote')}</span></figcaption>
        </figure>
      </section>

      <section className="ss-section ss-cat" aria-labelledby="ss-cat-title">
        <div className="ss-container ss-cat-grid">
          <div className="ss-cat-copy">
            <h2 id="ss-cat-title">{t('ss.catTitle')}</h2>
            <p>{t('ss.catBody')}</p>
            <figure className="ss-source-window">
              <div><img src={asset('cat-note-640')} width={640} height={480} loading="lazy" alt={t('ss.catPhotoAlt')} /></div>
              <figcaption>{t('ss.catSource')}</figcaption>
            </figure>
          </div>
          <figure className="ss-cat-card">
            <img src={asset(`cat-postcard-${mediaLocale}`)} srcSet={responsive(`cat-postcard-${mediaLocale}`)} sizes="(max-width: 900px) calc(100vw - 32px), 60vw" width={1448} height={1086} loading="lazy" alt={t('ss.catPostcardAlt')} />
            <figcaption>{t('ss.previewNote')}</figcaption>
          </figure>
        </div>
      </section>

      <section className="ss-section ss-container" id="how-it-works" aria-labelledby="ss-screens-title">
        <div className="ss-section-head">
          <h2 id="ss-screens-title">{t('ss.screensTitle')}</h2>
          <p>{t('ss.screensBody')}</p>
        </div>
        <ol className="ss-screens">
          {screens.map((screen, index) => (
            <li key={screen}>
              <div className="ss-step"><span>0{index + 1}</span><div><h3>{t(`ss.${screen}Title`)}</h3><p>{t(`ss.${screen}Body`)}</p></div></div>
              <img src={asset(`screen-${screen}-${mediaLocale}`)} width={540} height={960} loading="lazy" alt={t(`ss.screen${screen === 'layout' ? 'Layout' : screen === 'message' ? 'Message' : 'Result'}`)} />
            </li>
          ))}
        </ol>
        <p className="ss-evidence-note">{t('ss.screensNote')}</p>
        <div className="ss-save-note"><span>1600 × 1200</span><p>{t('ss.saveNote')}</p></div>
      </section>

      <section className="ss-section ss-container ss-faq" aria-labelledby="ss-faq-title">
        <h2 id="ss-faq-title">{t('ss.faqTitle')}</h2>
        <div>{([1, 2, 3] as const).map(n => (
          <details key={n}><summary>{t(`ss.faq${n}Q`)}</summary><p>{t(`ss.faq${n}A`)}</p></details>
        ))}</div>
      </section>

      <section className="ss-section ss-final ss-container" aria-labelledby="ss-final-title">
        <p className="ss-brand">stillstamp.</p>
        <h2 id="ss-final-title">{t('ss.finalTitle')}</h2>
        <p>{t('ss.finalBody')}</p>
        <div className="ss-actions">
          <a className="ss-button ss-primary" href="#postcards">{t('ss.explore')}<ArrowUpRight size={18} aria-hidden="true" /></a>
          <a className="ss-button ss-secondary" href="mailto:help@akra.kr?subject=Stillstamp">{t('ss.contact')}</a>
        </div>
        <p className="ss-status">{t('ss.status')}</p>
      </section>
    </article>
  );
}
