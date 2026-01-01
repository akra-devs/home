import React from 'react';
import { Smartphone, Monitor, Cloud, Database, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Smartphone size={24} />,
      title: "Cross-Platform App",
      desc: "Flutter를 이용한 iOS, Android 동시 개발. 네이티브에 준하는 성능과 빠른 출시 속도를 보장합니다."
    },
    {
      icon: <Monitor size={24} />,
      title: "Modern Web",
      desc: "React, Next.js 기반의 고성능 웹 어플리케이션. SEO 최적화부터 복잡한 대시보드까지 구현합니다."
    },
    {
      icon: <Cloud size={24} />,
      title: "Cloud Infrastructure",
      desc: "AWS, Google Cloud 기반의 확장 가능한 서버 아키텍처 설계. 트래픽 급증에도 안정적입니다."
    },
    {
      icon: <Database size={24} />,
      title: "MVP & Scale-up",
      desc: "초기 아이디어 검증을 위한 MVP부터, 대규모 유저를 위한 스케일업까지 단계별 솔루션을 제공합니다."
    }
  ];

  return (
    <section id="services" className="py-32 bg-zinc-950 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <span className="text-blue-400 font-medium tracking-wider uppercase text-sm mb-4 block">Our Expertise</span>
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-8">Core Technologies</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            우리가 가장 <span className="text-white font-medium">잘 쓰고, 잘 아는 기술</span>로만 만듭니다.<br />
            실험적인 선택보다는 검증된 안정성을 최우선으로 합니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all group hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/20"
            >
              <div className="w-14 h-14 bg-zinc-900/80 rounded-2xl flex items-center justify-center text-zinc-400 mb-8 group-hover:text-blue-400 group-hover:scale-110 transition-all border border-white/5">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-200 transition-colors font-serif">{service.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;