import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.png"
          alt="Atmospheric Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30"></div>
      </div>

      {/* Floating Mockups */}
      <motion.div
        initial={{ opacity: 0, y: 100, rotate: -10 }}
        animate={{ opacity: 1, y: 0, rotate: -5 }}
        transition={{ duration: 1.2, delay: 0.2, type: "spring" }}
        className="absolute left-[5%] top-[20%] w-[300px] md:w-[400px] z-0 hidden lg:block pointer-events-none"
      >
        <motion.img
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          src="/mockup-phone.png"
          alt="App Interface"
          className="w-full h-auto drop-shadow-2xl opacity-80"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100, rotate: 10 }}
        animate={{ opacity: 1, y: 0, rotate: 5 }}
        transition={{ duration: 1.2, delay: 0.4, type: "spring" }}
        className="absolute right-[5%] bottom-[20%] w-[250px] md:w-[350px] z-0 hidden lg:block pointer-events-none"
      >
        <motion.img
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          src="/mockup-dashboard.png"
          alt="Dashboard Widget"
          className="w-full h-auto drop-shadow-2xl opacity-80"
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 text-center z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-xs font-medium text-blue-200 mb-8 shadow-lg shadow-blue-500/10"
        >
          <Zap size={12} className="fill-current text-blue-400" />
          <span className="tracking-wide uppercase">Builders first, Agency second</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-6xl md:text-8xl lg:text-9xl font-medium tracking-tight mb-8 leading-[1.1] text-white drop-shadow-2xl"
        >
          <span className="block italic opacity-90">Own your</span>
          <span className="block bg-gradient-to-r from-blue-100 via-white to-blue-200 bg-clip-text text-transparent">
            Digital Future.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-300/90 mb-12 leading-relaxed font-light tracking-wide"
        >
          우리는 단순한 대행사가 아닙니다.<br className="md:hidden" /> 80%의 자체 서비스와 20%의 파트너십.<br />
          <span className="text-white font-medium">직접 비즈니스를 성공시킨 노하우</span>로 당신의 아이디어를 현실로 만듭니다.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="#showcase"
            className="w-full sm:w-auto px-8 py-4 bg-white text-black font-serif text-lg rounded-full hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
          >
            Explore Work
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#philosophy"
            className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-serif text-lg rounded-full hover:bg-white/20 transition-all"
          >
            Our Philosophy
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
      >
        <span className="text-xs tracking-widest uppercase mb-2 block text-center">Scroll</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mx-auto">
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;