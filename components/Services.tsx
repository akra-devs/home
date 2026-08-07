import React from 'react';
import { Smartphone, Monitor, Cloud, Database } from 'lucide-react';
import { motion } from 'framer-motion';
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
    <section id="services" className="py-32 bg-zinc-950 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-24">
          <span className="text-blue-400 font-medium tracking-wider uppercase text-sm mb-4 block">{t('services.eyebrow')}</span>
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-8">{t('services.title')}</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            {t('services.descriptionBefore')} <span className="text-white font-medium">{t('services.descriptionHighlight')}</span>{t('services.descriptionAfter').split('\n').map((part, index) => index === 0 ? part : <React.Fragment key={part}><br />{part}</React.Fragment>)}
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div key={service.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all group hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/20">
              <div className="w-14 h-14 bg-zinc-900/80 rounded-2xl flex items-center justify-center text-zinc-400 mb-8 group-hover:text-blue-400 group-hover:scale-110 transition-all border border-white/5">{service.icon}</div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-200 transition-colors font-serif">{service.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
