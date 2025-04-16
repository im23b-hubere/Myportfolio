"use client"

import Link from "next/link"

export default function Header() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-green-500/30">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center h-16">
                    <div className="flex-1">
                        <Link href="/" className="text-xl font-bold bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                            Eric Huber
                        </Link>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <div className="flex items-center space-x-8">
                            <Link href="/" className="text-sm text-gray-300 hover:text-white hover:text-green-500 transition-colors">
                                Home
                            </Link>
                            <Link href="/projects-certifications" className="text-sm text-gray-300 hover:text-white hover:text-green-500 transition-colors">
                                Projects & Certifications
                            </Link>
                            <Link href="/contact" className="text-sm text-gray-300 hover:text-white hover:text-green-500 transition-colors">
                                Contact
                            </Link>
                        </div>
                    </div>
                    <div className="flex-1"></div>
                </div>
            </div>
        </nav>
    )
}

