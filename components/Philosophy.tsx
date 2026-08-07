import React from 'react';
import { Layers, HeartHandshake } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from '../i18n';

const Philosophy: React.FC = () => {
  const { t } = useTranslation();
  const stats = [
    { label: t('philosophy.stats.products'), value: '12+' },
    { label: t('philosophy.stats.referral'), value: t('philosophy.stats.high') },
    { label: t('philosophy.stats.technology'), value: t('philosophy.stats.proven') },
    { label: t('philosophy.stats.operations'), value: t('philosophy.stats.essential') },
  ];

  return (
    <section id="philosophy" className="py-24 md:py-32 bg-zinc-950 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mb-20 max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            {t('philosophy.titleBefore')} <span className="text-primary-500">{t('philosophy.titleHighlight')}</span>{t('philosophy.titleAfter')}
          </h2>
          <p className="text-zinc-400 text-lg md:text-xl leading-relaxed">
            {t('philosophy.description').split('\n\n').map((paragraph, index) => (
              <React.Fragment key={paragraph}>
                {index > 0 && <><br /><br /></>}
                {paragraph}
              </React.Fragment>
            ))}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="glass-card p-10 rounded-3xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary-500/20 transition-all duration-500" />
            <div className="flex items-start justify-between mb-8">
              <div className="p-3 bg-zinc-900 rounded-xl border border-zinc-800 text-primary-500"><Layers size={32} /></div>
              <span className="text-6xl font-black text-white/10 group-hover:text-white/20 transition-colors">80%</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">{t('philosophy.ownServiceTitle')}</h3>
            <p className="text-zinc-400 leading-relaxed">{t('philosophy.ownServiceDescription')}</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="glass-card p-10 rounded-3xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-500/20 transition-all duration-500" />
            <div className="flex items-start justify-between mb-8">
              <div className="p-3 bg-zinc-900 rounded-xl border border-zinc-800 text-blue-400"><HeartHandshake size={32} /></div>
              <span className="text-6xl font-black text-white/10 group-hover:text-white/20 transition-colors">20%</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">{t('philosophy.partnershipTitle')}</h3>
            <p className="text-zinc-400 leading-relaxed">{t('philosophy.partnershipDescription')}</p>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-zinc-900 pt-10">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-sm font-medium text-zinc-500 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Philosophy;
