import React, { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight, Lock } from 'lucide-react';

interface HoloCardProps {
    project: {
        id: number;
        category: 'Own Service' | 'Partnership';
        title: string;
        description: string;
        tags: string[];
        imageUrl: string;
        isPrivate?: boolean;
    };
}

const HoloCard: React.FC<HoloCardProps> = ({ project }) => {
    const ref = useRef<HTMLDivElement>(null);

    // Motion values for mouse position
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth springs for rotation with damping to simulate weight
    const mouseX = useSpring(x, { stiffness: 300, damping: 30 });
    const mouseY = useSpring(y, { stiffness: 300, damping: 30 });

    // Calculating rotation: Screen Top/Left -> Tilt Back/Right
    // Adjust these limits (e.g., 15deg) for more/less extreme tilt
    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"]);

    // Highlight/Glare position (moves opposite to tilt for realism)
    const glareX = useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"]);
    const glareY = useTransform(mouseY, [-0.5, 0.5], ["0%", "100%"]);

    // Holographic sheen opacity (visible mostly when moving)
    const sheenOpacity = useTransform(mouseX, [-0.5, 0, 0.5], [0.3, 0, 0.3]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();

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

    return (
        <motion.div
            ref={ref}
            style={{
                transformStyle: "preserve-3d",
                rotateX,
                rotateY,
            }}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            layout
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative w-full h-full rounded-2xl cursor-pointer group perspective-1000"
        >
            {/* Shadow Drop (Static behind to emphasize lift) */}
            <div className="absolute inset-4 bg-black/50 blur-xl rounded-2xl transform translate-z-[-20px] transition-all group-hover:bg-black/80 group-hover:scale-95" />

            <div
                className="relative h-full w-full bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 group-hover:border-zinc-500/50 transition-colors"
                style={{ transform: "translateZ(0px)" }} // Fix z-fighting
            >

                {/* --- Image Layer --- */}
                <div className="aspect-[16/10] overflow-hidden bg-zinc-800 relative">
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
                        <span className={`px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider ${project.category === 'Own Service'
                                ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/20'
                                : 'bg-white text-black'
                            }`}>
                            {project.category}
                        </span>
                    </div>
                </div>

                {/* --- Content Content --- */}
                <div className="absolute bottom-0 left-0 w-full p-8 z-20 transform translate-z-[20px]">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-2xl font-bold text-white group-hover:text-primary-300 transition-colors font-serif">
                            {project.title}
                        </h3>
                        {project.isPrivate ? (
                            <Lock className="text-zinc-500 w-5 h-5" />
                        ) : (
                            <div className="p-2 bg-white/10 rounded-full backdrop-blur-sm group-hover:bg-white group-hover:text-black transition-all">
                                <ArrowUpRight className="w-5 h-5" />
                            </div>
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
        </motion.div>
    );
};

export default HoloCard;
