import React from 'react';
import { Smartphone, Monitor, Cloud, Database, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Smartphone size={24} />,
      title: "앱 개발",
      desc: "Flutter로 iOS와 Android를 함께 만듭니다. 출시 속도와 사용감을 균형 있게 가져갑니다."
    },
    {
      icon: <Monitor size={24} />,
      title: "웹 서비스",
      desc: "React와 Next.js 기반으로 빠른 웹앱을 만듭니다. 랜딩 페이지부터 복잡한 대시보드까지 다룹니다."
    },
    {
      icon: <Cloud size={24} />,
      title: "클라우드 인프라",
      desc: "AWS와 Google Cloud 위에서 트래픽 변화에 버티는 서버 구조를 설계합니다."
    },
    {
      icon: <Database size={24} />,
      title: "MVP와 스케일업",
      desc: "아이디어 검증용 MVP부터 운영 중인 서비스 개선까지 단계에 맞춰 함께합니다."
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
          <span className="text-blue-400 font-medium tracking-wider uppercase text-sm mb-4 block">잘하는 일</span>
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-8">필요한 기술만 정확히</h2>
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