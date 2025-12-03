'use client'

export default function PricingHero() {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full z-0">
                <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-neon-cyan/10 blur-[120px] animate-blob"></div>
                <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] rounded-full bg-neon-blue/10 blur-[120px] animate-blob animation-delay-2000"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-bold font-display leading-tight mb-8 animate-fade-in-up">
                        Choose Your <span className="text-gradient">Plan</span>
                    </h1>
                    <p className="text-xl text-text-secondary mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
                        Select the perfect AI solution for your business. From WhatsApp automation to voice agents, we have everything you need to scale.
                    </p>
                </div>
            </div>
        </section>
    )
}
