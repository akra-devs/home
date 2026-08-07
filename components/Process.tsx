import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Code2, Rocket } from 'lucide-react';
import { useTranslation } from '../i18n';

const Process: React.FC = () => {
  const { t } = useTranslation();
  const steps = [
    { id: '01', title: t('process.problem.title'), description: t('process.problem.description'), icon: <Search size={24} /> },
    { id: '02', title: t('process.flow.title'), description: t('process.flow.description'), icon: <PenTool size={24} /> },
    { id: '03', title: t('process.development.title'), description: t('process.development.description'), icon: <Code2 size={24} /> },
    { id: '04', title: t('process.launch.title'), description: t('process.launch.description'), icon: <Rocket size={24} /> },
  ];

  return (
    <section className="py-32 bg-zinc-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-24">
          <span className="text-blue-400 font-medium tracking-wider uppercase text-sm mb-4 block">{t('process.eyebrow')}</span>
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-8">{t('process.title')}</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            {t('process.descriptionBefore')} <span className="text-white font-medium">{t('process.descriptionHighlight')}</span>{t('process.descriptionAfter').split('\n').map((part, index) => index === 0 ? part : <React.Fragment key={part}><br />{part}</React.Fragment>)}
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          <div className="hidden lg:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent z-0" />
          {steps.map((step, index) => (
            <motion.div key={step.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.2 }} className="relative z-10 group">
              <div className="w-24 h-24 mx-auto bg-zinc-900/80 backdrop-blur border border-white/10 rounded-full flex items-center justify-center text-zinc-400 mb-8 group-hover:text-blue-400 group-hover:border-blue-500/30 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all">{step.icon}</div>
              <div className="text-center px-4">
                <span className="text-6xl font-serif text-white/5 font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 select-none group-hover:text-white/10 transition-colors">{step.id}</span>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-200 transition-colors font-serif">{step.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed opacity-80">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
