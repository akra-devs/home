import React, { CSSProperties, useEffect, useMemo, useState } from 'react';
import {
  ArrowDown,
  ArrowUpRight,
  ChevronRight,
  Gauge,
  Sparkles,
  Volume2,
} from 'lucide-react';
import type { TranslationKey } from '../i18n/messages';
import { setPageMetadata, useTranslation } from '../i18n';
import './WaxballPage.css';

const WEB_APP_URL = 'https://waxball.akra.kr/';
const GOOGLE_PLAY_URL =
  'https://play.google.com/store/apps/details?id=kr.akra.waxball';

const stages: Array<{ label: string; nameKey: TranslationKey; reveal: number }> = [
  { label: 'Surface', nameKey: 'waxball.stage.surface', reveal: 82 },
  { label: 'Fracture', nameKey: 'waxball.stage.fracture', reveal: 52 },
  { label: 'Core', nameKey: 'waxball.stage.core', reveal: 18 },
];

const materials: Array<{
  name: string;
  nameKey: TranslationKey;
  detailKey: TranslationKey;
  image: string;
  width: number;
  height: number;
  accent: string;
}> = [
  {
    name: 'Opal Bloom',
    nameKey: 'waxball.material.opal',
    detailKey: 'waxball.material.opalDetail',
    image: '/waxball/select-opal.webp',
    width: 480,
    height: 600,
    accent: '#d8c7ff',
  },
  {
    name: 'Chocolat',
    nameKey: 'waxball.material.chocolat',
    detailKey: 'waxball.material.chocolatDetail',
    image: '/waxball/select-chocolate.webp',
    width: 480,
    height: 852,
    accent: '#ca7d4d',
  },
  {
    name: 'Glacier',
    nameKey: 'waxball.material.glacier',
    detailKey: 'waxball.material.glacierDetail',
    image: '/waxball/select-ice.webp',
    width: 480,
    height: 598,
    accent: '#76cfff',
  },
  {
    name: 'Nebula Veil',
    nameKey: 'waxball.material.nebula',
    detailKey: 'waxball.material.nebulaDetail',
    image: '/waxball/select-xeno.webp',
    width: 480,
    height: 598,
    accent: '#9d68ff',
  },
  {
    name: 'Luma',
    nameKey: 'waxball.material.luma',
    detailKey: 'waxball.material.lumaDetail',
    image: '/waxball/select-luma.webp',
    width: 480,
    height: 600,
    accent: '#a4f68a',
  },
  {
    name: 'Phosphor',
    nameKey: 'waxball.material.phosphor',
    detailKey: 'waxball.material.phosphorDetail',
    image: '/waxball/select-phosphor.webp',
    width: 480,
    height: 600,
    accent: '#b667ff',
  },
];

const WaxballPage: React.FC = () => {
  const { t } = useTranslation();
  const [reveal, setReveal] = useState(52);
  const [activeMaterial, setActiveMaterial] = useState(0);

  const activeStage = useMemo(() => {
    if (reveal > 69) return 0;
    if (reveal > 35) return 1;
    return 2;
  }, [reveal]);

  const fractureProgress = Math.round(((88 - reveal) / 76) * 100);

  useEffect(() => {
    setPageMetadata(t('seo.waxball.title'), t('seo.waxball.description'));
  }, [t]);

  const selectedMaterial = materials[activeMaterial];

  return (
    <article className="waxball-page">
      <section className="wb-hero" aria-labelledby="waxball-title">
        <div className="wb-hero-aurora wb-hero-aurora-left" aria-hidden="true" />
        <div className="wb-hero-aurora wb-hero-aurora-right" aria-hidden="true" />

        <div className="wb-container wb-hero-grid">
          <div className="wb-hero-copy">
            <h1 id="waxball-title">
              <span className="wb-wordmark">WAXBALL</span>
              <span className="wb-hero-statement">{t('waxball.hero.statement')}</span>
            </h1>
            <p className="wb-hero-description">{t('waxball.hero.description')}</p>

            <div className="wb-hero-actions">
              <a
                className="wb-button wb-button-primary"
                href={GOOGLE_PLAY_URL}
                target="_blank"
                rel="noreferrer"
              >
                {t('waxball.android.install')}
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
              <a
                className="wb-button wb-button-secondary"
                href={WEB_APP_URL}
                target="_blank"
                rel="noreferrer"
              >
                {t('waxball.hero.playNow')}
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            </div>

            <div className="wb-hero-facts" aria-label={t('waxball.hero.factsAria')}>
              <span>12 MATERIALS</span>
              <span>NO LOGIN</span>
              <span>WEB PLAY</span>
            </div>
          </div>

          <figure className="wb-hero-visual">
            <div
              className="wb-comparison"
              style={{ '--wb-reveal': `${reveal}%` } as CSSProperties}
            >
              <div className="wb-comparison-glow" aria-hidden="true" />
              <img
                className="wb-orb-image wb-orb-base"
                src="/waxball/hero-stage0.webp"
                alt={t('waxball.hero.orbAlt')}
                width="900"
                height="900"
                fetchPriority="high"
              />
              <div className="wb-orb-reveal" aria-hidden="true">
                <img
                  className="wb-orb-image"
                  src="/waxball/hero-cutaway.webp"
                  alt=""
                  width="900"
                  height="900"
                  fetchPriority="high"
                />
              </div>

              <span className="wb-comparison-label wb-comparison-label-left">WAX SHELL</span>
              <span className="wb-comparison-label wb-comparison-label-right">SOFT CORE</span>

              <input
                className="wb-comparison-range"
                type="range"
                min="12"
                max="88"
                value={reveal}
                onChange={(event) => setReveal(Number(event.target.value))}
                aria-label={t('waxball.hero.comparisonAria')}
                aria-valuetext={t('waxball.hero.comparisonValue', {
                  stage: t(stages[activeStage].nameKey),
                })}
                aria-describedby="waxball-comparison-caption"
              />
              <div className="wb-comparison-seam" aria-hidden="true">
                <span className="wb-comparison-handle">
                  <ChevronRight className="wb-handle-left" size={18} />
                  <ChevronRight size={18} />
                </span>
              </div>
            </div>

            <figcaption id="waxball-comparison-caption" className="wb-sr-only">
              {t('waxball.hero.comparisonCaption')}
            </figcaption>
          </figure>

          <div className="wb-stage-rail" aria-label={t('waxball.hero.stageRailAria')}>
            <span className="wb-stage-line" aria-hidden="true">
              <span style={{ transform: `scaleX(${fractureProgress / 100})` }} />
            </span>
            {stages.map((stage, index) => (
              <button
                key={stage.label}
                className={index === activeStage ? 'is-active' : ''}
                type="button"
                onClick={() => setReveal(stage.reveal)}
                aria-pressed={index === activeStage}
              >
                <span className="wb-stage-dot">{index + 1}</span>
                <span>
                  <strong>{stage.label}</strong>
                  <small>{t(stage.nameKey)}</small>
                </span>
              </button>
            ))}
          </div>
        </div>

        <a className="wb-scroll-cue" href="#mechanism" aria-label={t('waxball.hero.scrollAria')}>
          {t('waxball.hero.scroll')}
          <ArrowDown size={16} aria-hidden="true" />
        </a>
      </section>

      <section id="mechanism" className="wb-section wb-mechanism-section" aria-labelledby="mechanism-title">
        <div className="wb-container">
          <div className="wb-section-heading">
            <span aria-hidden="true">01</span>
            <div>
              <h2 id="mechanism-title">{t('waxball.mechanism.title')}</h2>
              <p>{t('waxball.mechanism.description')}</p>
            </div>
          </div>

          <div className="wb-mechanism-overview">
            <figure className="wb-mechanism-art">
              <img
                src="/waxball/feature-tactile.webp"
                alt={t('waxball.mechanism.artAlt')}
                width="1024"
                height="500"
                loading="lazy"
              />
              <figcaption>{t('waxball.mechanism.artCaption')}</figcaption>
            </figure>

            <ol className="wb-mechanism-steps">
              {[1, 2, 3].map((step) => (
                <li key={step}>
                  <span>{step}</span>
                  <div>
                    <h3>{t(`waxball.mechanism.step${step}.title` as TranslationKey)}</h3>
                    <p>{t(`waxball.mechanism.step${step}.description` as TranslationKey)}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="wb-device-proof" aria-label={t('waxball.mechanism.deviceAria')}>
            <figure className="wb-device-card wb-device-card-main">
              <div className="wb-device-frame">
                <img
                  src="/waxball/proof-fracture.webp"
                  alt={t('waxball.mechanism.proofSurfaceAlt')}
                  width="640"
                  height="1138"
                  loading="lazy"
                />
              </div>
              <figcaption>
                <strong>{t('waxball.mechanism.proofSurfaceLabel')}</strong>{' '}
                {t('waxball.mechanism.proofSurfaceText')}
              </figcaption>
            </figure>
            <figure className="wb-device-card wb-device-card-shifted">
              <div className="wb-device-frame">
                <img
                  src="/waxball/proof-sound.webp"
                  alt={t('waxball.mechanism.proofFractureAlt')}
                  width="640"
                  height="1138"
                  loading="lazy"
                />
              </div>
              <figcaption>
                <strong>{t('waxball.mechanism.proofFractureLabel')}</strong>{' '}
                {t('waxball.mechanism.proofFractureText')}
              </figcaption>
            </figure>
            <figure className="wb-device-card wb-device-card-low">
              <div className="wb-device-frame">
                <img
                  src="/waxball/proof-core.webp"
                  alt={t('waxball.mechanism.proofCoreAlt')}
                  width="640"
                  height="1138"
                  loading="lazy"
                />
              </div>
              <figcaption>
                <strong>{t('waxball.mechanism.proofCoreLabel')}</strong>{' '}
                {t('waxball.mechanism.proofCoreText')}
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="wb-section wb-collection-section" aria-labelledby="collection-title">
        <div className="wb-container">
          <div className="wb-section-heading wb-section-heading-compact">
            <span aria-hidden="true">02</span>
            <div>
              <h2 id="collection-title">{t('waxball.collection.title')}</h2>
              <p>{t('waxball.collection.description')}</p>
            </div>
          </div>

          <div className="wb-collection-lab">
            <div
              className="wb-collection-stage"
              style={{ '--material-accent': selectedMaterial.accent } as CSSProperties}
            >
              <div className="wb-collection-orbit" aria-hidden="true" />
              <img
                key={selectedMaterial.image}
                src={selectedMaterial.image}
                alt={t('waxball.collection.artAlt', {
                  material: t(selectedMaterial.nameKey),
                })}
                width={selectedMaterial.width}
                height={selectedMaterial.height}
                loading="lazy"
              />
              <div className="wb-collection-stage-copy" aria-live="polite">
                <span>{String(activeMaterial + 1).padStart(2, '0')} / 12</span>
                <strong>{selectedMaterial.name}</strong>
                <small>{t(selectedMaterial.nameKey)}</small>
              </div>
            </div>

            <div className="wb-material-list" role="group" aria-label={t('waxball.collection.listAria')}>
              {materials.map((material, index) => (
                <button
                  key={material.name}
                  type="button"
                  aria-pressed={index === activeMaterial}
                  className={index === activeMaterial ? 'is-active' : ''}
                  onClick={() => setActiveMaterial(index)}
                  style={{ '--material-accent': material.accent } as CSSProperties}
                >
                  <span className="wb-material-index">{String(index + 1).padStart(2, '0')}</span>
                  <span className="wb-material-name">
                    <strong>{material.name}</strong>
                    <small>{t(material.detailKey)}</small>
                  </span>
                  <ChevronRight size={19} aria-hidden="true" />
                </button>
              ))}
              <p>{t('waxball.collection.note')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="wb-section wb-sound-section" aria-labelledby="sound-title">
        <div className="wb-container wb-sound-grid">
          <div className="wb-sound-copy">
            <Volume2 size={34} strokeWidth={1.5} aria-hidden="true" />
            <h2 id="sound-title">
              {t('waxball.sound.titleLine1')}<br />
              {t('waxball.sound.titleLine2')}
            </h2>
            <p>{t('waxball.sound.description')}</p>
            <a href="#play-preview" className="wb-text-link">
              {t('waxball.sound.videoLink')}
              <ChevronRight size={18} aria-hidden="true" />
            </a>
          </div>

          <div className="wb-sound-media">
            <img
              className="wb-sound-wide"
              src="/waxball/feature-tactile.webp"
              alt={t('waxball.sound.wideAlt')}
              width="1024"
              height="500"
              loading="lazy"
            />
            <img
              className="wb-sound-phone"
              src="/waxball/proof-ice.webp"
              alt={t('waxball.sound.phoneAlt')}
              width="640"
              height="1138"
              loading="lazy"
            />
            <span className="wb-sound-wave" aria-hidden="true">DRR · DAK · CRACK</span>
          </div>
        </div>
      </section>

      <section className="wb-section wb-nebula-section" aria-labelledby="nebula-title">
        <div className="wb-container">
          <div className="wb-nebula-stage">
            <img
              src="/waxball/feature-nebula.webp"
              alt={t('waxball.nebula.alt')}
              width="1024"
              height="500"
              loading="lazy"
            />
            <div className="wb-nebula-vignette" aria-hidden="true" />
            <div className="wb-nebula-copy">
              <Sparkles size={30} aria-hidden="true" />
              <h2 id="nebula-title">
                {t('waxball.nebula.titleLine1')}<br />
                {t('waxball.nebula.titleLine2')}
              </h2>
              <p>{t('waxball.nebula.description')}</p>
              <div className="wb-nebula-facts">
                <span><Gauge size={17} /> {t('waxball.nebula.gauge')}</span>
                <span><Sparkles size={17} /> {t('waxball.nebula.hatch')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="play-preview" className="wb-section wb-preview-section" aria-labelledby="preview-title">
        <div className="wb-container wb-preview-grid">
          <div className="wb-preview-copy">
            <span className="wb-preview-time">00:26</span>
            <h2 id="preview-title">
              {t('waxball.preview.titleLine1')}<br />
              {t('waxball.preview.titleLine2')}
            </h2>
            <p>{t('waxball.preview.description')}</p>
            <ul>
              <li>{t('waxball.preview.point1')}</li>
              <li>{t('waxball.preview.point2')}</li>
              <li>{t('waxball.preview.point3')}</li>
            </ul>
          </div>

          <div className="wb-video-shell">
            <video
              controls
              playsInline
              preload="metadata"
              poster="/waxball/proof-fracture.webp"
              aria-label={t('waxball.preview.videoAria')}
            >
              <source src="/waxball/waxball-play-preview-ko.mp4" type="video/mp4" />
              {t('waxball.preview.videoFallback')}
            </video>
          </div>
        </div>
      </section>

      <section className="wb-final-cta" aria-labelledby="final-cta-title">
        <div className="wb-container wb-final-cta-inner">
          <div>
            <h2 id="final-cta-title">{t('waxball.final.title')}</h2>
          </div>
          <div className="wb-final-actions">
            <a
              className="wb-button wb-button-primary"
              href={GOOGLE_PLAY_URL}
              target="_blank"
              rel="noreferrer"
            >
              {t('waxball.android.install')}
              <ArrowUpRight size={19} aria-hidden="true" />
            </a>
            <a
              className="wb-button wb-button-secondary"
              href={WEB_APP_URL}
              target="_blank"
              rel="noreferrer"
            >
              {t('waxball.final.cta')}
              <ArrowUpRight size={19} aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="wb-container wb-legal-links">
          <a href="https://waxball.akra.kr/privacy/" target="_blank" rel="noreferrer">
            {t('waxball.final.privacy')}
          </a>
          <a href="https://waxball.akra.kr/terms/" target="_blank" rel="noreferrer">
            {t('waxball.final.terms')}
          </a>
          <span>{t('waxball.final.legal')}</span>
        </div>
      </section>
    </article>
  );
};

export default WaxballPage;
