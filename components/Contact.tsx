import React from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Phone } from 'lucide-react';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-32 bg-zinc-950 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Text & Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-blue-400 font-medium tracking-wider uppercase text-sm mb-4 block">Contact Us</span>
                        <h2 className="text-3xl md:text-5xl font-serif text-white mb-8 leading-tight">
                            망설였던 그 아이디어,<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-white to-blue-200">이제 세상에 내놓을 때입니다.</span>
                        </h2>
                        <p className="text-zinc-400 text-lg font-light leading-relaxed mb-12">
                            기술적인 난관은 저희가 해결하겠습니다. <br />
                            대표님은 비즈니스의 <strong>본질</strong>에만 집중하세요.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 group cursor-pointer">
                                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-zinc-400 group-hover:bg-white/10 group-hover:text-white transition-all">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Email Us</p>
                                    <p className="text-white font-serif text-lg">contact@akradev.studio</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 group cursor-pointer">
                                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-zinc-400 group-hover:bg-white/10 group-hover:text-white transition-all">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Visit Us</p>
                                    <p className="text-white font-serif text-lg">Seoul, Republic of Korea</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl"
                    >
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm text-zinc-400 font-medium">성함</label>
                                    <input type="text" className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 focus:bg-zinc-900/80 transition-all font-light" placeholder="홍길동" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm text-zinc-400 font-medium">이메일</label>
                                    <input type="email" className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 focus:bg-zinc-900/80 transition-all font-light" placeholder="email@example.com" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm text-zinc-400 font-medium">프로젝트 유형</label>
                                <select className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 focus:bg-zinc-900/80 transition-all font-light appearance-none cursor-pointer">
                                    <option>웹 서비스 개발 (Web)</option>
                                    <option>모바일 앱 개발 (App)</option>
                                    <option>블록체인 / Web3</option>
                                    <option>기타 / 솔루션 도입 문의</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm text-zinc-400 font-medium">문의 내용</label>
                                <textarea rows={4} className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 focus:bg-zinc-900/80 transition-all font-light resize-none" placeholder="프로젝트에 대해 간략히 말씀해주세요. 예산이나 일정 등을 포함해주시면 더 정확한 상담이 가능합니다."></textarea>
                            </div>

                            <button type="button" className="w-full bg-white text-black font-serif text-lg py-4 rounded-xl hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 group shadow-lg shadow-white/5">
                                문의하기
                                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
