import Link from 'next/link'

export default function Features() {
    const features = [
        {
            title: 'WhatsApp Business AI',
            description: 'Automate customer interactions, sales processes, and support on WhatsApp with our intelligent AI assistant.',
            tag: 'Popular',
            tagColor: 'text-green-accent bg-green-accent/15',
            gradient: 'from-green-accent to-blue-accent',
            icon: (
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
            ),
            link: '#whatsapp'
        },
        {
            title: 'AI Voice Sales Agent',
            description: 'Handle inbound and outbound sales calls 24/7 with a human-like voice agent that can qualify leads and book appointments.',
            tag: 'Cutting Edge',
            tagColor: 'text-sales-orange bg-sales-orange/15',
            gradient: 'from-sales-orange to-sales-red',
            icon: (
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
            ),
            link: '/ai-voice-agent'
        },
        {
            title: 'Full AI Business Suite',
            description: 'Combine WhatsApp automation and voice agents for a complete AI-powered business solution that handles all customer interactions.',
            tag: 'Complete Solution',
            tagColor: 'text-suite-purple bg-suite-purple/15',
            gradient: 'from-suite-purple to-suite-pink',
            icon: (
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            link: '#suite'
        }
    ]

    return (
        <section id="features" className="py-24 relative overflow-hidden">
            {/* Subtle Background */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-secondary/40 to-transparent z-0"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-bold font-display mb-6">
                        A Suite of Powerful <span className="text-gradient">AI Tools</span>
                    </h2>
                    <p className="text-text-secondary max-w-2xl mx-auto text-xl">
                        Explore our cutting-edge AI products designed to transform your business operations and drive growth.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group glass-panel p-10 rounded-3xl flex flex-col h-full transition-all duration-300 hover:transform hover:-translate-y-3 relative overflow-hidden"
                        >
                            {/* Hover Gradient Overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                            {/* Icon */}
                            <div className="relative z-10 mb-6">
                                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-4xl shadow-glow-cosmic opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300`}>
                                    {feature.icon}
                                </div>
                            </div>

                            {/* Header with Tag */}
                            <div className="relative z-10 flex justify-between items-start mb-6">
                                <h3 className="text-2xl font-bold font-display text-white group-hover:text-gradient transition-all">
                                    {feature.title}
                                </h3>
                            </div>

                            {/* Tag */}
                            <span className={`relative z-10 self-start px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${feature.tagColor} mb-6`}>
                                {feature.tag}
                            </span>

                            {/* Description */}
                            <p className="relative z-10 text-text-secondary mb-8 flex-grow leading-relaxed text-lg">
                                {feature.description}
                            </p>

                            {/* Learn More Link */}
                            <a
                                href={feature.link}
                                className="relative z-10 inline-flex items-center text-sm font-bold text-white group-hover:text-white/90 transition-colors"
                            >
                                Learn More
                                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-16 text-center relative z-10">
                <Link
                    href="/products"
                    className="inline-flex items-center gap-2 text-text-secondary hover:text-white transition-colors font-medium group"
                >
                    View All Products
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </Link>
            </div>
        </section>
    )
}