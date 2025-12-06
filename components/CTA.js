export default function CTA() {
    return (
        <section className="py-28 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="glass-panel rounded-[3rem] p-16 md:p-24 text-center relative overflow-hidden group">
                    {/* Cosmic Animated Background Glow */}
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-neon-cyan/15 via-neon-blue/15 to-neon-purple/15 z-0 transition-opacity duration-500 group-hover:from-neon-cyan/20 group-hover:via-neon-blue/20 group-hover:to-neon-purple/20"></div>
                    <div className="absolute -top-32 -right-32 w-80 h-80 bg-neon-cyan/30 rounded-full blur-[100px] animate-pulse-glow"></div>
                    <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-neon-blue/30 rounded-full blur-[100px] animate-pulse-glow animation-delay-2000"></div>

                    <div className="relative z-10 max-w-4xl mx-auto">
                        {/* Headline */}
                        <h2 className="text-5xl md:text-7xl font-bold font-display mb-8 leading-tight">
                            Ready to <span className="text-gradient">Automate?</span>
                        </h2>

                        {/* Description */}
                        <p className="text-2xl text-text-secondary mb-12 leading-relaxed max-w-2xl mx-auto">
                            Join hundreds of businesses using SyncFlo Ai to streamline operations and boost sales.
                            <span className="text-white font-semibold"> Get started today</span> and see the difference.
                        </p>

                        {/* Premium CTAs */}
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <a
                                href="#contact"
                                className="group px-12 py-6 rounded-full bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple text-white text-xl font-bold shadow-glow-cosmic transition-all hover:scale-105 hover:shadow-glow-cosmic-lg relative overflow-hidden"
                            >
                                <span className="relative z-10">Get Started Now</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-neon-purple via-neon-cyan to-neon-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </a>
                            <a
                                href="#demo"
                                className="px-12 py-6 rounded-full border-2 border-neon-cyan/40 bg-white/5 backdrop-blur-md text-white text-xl font-semibold transition-all hover:bg-neon-cyan/10 hover:border-neon-cyan hover:shadow-glow-cyan"
                            >
                                Book a Demo
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}