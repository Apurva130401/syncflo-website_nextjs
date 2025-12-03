'use client'

import { motion } from 'framer-motion'

export default function WhatsAppHero({
    title = "Revolutionize Your Customer Communication",
    subtitle = "Customer Communication",
    description = "Engage customers 24/7, automate sales, and handle support instantly with our intelligent, code-free WhatsApp AI platform.",
    badge = "WhatsApp Business AI",
    visual,
    onCtaClick
}) {
    // Helper to render title with gradient subtitle if provided, or just title
    const renderTitle = () => {
        if (subtitle && title.includes(subtitle)) {
            const parts = title.split(subtitle);
            return (
                <>
                    {parts[0]}
                    <br />
                    <span className="bg-gradient-to-r from-green-accent to-blue-accent bg-clip-text text-transparent">
                        {subtitle}
                    </span>
                    {parts[1]}
                </>
            )
        }
        // Fallback if subtitle structure doesn't match or isn't provided in that way
        // For industry pages, we might pass title as "Turn Chats into Revenue" and subtitle as "WhatsApp for E-commerce"
        return (
            <>
                {title} <br />
                <span className="bg-gradient-to-r from-green-accent to-blue-accent bg-clip-text text-transparent">
                    {subtitle}
                </span>
            </>
        )
    }

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-primary">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-accent/20 rounded-full blur-[128px] animate-pulse-slow"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-accent/20 rounded-full blur-[128px] animate-pulse-slow delay-1000"></div>
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className={`flex flex-col ${visual ? 'lg:flex-row lg:items-center lg:text-left' : 'items-center text-center'} gap-12`}>

                    {/* Text Content */}
                    <motion.div
                        className={`flex-1 ${visual ? '' : 'mx-auto'}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className={`inline-block px-4 py-2 rounded-full bg-green-accent/10 border border-green-accent/20 text-green-accent font-bold text-sm tracking-wider mb-8 uppercase ${visual ? '' : 'mx-auto'}`}>
                            {badge}
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold font-display mb-8 leading-tight">
                            {title.replace(subtitle, '')}
                            <span className="bg-gradient-to-r from-green-accent to-blue-accent bg-clip-text text-transparent block">
                                {subtitle}
                            </span>
                        </h1>

                        <p className={`text-xl text-text-secondary max-w-3xl mb-12 leading-relaxed ${visual ? '' : 'mx-auto'}`}>
                            {description}
                        </p>

                        <div className={`flex flex-col md:flex-row gap-6 ${visual ? 'justify-start' : 'justify-center'}`}>
                            <a
                                href="#contact"
                                className="px-8 py-4 rounded-full bg-gradient-to-r from-green-accent to-blue-accent text-primary font-bold text-lg shadow-lg shadow-green-accent/20 hover:shadow-green-accent/40 hover:scale-105 transition-all duration-300 text-center"
                            >
                                Request a Demo
                            </a>
                            <a
                                href="#features"
                                className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold text-lg hover:bg-white/10 transition-all duration-300 text-center"
                            >
                                Explore Features
                            </a>
                        </div>
                    </motion.div>

                    {/* Visual Content (Mock UI) */}
                    {visual && (
                        <motion.div
                            className="flex-1 w-full max-w-md mx-auto lg:max-w-full flex justify-center lg:justify-end"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="relative w-full max-w-[400px]">
                                {/* Glow effect behind the phone */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-green-accent/30 to-blue-accent/30 blur-[60px] rounded-full -z-10 transform scale-110"></div>
                                {visual}
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>
        </section>
    )
}
