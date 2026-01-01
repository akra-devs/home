import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Code2, Rocket } from 'lucide-react';

const Process: React.FC = () => {
    const steps = [
        {
            id: "01",
            title: "Discovery",
            desc: "비즈니스 목표와 요구사항을 심층 분석합니다.",
            icon: <Search size={24} />
        },
        {
            id: "02",
            title: "Design",
            desc: "사용자 경험(UX)과 아름다운 인터페이스(UI)를 설계합니다.",
            icon: <PenTool size={24} />
        },
        {
            id: "03",
            title: "Development",
            desc: "확장 가능한 아키텍처로 견고한 코드를 작성합니다.",
            icon: <Code2 size={24} />
        },
        {
            id: "04",
            title: "Deploy",
            desc: "철저한 테스트 후 프로덕션 환경에 배포합니다.",
            icon: <Rocket size={24} />
        }
    ];

    return (
        <section className="py-32 bg-zinc-950 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-24"
                >
                    <span className="text-blue-400 font-medium tracking-wider uppercase text-sm mb-4 block">Workflow</span>
                    <h2 className="text-4xl md:text-6xl font-serif text-white mb-8">How We Work</h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
                        체계적인 프로세스로 <span className="text-white font-medium">예측 가능한 결과</span>를 만듭니다.<br />
                        불필요한 소통 비용을 줄이고 본질에 집중합니다.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden lg:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent z-0"></div>

                    {steps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.2 }}
                            className="relative z-10 group"
                        >
                            <div className="w-24 h-24 mx-auto bg-zinc-900/80 backdrop-blur border border-white/10 rounded-full flex items-center justify-center text-zinc-400 mb-8 group-hover:text-blue-400 group-hover:border-blue-500/30 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all">
                                {step.icon}
                            </div>
                            <div className="text-center px-4">
                                <span className="text-6xl font-serif text-white/5 font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 select-none group-hover:text-white/10 transition-colors">
                                    {step.id}
                                </span>
                                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-200 transition-colors font-serif">{step.title}</h3>
                                <p className="text-zinc-400 text-sm leading-relaxed opacity-80">
                                    {step.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
