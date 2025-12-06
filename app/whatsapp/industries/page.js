'use client'

import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import Link from 'next/link'
import { industryData } from '../data'

export default function WhatsAppIndustries() {
    // Generate industries list from the data file dynamically
    const industries = Object.entries(industryData).map(([slug, data]) => ({
        name: data.title.replace('WhatsApp for ', ''), // Clean up the title
        link: `/whatsapp/${slug}`,
        description: data.description,
        icon: '💬' // Using a generic icon as specific ones aren't in the data obj easily accessible here without parsing
    }))

    return (
        <div className="bg-primary min-h-screen text-white font-sans selection:bg-green-accent/30">
            <Navbar />
            <main className="container mx-auto px-6 pt-40 pb-20">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">
                        WhatsApp Automation for <span className="text-gradient from-green-accent to-blue-accent">Every Industry</span>
                    </h1>
                    <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                        Explore our specialized WhatsApp AI solutions designed for your specific business needs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {industries.map((industry, index) => (
                        <Link href={industry.link} key={index} className="group glass-panel p-8 rounded-3xl border border-white/5 hover:border-green-accent/30 transition-all hover:-translate-y-1">
                            <div className="text-4xl mb-4">{industry.icon}</div>
                            <h2 className="text-2xl font-bold font-display mb-2 group-hover:text-green-accent transition-colors">{industry.name}</h2>
                            <p className="text-white/60 line-clamp-2">{industry.description}</p>
                        </Link>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    )
}
