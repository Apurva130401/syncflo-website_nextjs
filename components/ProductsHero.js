'use client'

export default function ProductsHero() {
    return (
        <section className="relative min-h-[70vh] flex items-center pt-32 pb-20 overflow-hidden">
            {/* Premium Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full z-0">
                <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-neon-cyan/15 blur-[120px] animate-blob"></div>
                <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] rounded-full bg-neon-blue/15 blur-[120px] animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-[-10%] right-[10%] w-[550px] h-[550px] rounded-full bg-neon-purple/15 blur-[120px] animate-blob animation-delay-4000"></div>
            </div>

            {/* Floating Particles */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full bg-white/20 animate-float"
                        style={{
                            width: Math.random() * 4 + 1 + 'px',
                            height: Math.random() * 4 + 1 + 'px',
                            top: Math.random() * 100 + '%',
                            left: Math.random() * 100 + '%',
                            animationDuration: Math.random() * 10 + 10 + 's',
                            animationDelay: Math.random() * 5 + 's',
                        }}
                    ></div>
                ))}
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <div className="max-w-4xl mx-auto">
                    {/* Headline */}
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display leading-tight mb-8 animate-fade-in-up">
                        Our AI Solutions for <br />
                        <span className="text-gradient">Business Growth</span>
                    </h1>

                    {/* Description */}
                    <p className="text-xl md:text-2xl text-text-secondary mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
                        Supercharge your sales, support, and client engagement with SyncFlo AI. Transform your business operations with cutting-edge automation.
                    </p>

                    {/* CTA */}
                    <div className="flex flex-col sm:flex-row gap-5 justify-center animate-fade-in-up animation-delay-400">
                        <a
                            href="#products"
                            onClick={(e) => {
                                e.preventDefault()
                                document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })
                            }}
                            className="group px-10 py-5 rounded-full bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple text-white text-lg font-bold shadow-glow-cosmic transition-all hover:scale-105 hover:shadow-glow-cosmic-lg relative overflow-hidden"
                        >
                            <span className="relative z-10">Explore Solutions</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-neon-purple via-neon-cyan to-neon-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
