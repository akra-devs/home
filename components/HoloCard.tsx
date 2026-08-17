import React from 'react';
import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight, Lock } from 'lucide-react';
import { Project, ProjectCategory, ProjectLifecycle } from '../data/products';
import { useTranslation } from '../i18n';

interface HoloCardProps {
    project: Project;
}

const CARD_SURFACE_CLASS_NAME = 'relative h-full w-full bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 group-hover:border-zinc-500/50 transition-colors';

const HoloCard: React.FC<HoloCardProps> = ({ project }) => {
    const { t } = useTranslation();
    const isPrivate = project.lifecycle === ProjectLifecycle.Private;
    const isClickable = Boolean(project.href && !isPrivate);
    const isFeatured = Boolean(project.isFeatured);
    const categoryLabel = project.category === ProjectCategory.OwnService ? t('category.ownService') : t('category.partnership');
    const title = t(project.titleKey);
    const imageAlt = t(project.imageAltKey ?? project.titleKey);
    const prefersReducedMotion = useReducedMotion();

    // Motion values for mouse position
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth springs for rotation with damping to simulate weight
    const mouseX = useSpring(x, { stiffness: 300, damping: 30 });
    const mouseY = useSpring(y, { stiffness: 300, damping: 30 });

    // Calculating rotation: Screen Top/Left -> Tilt Back/Right
    // Adjust these limits (e.g., 15deg) for more/less extreme tilt
    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["6deg", "-6deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-6deg", "6deg"]);

    // Highlight/Glare position (moves opposite to tilt for realism)
    const glareX = useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"]);
    const glareY = useTransform(mouseY, [-0.5, 0.5], ["0%", "100%"]);

    // Holographic sheen opacity (visible mostly when moving)
    const sheenOpacity = useTransform(mouseX, [-0.5, 0, 0.5], [0.3, 0, 0.3]);

    const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
        if (prefersReducedMotion || !window.matchMedia('(pointer: fine)').matches) return;

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
            <div className="absolute inset-4 bg-black/50 blur-xl rounded-2xl transform translate-z-[-20px] transition-all group-hover:bg-black/80 group-hover:scale-95" />

            <div
                className={CARD_SURFACE_CLASS_NAME}
                style={{ transform: "translateZ(0px)" }} // Fix z-fighting
            >

                {/* --- Image Layer --- */}
                <div className={isFeatured ? 'absolute inset-0 overflow-hidden bg-zinc-800' : 'aspect-[16/10] overflow-hidden bg-zinc-800 relative'}>
                    <motion.img
                        src={project.imageUrl}
                        alt={imageAlt}
                        className="w-full h-full object-cover"
                        loading={isFeatured ? 'eager' : 'lazy'}
                        style={{
                            scale: 1.1, // Zoom in slightly to avoid gaps on tilt
                        }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent ${isFeatured ? 'opacity-95' : 'opacity-90'}`}></div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 z-10">
                        <span className={`px-3 py-1 rounded-md text-xs font-bold tracking-wider ${project.category === ProjectCategory.OwnService
                                ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/20'
                                : 'bg-white text-black'
                            }`}>
                            {categoryLabel}
                        </span>
                    </div>
                        {project.highlightLabelKey && (
                        <div className="absolute top-4 right-4 z-10">
                            <span className="px-3 py-1 rounded-md bg-white/90 text-black text-xs font-bold tracking-wider shadow-lg shadow-black/20">
                                {t(project.highlightLabelKey)}
                            </span>
                        </div>
                    )}
                </div>

                {/* --- Content Content --- */}
                <div className={`absolute bottom-0 left-0 w-full z-20 transform translate-z-[20px] ${isFeatured ? 'p-7 md:p-10' : 'p-8'}`}>
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-2xl font-bold text-white group-hover:text-primary-300 transition-colors font-serif">
                            {title}
                        </h3>
                        {isPrivate ? (
                            <Lock className="text-zinc-500 w-5 h-5" />
                        ) : isClickable ? (
                            <div className="p-2 bg-white/10 rounded-full backdrop-blur-sm group-hover:bg-white group-hover:text-black transition-all">
                                <ArrowUpRight className="w-5 h-5" />
                            </div>
                        ) : (
                            <span className="px-3 py-1 rounded-full border border-white/10 bg-black/20 text-[11px] font-semibold text-zinc-400">
                                {t('card.sample')}
                            </span>
                        )}
                    </div>

                    <p className={`text-zinc-300 text-sm mb-6 leading-relaxed ${isFeatured ? 'max-w-2xl md:text-base' : 'line-clamp-2'}`}>
                        {t(project.descriptionKey)}
                    </p>

                    <div className="flex flex-wrap gap-2">
                        {project.tagKeys.map((tagKey) => (
                            <span key={tagKey} className="text-xs font-medium text-zinc-500 bg-black/30 px-2 py-1 rounded border border-white/5">
                                {t(tagKey)}
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
                    rgba(255,255,255,0.15) 0%, 
                    transparent 60%
                )`
                    }}
                />

                {/* 2. Holo Foil (Rainbow Sheen) */}
                <motion.div
                    className="absolute inset-0 w-full h-full z-30 pointer-events-none mix-blend-color-dodge opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                        background: "linear-gradient(115deg, transparent 0%, rgba(0,255,255,0.1) 30%, rgba(255,0,255,0.1) 70%, transparent 100%)",
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
        className: `relative w-full h-full rounded-2xl group perspective-1000 ${isFeatured ? 'min-h-[440px] md:col-span-2' : 'min-h-[360px]'} ${isClickable ? 'cursor-pointer' : 'cursor-default'}`,
    };

    if (project.href && !isPrivate) {
        return (
            <motion.a
                {...commonProps}
                href={project.href}
                aria-label={t('card.detailAria', { title })}
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
