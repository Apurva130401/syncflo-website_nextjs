export default function TrustMetrics() {
    const metrics = [
        {
            value: '3x',
            label: 'Return on Investment',
            icon: (
                <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
            ),
            gradient: 'from-neon-cyan to-neon-blue'
        },
        {
            value: 'Global',
            label: 'Reach & Multi-Language',
            icon: (
                <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            gradient: 'from-neon-blue to-neon-purple'
        },
        {
            value: '10x',
            label: 'Faster Resolution',
            icon: (
                <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            gradient: 'from-neon-purple to-neon-cyan'
        },
        {
            value: '24/7',
            label: 'Agent Availability',
            icon: (
                <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            gradient: 'from-neon-cyan to-neon-purple'
        }
    ]

    return (
        <section className="py-24 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {metrics.map((metric, index) => (
                        <div
                            key={index}
                            className="glass-panel p-8 rounded-3xl text-center transition-all duration-300 hover:scale-105 hover:shadow-glow-cosmic group relative overflow-hidden"
                        >
                            {/* Hover Gradient Overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${metric.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                            {/* Icon */}
                            <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${metric.gradient} flex items-center justify-center shadow-glow-cosmic group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                                {metric.icon}
                            </div>

                            {/* Value */}
                            <p className="text-5xl font-bold font-display text-white mb-3 group-hover:text-gradient transition-all relative z-10">
                                {metric.value}
                            </p>

                            {/* Label */}
                            <p className="text-text-secondary group-hover:text-white transition-colors relative z-10 font-medium">
                                {metric.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}