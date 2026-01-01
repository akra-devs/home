import React from 'react';
import { ArrowUpRight, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

interface Project {
  id: number;
  category: 'Own Service' | 'Partnership';
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  isPrivate?: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    category: 'Own Service',
    title: 'Habitree',
    description: '글로벌 20만 다운로드를 달성한 습관 형성 플랫폼. 게이미피케이션 요소를 도입하여 사용자 리텐션을 극대화했습니다.',
    tags: ['Flutter', 'Node.js', 'AWS'],
    imageUrl: 'https://picsum.photos/800/600?random=1',
  },
  {
    id: 2,
    category: 'Own Service',
    title: 'F&B Console',
    description: '프랜차이즈 운영 효율화를 위한 SaaS 솔루션. 재고 관리부터 발주까지 원스톱으로 처리합니다.',
    tags: ['React', 'Supabase', 'SaaS'],
    imageUrl: 'https://picsum.photos/800/600?random=2',
  },
  {
    id: 3,
    category: 'Partnership',
    title: 'EduLabs Reform',
    description: '기존 레거시 교육 플랫폼의 대규모 리뉴얼. MSA 전환을 통해 트래픽 처리 성능을 5배 향상시켰습니다.',
    tags: ['Next.js', 'NestJS', 'Microservices'],
    imageUrl: 'https://picsum.photos/800/600?random=3',
  },
  {
    id: 4,
    category: 'Own Service',
    title: 'Crypto Signal',
    description: '실시간 데이터 분석을 통한 암호화폐 트레이딩 보조 도구.',
    tags: ['Python', 'AI', 'Fintech'],
    imageUrl: 'https://picsum.photos/800/600?random=4',
    isPrivate: true,
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import HoloCard from './HoloCard';

const Showcase: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Own Service' | 'Partnership'>('All');

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
            {[
              { label: 'All', value: 'All' },
              { label: 'Own Services', value: 'Own Service' },
              { label: 'Client Works', value: 'Partnership' }
            ].map((tab) => (
              <button
                key={tab.value}
                onClick={() => setFilter(tab.value as any)}
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