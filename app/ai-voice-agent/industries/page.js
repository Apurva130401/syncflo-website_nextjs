'use client'

import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import Link from 'next/link'

export default function VoiceAgentIndustries() {
    const industries = [
        { name: 'Car Dealerships', link: '/ai-voice-agent/car-dealership', description: 'Automate test drives and service appointments.', icon: '🚗' },
        { name: 'Real Estate', link: '/ai-voice-agent/real-estate', description: 'Qualify buyers and schedule property viewings.', icon: '🏠' },
        { name: 'Recruitment', link: '/ai-voice-agent/recruitment', description: 'Screen candidates and schedule interviews faster.', icon: '👥' },
        { name: 'Mortgage', link: '/ai-voice-agent/mortgage', description: 'Pre-qualify borrowers and collect documents.', icon: '📝' },
        { name: 'Healthcare', link: '/ai-voice-agent/healthcare', description: 'HIPAA-compliant appointment scheduling.', icon: '🏥' },
        { name: 'Insurance', link: '/ai-voice-agent/insurance', description: 'Process claims and renewals instantly.', icon: '🛡️' },
        { name: 'Legal', link: '/ai-voice-agent/legal', description: 'Client intake and consultation booking.', icon: '⚖️' },
        { name: 'SaaS', link: '/ai-voice-agent/saas', description: 'Qualify leads and book demos for sales teams.', icon: '💻' },
        { name: 'E-Commerce', link: '/ai-voice-agent/e-commerce', description: 'Order support and abandoned cart recovery.', icon: '🛒' },
        { name: 'Agencies', link: '/ai-voice-agent/agency', description: 'White-label AI solutions for your clients.', icon: '🚀' },
    ]

    return (
        <div className="bg-primary min-h-screen text-white font-sans selection:bg-sales-orange/30">
            <Navbar />
            <main className="container mx-auto px-6 pt-40 pb-20">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">
                        AI Voice Agents for <span className="text-gradient from-sales-orange to-sales-red">Every Industry</span>
                    </h1>
                    <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                        Discover how our tailored AI voice solutions can transform your specific business sector.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {industries.map((industry, index) => (
                        <Link href={industry.link} key={index} className="group glass-panel p-8 rounded-3xl border border-white/5 hover:border-sales-orange/30 transition-all hover:-translate-y-1">
                            <div className="text-4xl mb-4">{industry.icon}</div>
                            <h2 className="text-2xl font-bold font-display mb-2 group-hover:text-sales-orange transition-colors">{industry.name}</h2>
                            <p className="text-white/60">{industry.description}</p>
                        </Link>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    )
}
