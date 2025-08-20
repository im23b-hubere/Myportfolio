'use client';

import { motion, useMotionValue, useSpring } from "framer-motion";
import { SiReact, SiNextdotjs, SiMongodb, SiDocker, SiGit, SiNodedotjs, SiJavascript, SiTypescript, SiTailwindcss, SiPostgresql, SiAmazon, SiVercel, SiPython, SiFlask, SiFastapi, SiPrisma, SiNextauth, SiOpenai, SiN8n, SiPillow } from 'react-icons/si';
import { SiHtml5, SiCss3 } from 'react-icons/si';
import { Cloud } from 'lucide-react';
import AnimatedSection from "./AnimatedSection";

const technologies = [
    // Frontend
    { icon: SiReact, name: "React", category: "Frontend", color: "from-blue-500 to-cyan-500" },
    { icon: SiNextdotjs, name: "Next.js", category: "Frontend", color: "from-gray-500 to-black" },
    { icon: SiJavascript, name: "JavaScript", category: "Frontend", color: "from-yellow-400 to-orange-500" },
    { icon: SiTypescript, name: "TypeScript", category: "Frontend", color: "from-blue-600 to-blue-700" },
    { icon: SiTailwindcss, name: "Tailwind CSS", category: "Frontend", color: "from-cyan-400 to-blue-500" },
    { icon: SiHtml5, name: "HTML5", category: "Frontend", color: "from-orange-500 to-red-500" },
    { icon: SiCss3, name: "CSS3", category: "Frontend", color: "from-blue-500 to-blue-600" },
    
    // Backend
    { icon: SiNodedotjs, name: "Node.js", category: "Backend", color: "from-green-500 to-emerald-500" },
    { icon: SiMongodb, name: "MongoDB", category: "Backend", color: "from-green-400 to-green-600" },
    { icon: SiPostgresql, name: "PostgreSQL", category: "Backend", color: "from-blue-400 to-blue-600" },
    { icon: SiPython, name: "Python", category: "Backend", color: "from-blue-500 to-yellow-500" },
    { icon: SiFlask, name: "Flask", category: "Backend", color: "from-gray-400 to-gray-600" },
    { icon: SiFastapi, name: "FastAPI", category: "Backend", color: "from-green-400 to-green-600" },
    { icon: SiPrisma, name: "Prisma ORM", category: "Backend", color: "from-blue-600 to-blue-800" },
    { icon: SiNextauth, name: "NextAuth.js", category: "Backend", color: "from-purple-500 to-purple-600" },
    { icon: SiOpenai, name: "OpenAI API", category: "Backend", color: "from-green-500 to-emerald-500" },
    
    // DevOps & Tools
    { icon: SiGit, name: "Git", category: "DevOps", color: "from-orange-500 to-red-500" },
    { icon: SiDocker, name: "Docker", category: "DevOps", color: "from-blue-500 to-blue-600" },
    { icon: Cloud, name: "AWS", category: "DevOps", color: "from-orange-400 to-yellow-500" },
    { icon: SiVercel, name: "Vercel", category: "DevOps", color: "from-gray-600 to-black" },
    { icon: SiN8n, name: "n8n", category: "DevOps", color: "from-purple-500 to-pink-500" },
    { icon: SiPillow, name: "Pillow (PIL)", category: "DevOps", color: "from-blue-400 to-blue-500" },
];

const TechnologyTile = ({ tech, index }) => {
    const IconComponent = tech.icon || SiGit;
    const rotateX = useMotionValue(0);
    const rotateY = useMotionValue(0);
    const rX = useSpring(rotateX, { stiffness: 300, damping: 20 });
    const rY = useSpring(rotateY, { stiffness: 300, damping: 20 });

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const px = x / rect.width;
        const py = y / rect.height;
        const max = 12; // max tilt degrees
        rotateY.set((px - 0.5) * 2 * max);
        rotateX.set((0.5 - py) * 2 * max);
    };

    const handleMouseLeave = () => {
        rotateX.set(0);
        rotateY.set(0);
    };

    return (
        <div style={{ perspective: 1000 }}>
            <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
                whileHover={{ y: -6, scale: 1.03, transition: { duration: 0.2 } }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ rotateX: rX, rotateY: rY, transformStyle: 'preserve-3d' }}
                className="group relative"
            >
                <div className="relative overflow-hidden rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 p-6 transition-all duration-300 hover:bg-gray-800/70 hover:border-gray-600/50 hover:shadow-2xl hover:shadow-black/20">
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center text-center space-y-4" style={{ transform: 'translateZ(30px)' }}>
                        <div className={`p-4 rounded-2xl bg-gradient-to-br ${tech.color} shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                            <IconComponent className="w-8 h-8 text-white" />
                        </div>

                        <div className="space-y-2">
                            <h3 className="text-lg font-semibold text-gray-200 group-hover:text-white transition-colors duration-300">
                                {tech.name}
                            </h3>
                            <span className="inline-block px-3 py-1 text-xs font-medium text-gray-400 bg-gray-700/50 rounded-full border border-gray-600/50">
                                {tech.category}
                            </span>
                        </div>
                    </div>

                    {/* Hover effect glow */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                </div>
            </motion.div>
        </div>
    );
};

const CategorySection = ({ title, technologies, category }) => {
    const filteredTechs = technologies.filter(tech => tech.category === category);
    
    if (filteredTechs.length === 0) return null;
    
    return (
        <div className="mb-12">
            <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-xl font-bold text-gray-300 mb-6 flex items-center gap-3"
            >
                <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
                {title}
            </motion.h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredTechs.map((tech, index) => (
                    <TechnologyTile 
                        key={tech.name} 
                        tech={tech} 
                        index={index}
                    />
                ))}
            </div>
        </div>
    );
};

export default function ExpertiseSection() {
    return (
        <AnimatedSection className="py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-[1.2] pb-1 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                        My Expertise
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Technologies and tools I work with to create modern, scalable applications
                    </p>
                </motion.div>
                
                <div className="space-y-16">
                    <CategorySection 
                        title="Frontend Development" 
                        technologies={technologies} 
                        category="Frontend" 
                    />
                    <CategorySection 
                        title="Backend Development" 
                        technologies={technologies} 
                        category="Backend" 
                    />
                    <CategorySection 
                        title="DevOps & Tools" 
                        technologies={technologies} 
                        category="DevOps" 
                    />
                </div>
            </div>
        </AnimatedSection>
    );
} 