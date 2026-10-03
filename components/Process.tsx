import React from 'react';
import { useTranslation } from '../i18n';

const Process: React.FC = () => {
  const { t } = useTranslation();
  const steps = [
    { title: t('process.problem.title'), description: t('process.problem.description') },
    { title: t('process.flow.title'), description: t('process.flow.description') },
    { title: t('process.development.title'), description: t('process.development.description') },
    { title: t('process.launch.title'), description: t('process.launch.description') },
  ];

  return (
    <section id="process" className="home-section home-process" aria-labelledby="process-title">
      <div className="home-container">
        <div className="home-section-heading">
          <h2 id="process-title">{t('process.title')}</h2>
          <p>{t('process.descriptionBefore')}{' '}<strong>{t('process.descriptionHighlight')}</strong>{t('process.descriptionAfter')}</p>
        </div>
        <ol className="process-list">
          {steps.map((step, index) => (
            <li key={step.title}>
              <span className="process-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
              <h3>{step.title}</h3><p>{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Process;
