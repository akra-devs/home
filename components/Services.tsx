import React from 'react';
import { Smartphone, Monitor, Cloud, Database } from 'lucide-react';
import { useTranslation } from '../i18n';

const Services: React.FC = () => {
  const { t } = useTranslation();
  const services = [
    { icon: <Smartphone size={24} />, title: t('services.app.title'), description: t('services.app.description') },
    { icon: <Monitor size={24} />, title: t('services.web.title'), description: t('services.web.description') },
    { icon: <Cloud size={24} />, title: t('services.cloud.title'), description: t('services.cloud.description') },
    { icon: <Database size={24} />, title: t('services.mvp.title'), description: t('services.mvp.description') },
  ];

  return (
    <section id="services" className="home-section" aria-labelledby="services-title">
      <div className="home-container services-layout">
        <div className="home-section-heading">
          <h2 id="services-title">{t('services.title')}</h2>
          <p>{t('services.descriptionBefore')}{' '}<strong>{t('services.descriptionHighlight')}</strong>{t('services.descriptionAfter')}</p>
        </div>
        <div className="service-list">
          {services.map((service) => (
            <article key={service.title}>
              <div className="service-icon" aria-hidden="true">{service.icon}</div>
              <div><h3>{service.title}</h3><p>{service.description}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
