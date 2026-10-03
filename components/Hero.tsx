import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { useTranslation } from '../i18n';
import { projectCatalog, ProjectId } from '../data/products';

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const stillstamp = projectCatalog[ProjectId.Stillstamp];
  const keyDdal = projectCatalog[ProjectId.KeyDdal];

  return (
    <section className="home-hero" aria-labelledby="hero-title">
      <div className="home-container hero-layout">
        <div className="hero-copy">
          <h1 id="hero-title">
            <span>{t('hero.titleLead')}</span>
            <span>{t('hero.titleEnd')}</span>
          </h1>
          <p className="hero-description">
            {t('hero.descriptionBefore')}{' '}
            <strong>{t('hero.descriptionHighlight')}</strong>{t('hero.descriptionAfter')}
          </p>
          <div className="home-actions">
            <a className="home-button home-button-primary" href="#showcase">
              {t('hero.showWork')}<ArrowRight size={18} aria-hidden="true" />
            </a>
            <a className="home-button home-button-secondary" href="#philosophy">{t('hero.ourApproach')}</a>
          </div>
        </div>
        <div className="hero-evidence">
          <a className="hero-artwork" href={stillstamp.href} aria-label={t('card.detailAria', { title: t(stillstamp.titleKey) })}>
            <img src={stillstamp.imageUrl} alt={t(stillstamp.imageAltKey)} width={960} height={720} fetchPriority="high" decoding="async" />
            <div className="hero-caption">
              <span>{t(stillstamp.titleKey)}<small>{t(stillstamp.highlightLabelKey)}</small></span>
              <ArrowUpRight size={20} aria-hidden="true" />
            </div>
          </a>
          <a className="hero-secondary-product" href={keyDdal.href} aria-label={t('card.detailAria', { title: t(keyDdal.titleKey) })}>
            <img src={keyDdal.imageUrl} alt={t(keyDdal.imageAltKey)} width={160} height={100} decoding="async" />
            <span>{t(keyDdal.titleKey)}<small>{t(keyDdal.highlightLabelKey)}</small></span>
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
