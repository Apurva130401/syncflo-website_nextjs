'use client'

import Navbar from './Navbar'
import Footer from './Footer'
import { motion } from 'framer-motion'

export default function LegalLayout({ title, subtitle, lastUpdated, children }) {
    return (
        <div className="min-h-screen bg-[#0B0F19] text-white font-sans selection:bg-[#00F0FF] selection:text-black">
            <Navbar />

            <main className="pt-32 pb-20 relative overflow-hidden">
                {/* Background Gradients */}
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px] -z-10 mix-blend-screen animate-pulse-slow" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] -z-10 mix-blend-screen animate-pulse-slow delay-1000" />

                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-4xl md:text-5xl font-bold font-display mb-4"
                            >
                                {title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-[#7000FF]">{subtitle}</span>
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.1 }}
                                className="text-white/70"
                            >
                                Last Updated: {lastUpdated}
                            </motion.p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-[#141A28]/50 backdrop-blur-sm p-8 md:p-12 rounded-xl border border-white/10 shadow-2xl"
                        >
                            <div className="prose prose-invert max-w-none prose-headings:font-display prose-headings:font-bold prose-h2:text-3xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:border-b prose-h2:border-white/10 prose-h2:pb-2 prose-p:text-white/70 prose-p:leading-relaxed prose-li:text-white/70 prose-a:text-[#00F0FF] prose-a:no-underline hover:prose-a:underline">
                                {children}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
