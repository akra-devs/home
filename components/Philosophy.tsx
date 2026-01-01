import React from 'react';
import { Layers, HeartHandshake } from 'lucide-react';
import { motion } from 'framer-motion';

const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-24 md:py-32 bg-zinc-950 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 max-w-3xl"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            우리는 <span className="text-primary-500">직접 만드는 사람들</span>입니다.
          </h2>
          <p className="text-zinc-400 text-lg md:text-xl leading-relaxed">
            Akra Dev는 개발자들로 구성된 제품 팀입니다. 
            우리는 전체 업무의 80%를 우리만의 서비스를 만드는 데 집중합니다.
            나머지 20%는 우리의 기술과 경험이 꼭 필요한 파트너를 위해 사용합니다.
            <br/><br/>
            직접 제품을 기획하고, 운영하고, 성장시켜 본 경험만이<br className="hidden md:block"/>
            진짜 비즈니스의 문제를 해결할 수 있다고 믿기 때문입니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: 80% Identity */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card p-10 rounded-3xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary-500/20 transition-all duration-500"></div>
            
            <div className="flex items-start justify-between mb-8">
              <div className="p-3 bg-zinc-900 rounded-xl border border-zinc-800 text-primary-500">
                <Layers size={32} />
              </div>
              <span className="text-6xl font-black text-white/10 group-hover:text-white/20 transition-colors">80%</span>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4">자체 서비스 개발 (Own Products)</h3>
            <p className="text-zinc-400 leading-relaxed">
              우리는 끊임없이 시장의 문제를 찾고 해결합니다. 
              SaaS, B2C 플랫폼 등 다양한 분야에서 직접 비즈니스를 운영하며, 
              '실패하지 않는 제품'을 만드는 법을 체득했습니다.
            </p>
          </motion.div>

          {/* Card 2: 20% Identity */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card p-10 rounded-3xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-500/20 transition-all duration-500"></div>
            
            <div className="flex items-start justify-between mb-8">
              <div className="p-3 bg-zinc-900 rounded-xl border border-zinc-800 text-blue-400">
                <HeartHandshake size={32} />
              </div>
              <span className="text-6xl font-black text-white/10 group-hover:text-white/20 transition-colors">20%</span>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4">프리미엄 파트너십 (Client Work)</h3>
            <p className="text-zinc-400 leading-relaxed">
              아무 프로젝트나 맡지 않습니다. 우리의 기술력이 비즈니스의 핵심이 되는 프로젝트에만 참여합니다.
              단순 용역이 아닌, '기술 파트너'로서 비즈니스의 성공을 함께 고민합니다.
            </p>
          </motion.div>
        </div>

        {/* Stats / Tech Stack */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-zinc-900 pt-10"
        >
          {[
            { label: 'Launched Products', value: '12+' },
            { label: 'Client Satisfaction', value: '100%' },
            { label: 'Tech Stacks', value: 'Modern' },
            { label: 'Retention Rate', value: '90%' },
          ].map((stat, index) => (
            <div key={index} className="text-center md:text-left">
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