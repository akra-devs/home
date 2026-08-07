import React from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail } from 'lucide-react';
import { useTranslation } from '../i18n';

const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-32 bg-zinc-950 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <span className="text-blue-400 font-medium tracking-wider uppercase text-sm mb-4 block">{t('contact.eyebrow')}</span>
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-8 leading-tight">
              {t('contact.titleLead')}<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-white to-blue-200">{t('contact.titleHighlight')}</span>
            </h2>
            <p className="text-zinc-400 text-lg font-light leading-relaxed mb-12">
              {t('contact.descriptionBefore')}<br />
              {t('contact.businessBefore')} <strong>{t('contact.descriptionHighlight')}</strong>{t('contact.descriptionAfter')}
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-zinc-400 group-hover:bg-white/10 group-hover:text-white transition-all"><Mail size={20} /></div>
                <div><p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">{t('contact.emailLabel')}</p><p className="text-white font-serif text-lg">help@akra.kr</p></div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-zinc-400 group-hover:bg-white/10 group-hover:text-white transition-all"><MapPin size={20} /></div>
                <div><p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">{t('contact.visitLabel')}</p><p className="text-white font-serif text-lg">{t('contact.location')}</p></div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-zinc-400 font-medium">{t('contact.nameLabel')}</label>
                  <input type="text" className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 focus:bg-zinc-900/80 transition-all font-light" placeholder={t('contact.namePlaceholder')} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-zinc-400 font-medium">{t('contact.emailLabel')}</label>
                  <input type="email" className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 focus:bg-zinc-900/80 transition-all font-light" placeholder="help@akra.kr" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm text-zinc-400 font-medium">{t('contact.projectTypeLabel')}</label>
                <select className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 focus:bg-zinc-900/80 transition-all font-light appearance-none cursor-pointer">
                  <option>{t('contact.projectType.web')}</option>
                  <option>{t('contact.projectType.app')}</option>
                  <option>{t('contact.projectType.web3')}</option>
                  <option>{t('contact.projectType.other')}</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm text-zinc-400 font-medium">{t('contact.messageLabel')}</label>
                <textarea rows={4} className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 focus:bg-zinc-900/80 transition-all font-light resize-none" placeholder={t('contact.messagePlaceholder')} />
              </div>
              <button type="button" className="w-full bg-white text-black font-serif text-lg py-4 rounded-xl hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 group shadow-lg shadow-white/5">
                {t('contact.submit')}<Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
