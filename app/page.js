import Image from "next/image";
import AnimatedSection from "./components/AnimatedSection";
import AnimatedButton from "./components/AnimatedButton";

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
            <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm border-b border-zinc-800/50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center h-16">
                        <div className="flex-1">
                            <span className="text-xl font-bold bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                                Eric Huber
                            </span>
                        </div>
                        <div className="flex-1 flex justify-center">
                            <div className="flex items-center space-x-8">
                                <a href="/" className="text-sm text-gray-300 hover:text-white transition-colors">Home</a>
                                <a href="/projects-certifications" className="text-sm text-gray-300 hover:text-white transition-colors">Projects & Certifications</a>
                                <a href="/contact" className="text-sm text-gray-300 hover:text-white transition-colors">Contact</a>
                            </div>
                        </div>
                        <div className="flex-1"></div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <div className="relative min-h-[90vh] flex items-center pt-16">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(68,68,68,0.05)_1px,transparent_1px)] bg-[length:32px_32px] animate-grid-fade"/>
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black"/>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1)_0%,transparent_50%)]"/>
                </div>

                <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <AnimatedSection>
                            <div className="space-y-8">
                                <div className="relative z-10">
                                    <h1 className="text-5xl sm:text-7xl font-bold mb-6 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent leading-tight">
                                        Hi, I'm Eric
                                    </h1>
                                    <p className="text-lg sm:text-xl text-white/80 max-w-xl leading-relaxed">
                                        A passionate Web Developer & Music Producer crafting modern web experiences and electronic music. 
                                        I blend creativity with technology to create something unique.
                                    </p>
                                </div>
                                <div className="flex gap-4">
                                    <AnimatedButton className="button-primary text-sm px-8 py-3">
                                        Kontakt aufnehmen
                                    </AnimatedButton>
                                    <AnimatedButton className="px-8 py-3 text-sm rounded-full border border-zinc-700 hover:border-green-500 transition-colors">
                                        Projekte ansehen
                                    </AnimatedButton>
                                </div>
                            </div>
                        </AnimatedSection>
                        <AnimatedSection>
                            <div className="relative aspect-square max-w-md mx-auto">
                                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-blue-500/20 to-purple-500/20 rounded-full animate-pulse"/>
                                <div className="relative h-full w-full rounded-full overflow-hidden">
                                    <Image
                                        src="/profile.jpg"
                                        alt="Eric Huber"
                                        fill
                                        className="object-cover hover:scale-105 transition-transform duration-300"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        quality={100}
                                        priority
                                    />
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
                            {name: 'Python', level: 95, color: 'from-green-500 to-emerald-500'},
                            {name: 'JavaScript / TypeScript', level: 90, color: 'from-blue-500 to-cyan-500'},
                            {name: 'React & Next.js', level: 85, color: 'from-cyan-500 to-blue-500'},
                            {name: 'Node.js', level: 80, color: 'from-green-500 to-emerald-500'},
                            {name: 'SQL & MongoDB', level: 75, color: 'from-purple-500 to-pink-500'},
                        ].map((skill, index) => (
                            <AnimatedSection key={skill.name} delay={index * 0.1}>
                                <div className="space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span className="font-medium text-gray-200">{skill.name}</span>
                                        <span className="text-gray-400">{skill.level}%</span>
                                    </div>
                                    <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                                        <div
                                            className={`h-full bg-gradient-to-r ${skill.color} animate-fill-bar`}
                                            style={{width: `${skill.level}%`}}
                                        />
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