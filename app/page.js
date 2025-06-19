import Image from "next/image";
import AnimatedSection from "./components/AnimatedSection";
import AnimatedButton from "./components/AnimatedButton";
import Header from "./components/Header";

export default function Home() {
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

            {/* Hero Section */}
            <div className="relative min-h-[90vh] flex items-center pt-16">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(68,68,68,0.05)_1px,transparent_1px)] bg-[length:32px_32px] animate-grid-fade"/>
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black"/>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1)_0%,transparent_50%)]"/>
                </div>

                <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center text-center md:text-left">
                        <AnimatedSection className="order-2 md:order-1 flex flex-col items-center md:items-start">
                            <div className="space-y-8 w-full">
                                <div className="relative z-10 w-full">
                                    <h1 className="text-5xl sm:text-7xl font-bold mb-6 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent leading-tight w-full">
                                        Hi, I'm Eric
                                    </h1>
                                    <p className="text-lg sm:text-xl text-white/80 max-w-xl leading-relaxed mx-auto md:mx-0">
                                        A passionate Web Developer & Music Producer crafting modern web experiences and electronic music. 
                                        I blend creativity with technology to create something unique.
                                    </p>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start w-full">
                                    <AnimatedButton className="button-primary text-sm px-8 py-3" href="/contact">
                                        Kontakt aufnehmen
                                    </AnimatedButton>
                                    <AnimatedButton className="px-8 py-3 text-sm rounded-full border border-zinc-700 hover:border-green-500 transition-colors" href="/projects-certifications">
                                        Projekte ansehen
                                    </AnimatedButton>
                                </div>
                            </div>
                        </AnimatedSection>
                        <AnimatedSection className="order-1 md:order-2 flex justify-center">
                            <div className="relative aspect-square w-[120px] sm:w-[180px] md:w-full md:h-[400px] lg:h-[500px] mx-auto p-1 sm:p-2 md:p-4 min-h-[80px] z-10 mt-4 md:mt-0">
                                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-blue-500/20 to-purple-500/20 rounded-full"/>
                                <div className="absolute inset-4 bg-zinc-900 rounded-full overflow-hidden flex items-center justify-center">
                                    {/* Platzhalter-Avatar-Icon */}
                                    <svg
                                        width="100%"
                                        height="100%"
                                        viewBox="0 0 128 128"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-full h-full"
                                    >
                                        <circle cx="64" cy="64" r="64" fill="#23272f" />
                                        <ellipse cx="64" cy="54" rx="28" ry="28" fill="#444857" />
                                        <ellipse cx="64" cy="110" rx="40" ry="22" fill="#444857" />
                                        <ellipse cx="64" cy="54" rx="18" ry="18" fill="#6b7280" />
                                        <ellipse cx="64" cy="110" rx="28" ry="14" fill="#6b7280" />
                                    </svg>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </div>

            {/* Skills Section */}
            <section id="expertise" className="relative py-32 section-transition section-glow">
                <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/50 to-black"/>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(68,68,68,0.05)_1px,transparent_1px)] bg-[length:32px_32px] animate-grid-fade"/>
                <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="text-center mb-20">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">My Expertise</h2>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed text-center">
                            From the first line of code to complex applications, my journey in tech has been driven by curiosity and a 
                            passion for creating innovative solutions. I specialize in building modern, responsive web applications 
                            that combine elegant design with powerful functionality.
                        </p>
                    </AnimatedSection>

                    <div className="grid gap-8 max-w-3xl mx-auto mt-12">
                        {[
                            {
                                name: 'Frontend Development',
                                level: 90,
                                color: 'from-blue-500 to-cyan-500',
                                technologies: ['React', 'Next.js', 'HTML/CSS', 'JavaScript/TypeScript']
                            },
                            {
                                name: 'Backend Development',
                                level: 85,
                                color: 'from-green-500 to-emerald-500',
                                technologies: ['Python', 'Node.js', 'REST APIs', 'MongoDB/SQL']
                            },
                            {
                                name: 'Databases',
                                level: 75,
                                color: 'from-purple-500 to-pink-500',
                                technologies: ['MySQL', 'MongoDB', 'PostgreSQL']
                            },
                            {
                                name: 'DevOps & Tools',
                                level: 80,
                                color: 'from-cyan-500 to-blue-500',
                                technologies: ['Git/GitHub', 'Docker', 'AWS', 'CI/CD']
                            },
                        ].map((skill, index) => (
                            <AnimatedSection key={skill.name} delay={index * 0.1}>
                                <div className="space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span className="font-medium text-gray-200">{skill.name}</span>
                                        <span className="text-gray-400">{skill.level}%</span>
                                    </div>
                                    <div className="h-3 bg-zinc-800 rounded-full overflow-hidden">
                                        <div
                                            className={`h-full bg-gradient-to-r ${skill.color} animate-fill-bar`}
                                            style={{width: `${skill.level}%`}}
                                        />
                                    </div>
                                    <div className="flex flex-wrap gap-3 mt-3">
                                        {skill.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-4 py-1 rounded-full bg-zinc-800/80 text-gray-200 text-sm font-medium shadow-sm border border-zinc-700"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Beyond Code Section */}
            <section id="beyond-code" className="relative py-32 section-transition section-glow">
                <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/50 to-black"/>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(68,68,68,0.05)_1px,transparent_1px)] bg-[length:32px_32px] animate-grid-fade"/>
                <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="text-center mb-20">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Beyond Code</h2>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed text-center">
                            When I'm not immersed in code, I explore other passions that fuel my creativity and drive. These diverse 
                            interests shape my perspective and enhance my problem-solving abilities in unique ways.
                        </p>
                    </AnimatedSection>

                    <div className="space-y-8 mt-12">
                        <AnimatedSection>
                            <div className="group relative overflow-hidden rounded-2xl card-hover hover-lift">
                                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
                                <div className="relative p-6 bg-zinc-900/80 backdrop-blur-sm border border-zinc-800/50 rounded-2xl">
                                    <div className="flex flex-col md:flex-row gap-6">
                                        <div className="flex-1">
                                            <h3 className="text-lg font-semibold mb-3">Musikproduktion</h3>
                                            <p className="text-sm text-gray-400 leading-relaxed">
                                                I have loved music since kindergarten. I started with the drums (and other percussion 
                                                instruments) for over 9 years. At some point I started producing beats on the pc, 
                                                mostly in the hip-hop or house genre, and I've loved it ever since. My dream would 
                                                be to become successful with it, but since I don't have the time at the moment, 
                                                I keep it as a hobby.
                                            </p>
                                        </div>
                                        <div className="md:w-72 h-48 relative rounded-lg overflow-hidden">
                                            <Image
                                                src="/ableton.jpg"
                                                alt="Ableton Live DAW Interface"
                                                fill
                                                className="object-cover hover:scale-105 transition-transform duration-300"
                                                sizes="(max-width: 768px) 100vw, 288px"
                                                quality={100}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection delay={0.2}>
                            <div className="group relative overflow-hidden rounded-2xl card-hover hover-lift">
                                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
                                <div className="relative p-6 bg-zinc-900/80 backdrop-blur-sm border border-zinc-800/50 rounded-2xl">
                                    <div className="flex flex-col md:flex-row gap-6">
                                        <div className="flex-1">
                                            <h3 className="text-lg font-semibold mb-3">Fitness</h3>
                                            <p className="text-sm text-gray-400 leading-relaxed">
                                                Besides spending time at the computer, I'm also passionate about strength training. 
                                                After quitting soccer a few years ago, I started going to the gym regularly, and it 
                                                quickly became a big part of my life. Right now, I aim to train five times a week. 
                                                With all the training, I also pay close attention to my diet to maintain a healthy 
                                                and strong body.
                                            </p>
                                        </div>
                                        <div className="md:w-72 h-48 relative rounded-lg overflow-hidden">
                                            <Image
                                                src="/fitness.jpg"
                                                alt="Fitness-Studio mit Hanteln"
                                                fill
                                                className="object-cover hover:scale-105 transition-transform duration-300"
                                                sizes="(max-width: 768px) 100vw, 288px"
                                                quality={100}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection delay={0.4}>
                            <div className="group relative overflow-hidden rounded-2xl card-hover hover-lift">
                                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
                                <div className="relative p-6 bg-zinc-900/80 backdrop-blur-sm border border-zinc-800/50 rounded-2xl">
                                    <div className="flex flex-col md:flex-row gap-6">
                                        <div className="flex-1">
                                            <h3 className="text-lg font-semibold mb-3">From Slopes to Waves</h3>
                                            <p className="text-sm text-gray-400 leading-relaxed">
                                                In winter, I spend almost every weekend in the Alps skiing. I love the speed, the fresh 
                                                mountain air, and just having a great time on the slopes. Whenever I get the chance, 
                                                I go kite surfing. Last year, my family and I traveled to Brazil to a great kitesurfing 
                                                spot to learn the sport, and since then, I can't wait to go again. I'm always up for 
                                                trying new sports and pushing myself in different ways.
                                            </p>
                                        </div>
                                        <div className="md:w-72 h-48 relative rounded-lg overflow-hidden">
                                            <Image
                                                src="/kitesurfing.jpg"
                                                alt="Kitesurfer auf blauem Ozean"
                                                fill
                                                className="object-cover hover:scale-105 transition-transform duration-300"
                                                sizes="(max-width: 768px) 100vw, 288px"
                                                quality={100}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>
        </div>
    );
}