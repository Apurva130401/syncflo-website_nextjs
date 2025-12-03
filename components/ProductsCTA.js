'use client'

export default function ProductsCTA() {
    return (
        <section className="py-32 relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-cyan/10 rounded-full blur-[100px] animate-pulse-slow"></div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <div className="max-w-4xl mx-auto glass-panel p-16 rounded-[3rem] border border-neon-cyan/20 shadow-glow-cosmic">
                    <h2 className="text-4xl md:text-6xl font-bold font-display mb-8">
                        Ready to Automate Your <br />
                        <span className="text-gradient">Business with AI?</span>
                    </h2>
                    <p className="text-xl text-text-secondary mb-12 max-w-2xl mx-auto">
                        Join thousands of businesses already using SyncFlo AI to transform their operations and boost their growth.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <a
                            href="#contact"
                            className="group px-10 py-5 rounded-full bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple text-white text-lg font-bold shadow-glow-cosmic transition-all hover:scale-105 hover:shadow-glow-cosmic-lg relative overflow-hidden"
                        >
                            <span className="relative z-10">Get Started</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-neon-purple via-neon-cyan to-neon-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </a>
                        <a
                            href="#pricing"
                            className="px-10 py-5 rounded-full border-2 border-neon-cyan/40 bg-white/5 backdrop-blur-md text-white text-lg font-semibold transition-all hover:bg-neon-cyan/10 hover:border-neon-cyan hover:shadow-glow-cyan"
                        >
                            View Pricing
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
