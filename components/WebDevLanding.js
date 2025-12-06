'use client'

import { useRef, useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import CTA from './CTA'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Check, Code, Cpu, Globe, Zap, Layers, Smartphone, Calendar, Trophy, TrendingUp, HelpCircle, BarChart } from 'lucide-react'

export default function WebDevLanding() {
    const containerRef = useRef(null)
    const processRef = useRef(null)
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const { scrollYProgress: processProgress } = useScroll({
        target: processRef,
        offset: ["start start", "end end"]
    })

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
        }
        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })

    const y = useTransform(scrollYProgress, [0, 1], [0, 200])

    return (
        <div ref={containerRef} className="bg-[#030014] min-h-screen text-white font-sans selection:bg-[#2f1f5c] overflow-x-clip">
            {/* Global Noise Overlay */}
            <div className="fixed inset-0 z-[1] pointer-events-none opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: 'url("/noise.png")' }}></div>

            <Navbar />

            {/* Hero Section - Kinetic & Abstract */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1a0b2e] via-[#030014] to-[#030014]"></div>
                    <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow"></div>
                    <div className="absolute bottom-[-10%] right-[20%] w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow delay-75"></div>
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 pt-32 pb-20">
                    <div className="flex flex-col items-center text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-12 hover:bg-white/10 transition-colors cursor-default backdrop-blur-md"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            <span className="text-sm font-medium text-white/80 tracking-wide uppercase">Accepting New Projects Q1 2026</span>
                        </motion.div>

                        <motion.div style={{ opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]), scale: useTransform(scrollYProgress, [0, 0.2], [1, 0.9]) }}>
                            <h1 className="text-7xl md:text-[10rem] font-bold font-display tracking-tighter leading-[0.85] mb-8">
                                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">Digital</span>
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient-x pb-4">
                                    Empire.
                                </span>
                            </h1>

                            <p className="text-xl md:text-3xl text-white/60 max-w-4xl mx-auto mb-16 leading-relaxed font-light">
                                We don't just build websites. We engineer <span className="text-white font-medium">high-performance assets</span> that command authority and print revenue.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-6"
                        >
                            <Link
                                href="/web-dev-pricing"
                                className="group relative px-8 py-4 rounded-full bg-white text-black font-bold text-lg overflow-hidden transition-transform hover:scale-105"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    View Pricing <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-200 to-indigo-200 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </Link>
                            <Link
                                href="/contact"
                                className="px-8 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white font-semibold text-lg hover:bg-white/10 transition-all hover:scale-105"
                            >
                                Book Consultation
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Tech Stack Marquee */}
            <section className="py-12 border-y border-white/5 bg-white/[0.02] overflow-hidden">
                <div className="flex gap-16 animate-infinite-scroll min-w-full">
                    {[1, 2].map((i) => (
                        <div key={i} className="flex gap-16 items-center shrink-0">
                            {['Next.js', 'React', 'TypeScript', 'Tailwind', 'Framer', 'Supabase', 'Node.js', 'Vercel'].map((tech) => (
                                <span key={tech} className="text-2xl font-bold text-white/20 font-display uppercase tracking-widest hover:text-white/40 transition-colors">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    ))}
                </div>
            </section>

            {/* Bento Grid Showcase */}
            <section className="py-32 relative">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl md:text-6xl font-bold font-display mb-6">Unfair Advantage</h2>
                        <p className="text-xl text-white/50 max-w-2xl mx-auto">
                            We leverage cutting-edge technology to give your business a digital presence that competitors simply cannot match.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[800px]">
                        {/* Large Card - Performance */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="col-span-1 md:col-span-2 md:row-span-2 rounded-[2rem] bg-[#0B0F19] border border-white/10 overflow-hidden relative group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            {/* Spotlight Effect */}
                            <div className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30" style={{ background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(168, 85, 247, 0.1), transparent 40%)` }}></div>

                            <div className="p-10 relative z-10 h-full flex flex-col justify-between">
                                <div>
                                    <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform duration-500">
                                        <Zap className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-3xl font-bold mb-4">Blazing Fast Speed</h3>
                                    <p className="text-white/60 text-lg leading-relaxed">
                                        We obsess over milliseconds. Using Next.js and Vercel's edge network, our sites load instantly anywhere in the world.
                                        Higher speed = Higher SEO rankings = More conversions.
                                    </p>
                                </div>
                                <div className="mt-8 relative h-48 rounded-xl bg-black/50 border border-white/10 overflow-hidden flex items-center justify-center group-hover:border-purple-500/50 transition-colors duration-500">
                                    {/* Simulated Google Score */}
                                    <div className="text-center scale-90 group-hover:scale-110 transition-transform duration-500">
                                        <div className="text-6xl font-bold text-green-500 mb-2 drop-shadow-[0_0_15px_rgba(34,197,94,0.5)]">100</div>
                                        <div className="text-sm text-white/40 uppercase tracking-widest">Performance Score</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Medium Card - Design */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="col-span-1 md:col-span-2 md:row-span-1 rounded-[2rem] bg-[#0B0F19] border border-white/10 overflow-hidden relative group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            {/* Spotlight */}
                            <div className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30" style={{ background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(236, 72, 153, 0.1), transparent 40%)` }}></div>

                            <div className="p-10 relative z-10 flex items-center gap-8">
                                <div className="flex-1">
                                    <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center text-pink-400 mb-6 group-hover:scale-110 transition-transform duration-500">
                                        <Layers className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2">Award-Winning Design</h3>
                                    <p className="text-white/60">
                                        Glassmorphism, parallax effects, and fluid animations that keep users glued to the screen.
                                    </p>
                                </div>
                                <div className="hidden md:block w-32 h-32 rounded-full blur-[50px] bg-pink-500/30 animate-pulse"></div>
                            </div>
                        </motion.div>

                        {/* Small Card - SEO */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="col-span-1 md:col-span-1 md:row-span-1 rounded-[2rem] bg-[#0B0F19] border border-white/10 overflow-hidden relative group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            {/* Spotlight */}
                            <div className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30" style={{ background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 40%)` }}></div>

                            <div className="p-8 relative z-10">
                                <Globe className="w-10 h-10 text-blue-400 mb-6 group-hover:rotate-12 transition-transform duration-500" />
                                <h3 className="text-xl font-bold mb-2">SEO Native</h3>
                                <p className="text-sm text-white/50">Built-in schema markup and meta tags for Google dominance.</p>
                            </div>
                        </motion.div>

                        {/* Small Card - Mobile First */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="col-span-1 md:col-span-1 md:row-span-1 rounded-[2rem] bg-[#0B0F19] border border-white/10 overflow-hidden relative group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            {/* Spotlight */}
                            <div className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30" style={{ background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(34, 197, 94, 0.15), transparent 40%)` }}></div>

                            <div className="p-8 relative z-10">
                                <Smartphone className="w-10 h-10 text-green-400 mb-6 group-hover:-rotate-12 transition-transform duration-500" />
                                <h3 className="text-xl font-bold mb-2">Responsive</h3>
                                <p className="text-sm text-white/50">Flawless experience across all devices, from iPhone to 4K monitors.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Featured Projects - Digital Monuments (Sticky & Alternating) */}
            <section className="py-32 bg-[#020205] border-t border-white/5 relative">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.05]"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-24 items-start">

                        {/* Left Side - Sticky Title */}
                        <div className="lg:w-1/3 h-fit lg:sticky lg:top-48 mb-12 lg:mb-0">
                            <div className="text-purple-500 font-medium tracking-widest uppercase mb-4">Selected Works</div>
                            <h2 className="text-4xl md:text-7xl font-bold font-display leading-tight mb-8">
                                Digital <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">Monuments</span>
                            </h2>
                            <p className="text-xl text-white/50 leading-relaxed">
                                We don't build pages. We build empires. <br />
                                <span className="text-white">Real revenue engines</span> engineered for scale.
                            </p>
                        </div>

                        {/* Right Side - Alternating Cards */}
                        <div className="lg:w-2/3 flex flex-col gap-32">
                            {/* Case 1: FinTech High Speed */}
                            <motion.div
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="group relative"
                            >
                                <div className="grid grid-cols-1 gap-8">
                                    <div className="relative h-[300px] md:h-[500px] rounded-[2rem] overflow-hidden border border-white/10 group-hover:border-purple-500/50 transition-colors duration-500">
                                        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black"></div>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            {/* Abstract UI Representation */}
                                            <div className="relative w-3/4 h-3/4 bg-[#0B0F19] rounded-xl border border-white/10 p-6 flex flex-col gap-4 group-hover:scale-105 transition-transform duration-700">
                                                <div className="flex justify-between items-center pb-4 border-b border-white/5">
                                                    <div className="w-24 h-6 bg-white/10 rounded-full animate-pulse"></div>
                                                    <div className="w-8 h-8 rounded-full bg-green-500/20"></div>
                                                </div>
                                                <div className="flex gap-4 h-full items-end">
                                                    <div className="w-1/4 h-[40%] bg-purple-500/20 rounded-t-lg"></div>
                                                    <div className="w-1/4 h-[70%] bg-purple-500/40 rounded-t-lg"></div>
                                                    <div className="w-1/4 h-[50%] bg-purple-500/30 rounded-t-lg"></div>
                                                    <div className="w-1/4 h-[90%] bg-purple-500 rounded-t-lg shadow-[0_0_30px_rgba(168,85,247,0.5)]"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-purple-400 transition-colors">NeonVerse Exchange</h3>
                                        <div className="flex flex-wrap gap-3 mb-6">
                                            {['FinTech', 'Real-Time', 'WebGL'].map(tag => (
                                                <span key={tag} className="px-3 py-1 rounded-full border border-white/10 text-xs font-medium uppercase tracking-wider text-white/60">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <p className="text-white/50 mb-8 leading-relaxed">
                                            A high-frequency trading terminal handling $500M+ daily volume. Sub-50ms latency updates via WebSockets and a custom WebGL charting engine that renders 1M+ data points without stutter.
                                        </p>
                                        <div className="grid grid-cols-2 gap-8 py-6 border-y border-white/10">
                                            <div>
                                                <div className="text-3xl font-bold text-white mb-1">50ms</div>
                                                <div className="text-xs text-white/40 uppercase tracking-widest">Latency</div>
                                            </div>
                                            <div>
                                                <div className="text-3xl font-bold text-white mb-1">$500M</div>
                                                <div className="text-xs text-white/40 uppercase tracking-widest">Daily Vol</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Case 2: Luxury E-commerce */}
                            <motion.div
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="group relative"
                            >
                                <div className="grid grid-cols-1 gap-8">
                                    <div className="relative h-[300px] md:h-[500px] rounded-[2rem] overflow-hidden border border-white/10 group-hover:border-amber-500/50 transition-colors duration-500">
                                        <div className="absolute inset-0 bg-gradient-to-bl from-amber-950 to-black"></div>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            {/* Abstract 3D shape */}
                                            <div className="w-64 h-64 bg-amber-500/20 rounded-full blur-3xl animate-pulse"></div>
                                            <div className="relative z-10 w-48 h-48 border border-amber-500/30 rotate-45 backdrop-blur-sm group-hover:rotate-90 transition-transform duration-[1.5s]"></div>
                                            <div className="absolute z-10 w-40 h-40 border border-amber-200/50 rotate-12 group-hover:-rotate-12 transition-transform duration-[1.5s]"></div>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-amber-400 transition-colors">Velvet & Gold</h3>
                                        <div className="flex flex-wrap gap-3 mb-6">
                                            {['E-Commerce', '3D Configurator', 'Luxury'].map(tag => (
                                                <span key={tag} className="px-3 py-1 rounded-full border border-white/10 text-xs font-medium uppercase tracking-wider text-white/60">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <p className="text-white/50 mb-8 leading-relaxed">
                                            We replaced static product images with a real-time ray-traced 3D configurator. Customers can view diamond refraction and gold textures in 4K detail, leading to a massive spike in engagement.
                                        </p>
                                        <div className="grid grid-cols-2 gap-8 py-6 border-y border-white/10">
                                            <div>
                                                <div className="text-3xl font-bold text-white mb-1">400%</div>
                                                <div className="text-xs text-white/40 uppercase tracking-widest">Conv. Rate</div>
                                            </div>
                                            <div>
                                                <div className="text-3xl font-bold text-white mb-1">2x</div>
                                                <div className="text-xs text-white/40 uppercase tracking-widest">AOV</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Case 3: AI Core */}
                            <motion.div
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="group relative"
                            >
                                <div className="grid grid-cols-1 gap-8">
                                    <div className="relative h-[300px] md:h-[500px] rounded-[2rem] overflow-hidden border border-white/10 group-hover:border-cyan-500/50 transition-colors duration-500">
                                        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-950 to-black"></div>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            {/* Neural Network Viz */}
                                            <div className="relative w-full h-full flex items-center justify-center opacity-50">
                                                <div className="absolute w-[120%] h-[1px] bg-cyan-500/50 rotate-45"></div>
                                                <div className="absolute w-[120%] h-[1px] bg-cyan-500/50 -rotate-45"></div>
                                                <div className="absolute w-[1px] h-[120%] bg-cyan-500/50"></div>
                                                <div className="w-32 h-32 bg-cyan-500/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-cyan-400 transition-colors">Neural Nexus</h3>
                                        <div className="flex flex-wrap gap-3 mb-6">
                                            {['AI', 'Series A', 'Dashboard'].map(tag => (
                                                <span key={tag} className="px-3 py-1 rounded-full border border-white/10 text-xs font-medium uppercase tracking-wider text-white/60">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <p className="text-white/50 mb-8 leading-relaxed">
                                            A mission-control dashboard for a deep-learning infrastructure startup. We visualized terabytes of training data in real-time, directly contributing to their successful $12M Series A raise.
                                        </p>
                                        <div className="grid grid-cols-2 gap-8 py-6 border-y border-white/10">
                                            <div>
                                                <div className="text-3xl font-bold text-white mb-1">$12M</div>
                                                <div className="text-xs text-white/40 uppercase tracking-widest">Funding</div>
                                            </div>
                                            <div>
                                                <div className="text-3xl font-bold text-white mb-1">10TB+</div>
                                                <div className="text-xs text-white/40 uppercase tracking-widest">Data Viz</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section - Sticky Stack */}
            <section ref={processRef} className="relative bg-black py-32">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-24 items-start">
                        {/* Left Side - Sticky Title & Progress */}
                        <div className="lg:w-1/3 h-fit lg:sticky lg:top-48 mb-12 lg:mb-0">
                            <h2 className="text-5xl md:text-6xl font-bold font-display mb-8 leading-tight">
                                The <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Blueprint</span>
                            </h2>
                            <p className="text-xl text-white/50 mb-12 leading-relaxed">
                                A relentless 4-step framework designed to take you from concept to market dominance.
                            </p>

                            <div className="flex items-center gap-4 text-sm font-medium text-white/30 uppercase tracking-widest">
                                <motion.div style={{ width: useTransform(processProgress, [0, 1], ["0%", "100%"]) }} className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-0"></motion.div>
                                <span className="shrink-0">Process Status</span>
                            </div>
                        </div>

                        {/* Right Side - Stacking Cards */}
                        <div className="lg:w-2/3 flex flex-col gap-24 pb-32 [--stack-top:100px] lg:[--stack-top:150px]">
                            {[
                                {
                                    phase: "01",
                                    title: "Strategic Discovery",
                                    desc: "We analyze your market, dissect competitors, and map out a user journey that forces conversion. No guessing, just data.",
                                    icon: <Globe className="w-8 h-8" />,
                                    color: "from-blue-500/20 to-purple-500/20",
                                    border: "group-hover:border-blue-500/50"
                                },
                                {
                                    phase: "02",
                                    title: "UX/UI Architecture",
                                    desc: "Wireframes turn into high-fidelity prototypes. We iterate until the design is indistinguishable from magic.",
                                    icon: <Layers className="w-8 h-8" />,
                                    color: "from-purple-500/20 to-pink-500/20",
                                    border: "group-hover:border-purple-500/50"
                                },
                                {
                                    phase: "03",
                                    title: "Elite Engineering",
                                    desc: "Our senior developers take over. Clean code, headless architecture, and edge caching for sub-second speeds.",
                                    icon: <Code className="w-8 h-8" />,
                                    color: "from-pink-500/20 to-red-500/20",
                                    border: "group-hover:border-pink-500/50"
                                },
                                {
                                    phase: "04",
                                    title: "Launch & Dominion",
                                    desc: "Rigorous QA testing. SEO implementation. Analytics setup. We push live and watch your metrics climb.",
                                    icon: <Trophy className="w-8 h-8" />,
                                    color: "from-red-500/20 to-orange-500/20",
                                    border: "group-hover:border-red-500/50"
                                }
                            ].map((step, idx) => (
                                <div
                                    key={idx}
                                    className={`sticky bg-[#0B0F19] border border-white/10 rounded-[2.5rem] p-10 md:p-14 overflow-hidden group shadow-2xl transition-all duration-500 ${step.border}`}
                                    style={{ top: `calc(var(--stack-top, 100px) + ${idx * 30}px)`, zIndex: idx + 1 }}
                                >
                                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
                                    <div className="relative z-10">
                                        <div className="flex justify-between items-start mb-10">
                                            <div className="p-4 rounded-2xl bg-white/5 text-white border border-white/10 group-hover:scale-110 transition-transform duration-500">
                                                {step.icon}
                                            </div>
                                            <div className="text-5xl font-bold text-white/10 font-display">{step.phase}</div>
                                        </div>
                                        <h3 className="text-3xl md:text-4xl font-bold mb-6">{step.title}</h3>
                                        <p className="text-xl text-white/60 leading-relaxed max-w-xl">
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Comparison Section - Us vs Them */}
            <section className="py-32 bg-secondary/20">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold font-display mb-4">The Premium Difference</h2>
                            <p className="text-white/60">Why leading brands choose us over freelancers or budget agencies.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-white/10 rounded-3xl overflow-hidden">
                            {/* Budget Agency */}
                            <div className="bg-[#0f111a] p-10 opacity-60 grayscale transition-all hover:grayscale-0 hover:opacity-100">
                                <h3 className="text-xl font-bold text-white mb-6">Generic Agencies</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-3 text-white/50">
                                        <span className="text-red-500">✕</span> Wordpress Templates
                                    </li>
                                    <li className="flex items-center gap-3 text-white/50">
                                        <span className="text-red-500">✕</span> Slow Load Times (&gt;3s)
                                    </li>
                                    <li className="flex items-center gap-3 text-white/50">
                                        <span className="text-red-500">✕</span> Generic Design
                                    </li>
                                    <li className="flex items-center gap-3 text-white/50">
                                        <span className="text-red-500">✕</span> Insecure Plugins
                                    </li>
                                    <li className="flex items-center gap-3 text-white/50">
                                        <span className="text-red-500">✕</span> Ghosted after launch
                                    </li>
                                </ul>
                            </div>

                            {/* SyncFlo */}
                            <div className="bg-[#1a1033] p-10 relative">
                                <div className="absolute top-0 right-0 bg-gradient-to-l from-purple-500 to-transparent py-1 px-4 text-xs font-bold uppercase">
                                    SyncFlo Standard
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                                    Premium Engineering
                                </h3>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-3 text-white">
                                        <Check className="w-5 h-5 text-green-400" /> Custom Next.js Code
                                    </li>
                                    <li className="flex items-center gap-3 text-white">
                                        <Check className="w-5 h-5 text-green-400" /> Instant Loading (&lt;1s)
                                    </li>
                                    <li className="flex items-center gap-3 text-white">
                                        <Check className="w-5 h-5 text-green-400" /> Bespoke Branding
                                    </li>
                                    <li className="flex items-center gap-3 text-white">
                                        <Check className="w-5 h-5 text-green-400" /> Enterprise Security
                                    </li>
                                    <li className="flex items-center gap-3 text-white">
                                        <Check className="w-5 h-5 text-green-400" /> Lifetime Support
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 border-y border-white/5 bg-white/[0.02]">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-3xl font-bold font-display mb-12 text-center">Frequent Questions</h2>
                    <div className="grid gap-6">
                        {[
                            {
                                q: "Why are you more expensive than a freelancer?",
                                a: "You aren't paying for code; you're paying for a revenue asset. Freelancers implement tasks; we engineer outcomes. Our price includes strategy, design, copy guidance, SEO, and post-launch support that a single freelancer cannot provide."
                            },
                            {
                                q: "Do I own the code?",
                                a: "100%. Once the final payment is made, the IP is entirely yours. No vendor lock-in."
                            },
                            {
                                q: "How long does a project take?",
                                a: "Typically 4-8 weeks depending on complexity. We work in weekly sprints so you see constant progress."
                            },
                            {
                                q: "Can you handle high traffic?",
                                a: "Yes. Our Next.js + Vercel stack is the same tech used by Netflix, Uber, and TikTok. It scales infinitely without crashing."
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="p-6 rounded-2xl bg-[#0B0F19] border border-white/10">
                                <h3 className="text-lg font-bold text-white mb-2 flex items-start gap-3">
                                    <HelpCircle className="w-5 h-5 text-white/30 shrink-0 mt-1" />
                                    {item.q}
                                </h3>
                                <p className="text-white/60 pl-8">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTA />
            <Footer />
        </div>
    )
}
