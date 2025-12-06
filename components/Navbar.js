'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Menu, X } from 'lucide-react'

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState(null)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
        setIsMobileMenuOpen(false)
        setActiveDropdown(null)
    }

    const navStructure = [
        {
            name: 'Products',
            type: 'dropdown',
            items: [
                { name: 'All Products', href: '/products' },
                { name: 'WhatsApp Automation', href: '/whatsapp' },
                { name: 'AI Voice Agent', href: '/ai-voice-agent' },
                { name: 'AI Assistant', href: '/assistant', badge: 'New' },
                { name: 'Full AI Business Suite', href: '/ai-suite' },
                { name: 'Features', href: '/#features' },
            ]
        },
        { name: 'Pricing', href: '/pricing', type: 'link' },
        {
            name: 'Company',
            type: 'dropdown',
            items: [
                { name: 'Why Us', href: '#why-us' },
                { name: 'Testimonials', href: '#testimonials' },
                { name: 'About', href: '#about' },
            ]
        }
    ]

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled
                ? 'glass-navbar py-4 shadow-lg shadow-neon-cyan/5'
                : 'bg-transparent py-6'
                }`}
            onMouseLeave={() => setActiveDropdown(null)}
        >
            <div className="container mx-auto px-6">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <a href="/" className="flex items-center gap-2 group z-50">
                        <div className="text-2xl md:text-3xl font-bold font-display tracking-wider text-white group-hover:scale-105 transition-transform">
                            SyncFlo<span className="text-gradient">Ai</span>
                        </div>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navStructure.map((item) => (
                            <div
                                key={item.name}
                                className="relative"
                                onMouseEnter={() => item.type === 'dropdown' && setActiveDropdown(item.name)}
                            >
                                {item.type === 'link' ? (
                                    <a
                                        href={item.href}
                                        className="text-sm font-medium text-text-secondary hover:text-white transition-colors relative group flex items-center gap-2 py-2"
                                    >
                                        {item.name}
                                    </a>
                                ) : (
                                    <button
                                        className={`text-sm font-medium transition-colors flex items-center gap-1 py-2 ${activeDropdown === item.name ? 'text-white' : 'text-text-secondary hover:text-white'
                                            }`}
                                    >
                                        {item.name}
                                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                                    </button>
                                )}

                                {/* Dropdown Menu */}
                                <AnimatePresence>
                                    {activeDropdown === item.name && item.type === 'dropdown' && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-48"
                                            onMouseEnter={() => setActiveDropdown(item.name)}
                                            onMouseLeave={() => setActiveDropdown(null)}
                                        >
                                            <div className="bg-[#0a0b1e]/95 backdrop-blur-xl border border-white/10 rounded-xl p-2 shadow-xl shadow-neon-cyan/5 overflow-hidden">
                                                {item.items.map((subItem) => (
                                                    <a
                                                        key={subItem.name}
                                                        href={subItem.href}
                                                        onClick={(e) => {
                                                            if (subItem.href.startsWith('#')) {
                                                                e.preventDefault()
                                                                scrollToSection(subItem.href.substring(1))
                                                            }
                                                        }}
                                                        className="block px-4 py-2.5 text-sm text-text-secondary hover:text-white hover:bg-white/5 rounded-lg transition-colors relative group"
                                                    >
                                                        <span className="relative z-10 flex items-center justify-between">
                                                            {subItem.name}
                                                            {subItem.badge && (
                                                                <span className="text-[10px] font-bold uppercase tracking-wider text-neon-cyan bg-neon-cyan/10 px-1.5 py-0.5 rounded-full border border-neon-cyan/20">
                                                                    {subItem.badge}
                                                                </span>
                                                            )}
                                                        </span>
                                                    </a>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>

                    {/* Right Side Actions */}
                    <div className="hidden md:flex items-center gap-6">
                        <a
                            href="https://dashboard.syncflo.xyz"
                            className="text-sm font-bold text-text-secondary hover:text-white transition-colors"
                        >
                            Login
                        </a>
                        <a
                            href="/contact"
                            className="px-6 py-2.5 rounded-full bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple text-white text-sm font-bold shadow-glow-cyan transition-all hover:scale-105 hover:shadow-glow-cosmic"
                        >
                            Contact Us
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
                        >
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-[#0a0b1e] border-b border-white/10 overflow-hidden"
                    >
                        <div className="px-6 py-6 space-y-6">
                            {navStructure.map((item) => (
                                <div key={item.name} className="space-y-3">
                                    {item.type === 'link' ? (
                                        <a
                                            href={item.href}
                                            className="block text-lg font-medium text-white"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {item.name}
                                        </a>
                                    ) : (
                                        <>
                                            <div className="text-sm font-bold text-text-muted uppercase tracking-wider">
                                                {item.name}
                                            </div>
                                            <div className="pl-4 space-y-3 border-l border-white/10">
                                                {item.items.map((subItem) => (
                                                    <a
                                                        key={subItem.name}
                                                        href={subItem.href}
                                                        onClick={(e) => {
                                                            if (subItem.href.startsWith('#')) {
                                                                e.preventDefault()
                                                                scrollToSection(subItem.href.substring(1))
                                                            } else {
                                                                setIsMobileMenuOpen(false)
                                                            }
                                                        }}
                                                        className="block text-text-secondary hover:text-white flex items-center justify-between"
                                                    >
                                                        {subItem.name}
                                                        {subItem.badge && (
                                                            <span className="text-[10px] font-bold uppercase tracking-wider text-neon-cyan bg-neon-cyan/10 px-1.5 py-0.5 rounded-full border border-neon-cyan/20">
                                                                {subItem.badge}
                                                            </span>
                                                        )}
                                                    </a>
                                                ))}
                                            </div>
                                        </>
                                    )}
                                </div>
                            ))}

                            <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
                                <a
                                    href="https://dashboard.syncflo.xyz"
                                    className="block text-center text-text-secondary hover:text-white font-bold py-2"
                                >
                                    Login
                                </a>
                                <a
                                    href="/contact"
                                    className="block text-center px-8 py-3 rounded-full bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple text-white font-bold shadow-glow-cyan"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Contact Us
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}