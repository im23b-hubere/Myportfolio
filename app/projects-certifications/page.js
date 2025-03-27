import Link from "next/link"
import Image from "next/image"

export default function ProjectsCertifications() {
    const projects = [
        {
            id: 1,
            title: "Talent Bridge",
            description:
                "A platform connecting talented individuals with companies looking for specific skills. Built with React, Node.js, and MongoDB.",
            tags: ["React", "Node.js", "MongoDB"],
            link: "#",
        },
        {
            id: 2,
            title: "Currency Calculator",
            description:
                "A real-time currency converter with historical data visualization. Uses React, Chart.js, and currency API integration.",
            tags: ["React", "Chart.js", "API"],
            link: "#",
        },
        {
            id: 3,
            title: "Blockchain Explorer",
            description:
                "A tool for exploring blockchain transactions and smart contracts. Built with Ethereum.js, React, and Web3 technologies.",
            tags: ["Ethereum", "React", "Web3"],
            link: "#",
        },
        {
            id: 4,
            title: "AI Image Generator",
            description:
                "An application that generates images based on text prompts using machine learning models. Built with Python, TensorFlow, and React.",
            tags: ["Python", "TensorFlow", "React"],
            link: "#",
        },
    ]

    const certifications = [
        {
            id: 1,
            title: "Full Stack Web Development",
            provider: "Udemy",
            date: "January 2023",
        },
        {
            id: 2,
            title: "UI/UX Design Fundamentals",
            provider: "Coursera",
            date: "March 2022",
        },
        {
            id: 3,
            title: "Python for Data Science",
            provider: "DataCamp",
            date: "November 2021",
        },
    ]

    return (
        <div className="pt-20">
            {/* Projects Section */}
            <section className="py-20 px-4 bg-gradient-to-b from-black to-zinc-900">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-16">Projects</h1>

                    <div className="grid md:grid-cols-2 gap-8">
                        {projects.map((project, index) => (
                            <div
                                key={project.id}
                                className="card group animate-fadeInUp"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src="/placeholder.svg?height=300&width=500"
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                        <div className="p-6">
                                            <Link href={project.link} className="btn-primary text-sm">
                                                View Project
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                    <p className="text-zinc-400 mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag, index) => (
                                            <span key={index} className="bg-zinc-800 text-zinc-300 text-xs px-3 py-1 rounded-full">
                        {tag}
                      </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certifications Section */}
            <section className="py-20 px-4 bg-black">
                <div className="max-w-7xl mx-auto">
                    <h2 className="section-title">Certifications</h2>

                    <div className="space-y-6 mt-12">
                        {certifications.map((cert, index) => (
                            <div
                                key={cert.id}
                                className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 hover:border-emerald-500 transition-colors animate-fadeInUp"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                    <div>
                                        <h3 className="text-xl font-semibold">{cert.title}</h3>
                                        <p className="text-zinc-400">{cert.provider}</p>
                                    </div>
                                    <div className="text-zinc-400 bg-zinc-800 px-4 py-2 rounded-full text-sm">Completed: {cert.date}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

