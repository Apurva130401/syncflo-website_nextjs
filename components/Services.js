import Link from 'next/link'

export default function Services() {
    const services = [
        {
            title: 'Website Development',
            description: 'Stunning, high-performance websites built with Next.js and modern technologies to establish your premium digital presence.',
            tag: 'High Performance',
            tagColor: 'text-blue-400 bg-blue-400/15',
            gradient: 'from-blue-400 to-indigo-500',
            icon: (
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
            ),
            link: '/web-development'
        },
        {
            title: 'Custom AI Agents',
            description: 'Tailored AI solutions trained on your specific business data to handle unique workflows, support, and internal operations.',
            tag: 'Tailored Solution',
            tagColor: 'text-purple-400 bg-purple-400/15',
            gradient: 'from-purple-400 to-pink-500',
            icon: (
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            link: '/custom-agents'
        },
        {
            title: 'Workflow Automation',
            description: 'Steamline your business operations by connecting your favorite apps and automating repetitive tasks with AI logic.',
            tag: 'Efficiency',
            tagColor: 'text-cyan-400 bg-cyan-400/15',
            gradient: 'from-cyan-400 to-teal-500',
            icon: (
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
            ),
            link: '/workflow-automation'
        }
    ]

    return (
        <section id="services" className="py-24 relative overflow-hidden">
            {/* Subtle Background */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-secondary/40 to-transparent z-0"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-bold font-display mb-6">
                        Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Services</span>
                    </h2>
                    <p className="text-text-secondary max-w-2xl mx-auto text-xl">
                        Beyond products, we offer specialized services to help you build, scale, and automate your digital infrastructure.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group glass-panel p-10 rounded-3xl flex flex-col h-full transition-all duration-300 hover:transform hover:-translate-y-3 relative overflow-hidden"
                        >
                            {/* Hover Gradient Overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                            {/* Icon */}
                            <div className="relative z-10 mb-6">
                                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-4xl shadow-glow-cosmic opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300`}>
                                    {service.icon}
                                </div>
                            </div>

                            {/* Header with Tag */}
                            <div className="relative z-10 flex justify-between items-start mb-6">
                                <h3 className="text-2xl font-bold font-display text-white group-hover:text-white transition-all">
                                    {service.title}
                                </h3>
                            </div>

                            {/* Tag */}
                            <span className={`relative z-10 self-start px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${service.tagColor} mb-6`}>
                                {service.tag}
                            </span>

                            {/* Description */}
                            <p className="relative z-10 text-text-secondary mb-8 flex-grow leading-relaxed text-lg group-hover:text-white/90 transition-colors">
                                {service.description}
                            </p>

                            {/* Learn More Link */}
                            <Link
                                href={service.link}
                                className="relative z-10 inline-flex items-center text-sm font-bold text-white group-hover:text-white transition-colors"
                            >
                                View Service
                                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </div>
                    ))}
                </div>
                <div className="mt-16 text-center relative z-10">
                    <Link
                        href="/service"
                        className="inline-flex items-center gap-2 text-text-secondary hover:text-white transition-colors font-medium group"
                    >
                        View All Services
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    )
}
