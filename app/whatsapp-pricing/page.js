'use client'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { motion } from 'framer-motion'

export default function WhatsAppPricingPage() {
    const plans = [
        {
            name: 'Starter',
            price: '$49',
            description: 'Perfect for small businesses getting started with AI automation.',
            color: 'text-white',
            btnColor: 'bg-white/10 hover:bg-white/20',
            popular: false
        },
        {
            name: 'Growth',
            price: '$149',
            description: 'Advanced automation for growing businesses.',
            color: 'text-green-accent',
            btnColor: 'bg-gradient-to-r from-green-accent to-blue-accent text-white shadow-lg shadow-green-accent/20',
            popular: true
        },
        {
            name: 'Business',
            price: '$299',
            description: 'For scaling companies needing deep AI automation.',
            color: 'text-blue-accent',
            btnColor: 'bg-white/10 hover:bg-white/20',
            popular: false
        }
    ]

    const features = [
        {
            category: 'Core Features',
            items: [
                { name: 'AI Conversations/mo', starter: '1,000', growth: '5,000', business: '15,000' },
                { name: 'AI WhatsApp Chatbot', starter: true, growth: true, business: true },
                { name: 'Appointment Booking AI', starter: true, growth: true, business: true },
                { name: 'Human Handoff Inbox', starter: true, growth: true, business: true },
                { name: 'Template Management', starter: true, growth: true, business: true },
            ]
        },
        {
            category: 'Automation & Workflow',
            items: [
                { name: 'Workflow Automations', starter: '3', growth: '10', business: 'Unlimited' },
                { name: 'Advanced AI Sales Agent', starter: false, growth: true, business: true },
                { name: 'Multi-Agent Routing', starter: false, growth: true, business: true },
                { name: 'Catalog & Product Sync', starter: false, growth: true, business: true },
                { name: 'Custom AI Personas', starter: false, growth: false, business: true },
                { name: 'Document/PDF Understanding', starter: false, growth: false, business: true },
            ]
        },
        {
            category: 'Integration & Data',
            items: [
                { name: 'Basic CRM Integration', starter: true, growth: true, business: true },
                { name: 'Full CRM + Notion Integration', starter: false, growth: true, business: true },
                { name: 'Vapi Voice-Agent Integration', starter: false, growth: false, business: true },
                { name: 'Analytics Overview', starter: true, growth: 'Advanced', business: 'Advanced' },
                { name: 'Team Access Controls', starter: false, growth: true, business: true },
            ]
        },
        {
            category: 'Support & SLAs',
            items: [
                { name: 'Support Level', starter: 'Email', growth: 'Priority', business: 'Dedicated Manager' },
                { name: 'Uptime SLA', starter: 'Standard', growth: 'Standard', business: '99.5%' },
                { name: 'Multi-Location Support', starter: false, growth: false, business: true },
                { name: 'AI Email Assistant', starter: 'Complimentary', growth: 'Complimentary', business: 'Complimentary', highlight: true },
            ]
        },
        {
            category: 'Add-ons',
            items: [
                { name: 'Extra AI Conversations', starter: '$0.02 each', growth: '$0.015 each', business: '$0.012 each' },
                { name: 'Extra Workflows', starter: '$5/mo each', growth: '$4/mo each', business: 'Included' },
            ]
        }
    ]

    return (
        <main className="min-h-screen bg-[#020510] text-white">
            <Navbar />

            <section className="pt-32 pb-20 relative">
                {/* Background Blobs */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-green-accent/10 blur-[120px]"></div>
                    <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-blue-accent/10 blur-[120px]"></div>
                </div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">
                            Compare <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-accent to-blue-accent">WhatsApp Plans</span>
                        </h1>
                        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                            Choose the perfect plan to scale your business with AI-driven automation on WhatsApp.
                        </p>
                    </div>

                    {/* Detailed Comparison Table */}
                    <div className="overflow-x-auto lg:overflow-visible pb-8">
                        <div className="min-w-[900px]">
                            {/* Table Header */}
                            <div className="grid grid-cols-4 gap-4 mb-8 sticky top-24 bg-[#020510]/95 backdrop-blur-sm z-20 py-4 border-b border-white/10">
                                <div className="p-4 flex items-end">
                                    <h3 className="text-xl font-bold text-text-secondary">Features</h3>
                                </div>
                                {plans.map((plan, index) => (
                                    <div key={index} className={`p-6 rounded-2xl relative ${plan.popular ? 'bg-white/5 border border-green-accent/20' : ''}`}>
                                        {plan.popular && (
                                            <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-green-accent to-blue-accent text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg shadow-green-accent/20">
                                                Most Popular
                                            </span>
                                        )}
                                        <h3 className={`text-2xl font-bold mb-2 ${plan.color}`}>{plan.name}</h3>
                                        <div className="text-3xl font-bold mb-4">{plan.price}<span className="text-sm font-normal text-text-secondary">/mo</span></div>
                                        <p className="text-sm text-text-secondary mb-6">{plan.description}</p>
                                        <button className={`w-full py-3 rounded-xl font-bold transition-all ${plan.btnColor}`}>
                                            Choose {plan.name}
                                        </button>
                                    </div>
                                ))}
                            </div>

                            {/* Table Body */}
                            <div className="space-y-8">
                                {features.map((section, idx) => (
                                    <div key={idx}>
                                        <h4 className="text-lg font-bold text-white mb-4 pl-4 border-l-4 border-green-accent/50">{section.category}</h4>
                                        <div className="space-y-2">
                                            {section.items.map((item, i) => (
                                                <div key={i} className="grid grid-cols-4 gap-4 py-4 border-b border-white/5 hover:bg-white/5 transition-colors rounded-lg">
                                                    <div className="px-4 flex items-center">
                                                        <span className={`text-sm font-medium ${item.highlight ? 'text-green-accent font-bold' : 'text-text-secondary'}`}>
                                                            {item.name}
                                                        </span>
                                                    </div>
                                                    <div className="px-4 flex items-center justify-center text-center">
                                                        {renderValue(item.starter)}
                                                    </div>
                                                    <div className="px-4 flex items-center justify-center text-center">
                                                        {renderValue(item.growth)}
                                                    </div>
                                                    <div className="px-4 flex items-center justify-center text-center">
                                                        {renderValue(item.business)}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}

function renderValue(value) {
    if (value === true) {
        return (
            <div className="w-6 h-6 rounded-full bg-green-accent/20 flex items-center justify-center">
                <svg className="w-3.5 h-3.5 text-green-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                </svg>
            </div>
        )
    }
    if (value === false) {
        return <span className="text-white/20 text-lg">-</span>
    }
    return <span className="text-sm font-medium text-white">{value}</span>
}
