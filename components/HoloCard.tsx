import React from 'react';
import { ArrowUpRight, Lock } from 'lucide-react';
import { Project, ProjectCategory, ProjectLifecycle } from '../data/products';
import { useTranslation } from '../i18n';

interface HoloCardProps {
  project: Project;
}

const HoloCard: React.FC<HoloCardProps> = ({ project }) => {
  const { t } = useTranslation();
  const isPrivate = project.lifecycle === ProjectLifecycle.Private;
  const isConcept = project.lifecycle === ProjectLifecycle.Concept;
  const isClickable = Boolean(project.href && !isPrivate && !isConcept);
  const title = t(project.titleKey);
  const status = isPrivate ? t('card.private') : isConcept ? t('card.concept') :
    project.lifecycle === ProjectLifecycle.Preview ? t('card.preview') : null;

  const content = (
    <>
      <div className={`product-card-media${isPrivate || isConcept ? ' product-card-study' : ''}`}>
        {isPrivate || isConcept ? (
          <div aria-hidden="true" className="product-study-title">{title}</div>
        ) : (
          <img src={project.imageUrl} alt={t(project.imageAltKey ?? project.titleKey)}
            width={800} height={500} loading="lazy" decoding="async" />
        )}
      </div>
      <div className="product-card-content">
        <div className="product-card-meta">
          <span>{project.category === ProjectCategory.OwnService ? t('category.ownService') : t('category.partnership')}</span>
          {status && <span className="product-card-status">{isPrivate && <Lock size={13} aria-hidden="true" />}{status}</span>}
        </div>
        <h3>{title}</h3>
        <p className="product-card-description">{t(project.descriptionKey)}</p>
        <ul className="product-card-tags" aria-label={title}>
          {project.tagKeys.map((key) => <li key={key}>{t(key)}</li>)}
        </ul>
        <div className="product-card-action">
          {isClickable ? <><span>{t('card.open')}</span><ArrowUpRight size={18} aria-hidden="true" /></> : <span>{status}</span>}
        </div>
      </div>
    </>
  );

  return isClickable ? (
    <a className="product-card product-card-linked" data-project-id={project.id} href={project.href}
      aria-label={t('card.detailAria', { title })}>{content}</a>
  ) : (
    <article className="product-card" data-project-id={project.id}>{content}</article>
  );
};

export default HoloCard;
