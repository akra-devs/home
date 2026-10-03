import React, { useState } from 'react';
import HoloCard from './HoloCard';
import { ProjectCategory, showcaseProjects } from '../data/products';
import { useTranslation } from '../i18n';

const Showcase: React.FC = () => {
  const { t } = useTranslation();
  const categories = Array.from(new Set(showcaseProjects.map((project) => project.category)));
  const tabs: { label: string; value: 'all' | ProjectCategory }[] = [
    { label: t('showcase.all'), value: 'all' },
    ...categories.map((category) => ({
      label: category === ProjectCategory.OwnService ? t('category.ownService') : t('category.partnership'),
      value: category,
    })),
  ];
  const [filter, setFilter] = useState<'all' | ProjectCategory>('all');
  const filteredProjects = showcaseProjects.filter((project) => filter === 'all' || project.category === filter);

  return (
    <section id="showcase" className="home-section home-showcase" aria-labelledby="showcase-title">
      <div className="home-container">
        <div className="showcase-heading">
          <div className="home-section-heading">
            <h2 id="showcase-title">{t('showcase.title')}</h2>
            <p>{t('showcase.description')}</p>
          </div>
          <div className="showcase-filters" role="group" aria-label={t('showcase.filterAria')}>
            {tabs.map((tab) => (
              <button key={tab.value} type="button" onClick={() => setFilter(tab.value)}
                aria-pressed={filter === tab.value}>{tab.label}</button>
            ))}
          </div>
        </div>
        <div className="product-grid">
          {filteredProjects.map((project) => <HoloCard key={project.id} project={project} />)}
        </div>
        <p className="showcase-note">{t('showcase.note')}</p>
      </div>
    </section>
  );
};

export default Showcase;
