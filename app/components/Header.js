"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-black/90 backdrop-blur-sm py-3" : "bg-transparent py-5"}`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                <Link href="/" className="font-bold text-xl md:text-2xl text-white hover:text-emerald-500 transition-colors">
                    Eric Huber
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-8">
                    <Link href="/" className="nav-link">
                        About me
                    </Link>
                    <Link href="/projects-certifications" className="nav-link">
                        Projects & Certifications
                    </Link>
                    <Link href="/get-in-touch" className="nav-link">
                        Get in Touch
                    </Link>
                    <Link href="/impressum" className="nav-link">
                        Impressum
                    </Link>
                    <Link href="/datenschutz" className="nav-link">
                        Datenschutz
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm border-t border-zinc-800 animate-fadeInUp">
                    <nav className="max-w-7xl mx-auto px-4 py-5 flex flex-col space-y-4">
                        <Link href="/" className="nav-link py-2" onClick={() => setIsMenuOpen(false)}>
                            About me
                        </Link>
                        <Link href="/projects-certifications" className="nav-link py-2" onClick={() => setIsMenuOpen(false)}>
                            Projects & Certifications
                        </Link>
                        <Link href="/get-in-touch" className="nav-link py-2" onClick={() => setIsMenuOpen(false)}>
                            Get in Touch
                        </Link>
                        <Link href="/impressum" className="nav-link py-2" onClick={() => setIsMenuOpen(false)}>
                            Impressum
                        </Link>
                        <Link href="/datenschutz" className="nav-link py-2" onClick={() => setIsMenuOpen(false)}>
                            Datenschutz
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    )
}

