"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-green-500/30">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center h-16 relative">
                    <div className="flex-1">
                        <Link href="/" className="text-xl font-bold bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                            Eric Huber
                        </Link>
                    </div>
                    {/* Desktop Nav */}
                    <div className="hidden md:flex flex-1 justify-center">
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
                    {/* Hamburger Icon for Mobile */}
                    <div className="flex-1 flex justify-end md:hidden">
                        <button
                            aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
                            onClick={() => setMenuOpen((v) => !v)}
                            className="p-2 rounded-lg hover:bg-zinc-800/60 focus:outline-none focus:ring-2 focus:ring-green-500 transition flex items-center justify-center"
                        >
                            <motion.div
                                initial={false}
                                animate={{ rotate: menuOpen ? 90 : 0 }}
                                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                            >
                                <AnimatePresence mode="wait" initial={false}>
                                    {menuOpen ? (
                                        <motion.span
                                            key="close"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.8 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <X size={28} className="text-gray-200" />
                                        </motion.span>
                                    ) : (
                                        <motion.span
                                            key="menu"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.8 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <Menu size={28} className="text-gray-200" />
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        </button>
                    </div>
                    {/* Mobile Dropdown Menu */}
                    <AnimatePresence>
                        {menuOpen && (
                            <motion.div
                                key="mobile-menu"
                                initial={{ opacity: 0, y: -24 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -24 }}
                                transition={{ duration: 0.28, ease: "easeOut" }}
                                className="absolute top-16 right-4 left-4 bg-zinc-900/95 border border-zinc-800 rounded-2xl shadow-xl flex flex-col items-center py-6 gap-4 backdrop-blur-xl z-50 md:hidden"
                            >
                                <Link href="/" className="w-full text-center text-lg text-gray-200 hover:text-green-500 transition-colors py-2 font-semibold" onClick={() => setMenuOpen(false)}>
                                    Home
                                </Link>
                                <Link href="/projects-certifications" className="w-full text-center text-lg text-gray-200 hover:text-green-500 transition-colors py-2 font-semibold" onClick={() => setMenuOpen(false)}>
                                    Projects & Certifications
                                </Link>
                                <Link href="/contact" className="w-full text-center text-lg text-gray-200 hover:text-green-500 transition-colors py-2 font-semibold" onClick={() => setMenuOpen(false)}>
                                    Contact
                                </Link>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </nav>
    )
}

