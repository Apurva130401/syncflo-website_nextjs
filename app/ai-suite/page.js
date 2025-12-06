'use client'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { motion } from 'framer-motion'

export default function AISuite() {
    return (
        <div className="bg-primary min-h-screen text-white font-sans selection:bg-suite-purple/30">
            <Navbar />

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden">
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute top-[-20%] left-[20%] w-[600px] h-[600px] rounded-full bg-suite-purple/10 blur-[100px]" />
                    <div className="absolute bottom-[-20%] right-[10%] w-[500px] h-[500px] rounded-full bg-suite-pink/10 blur-[100px]" />
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.05]"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-block bg-suite-purple/10 text-suite-purple px-4 py-1.5 rounded-full text-sm font-medium mb-6 border border-suite-purple/20 backdrop-blur-sm">
                            The Complete Solution
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold font-display leading-tight mb-6"
                    >
                        Full AI <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-suite-purple to-suite-pink">
                            Business Suite
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed"
                    >
                        Unify your customer experience. Combine the power of AI Voice Agents and WhatsApp Automation into one seamless, omni-channel powerhouse.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <a
                            href="/contact"
                            className="inline-block bg-gradient-to-r from-suite-purple to-suite-pink text-white font-bold px-8 py-4 rounded-full text-lg hover:shadow-lg hover:shadow-suite-purple/25 transition-all hover:-translate-y-1"
                        >
                            Get Full Access
                        </a>
                        <a
                            href="/book-demo"
                            className="inline-block bg-white/5 border border-white/10 text-white font-semibold px-8 py-4 rounded-full text-lg hover:bg-white/10 transition-all"
                        >
                            Book a Demo
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Value Props */}
            <section className="py-32 bg-secondary relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
                            Why Choose the <span className="text-gradient from-suite-purple to-suite-pink">Full Suite?</span>
                        </h2>
                        <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                            Stop paying for disjointed tools. SyncFlo brings everything under one roof.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Unified Data",
                                description: "Customer conversations from Voice and WhatsApp live in the same profile. Context carries over instantly.",
                                icon: "🔄"
                            },
                            {
                                title: "Cost Efficiency",
                                description: "Save up to 40% compared to purchasing separate voice and text automation tools.",
                                icon: "💰"
                            },
                            {
                                title: "Single Dashboard",
                                description: "Manage all your agents, flows, and analytics from one intuitive control center.",
                                icon: "🖥️"
                            }
                        ].map((feature, i) => (
                            <div key={i} className="glass-panel p-10 rounded-3xl border border-white/5 bg-white/[0.02]">
                                <div className="text-5xl mb-6">{feature.icon}</div>
                                <h3 className="text-2xl font-bold font-display mb-4">{feature.title}</h3>
                                <p className="text-white/60 leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}
