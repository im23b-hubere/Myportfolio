"use client"

import { useState } from "react"
import AnimatedSection from "../components/AnimatedSection"
import AnimatedButton from "../components/AnimatedButton"
import Header from "../components/Header"

export default function ProjectsCertifications() {
    const [selectedCertificate, setSelectedCertificate] = useState(null);

    const certificates = [
        {
            id: 1,
            title: "OST AI Challenge 2024",
            organization: "Eastern Switzerland University of Applied Sciences (OST)",
            date: "2024",
            file: "/certificats/OST Teilnahmebestätigung AI-Challenge 2024.pdf",
            color: "from-emerald-500 to-blue-500"
        },
        {
            id: 2,
            title: "Python Certification",
            organization: "Online Learning Platform",
            date: "2024",
            file: "/certificats/python2024_RecordOfAchievement (2).pdf",
            color: "from-blue-500 to-purple-500"
        },
        {
            id: 3,
            title: "AWS Academy Cloud Foundations",
            organization: "Amazon Web Services",
            date: "2025",
            file: "/certificats/AWS_Academy_Graduate___AWS_Academy_Cloud_Foundations_Badge20250408-27-mqmmko.pdf",
            color: "from-amber-500 to-orange-500"
        },
        {
            id: 4,
            title: "DELF Certificate",
            organization: "French Ministry of Education",
            date: "2024",
            file: "/certificats/Delf Certifikat.pdf",
            color: "from-red-500 to-pink-500"
        }
    ];

    const openCertificate = (cert) => {
        setSelectedCertificate(cert);
    };

    const closeCertificate = () => {
        setSelectedCertificate(null);
    };

    return (
        <div className="relative">
            {/* Animated Background */}
            <div className="fixed inset-0 -z-10">
                <div className="space-bg" />
                <div className="stars" />
                <div className="stars-2" />
                <div className="nebula" />
            </div>

            {/* Navigation Menu */}
            <Header />

            {/* Projects Section */}
            <section id="projects" className="relative py-32">
                <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/50 to-black"/>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(68,68,68,0.05)_1px,transparent_1px)] bg-[length:32px_32px] animate-grid-fade"/>
                <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="text-center mb-20">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">My Projects</h2>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed text-center">
                            Here are some of my recent projects that showcase my skills and experience in web development.
                        </p>
                    </AnimatedSection>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Project 1 */}
                        <AnimatedSection>
                            <div className="group relative overflow-hidden rounded-2xl">
                                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
                                <div className="relative p-6 bg-zinc-900/80 backdrop-blur-sm border border-zinc-800/50 rounded-2xl">
                                    <div>
                                        <h3 className="text-lg font-semibold mb-3">Portfolio Website</h3>
                                        <p className="text-sm text-gray-400 leading-relaxed">
                                            Modern, responsive portfolio website built with Next.js and Tailwind CSS. Features smooth animations and a clean design.
                                        </p>
                                    </div>
                                    <div className="flex gap-4 mt-4">
                                        <AnimatedButton className="button-primary text-sm px-6 py-2">
                                            View Project
                                        </AnimatedButton>
                                        <AnimatedButton className="px-6 py-2 text-sm rounded-full border border-zinc-700 hover:border-green-500 transition-colors">
                                            Source Code
                                        </AnimatedButton>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>

                        {/* Project 2 */}
                        <AnimatedSection delay={0.2}>
                            <div className="group relative overflow-hidden rounded-2xl">
                                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
                                <div className="relative p-6 bg-zinc-900/80 backdrop-blur-sm border border-zinc-800/50 rounded-2xl">
                                    <div>
                                        <h3 className="text-lg font-semibold mb-3">Fitness Tracker App</h3>
                                        <p className="text-sm text-gray-400 leading-relaxed">
                                            A fitness tracking application that helps users monitor workouts, set goals, and track progress with data visualization.
                                        </p>
                                    </div>
                                    <div className="flex gap-4 mt-4">
                                        <AnimatedButton className="button-primary text-sm px-6 py-2">
                                            View Project
                                        </AnimatedButton>
                                        <AnimatedButton className="px-6 py-2 text-sm rounded-full border border-zinc-700 hover:border-green-500 transition-colors">
                                            Source Code
                                        </AnimatedButton>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>

                        {/* Project 3: BlissAI */}
                        <AnimatedSection delay={0.4}>
                            <div className="group relative overflow-hidden rounded-2xl">
                                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
                                <div className="relative p-6 bg-zinc-900/80 backdrop-blur-sm border border-zinc-800/50 rounded-2xl flex flex-col">
                                    <img
                                        src="/projects/BlissAI_preview.png"
                                        alt="BlissAI Chatbot Preview"
                                        className="w-full h-40 object-cover rounded-xl mb-4 shadow-lg border border-zinc-800/40"
                                        loading="lazy"
                                    />
                                    <div className="flex items-center gap-3 mb-3">
                                        <img
                                            src="/projects/BlissAI_Logo.png"
                                            alt="BlissAI Logo"
                                            className="w-10 h-10 rounded-full bg-zinc-800 p-1 border border-zinc-700 shadow"
                                            loading="lazy"
                                        />
                                        <h3 className="text-lg font-semibold">BlissAI: AI-Chatbot</h3>
                                    </div>
                                    <p className="text-sm text-gray-400 leading-relaxed mb-4">
                                        Conversational AI chatbot powered by the OpenAI API. Provides real-time, context-aware responses for a seamless user experience. Built with a modern tech stack and deployed at <a href="https://blissai.live" className="underline hover:text-blue-400" target="_blank" rel="noopener noreferrer">blissai.live</a>.
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-4" aria-label="Technologies used in BlissAI">
                                        <span className="px-3 py-1 rounded-full bg-zinc-800 text-xs text-gray-200 border border-zinc-700">Next.js</span>
                                        <span className="px-3 py-1 rounded-full bg-zinc-800 text-xs text-gray-200 border border-zinc-700">React</span>
                                        <span className="px-3 py-1 rounded-full bg-zinc-800 text-xs text-gray-200 border border-zinc-700">Tailwind CSS</span>
                                        <span className="px-3 py-1 rounded-full bg-zinc-800 text-xs text-gray-200 border border-zinc-700">OpenAI API</span>
                                        <span className="px-3 py-1 rounded-full bg-zinc-800 text-xs text-gray-200 border border-zinc-700">Node.js</span>
                                        <span className="px-3 py-1 rounded-full bg-zinc-800 text-xs text-gray-200 border border-zinc-700">Vercel</span>
                                    </div>
                                    <div className="flex gap-4 mt-auto">
                                        <AnimatedButton className="button-primary text-sm px-6 py-2" href="https://blissai.live" target="_blank" rel="noopener noreferrer">
                                            Visit BlissAI
                                        </AnimatedButton>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>

                        {/* Project 4: Currency Calculator */}
                        <AnimatedSection delay={0.6}>
                            <div className="group relative overflow-hidden rounded-2xl">
                                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
                                <div className="relative p-6 bg-zinc-900/80 backdrop-blur-sm border border-zinc-800/50 rounded-2xl flex flex-col">
                                    <div className="w-full h-40 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-xl mb-4 flex items-center justify-center border border-zinc-800/40">
                                        <div className="text-center">
                                            <div className="text-4xl mb-2">💱</div>
                                            <div className="text-sm text-gray-300 font-medium">Currency Calculator</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-blue-500 flex items-center justify-center border border-zinc-700 shadow">
                                            <span className="text-white font-bold text-lg">€</span>
                                        </div>
                                        <h3 className="text-lg font-semibold">Currency Calculator</h3>
                                    </div>
                                    <p className="text-sm text-gray-400 leading-relaxed mb-4">
                                        A minimalist currency converter web application with terminal-like interface. Features real-time exchange rates for over 150 currencies, clean design, and mobile-responsive layout. Deployed at <a href="https://currency-calculator-nu.vercel.app/" className="underline hover:text-blue-400" target="_blank" rel="noopener noreferrer">currency-calculator-nu.vercel.app</a>.
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-4" aria-label="Technologies used in Currency Calculator">
                                        <span className="px-3 py-1 rounded-full bg-zinc-800 text-xs text-gray-200 border border-zinc-700">Flask</span>
                                        <span className="px-3 py-1 rounded-full bg-zinc-800 text-xs text-gray-200 border border-zinc-700">Python</span>
                                        <span className="px-3 py-1 rounded-full bg-zinc-800 text-xs text-gray-200 border border-zinc-700">HTML/CSS</span>
                                        <span className="px-3 py-1 rounded-full bg-zinc-800 text-xs text-gray-200 border border-zinc-700">JavaScript</span>
                                        <span className="px-3 py-1 rounded-full bg-zinc-800 text-xs text-gray-200 border border-zinc-700">Exchange Rate API</span>
                                        <span className="px-3 py-1 rounded-full bg-zinc-800 text-xs text-gray-200 border border-zinc-700">Vercel</span>
                                    </div>
                                    <div className="flex gap-4 mt-auto">
                                        <AnimatedButton className="button-primary text-sm px-6 py-2" href="https://currency-calculator-nu.vercel.app/" target="_blank" rel="noopener noreferrer">
                                            Live Demo
                                        </AnimatedButton>
                                        <AnimatedButton className="px-6 py-2 text-sm rounded-full border border-zinc-700 hover:border-green-500 transition-colors" href="https://github.com/im23b-hubere/currency_calculator" target="_blank" rel="noopener noreferrer">
                                            Source Code
                                        </AnimatedButton>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>

                        {/* Project 5: Personalized Training Planner */}
                        <AnimatedSection delay={0.8}>
                            <div className="group relative overflow-hidden rounded-2xl">
                                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
                                <div className="relative p-6 bg-zinc-900/80 backdrop-blur-sm border border-zinc-800/50 rounded-2xl flex flex-col">
                                    <div className="w-full h-40 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl mb-4 flex items-center justify-center border border-zinc-800/40">
                                        <div className="text-center">
                                            <div className="text-4xl mb-2">🏋️</div>
                                            <div className="text-sm text-gray-300 font-medium">Training Planner</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center border border-zinc-700 shadow">
                                            <span className="text-white font-bold text-lg">💪</span>
                                        </div>
                                        <h3 className="text-lg font-semibold">Personalized Training Planner</h3>
                                    </div>
                                    <p className="text-sm text-gray-400 leading-relaxed mb-4">
                                        An interactive web application that creates personalized workout plans based on individual goals and fitness levels. Features multiple training types including full-body, split, PPL, HIIT, and Arnold Split routines. Modern UI with smooth animations and mobile-responsive design. Deployed at <a href="https://dein-personalisierter-trainingsplan.vercel.app/" className="underline hover:text-blue-400" target="_blank" rel="noopener noreferrer">dein-personalisierter-trainingsplan.vercel.app</a>.
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-4" aria-label="Technologies used in Personalized Training Planner">
                                        <span className="px-3 py-1 rounded-full bg-zinc-800 text-xs text-gray-200 border border-zinc-700">Next.js 14</span>
                                        <span className="px-3 py-1 rounded-full bg-zinc-800 text-xs text-gray-200 border border-zinc-700">TypeScript</span>
                                        <span className="px-3 py-1 rounded-full bg-zinc-800 text-xs text-gray-200 border border-zinc-700">Tailwind CSS</span>
                                        <span className="px-3 py-1 rounded-full bg-zinc-800 text-xs text-gray-200 border border-zinc-700">Framer Motion</span>
                                        <span className="px-3 py-1 rounded-full bg-zinc-800 text-xs text-gray-200 border border-zinc-700">React</span>
                                        <span className="px-3 py-1 rounded-full bg-zinc-800 text-xs text-gray-200 border border-zinc-700">Vercel</span>
                                    </div>
                                    <div className="flex gap-4 mt-auto">
                                        <AnimatedButton className="button-primary text-sm px-6 py-2" href="https://dein-personalisierter-trainingsplan.vercel.app/" target="_blank" rel="noopener noreferrer">
                                            Live Demo
                                        </AnimatedButton>
                                        <AnimatedButton className="px-6 py-2 text-sm rounded-full border border-zinc-700 hover:border-green-500 transition-colors" href="https://github.com/im23b-hubere/Dein-personalisierter-Trainingsplaner" target="_blank" rel="noopener noreferrer">
                                            Source Code
                                        </AnimatedButton>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Certifications Section */}
            <section id="certifications" className="relative py-32">
                <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/50 to-black"/>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(68,68,68,0.05)_1px,transparent_1px)] bg-[length:32px_32px] animate-grid-fade"/>
                <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="text-center mb-20">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Certifications</h2>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed text-center">
                            Professional certifications and achievements that validate my expertise and continuous learning.
                        </p>
                    </AnimatedSection>

                    <div className="grid md:grid-cols-3 gap-8">
                        {certificates.map((cert, index) => (
                            <AnimatedSection key={cert.id} delay={index * 0.2}>
                                <div 
                                    className="group relative overflow-hidden rounded-2xl cursor-pointer h-full"
                                    onClick={() => openCertificate(cert)}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
                                    <div className="relative p-6 bg-zinc-900/80 backdrop-blur-sm border border-zinc-800/50 rounded-2xl flex flex-col h-full">
                                        <div className="flex flex-col gap-4 h-full">
                                            <div className="relative h-32 rounded-lg overflow-hidden bg-zinc-800 flex items-center justify-center">
                                                <div className={`absolute inset-0 bg-gradient-to-r ${cert.color} opacity-20`}></div>
                                                <div className="z-10 flex flex-col items-center">
                                                    <svg 
                                                        xmlns="http://www.w3.org/2000/svg" 
                                                        className="h-12 w-12 text-white mb-2" 
                                                        viewBox="0 0 24 24"
                                                        fill="none" 
                                                        stroke="currentColor" 
                                                        strokeWidth="1.5" 
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                                    </svg>
                                                    <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                                                        Click to view PDF
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex-1 flex flex-col">
                                                <h3 className="text-lg font-semibold mb-2 line-clamp-1">{cert.title}</h3>
                                                <p className="text-sm text-gray-400 mb-1">{cert.organization}</p>
                                                <p className="text-sm text-gray-500 mt-auto">{cert.date}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certificate Modal */}
            {selectedCertificate && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={closeCertificate}></div>
                    <div className="relative bg-zinc-900 rounded-lg overflow-hidden max-w-5xl w-full max-h-[90vh] flex flex-col">
                        <div className="p-4 border-b border-zinc-800 flex justify-between items-center">
                            <h3 className="text-lg font-medium">{selectedCertificate.title}</h3>
                            <button 
                                onClick={closeCertificate}
                                className="p-1 rounded-full hover:bg-zinc-800"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex-1 overflow-auto">
                            <iframe 
                                src={selectedCertificate.file} 
                                className="w-full h-full min-h-[70vh]" 
                                title={selectedCertificate.title}
                            />
                        </div>
                        <div className="p-4 border-t border-zinc-800 flex justify-end">
                            <a 
                                href={selectedCertificate.file} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="px-4 py-2 bg-emerald-500 text-white rounded hover:bg-emerald-600 transition-colors"
                            >
                                Download
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

