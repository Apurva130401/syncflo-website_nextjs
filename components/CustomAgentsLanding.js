'use client'

import { useRef, useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import CTA from './CTA'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Check, Bot, Brain, Database, Shield, Zap, MessageSquare, Workflow, Terminal, Network, Search, Cpu, HelpCircle } from 'lucide-react'

export default function CustomAgentsLanding() {
    const containerRef = useRef(null)
    const processRef = useRef(null)
    const horizontalRef = useRef(null)
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [activeCard, setActiveCard] = useState(0)

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })

    const { scrollYProgress: processProgress } = useScroll({
        target: processRef,
        offset: ["start start", "end end"]
    })

    const { scrollYProgress: horizontalProgress } = useScroll({
        target: horizontalRef,
    })

    const x = useTransform(horizontalProgress, [0, 1], ["0%", "-55%"])

    const Reveal = ({ children, delay = 0 }) => (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    )

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
        }
        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    return (
        <div ref={containerRef} className="bg-[#030014] min-h-screen text-white font-sans selection:bg-[#2f1f5c] overflow-x-clip">
            {/* Global Noise Overlay */}
            <div className="fixed inset-0 z-[1] pointer-events-none opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: 'url("/noise.png")' }}></div>

            <Navbar />

            {/* Hero Section - Kinetic & Abstract */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0f172a] via-[#030014] to-[#030014]"></div>
                    <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow"></div>
                    <div className="absolute bottom-[-10%] right-[20%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow delay-75"></div>
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
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                            </span>
                            <span className="text-sm font-medium text-white/80 tracking-wide uppercase">AI Agents Live</span>
                        </motion.div>

                        <motion.div style={{ opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]), scale: useTransform(scrollYProgress, [0, 0.2], [1, 0.9]) }}>
                            <h1 className="text-7xl md:text-[9rem] font-bold font-display tracking-tighter leading-[0.85] mb-8">
                                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">Intelligent</span>
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient-x pb-4">
                                    Workforce.
                                </span>
                            </h1>

                            <p className="text-xl md:text-3xl text-white/60 max-w-4xl mx-auto mb-16 leading-relaxed font-light">
                                We don't just build chatbots. We engineer <span className="text-white font-medium">autonomous agents</span> that learn, reason, and execute tasks across your enterprise.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-6"
                        >
                            <Link
                                href="/contact"
                                className="group relative px-8 py-4 rounded-full bg-white text-black font-bold text-lg overflow-hidden transition-transform hover:scale-105"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    Deploy Your Agent <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-200 to-blue-200 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </Link>
                            <Link
                                href="#demo"
                                className="px-8 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white font-semibold text-lg hover:bg-white/10 transition-all hover:scale-105"
                            >
                                See Examples
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
                            {['OpenAI', 'Anthropic', 'Llama 3', 'Pinecone', 'LangChain', 'Python', 'HuggingFace', 'Supabase', 'Vercel'].map((tech) => (
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
                        <h2 className="text-4xl md:text-6xl font-bold font-display mb-6">Beyond Conversation</h2>
                        <p className="text-xl text-white/50 max-w-2xl mx-auto">
                            True AI agents don't just talk. They remember, they understand, and they act.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[800px]">
                        {/* Large Card - Context */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="col-span-1 md:col-span-2 md:row-span-2 rounded-[2rem] bg-[#0B0F19] border border-white/10 overflow-hidden relative group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            {/* Spotlight Effect */}
                            <div className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30" style={{ background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(34, 211, 238, 0.1), transparent 40%)` }}></div>

                            <div className="p-10 relative z-10 h-full flex flex-col justify-between">
                                <div>
                                    <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform duration-500">
                                        <Brain className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-3xl font-bold mb-4">Infinite Context</h3>
                                    <p className="text-white/60 text-lg leading-relaxed">
                                        Forget "sorry, I forgot." Our agents utilize vector databases (RAG) to instantly recall millions of documents, past conversations, and user preferences with perfect accuracy.
                                    </p>
                                </div>
                                <div className="mt-8 relative h-48 rounded-xl bg-black/50 border border-white/10 overflow-hidden flex items-center justify-center group-hover:border-cyan-500/50 transition-colors duration-500">
                                    <div className="grid grid-cols-3 gap-2 opacity-50">
                                        {[...Array(9)].map((_, i) => (
                                            <div key={i} className="w-12 h-16 bg-cyan-500/10 rounded-md animate-pulse" style={{ animationDelay: `${i * 100}ms` }}></div>
                                        ))}
                                    </div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="bg-[#0B0F19] px-6 py-2 rounded-full border border-cyan-500/30 text-cyan-400 font-mono text-sm shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                                            Retrieving Context...
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Medium Card - Multi-Modal */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="col-span-1 md:col-span-2 md:row-span-1 rounded-[2rem] bg-[#0B0F19] border border-white/10 overflow-hidden relative group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            {/* Spotlight */}
                            <div className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30" style={{ background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(168, 85, 247, 0.1), transparent 40%)` }}></div>

                            <div className="p-10 relative z-10 flex items-center gap-8">
                                <div className="flex-1">
                                    <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform duration-500">
                                        <Bot className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2">Multi-Modal Fluency</h3>
                                    <p className="text-white/60">
                                        Text, Voice, Image. Our agents interact naturally across any medium, understanding nuance and tone perfectly.
                                    </p>
                                </div>
                                <div className="hidden md:flex gap-2">
                                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center"><MessageSquare className="w-5 h-5 text-white/40" /></div>
                                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center"><Zap className="w-5 h-5 text-yellow-500/80" /></div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Small Card - Security */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="col-span-1 md:col-span-1 md:row-span-1 rounded-[2rem] bg-[#0B0F19] border border-white/10 overflow-hidden relative group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            {/* Spotlight */}
                            <div className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30" style={{ background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(34, 197, 94, 0.15), transparent 40%)` }}></div>

                            <div className="p-8 relative z-10">
                                <Shield className="w-10 h-10 text-green-400 mb-6 group-hover:scale-110 transition-transform duration-500" />
                                <h3 className="text-xl font-bold mb-2">Enterprise Secure</h3>
                                <p className="text-sm text-white/50">SOC2 compliant handling. Your data never trains public models.</p>
                            </div>
                        </motion.div>

                        {/* Small Card - Integration */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="col-span-1 md:col-span-1 md:row-span-1 rounded-[2rem] bg-[#0B0F19] border border-white/10 overflow-hidden relative group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            {/* Spotlight */}
                            <div className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30" style={{ background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 40%)` }}></div>

                            <div className="p-8 relative z-10">
                                <Network className="w-10 h-10 text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-500" />
                                <h3 className="text-xl font-bold mb-2">5000+ Integrations</h3>
                                <p className="text-sm text-white/50">Native connections to Salesforce, HubSpot, Linear, and your internal APIs.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Real World Impact - Horizontal Scroll */}
            <section ref={horizontalRef} className="relative h-[300vh] bg-[#020205]">
                <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
                    {/* Dynamic Technical Wallpapers */}
                    <div className="absolute inset-0 transition-opacity duration-1000 ease-in-out">
                        {/* Card 0: HR/Data - Cyan Circuitry */}
                        <div className={`absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-[#020205] to-[#020205] transition-opacity duration-700 ${activeCard === 0 ? 'opacity-100' : 'opacity-0'}`}>
                            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.1]"></div>
                            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(rgba(6,182,212,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                        </div>

                        {/* Card 1: E-Commerce - Purple Data Flow */}
                        <div className={`absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900/20 via-[#020205] to-[#020205] transition-opacity duration-700 ${activeCard === 1 ? 'opacity-100' : 'opacity-0'}`}>
                            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.1]" style={{ transform: 'rotate(45deg) scale(2)' }}></div>
                            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[100px] mix-blend-screen animate-pulse-slow"></div>
                        </div>

                        {/* Card 2: Sales - Blue Network */}
                        <div className={`absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-blue-900/20 via-[#020205] to-[#020205] transition-opacity duration-700 ${activeCard === 2 ? 'opacity-100' : 'opacity-0'}`}>
                            <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(59,130,246,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
                            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[80px]"></div>
                        </div>
                    </div>

                    <div className="container mx-auto px-6 relative z-10 h-full flex flex-col justify-center">
                        <div className="text-center mb-12 md:mb-20">
                            <Reveal>
                                <div className="text-cyan-500 font-medium tracking-widest uppercase mb-4">Deployed Agents</div>
                                <h2 className="text-4xl md:text-7xl font-bold font-display leading-tight mb-8">
                                    Real World <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">Impact</span>
                                </h2>
                                <p className="text-xl text-white/50 leading-relaxed max-w-2xl mx-auto">
                                    Not prototypes. <span className="text-white">Production-grade agents</span> handling thousands of interactions daily.
                                </p>
                            </Reveal>
                        </div>

                        <div className="w-full">
                            <motion.div style={{ x }} className="flex gap-8 md:gap-16 px-4 md:px-0 w-max">
                                {[
                                    {
                                        title: "HR & IT Genius",
                                        tags: ['Internal Tools', 'Slack Bot', 'Notion Integration'],
                                        description: "An internal slack-bot that instantly answers employee questions about benefits, IT troubleshooting, and company policy by ingesting 5,000+ Notion pages and Google Docs.",
                                        stats: [
                                            { val: "90%", label: "Ticket Reduction" },
                                            { val: "2s", label: "Avg Response" }
                                        ],
                                        color: "from-cyan-900/40 to-black",
                                        borderColor: "group-hover:border-cyan-500/50",
                                        titleColor: "group-hover:text-cyan-400",
                                        icon: <Bot className="w-5 h-5 text-cyan-400" />,
                                        visual: (
                                            <div className="relative w-3/4 h-3/4 bg-[#0B0F19] rounded-xl border border-white/10 p-6 flex flex-col gap-4 group-hover:scale-105 transition-transform duration-700">
                                                <div className="flex items-center gap-4 border-b border-white/5 pb-4">
                                                    <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center"><Bot className="w-5 h-5 text-cyan-400" /></div>
                                                    <div className="w-32 h-4 bg-white/10 rounded-full"></div>
                                                </div>
                                                <div className="flex flex-col gap-3">
                                                    <div className="w-full h-16 bg-white/5 rounded-lg p-3 border-l-2 border-cyan-500"></div>
                                                    <div className="w-2/3 h-12 bg-cyan-500/10 rounded-lg p-3 self-end"></div>
                                                </div>
                                            </div>
                                        )
                                    },
                                    {
                                        title: "Tier 1 Autonomous Support",
                                        tags: ['E-Commerce', 'Zendesk', 'Shopify'],
                                        description: "A support agent that doesn't just answer \"where is my order?\" but actually triggers refunds, updates shipping addresses, and recommends products based on purchase history.",
                                        stats: [
                                            { val: "24/7", label: "Availability" },
                                            { val: "$45k", label: "Monthly Savings" }
                                        ],
                                        color: "from-purple-900/40 to-black",
                                        borderColor: "group-hover:border-purple-500/50",
                                        titleColor: "group-hover:text-purple-400",
                                        icon: <Workflow className="w-12 h-12 text-purple-400" />,
                                        visual: (
                                            <>
                                                <div className="w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
                                                <div className="relative z-10 w-48 h-48 border border-purple-500/30 rounded-full flex items-center justify-center backdrop-blur-sm">
                                                    <div className="w-32 h-32 bg-purple-500/10 rounded-full flex items-center justify-center animate-ping">
                                                        <Workflow className="w-12 h-12 text-purple-400" />
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    },
                                    {
                                        title: "Sales & Lead Qual",
                                        tags: ['CRM', 'Outbound', 'Voice'],
                                        description: "An SDR agent that calls leads within 2 minutes of signup, qualifies them using BANT framework, and books meetings directly to your closers' calendars.",
                                        stats: [
                                            { val: "3x", label: "Meeting Book rate" },
                                            { val: "+150%", label: "Pipeline" }
                                        ],
                                        color: "from-blue-900/40 to-black",
                                        borderColor: "group-hover:border-blue-500/50",
                                        titleColor: "group-hover:text-blue-400",
                                        visual: (
                                            <div className="flex gap-4 items-end justify-center h-full pb-10">
                                                <div className="w-8 h-24 bg-blue-500/20 rounded-t-lg animate-pulse" style={{ animationDelay: '0ms' }}></div>
                                                <div className="w-8 h-32 bg-blue-500/40 rounded-t-lg animate-pulse" style={{ animationDelay: '200ms' }}></div>
                                                <div className="w-8 h-48 bg-blue-500/60 rounded-t-lg animate-pulse" style={{ animationDelay: '400ms' }}></div>
                                                <div className="w-8 h-40 bg-blue-500/30 rounded-t-lg animate-pulse" style={{ animationDelay: '600ms' }}></div>
                                            </div>
                                        )
                                    }
                                ].map((caseStudy, idx) => (
                                    <div
                                        key={idx}
                                        onMouseEnter={() => setActiveCard(idx)}
                                        className={`w-[85vw] md:w-[40vw] flex-shrink-0 bg-[#0B0F19] border border-white/10 rounded-[2.5rem] p-8 md:p-12 overflow-hidden group shadow-2xl relative ${caseStudy.borderColor} transition-all duration-500 hover:scale-[1.02]`}
                                    >
                                        <div className={`absolute inset-0 bg-gradient-to-br ${caseStudy.color} opacity-20`}></div>
                                        {/* Hover Glow */}
                                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-t from-white/5 to-transparent"></div>

                                        <div className="relative z-10 flex flex-col h-full">
                                            <div className="relative h-[250px] rounded-2xl overflow-hidden border border-white/5 bg-[#020205] mb-8">
                                                <div className={`absolute inset-0 bg-gradient-to-br ${caseStudy.color} opacity-50`}></div>
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    {caseStudy.visual}
                                                </div>
                                            </div>

                                            <div className="flex-1">
                                                <h3 className={`text-3xl font-bold mb-4 transition-colors ${caseStudy.titleColor}`}>{caseStudy.title}</h3>
                                                <div className="flex flex-wrap gap-2 mb-6">
                                                    {caseStudy.tags.map(tag => (
                                                        <span key={tag} className="px-3 py-1 rounded-full border border-white/10 text-xs font-medium uppercase tracking-wider text-white/60">
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                                <p className="text-lg text-white/50 mb-8 leading-relaxed">
                                                    {caseStudy.description}
                                                </p>
                                            </div>

                                            <div className="grid grid-cols-2 gap-8 py-6 border-t border-white/10 mt-auto">
                                                {caseStudy.stats.map((stat, sIdx) => (
                                                    <div key={sIdx}>
                                                        <div className="text-4xl font-bold text-white mb-1">{stat.val}</div>
                                                        <div className="text-xs text-white/40 uppercase tracking-widest">{stat.label}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
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
                                How We <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Train It</span>
                            </h2>
                            <p className="text-xl text-white/50 mb-12 leading-relaxed">
                                From raw data to refined intelligence. Our 4-step vectorization pipeline ensuring zero hallucinations.
                            </p>

                            <div className="flex items-center gap-4 text-sm font-medium text-white/30 uppercase tracking-widest">
                                <motion.div style={{ width: useTransform(processProgress, [0, 1], ["0%", "100%"]) }} className="h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full w-0"></motion.div>
                                <span className="shrink-0">Training Progress</span>
                            </div>
                        </div>

                        {/* Right Side - Stacking Cards */}
                        <div className="lg:w-2/3 flex flex-col gap-24 pb-32 [--stack-top:100px] lg:[--stack-top:150px]">
                            {[
                                {
                                    phase: "01",
                                    title: "Knowledge Extraction",
                                    desc: "We connect to your data silos—SharePoint, Google Drive, Notion, SQL. We clean, normalize, and chunk your data for optimal vector embedding.",
                                    icon: <Database className="w-8 h-8" />,
                                    color: "from-blue-500/20 to-cyan-500/20",
                                    border: "group-hover:border-blue-500/50"
                                },
                                {
                                    phase: "02",
                                    title: "Persona Engineering",
                                    desc: "We don't just prompt; we engineer a psychological profile. Tone, voice, brand guidelines, and strict guardrails to prevent rogue outputs.",
                                    icon: <Cpu className="w-8 h-8" />,
                                    color: "from-cyan-500/20 to-purple-500/20",
                                    border: "group-hover:border-cyan-500/50"
                                },
                                {
                                    phase: "03",
                                    title: "Tool Integration",
                                    desc: "Giving the agent hands. We equate your APIs (Stripe, HubSpot, Jira) into function calls the agent can execute autonomously.",
                                    icon: <Terminal className="w-8 h-8" />,
                                    color: "from-purple-500/20 to-pink-500/20",
                                    border: "group-hover:border-purple-500/50"
                                },
                                {
                                    phase: "04",
                                    title: "Human-in-the-Loop",
                                    desc: "Deployment with safety nets. If confidence drops below 90%, the agent seamlessly hands off to a human with full context summary.",
                                    icon: <Shield className="w-8 h-8" />,
                                    color: "from-pink-500/20 to-red-500/20",
                                    border: "group-hover:border-pink-500/50"
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

            {/* Comparison Section - Basic vs Neural */}
            <section className="py-32 bg-secondary/20">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <Reveal>
                                <h2 className="text-4xl font-bold font-display mb-4">Evolution of Intelligence</h2>
                                <p className="text-white/60">Why 2020-era chatbots are obsolete.</p>
                            </Reveal>
                        </div>

                        <Reveal delay={0.2}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-white/10 rounded-3xl overflow-hidden">
                                {/* Generic Chatbot */}
                                <div className="bg-[#0f111a] p-10 opacity-60 grayscale transition-all hover:grayscale-0 hover:opacity-100">
                                    <h3 className="text-xl font-bold text-white mb-6">Traditional Chatbot</h3>
                                    <ul className="space-y-4">
                                        <li className="flex items-center gap-3 text-white/50">
                                            <span className="text-red-500">✕</span> Rigid Keyword Matching
                                        </li>
                                        <li className="flex items-center gap-3 text-white/50">
                                            <span className="text-red-500">✕</span> Forgets Context Instantly
                                        </li>
                                        <li className="flex items-center gap-3 text-white/50">
                                            <span className="text-red-500">✕</span> Zero Knowledge of Company Data
                                        </li>
                                        <li className="flex items-center gap-3 text-white/50">
                                            <span className="text-red-500">✕</span> Frustrating Loop Navigation
                                        </li>
                                    </ul>
                                </div>

                                {/* SyncFlo Agent */}
                                <div className="bg-[#1a1033] p-10 relative">
                                    <div className="absolute top-0 right-0 bg-gradient-to-l from-cyan-500 to-transparent py-1 px-4 text-xs font-bold uppercase">
                                        SyncFlo Output
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                                        Neural Agent
                                    </h3>
                                    <ul className="space-y-4">
                                        <li className="flex items-center gap-3 text-white">
                                            <Check className="w-5 h-5 text-cyan-400" /> Semantic Understanding
                                        </li>
                                        <li className="flex items-center gap-3 text-white">
                                            <Check className="w-5 h-5 text-cyan-400" /> Infinite Conversation Memory
                                        </li>
                                        <li className="flex items-center gap-3 text-white">
                                            <Check className="w-5 h-5 text-cyan-400" /> RAG (Vector Database) Access
                                        </li>
                                        <li className="flex items-center gap-3 text-white">
                                            <Check className="w-5 h-5 text-cyan-400" /> Autonomous Action Execution
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 border-y border-white/5 bg-white/[0.02]">
                <div className="container mx-auto px-6 max-w-4xl">
                    <Reveal>
                        <h2 className="text-3xl font-bold font-display mb-12 text-center">Implementation FAQ</h2>
                        <div className="grid gap-6">
                            {[
                                {
                                    q: "Is my data secure?",
                                    a: "Absolutely. We can deploy agents on a private VPC, ensuring your data never leaves your infrastructure. We use Enterprise APIs with zero-retention policies."
                                },
                                {
                                    q: "How long does training take?",
                                    a: "For a standard knowledge base (e.g., 500 pages of docs), ingestion takes minutes. Fine-tuning the persona and testing guardrails typically takes 1-2 weeks."
                                },
                                {
                                    q: "Can it integrate with my custom software?",
                                    a: "If it has an API, we can connect to it. We specialize in building custom middleware to let agents perform complex actions like creating rows in DBs or sending authenticated emails."
                                },
                                {
                                    q: "What happens if the AI hallucinates?",
                                    a: "We implement strict 'RAG-grounding'. The agent is instructed to only answer based on retrieved citations. If it doesn't know, it says so or routes to a human, rather than guessing."
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
                    </Reveal>
                </div>
            </section>

            <CTA />
            <Footer />
        </div>
    )
}
