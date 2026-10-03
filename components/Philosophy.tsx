import React from 'react';
import { useTranslation } from '../i18n';

const Philosophy: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="philosophy" className="home-section home-philosophy" aria-labelledby="philosophy-title">
      <div className="home-container">
        <div className="philosophy-intro">
          <h2 id="philosophy-title" className="home-heading">
            {t('philosophy.titleBefore')}{' '}
            <span>{t('philosophy.titleHighlight')}</span>{t('philosophy.titleAfter')}
          </h2>
          <div className="philosophy-description">
            {t('philosophy.description').split('\n\n').map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
        <div className="philosophy-split">
          <article>
            <span className="philosophy-ratio">80<small>%</small></span>
            <div><h3>{t('philosophy.ownServiceTitle')}</h3><p>{t('philosophy.ownServiceDescription')}</p></div>
          </article>
          <article>
            <span className="philosophy-ratio">20<small>%</small></span>
            <div><h3>{t('philosophy.partnershipTitle')}</h3><p>{t('philosophy.partnershipDescription')}</p></div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
