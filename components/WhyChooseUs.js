export default function WhyChooseUs() {
    const benefits = [
        {
            title: 'Unmatched Reliability',
            description: 'Our agents are built on a robust, scalable infrastructure, ensuring 99.9% uptime for your business operations.',
            icon: (
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            gradient: 'from-neon-cyan to-neon-blue'
        },
        {
            title: 'Simple Integration',
            description: 'Seamlessly connect our AI with your existing CRM, social media platforms, and communication channels.',
            icon: (
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            gradient: 'from-neon-blue to-neon-purple'
        },
        {
            title: 'AI-Powered Efficiency',
            description: 'Our intelligent models are trained to optimize your workflows, handle complex queries, and boost your productivity.',
            icon: (
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
            ),
            gradient: 'from-neon-purple to-neon-cyan'
        }
    ]

    return (
        <section id="why-us" className="py-24 bg-primary relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-bold font-display mb-6">
                        Why Choose <span className="text-gradient">SyncFlo Ai</span>?
                    </h2>
                    <p className="text-text-secondary max-w-2xl mx-auto text-xl">
                        Discover the key advantages that set our AI solutions apart from the rest.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="relative p-10 rounded-3xl glass-panel transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover group"
                        >
                            {/* Gradient Border on Hover */}
                            <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>

                            {/* Icon Container with Gradient */}
                            <div className={`relative z-10 w-20 h-20 rounded-2xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mb-6 shadow-glow-cosmic group-hover:scale-110 transition-transform duration-300`}>
                                {benefit.icon}
                            </div>

                            {/* Title */}
                            <h3 className="relative z-10 text-2xl font-bold font-display text-white mb-4 group-hover:text-gradient transition-all">
                                {benefit.title}
                            </h3>

                            {/* Description */}
                            <p className="relative z-10 text-text-secondary group-hover:text-white/90 leading-relaxed text-lg transition-colors">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}