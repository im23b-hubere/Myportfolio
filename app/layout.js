import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Eric Huber - Portfolio',
    description: 'Software Developer & Audio Engineer Portfolio',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body className={`${inter.className} min-h-screen bg-black text-white`}>
        {/* Space background */}
        <div className="space-bg" />
        <div className="stars" />
        <div className="stars stars-2" />
        <div className="nebula" />

        <div className="relative">
            <nav className="fixed top-0 w-full z-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <Link href="/" className="group relative">
                  <span className="text-lg font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
                    EH
                  </span>
                            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 transition-all group-hover:w-full"></div>
                        </Link>
                        <div className="hidden md:flex items-center space-x-6">
                            <Link href="/" className="nav-link group relative text-sm">
                                Home
                                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 transition-all group-hover:w-full"></div>
                            </Link>
                            <Link href="/projects" className="nav-link group relative text-sm">
                                Projects
                                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 transition-all group-hover:w-full"></div>
                            </Link>
                            <Link href="/certificates" className="nav-link group relative text-sm">
                                Certificates
                                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 transition-all group-hover:w-full"></div>
                            </Link>
                            <Link href="/contact" className="nav-link group relative text-sm">
                                Get in Touch
                                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 transition-all group-hover:w-full"></div>
                            </Link>
                        </div>
                        <button className="flex items-center p-1.5 rounded-lg text-white/80 hover:text-white transition-colors">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
                {/* Mobile menu */}
                <div className="md:hidden hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 bg-black/80 backdrop-blur-sm">
                        <Link href="/" className="block px-3 py-2 text-sm rounded-md hover:bg-zinc-800">Home</Link>
                        <Link href="/projects" className="block px-3 py-2 text-sm rounded-md hover:bg-zinc-800">Projects</Link>
                        <Link href="/certificates" className="block px-3 py-2 text-sm rounded-md hover:bg-zinc-800">Certificates</Link>
                        <Link href="/contact" className="block px-3 py-2 text-sm rounded-md hover:bg-zinc-800">Get in Touch</Link>
                    </div>
                </div>
            </nav>
            <main className="pt-16 relative">
                {children}
            </main>
            <footer className="relative mt-16">
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/50 via-zinc-900/25 to-transparent pointer-events-none" />
                <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        <div className="space-y-1.5">
                            <h3 className="text-sm font-medium text-white/90">Navigation</h3>
                            <div className="space-y-1">
                                <Link href="/imprint" className="block text-xs text-white/60 hover:text-white transition-colors">
                                    Imprint
                                </Link>
                                <Link href="/privacy" className="block text-xs text-white/60 hover:text-white transition-colors">
                                    Privacy Policy
                                </Link>
                            </div>
                        </div>
                        <div className="space-y-1.5">
                            <h3 className="text-sm font-medium text-white/90">Contact</h3>
                            <div>
                                <a href="mailto:contact@example.com" className="block text-xs text-white/60 hover:text-white transition-colors">
                                    contact@example.com
                                </a>
                            </div>
                        </div>
                        <div className="col-span-2 md:col-span-1 space-y-1.5">
                            <h3 className="text-sm font-medium text-white/90">Social</h3>
                            <div className="flex space-x-4">
                                <a href="#" className="text-white/60 hover:text-white transition-colors">
                                    <span className="sr-only">GitHub</span>
                                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                    </svg>
                                </a>
                                <a href="#" className="text-white/60 hover:text-white transition-colors">
                                    <span className="sr-only">LinkedIn</span>
                                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 text-center">
                        <p className="text-xs text-white/40">&copy; {new Date().getFullYear()} Eric Huber. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
        </body>
        </html>
    )
}
