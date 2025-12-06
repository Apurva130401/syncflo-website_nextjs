'use client'

export default function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
            {/* Premium Background Elements with Cosmic Colors */}
            <div className="absolute top-0 left-0 w-full h-full z-0">
                <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-neon-cyan/15 blur-[120px] animate-blob"></div>
                <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] rounded-full bg-neon-blue/15 blur-[120px] animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-[-10%] right-[10%] w-[550px] h-[550px] rounded-full bg-neon-purple/15 blur-[120px] animate-blob animation-delay-4000"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">

                    {/* Premium Badge */}
                    <div className="inline-flex items-center px-5 py-2.5 rounded-full border border-neon-cyan/30 bg-neon-cyan/10 backdrop-blur-md mb-8 animate-pulse-glow">
                        <div className="w-2 h-2 bg-neon-cyan rounded-full mr-3 animate-pulse"></div>
                        <span className="text-neon-cyan text-sm font-bold tracking-wide uppercase">
                            Next-Gen Business Automation
                        </span>
                    </div>

                    {/* Massive Headline with Gradient */}
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display leading-tight mb-8 animate-fade-in-up">
                        Automate Your <br />
                        <span className="text-gradient">Business Growth</span>
                    </h1>

                    {/* Description */}
                    <p className="text-xl md:text-2xl text-text-secondary mb-10 max-w-2xl mx-auto leading-relaxed">
                        Deploy powerful AI Chatbots for WhatsApp and Voice Calls.
                        <span className="text-white font-semibold"> Reduce hiring costs</span> and scale effortlessly.
                    </p>

                    {/* Premium CTAs */}
                    <div className="flex flex-col sm:flex-row gap-5 justify-center w-full mb-12">
                        <a
                            href="#demo"
                            onClick={(e) => {
                                e.preventDefault()
                                document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })
                            }}
                            className="group px-10 py-5 rounded-full bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple text-white text-lg font-bold shadow-glow-cosmic transition-all hover:scale-105 hover:shadow-glow-cosmic-lg relative overflow-hidden"
                        >
                            <span className="relative z-10">Book a Demo</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-neon-purple via-neon-cyan to-neon-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </a>
                        <a
                            href="#features"
                            onClick={(e) => {
                                e.preventDefault()
                                document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })
                            }}
                            className="px-10 py-5 rounded-full border-2 border-neon-cyan/40 bg-white/5 backdrop-blur-md text-white text-lg font-semibold transition-all hover:bg-neon-cyan/10 hover:border-neon-cyan hover:shadow-glow-cyan"
                        >
                            View Products
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}