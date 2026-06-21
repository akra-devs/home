import React from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight, Lock } from 'lucide-react';
import { Project } from '../data/products';

interface HoloCardProps {
    project: Project;
}

const HoloCard: React.FC<HoloCardProps> = ({ project }) => {
    const isClickable = Boolean(project.href && !project.isPrivate);
    const categoryLabel = project.category === 'Own Service' ? '자체 서비스' : '파트너십';
    const isFeatured = Boolean(project.isFeatured);

    // Motion values for mouse position
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth springs for rotation with damping to simulate weight
    const mouseX = useSpring(x, { stiffness: 300, damping: 30 });
    const mouseY = useSpring(y, { stiffness: 300, damping: 30 });

    // Calculating rotation: Screen Top/Left -> Tilt Back/Right
    // Adjust these limits (e.g., 15deg) for more/less extreme tilt
    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["5deg", "-5deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-5deg", "5deg"]);

    // Highlight/Glare position (moves opposite to tilt for realism)
    const glareX = useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"]);
    const glareY = useTransform(mouseY, [-0.5, 0.5], ["0%", "100%"]);

    // Holographic sheen opacity (visible mostly when moving)
    const sheenOpacity = useTransform(mouseX, [-0.5, 0, 0.5], [0.12, 0, 0.12]);

    const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseXPos = e.clientX - rect.left;
        const mouseYPos = e.clientY - rect.top;

        // Normalize mouse position to -0.5 to 0.5 (Center is 0)
        const xPct = (mouseXPos / width) - 0.5;
        const yPct = (mouseYPos / height) - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const cardContent = (
        <>
            {/* Shadow Drop (Static behind to emphasize lift) */}
            <div className="absolute inset-4 bg-black/35 blur-xl rounded-2xl transform translate-z-[-20px] transition-all group-hover:bg-black/50 group-hover:scale-95" />

            <div
                className={`relative h-full w-full rounded-2xl overflow-hidden border transition-colors ${isFeatured ? 'bg-zinc-900 border-blue-300/35 group-hover:border-blue-200/60' : 'bg-zinc-900/90 border-zinc-800 group-hover:border-zinc-600/60'}`}
                style={{ transform: "translateZ(0px)" }} // Fix z-fighting
            >

                {/* --- Image Layer --- */}
                <div className={`${isFeatured ? 'aspect-[16/7]' : 'aspect-[16/10]'} overflow-hidden bg-zinc-800 relative`}>
                    <motion.img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        style={{
                            scale: 1.1, // Zoom in slightly to avoid gaps on tilt
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-90"></div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 z-10">
                        <span className={`px-3 py-1 rounded-md text-xs font-bold tracking-wider ${project.category === 'Own Service'
                                ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/20'
                                : 'bg-white text-black'
                            }`}>
                            {categoryLabel}
                        </span>
                    </div>
                    {project.highlightLabel && (
                        <div className="absolute top-4 right-4 z-10">
                            <span className="px-3 py-1 rounded-md bg-white/90 text-black text-xs font-bold tracking-wider shadow-lg shadow-black/20">
                                {project.highlightLabel}
                            </span>
                        </div>
                    )}
                </div>

                {/* --- Content Content --- */}
                <div className="absolute bottom-0 left-0 w-full p-8 z-20 transform translate-z-[20px]">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-2xl font-bold text-white group-hover:text-primary-300 transition-colors font-serif">
                            {project.title}
                        </h3>
                        {project.isPrivate ? (
                            <Lock className="text-zinc-500 w-5 h-5" />
                        ) : isClickable ? (
                            <div className="p-2 bg-white/10 rounded-full backdrop-blur-sm group-hover:bg-white group-hover:text-black transition-all">
                                <ArrowUpRight className="w-5 h-5" />
                            </div>
                        ) : (
                            <span className="px-3 py-1 rounded-full border border-white/10 bg-black/20 text-[11px] font-semibold text-zinc-400">
                                샘플
                            </span>
                        )}
                    </div>

                    <p className="text-zinc-400 text-sm mb-6 line-clamp-2 leading-relaxed">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                            <span key={tag} className="text-xs font-medium text-zinc-500 bg-black/30 px-2 py-1 rounded border border-white/5">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* --- Holographic Overlays --- */}

                {/* 1. Glare (White Reflection) */}
                <motion.div
                    className="absolute inset-0 w-full h-full z-30 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                        background: useMotionTemplate`radial-gradient(
                    circle at ${glareX} ${glareY}, 
                    rgba(255,255,255,0.08) 0%, 
                    transparent 60%
                )`
                    }}
                />

                {/* 2. Holo Foil (Rainbow Sheen) */}
                <motion.div
                    className="absolute inset-0 w-full h-full z-30 pointer-events-none mix-blend-color-dodge opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                        background: "linear-gradient(115deg, transparent 0%, rgba(96,165,250,0.08) 35%, rgba(255,255,255,0.08) 65%, transparent 100%)",
                        opacity: sheenOpacity,
                    }}
                />

                {/* 3. Border Glow */}
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 group-hover:ring-white/30 transition-all z-40 pointer-events-none" />

            </div>
        </>
    );

    const commonProps = {
        style: {
            transformStyle: "preserve-3d",
            rotateX,
            rotateY,
        },
        initial: { scale: 0.9, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
        exit: { scale: 0.9, opacity: 0 },
        layout: true,
        onMouseMove: handleMouseMove,
        onMouseLeave: handleMouseLeave,
        className: `relative w-full h-full rounded-2xl group perspective-1000 ${isClickable ? 'cursor-pointer' : 'cursor-default'} ${isFeatured ? 'md:col-span-2 lg:col-span-2 min-h-[420px]' : 'min-h-[360px]'}`,
    };

    if (project.href && !project.isPrivate) {
        return (
            <motion.a
                {...commonProps}
                href={project.href}
                aria-label={`${project.title} 상세 페이지로 이동`}
            >
                {cardContent}
            </motion.a>
        );
    }

    return (
        <motion.div
            {...commonProps}
        >
            {cardContent}
        </motion.div>
    );
};

export default HoloCard;
