'use client'

import { useEffect, useState, useRef } from 'react'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'

export default function SaasAgent() {
    return (
        <div className="bg-primary min-h-screen text-white font-sans selection:bg-sales-orange/30">
            <Navbar />

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden">
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute top-[-20%] left-[20%] w-[600px] h-[600px] rounded-full bg-sales-orange/10 blur-[100px]" />
                    <div className="absolute bottom-[-20%] right-[10%] w-[500px] h-[500px] rounded-full bg-sales-red/10 blur-[100px]" />
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.05]"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-block bg-sales-red/10 text-sales-orange px-4 py-1.5 rounded-full text-sm font-medium mb-6 border border-sales-red/20 backdrop-blur-sm">
                            24/7 Demo Booking
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold font-display leading-tight mb-6"
                    >
                        AI Voice Agent for <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-sales-orange to-sales-red">
                            SaaS Companies
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed"
                    >
                        Qualify inbound leads, book product demos directly into AE calendars, and handle Level 1 support calls effortlessly.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <a
                            href="/contact"
                            className="inline-block bg-gradient-to-r from-sales-orange to-sales-red text-white font-bold px-8 py-4 rounded-full text-lg hover:shadow-lg hover:shadow-sales-orange/25 transition-all hover:-translate-y-1"
                        >
                            Start Scaling
                        </a>
                    </motion.div>
                </div>
            </section>
            <Footer />
        </div>
    )
}
