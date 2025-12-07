'use client'

import Navbar from './Navbar'
import Footer from './Footer'
import CTA from './CTA'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Check } from 'lucide-react'

export default function ServicePage({
    title,
    subtitle,
    description,
    features,
    process,
    benefits
}) {
    return (
        <div className="bg-primary min-h-screen text-white font-sans selection:bg-neon-cyan/30">
            <Navbar />

            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center pt-20 pb-16 overflow-hidden">
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute top-[-20%] left-[20%] w-[600px] h-[600px] rounded-full bg-neon-cyan/10 blur-[100px] animate-pulse-slow" />
                    <div className="absolute bottom-[-20%] right-[10%] w-[500px] h-[500px] rounded-full bg-neon-purple/10 blur-[100px] animate-pulse-slow delay-1000" />
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.05]"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-block bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-1.5 rounded-full text-sm font-medium mb-8 text-neon-cyan"
                    >
                        Premium Services
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold font-display leading-tight mb-8"
                    >
                        {title} <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple">
                            {subtitle}
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl text-text-secondary mb-12 max-w-3xl mx-auto leading-relaxed"
                    >
                        {description}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-6 justify-center"
                    >
                        <Link
                            href="/contact"
                            className="px-10 py-5 rounded-full bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple text-white text-lg font-bold shadow-glow-cyan transition-all hover:scale-105 hover:shadow-glow-cosmic"
                        >
                            Get Started
                        </Link>
                        <Link
                            href="#process"
                            className="px-10 py-5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white text-lg font-semibold transition-all hover:bg-white/10"
                        >
                            How It Works
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Features/Capabilities Grid */}
            {features && (
                <section className="py-24 bg-secondary/30 relative">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {features.map((feature, idx) => {
                                const CardContent = (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="group glass-panel p-10 rounded-3xl flex flex-col h-full transition-all duration-300 hover:transform hover:-translate-y-3 relative overflow-hidden"
                                    >
                                        {/* Hover Gradient Overlay */}
                                        {feature.gradient && (
                                            <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                                        )}

                                        {/* Icon */}
                                        <div className="relative z-10 mb-6">
                                            <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.gradient || 'from-white/5 to-white/0'} flex items-center justify-center text-4xl shadow-glow-cosmic opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300`}>
                                                {feature.icon || "✨"}
                                            </div>
                                        </div>

                                        {/* Header with Tag */}
                                        <div className="relative z-10 flex justify-between items-start mb-6">
                                            <h3 className="text-2xl font-bold font-display text-white group-hover:text-white transition-all">
                                                {feature.title}
                                            </h3>
                                        </div>

                                        {/* Tag */}
                                        {feature.tag && (
                                            <span className={`relative z-10 self-start px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${feature.tagColor} mb-6`}>
                                                {feature.tag}
                                            </span>
                                        )}

                                        {/* Description */}
                                        <p className="relative z-10 text-text-secondary mb-8 flex-grow leading-relaxed text-lg group-hover:text-white/90 transition-colors">
                                            {feature.description}
                                        </p>

                                        {/* Learn More Link (Visual Only) */}
                                        {feature.link && (
                                            <span
                                                className="relative z-10 inline-flex items-center text-sm font-bold text-white group-hover:text-white transition-colors"
                                            >
                                                {feature.linkText || 'Learn More'}
                                                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                            </span>
                                        )}
                                    </motion.div>
                                )

                                return feature.link ? (
                                    <Link key={idx} href={feature.link} className="block h-full group">
                                        {CardContent}
                                    </Link>
                                ) : (
                                    <div key={idx} className="h-full">
                                        {CardContent}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>
            )}

            {/* Process Section */}
            {process && (
                <section id="process" className="py-32 relative overflow-hidden">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-20">
                            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">How We Work</h2>
                            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                                A streamlined process designed to deliver exceptional results efficiently.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                            {/* Connecting Line (Desktop) */}
                            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-neon-cyan/30 to-transparent"></div>

                            {process.map((step, idx) => (
                                <div key={idx} className="relative text-center">
                                    <div className="w-24 h-24 mx-auto bg-[#0B0F19] rounded-full border border-neon-cyan/30 flex items-center justify-center text-2xl font-bold font-display mb-8 relative z-10 shadow-glow-cyan">
                                        {idx + 1}
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                                    <p className="text-text-secondary">{step.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Benefits Checklist */}
            {benefits && (
                <section className="py-24 bg-white/5">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto bg-[#0B0F19] rounded-[3rem] p-12 md:p-16 border border-white/5 flex flex-col md:flex-row items-center gap-12">
                            <div className="md:w-1/2">
                                <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
                                    Why Choose Our <br />
                                    <span className="text-gradient">Services?</span>
                                </h2>
                                <p className="text-text-secondary mb-8">
                                    We combine technical expertise with a deep understanding of business automation to deliver solutions that actually drive growth.
                                </p>
                                <Link
                                    href="/contact"
                                    className="text-neon-cyan font-bold hover:text-white transition-colors flex items-center gap-2"
                                >
                                    Start a Project &rarr;
                                </Link>
                            </div>
                            <div className="md:w-1/2 w-full space-y-4">
                                {benefits.map((benefit, idx) => (
                                    <div key={idx} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                                        <div className="w-8 h-8 rounded-full bg-neon-cyan/20 flex items-center justify-center shrink-0">
                                            <Check className="w-4 h-4 text-neon-cyan" />
                                        </div>
                                        <span className="font-medium text-white/90">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            )}

            <CTA />
            <Footer />
        </div>
    )
}
