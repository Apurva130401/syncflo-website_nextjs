'use client'

export default function ProductsGrid() {
    const products = [
        {
            title: 'WhatsApp Business AI',
            description: 'Smart AI for WhatsApp Conversations',
            icon: (
                <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m15.118-8.437h-.269c-.988 0-1.93.493-2.637 1.359C15.228 6.42 14.228 7 13.167 7c-1.061 0-2.06-.58-2.787-1.559C9.673 4.482 8.731 3.989 7.743 3.989h-.269C3.879 3.989 1 6.867 1 10.408c0 2.299 1.022 4.367 2.653 5.815L1 21l6.452-1.69c1.574.873 3.414 1.39 5.348 1.39h.005c3.554 0 6.431-2.878 6.431-6.418 0-3.541-2.877-6.419-6.431-6.419" />
                </svg>
            ),
            gradient: 'from-green-accent to-blue-accent',
            features: [
                'Handle 1,000s of conversations',
                'Smart sales automation',
                'Industry-specific flows',
                'AI + human agent handoff',
                'CRM integrations'
            ],
            link: '#'
        },
        {
            title: 'AI Voice Sales Agent',
            description: 'AI That Talks Like Your Best Sales Rep',
            icon: (
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
            ),
            gradient: 'from-sales-orange to-sales-red',
            features: [
                'Make and receive calls 24/7',
                'Book appointments directly',
                'Handle multiple numbers',
                'Call logging & CRM sync',
                'Custom voice cloning'
            ],
            link: '#'
        },
        {
            title: 'Full AI Business Suite',
            description: 'All-in-One AI for Sales & Support',
            icon: (
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
            ),
            gradient: 'from-suite-purple to-suite-pink',
            features: [
                'WhatsApp AI + Voice Agent',
                'Unified dashboard',
                'End-to-end automation',
                'Multi-agent support',
                'White-label options'
            ],
            link: '#'
        },
        {
            title: 'SyncFlo AI Assistant',
            description: 'Your Personal AI Chief of Staff',
            icon: (
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            ),
            gradient: 'from-neon-cyan to-neon-purple',
            features: [
                'Email management',
                'Automated reply drafting',
                'Calendar automation',
                'Communication handling',
                'Enterprise-grade security'
            ],
            link: '/assistant'
        }
    ]

    return (
        <section id="products" className="py-24 bg-secondary relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-bold font-display mb-6">
                        Powerful AI Tools for <span className="text-gradient">Every Business</span>
                    </h2>
                    <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                        Discover our comprehensive suite of AI-powered solutions designed to automate, optimize, and scale your business operations.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className="glass-panel p-8 rounded-3xl transition-all duration-300 hover:scale-105 hover:shadow-glow-cosmic group relative overflow-hidden flex flex-col"
                        >
                            {/* Hover Gradient Overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                            <div className="text-center mb-8 relative z-10">
                                <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${product.gradient} flex items-center justify-center shadow-glow-cosmic group-hover:scale-110 transition-transform duration-300`}>
                                    {product.icon}
                                </div>
                                <h3 className="text-2xl font-bold font-display mb-3 text-white">{product.title}</h3>
                                <p className="text-text-secondary text-lg">{product.description}</p>
                            </div>

                            <ul className="space-y-4 mb-8 flex-grow relative z-10">
                                {product.features.map((feature, i) => (
                                    <li key={i} className="flex items-start text-white/90">
                                        <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${product.gradient} flex items-center justify-center mr-3 shrink-0 mt-0.5`}>
                                            <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <a
                                href={product.link}
                                className={`w-full block text-center py-3 rounded-xl font-semibold transition-all relative z-10 bg-white/5 hover:bg-white/10 border border-white/10 group-hover:border-white/20`}
                            >
                                Learn More
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
