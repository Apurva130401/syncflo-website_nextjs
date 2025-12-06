export default function HowItWorks() {
    const steps = [
        {
            number: '01',
            title: 'Connect',
            description: 'Connect your preferred channels like WhatsApp or your CRM to our platform with a few clicks.',
            gradient: 'from-neon-cyan to-neon-blue'
        },
        {
            number: '02',
            title: 'Customize',
            description: "Fine-tune the AI agent's personality, knowledge base, and specific actions to align with your brand.",
            gradient: 'from-neon-blue to-neon-purple'
        },
        {
            number: '03',
            title: 'Automate',
            description: 'Launch your AI agent and watch it handle tasks 24/7, providing real-time value and efficiency.',
            gradient: 'from-neon-purple to-neon-cyan'
        }
    ]

    return (
        <section id="how-it-works" className="py-24 relative overflow-hidden">
            {/* Background */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-secondary/30 to-transparent z-0"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-bold font-display mb-6">
                        How It <span className="text-gradient">Works</span>
                    </h2>
                    <p className="text-text-secondary max-w-2xl mx-auto text-xl">
                        Getting started with SyncFlo Ai is a simple three-step process.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                    {/* Connecting Line with Cosmic Gradient (Desktop) */}
                    <div className="hidden md:block absolute top-1/3 left-0 w-full h-1 bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple opacity-30 -translate-y-1/2 z-0"></div>

                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="glass-panel p-10 rounded-3xl relative z-10 text-center transition-all duration-300 hover:-translate-y-3 hover:shadow-card-hover group"
                        >
                            {/* Large Gradient Number */}
                            <div className={`text-8xl font-bold font-display bg-gradient-to-br ${step.gradient} bg-clip-text text-transparent opacity-30 group-hover:opacity-50 transition-opacity mb-6`}>
                                {step.number}
                            </div>

                            {/* Title */}
                            <h3 className="text-3xl font-bold font-display text-white mb-5 group-hover:text-gradient transition-all">
                                {step.title}
                            </h3>

                            {/* Description */}
                            <p className="text-text-secondary group-hover:text-white/90 leading-relaxed text-lg transition-colors">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}