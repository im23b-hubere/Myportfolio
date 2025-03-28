import Image from "next/image"
import AnimatedSection from "../components/AnimatedSection"
import AnimatedButton from "../components/AnimatedButton"

export default function ProjectsCertifications() {
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
                                <a href="/#get-in-touch" className="text-sm text-gray-300 hover:text-white transition-colors">Contact</a>
                            </div>
                        </div>
                        <div className="flex-1"></div>
                    </div>
                </div>
            </nav>

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
                                    <div className="flex flex-col gap-6">
                                        <div className="relative h-48 rounded-lg overflow-hidden">
                                    <Image
                                                src="/project1.jpg"
                                                alt="Project 1"
                                                fill
                                                className="object-cover hover:scale-105 transition-transform duration-300"
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                                quality={100}
                                            />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold mb-3">Project Name</h3>
                                            <p className="text-sm text-gray-400 leading-relaxed">
                                                Description of the project and its key features. What technologies were used and what problems did it solve?
                                            </p>
                                        </div>
                                        <div className="flex gap-4">
                                            <AnimatedButton className="button-primary text-sm px-6 py-2">
                                                View Project
                                            </AnimatedButton>
                                            <AnimatedButton className="px-6 py-2 text-sm rounded-full border border-zinc-700 hover:border-green-500 transition-colors">
                                                Source Code
                                            </AnimatedButton>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>

                        {/* Project 2 */}
                        <AnimatedSection delay={0.2}>
                            <div className="group relative overflow-hidden rounded-2xl">
                                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
                                <div className="relative p-6 bg-zinc-900/80 backdrop-blur-sm border border-zinc-800/50 rounded-2xl">
                                    <div className="flex flex-col gap-6">
                                        <div className="relative h-48 rounded-lg overflow-hidden">
                                            <Image
                                                src="/project2.jpg"
                                                alt="Project 2"
                                                fill
                                                className="object-cover hover:scale-105 transition-transform duration-300"
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                                quality={100}
                                            />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold mb-3">Project Name</h3>
                                            <p className="text-sm text-gray-400 leading-relaxed">
                                                Description of the project and its key features. What technologies were used and what problems did it solve?
                                            </p>
                                        </div>
                                        <div className="flex gap-4">
                                            <AnimatedButton className="button-primary text-sm px-6 py-2">
                                                View Project
                                            </AnimatedButton>
                                            <AnimatedButton className="px-6 py-2 text-sm rounded-full border border-zinc-700 hover:border-green-500 transition-colors">
                                                Source Code
                                            </AnimatedButton>
                                        </div>
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
                        {/* Certification 1 */}
                        <AnimatedSection>
                            <div className="group relative overflow-hidden rounded-2xl">
                                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
                                <div className="relative p-6 bg-zinc-900/80 backdrop-blur-sm border border-zinc-800/50 rounded-2xl">
                                    <div className="flex flex-col gap-4">
                                        <div className="relative h-32 rounded-lg overflow-hidden">
                                            <Image
                                                src="/cert1.jpg"
                                                alt="Certification 1"
                                                fill
                                                className="object-cover hover:scale-105 transition-transform duration-300"
                                                sizes="(max-width: 768px) 100vw, 33vw"
                                                quality={100}
                                            />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold mb-2">Certification Name</h3>
                                            <p className="text-sm text-gray-400">Issuing Organization</p>
                                            <p className="text-sm text-gray-500">Date Earned</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>

                        {/* Certification 2 */}
                        <AnimatedSection delay={0.2}>
                            <div className="group relative overflow-hidden rounded-2xl">
                                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
                                <div className="relative p-6 bg-zinc-900/80 backdrop-blur-sm border border-zinc-800/50 rounded-2xl">
                                    <div className="flex flex-col gap-4">
                                        <div className="relative h-32 rounded-lg overflow-hidden">
                                            <Image
                                                src="/cert2.jpg"
                                                alt="Certification 2"
                                                fill
                                                className="object-cover hover:scale-105 transition-transform duration-300"
                                                sizes="(max-width: 768px) 100vw, 33vw"
                                                quality={100}
                                            />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold mb-2">Certification Name</h3>
                                            <p className="text-sm text-gray-400">Issuing Organization</p>
                                            <p className="text-sm text-gray-500">Date Earned</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>

                        {/* Certification 3 */}
                        <AnimatedSection delay={0.4}>
                            <div className="group relative overflow-hidden rounded-2xl">
                                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
                                <div className="relative p-6 bg-zinc-900/80 backdrop-blur-sm border border-zinc-800/50 rounded-2xl">
                                    <div className="flex flex-col gap-4">
                                        <div className="relative h-32 rounded-lg overflow-hidden">
                                            <Image
                                                src="/cert3.jpg"
                                                alt="Certification 3"
                                                fill
                                                className="object-cover hover:scale-105 transition-transform duration-300"
                                                sizes="(max-width: 768px) 100vw, 33vw"
                                                quality={100}
                                            />
                                        </div>
                                    <div>
                                            <h3 className="text-lg font-semibold mb-2">Certification Name</h3>
                                            <p className="text-sm text-gray-400">Issuing Organization</p>
                                            <p className="text-sm text-gray-500">Date Earned</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>
        </div>
    )
}

