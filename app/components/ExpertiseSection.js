'use client';

import { motion } from "framer-motion";
import { SiReact, SiNextdotjs, SiMongodb, SiDocker, SiGit, SiNodedotjs } from 'react-icons/si';
import AnimatedSection from "./AnimatedSection";

const categories = [
    {
        name: "Frontend Development",
        percentage: 90,
        color: "from-blue-500 to-cyan-500",
        technologies: [
            { icon: SiReact, name: "React" },
            { icon: SiNextdotjs, name: "Next.js" },
        ]
    },
    {
        name: "Backend Development",
        percentage: 85,
        color: "from-green-500 to-emerald-500",
        technologies: [
            { icon: SiNodedotjs, name: "Node.js" },
            { icon: SiMongodb, name: "MongoDB" },
        ]
    },
    {
        name: "Databases",
        percentage: 80,
        color: "from-yellow-500 to-orange-500",
        technologies: [
            { icon: SiMongodb, name: "MongoDB" },
        ]
    },
    {
        name: "DevOps & Tools",
        percentage: 80,
        color: "from-purple-500 to-pink-500",
        technologies: [
            { icon: SiGit, name: "Git" },
            { icon: SiDocker, name: "Docker" },
        ]
    }
];

const ProgressBar = ({ category, index }) => {
    return (
        <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold text-gray-200">{category.name}</h3>
                <span className="text-gray-400">{category.percentage}%</span>
            </div>
            <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                    className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${category.percentage}%` }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                    viewport={{ once: true }}
                />
            </div>
            <div className="mt-4 flex gap-4">
                {category.technologies.map((tech, techIndex) => (
                    <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 + techIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2 bg-gray-800/50 px-4 py-2 rounded-full"
                    >
                        <tech.icon className="w-5 h-5 text-gray-400" />
                        <span className="text-sm text-gray-300">{tech.name}</span>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default function ExpertiseSection() {
    return (
        <AnimatedSection className="py-16 px-4">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                    My Expertise
                </h2>
                <div className="space-y-8">
                    {categories.map((category, index) => (
                        <ProgressBar key={category.name} category={category} index={index} />
                    ))}
                </div>
            </div>
        </AnimatedSection>
    );
} 