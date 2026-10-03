import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useTranslation } from '../i18n';

const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="home-section home-contact" aria-labelledby="contact-title">
      <div className="home-container contact-layout">
        <div>
          <h2 id="contact-title" className="home-heading">
            {t('contact.titleLead')}<span>{t('contact.titleHighlight')}</span>
          </h2>
          <p className="contact-description">{t('contact.descriptionBefore')}</p>
          <dl className="contact-details">
            <div>
              <dt>{t('contact.emailLabel')}</dt>
              <dd><a href="mailto:help@akra.kr">help@akra.kr</a></dd>
            </div>
            <div>
              <dt>{t('contact.visitLabel')}</dt>
              <dd>{t('contact.location')}</dd>
            </div>
          </dl>
        </div>
        <div className="contact-action">
          <p>{t('contact.businessBefore')}{' '}<strong>{t('contact.descriptionHighlight')}</strong>{t('contact.descriptionAfter')}</p>
          <a className="home-button home-button-primary" href="mailto:help@akra.kr">
            {t('contact.submit')}<ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
