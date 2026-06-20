import React from 'react';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import HoloCard from './HoloCard';
import { ProjectCategory, projects } from '../data/products';

const Showcase: React.FC = () => {
  const categories = Array.from(new Set(projects.map((project) => project.category)));
  const tabs: { label: string; value: 'All' | ProjectCategory }[] = [
    { label: 'All', value: 'All' },
    ...categories.map((category) => ({
      label: category === 'Own Service' ? 'Own Services' : 'Client Works',
      value: category,
    })),
  ];
  const [filter, setFilter] = useState<'All' | ProjectCategory>('All');

  const filteredProjects = projects.filter(project =>
    filter === 'All' ? true : project.category === filter
  );

  return (
    <section id="showcase" className="py-24 bg-zinc-950 perspective-2000">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-serif">Selected Works</h2>
            <p className="text-zinc-400">우리가 만든, 그리고 함께 만든 성과들입니다.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex gap-2 p-1 bg-zinc-900/50 backdrop-blur rounded-full border border-white/5"
          >
            {tabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setFilter(tab.value)}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all ${filter === tab.value
                  ? 'text-black'
                  : 'text-zinc-400 hover:text-white'
                  }`}
              >
                {filter === tab.value && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-white rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <HoloCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Showcase;
