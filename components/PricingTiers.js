'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function PricingTiers() {
    const [activeTab, setActiveTab] = useState('whatsapp')
    const [billingCycle, setBillingCycle] = useState('monthly')

    const toggleBilling = () => {
        setBillingCycle(prev => prev === 'monthly' ? 'annual' : 'monthly')
    }

    const tabs = [
        { id: 'whatsapp', label: 'WhatsApp Business AI', gradient: 'from-green-accent to-blue-accent', color: 'text-green-accent', glow: 'shadow-green-accent/20' },
        { id: 'voice', label: 'AI Voice Agent', gradient: 'from-sales-orange to-sales-red', color: 'text-sales-orange', glow: 'shadow-sales-orange/20' },
        { id: 'suite', label: 'Full AI Business Suite', gradient: 'from-suite-purple to-suite-pink', color: 'text-suite-purple', glow: 'shadow-suite-purple/20' }
    ]

    const pricingData = {
        whatsapp: {
            title: 'WhatsApp Business AI',
            description: 'Automate customer interactions on the world\'s most popular messaging app.',
            gradient: 'from-green-accent to-blue-accent',
            glowColor: 'rgba(0, 255, 135, 0.15)',
            plans: [
                {
                    name: 'Starter',
                    description: 'Essential automation for small businesses.',
                    price: { monthly: 99, annual: 79 },
                    features: [
                        '1,000 Conversations/mo',
                        '1 Business Number',
                        'Basic Chatbot Flows',
                        'Notion/Sheets Logging',
                        'SyncFlo AI Assistant'
                    ],
                    cta: 'Get Started',
                    popular: false
                },
                {
                    name: 'Growth',
                    description: 'Advanced tools for scaling operations.',
                    price: { monthly: 249, annual: 199 },
                    features: [
                        '5,000 Conversations/mo',
                        '3 Business Numbers',
                        'Catalog Integration',
                        'Marketing Broadcasts',
                        'CRM Integration',
                        'SyncFlo AI Assistant'
                    ],
                    cta: 'Start Growth',
                    popular: true
                },
                {
                    name: 'Enterprise',
                    description: 'Custom solutions for large organizations.',
                    price: 'Custom',
                    features: [
                        'Unlimited Conversations',
                        'Multi-agent Dashboard',
                        'White-label Options',
                        'Dedicated Success Manager',
                        'Custom SLA & Support',
                        'SyncFlo AI Assistant'
                    ],
                    cta: 'Contact Sales',
                    popular: false
                }
            ]
        },
        voice: {
            title: 'AI Voice Agent',
            description: 'Human-like voice AI for inbound and outbound sales calls.',
            gradient: 'from-sales-orange to-sales-red',
            glowColor: 'rgba(255, 140, 0, 0.15)',
            plans: [
                {
                    name: 'Growth',
                    description: 'For teams automating appointment setting.',
                    price: { monthly: 149, annual: 119 },
                    features: [
                        '500 AI Call Minutes',
                        '1 Phone Number',
                        'Calendar Integration',
                        'Basic Call Logging',
                        'SyncFlo AI Assistant'
                    ],
                    cta: 'Get Started',
                    popular: false
                },
                {
                    name: 'Performance',
                    description: 'High-volume outbound campaigns.',
                    price: { monthly: 399, annual: 319 },
                    features: [
                        '2,000 AI Call Minutes',
                        '5 Phone Numbers',
                        'CRM Integration',
                        'Priority Support',
                        'Advanced Analytics',
                        'SyncFlo AI Assistant'
                    ],
                    cta: 'Start Performance',
                    popular: true
                },
                {
                    name: 'Enterprise',
                    description: 'Custom voice cloning and unlimited scale.',
                    price: 'Custom',
                    features: [
                        'Unlimited Minutes',
                        'Custom Voice Cloning',
                        'Dedicated Account Manager',
                        'API Access',
                        'White-label Options',
                        'SyncFlo AI Assistant'
                    ],
                    cta: 'Contact Sales',
                    popular: false
                }
            ]
        },
        suite: {
            title: 'Full AI Business Suite',
            description: 'The complete operating system for automated business growth.',
            gradient: 'from-suite-purple to-suite-pink',
            glowColor: 'rgba(168, 85, 247, 0.15)',
            plans: [
                {
                    name: 'Starter Suite',
                    description: 'Chat + Voice essentials combined.',
                    price: { monthly: 199, annual: 159 },
                    features: [
                        'WhatsApp Starter + Voice Growth',
                        '1,000 Conversations',
                        '500 AI Call Minutes',
                        '1 WhatsApp + 1 Phone Number',
                        'SyncFlo AI Assistant'
                    ],
                    cta: 'Get Started',
                    popular: false
                },
                {
                    name: 'Growth Suite',
                    description: 'Total automation for scaling companies.',
                    price: { monthly: 549, annual: 439 },
                    features: [
                        'WhatsApp Growth + Voice Performance',
                        '5,000 Conversations',
                        '2,000 Call Minutes',
                        'Unified CRM Integration',
                        'Multi-channel Analytics',
                        'SyncFlo AI Assistant'
                    ],
                    cta: 'Get Full Suite',
                    popular: true
                },
                {
                    name: 'Enterprise Suite',
                    description: 'Maximum power, zero limits.',
                    price: 'Custom',
                    features: [
                        'Unlimited Everything',
                        'White-label Dashboard',
                        'Custom AI Model Training',
                        'Dedicated Engineering Support',
                        'On-premise Deployment Option',
                        'SyncFlo AI Assistant'
                    ],
                    cta: 'Contact Sales',
                    popular: false
                }
            ]
        }
    }

    const currentData = pricingData[activeTab]

    return (
        <section className="py-20 relative overflow-hidden">
            {/* Dynamic Background Orb */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full blur-[120px] transition-colors duration-700 opacity-20 pointer-events-none"
                style={{ background: currentData.glowColor }}
            ></div>

            <div className="container mx-auto px-6 relative z-10">

                {/* Segmented Control Tabs */}
                <div className="flex justify-center mb-16">
                    <div className="bg-white/5 backdrop-blur-xl p-1.5 rounded-2xl border border-white/10 inline-flex relative">
                        {/* Sliding Background Pill */}
                        <div
                            className={`absolute top-1.5 bottom-1.5 rounded-xl bg-gradient-to-r ${currentData.gradient} transition-all duration-500 ease-out shadow-lg`}
                            style={{
                                left: `${tabs.findIndex(t => t.id === activeTab) * (100 / tabs.length) + 0.5}%`,
                                width: `${98 / tabs.length}%`
                            }}
                        ></div>

                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`relative px-6 md:px-10 py-3 rounded-xl font-bold text-sm md:text-base transition-colors duration-300 z-10 ${activeTab === tab.id ? 'text-white' : 'text-text-secondary hover:text-white'
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Header & Toggle */}
                <div className="text-center mb-20 animate-fade-in-up">
                    <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
                        <span className={`bg-gradient-to-r ${currentData.gradient} bg-clip-text text-transparent`}>
                            {currentData.title}
                        </span>
                    </h2>
                    <p className="text-text-secondary max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
                        {currentData.description}
                    </p>

                    {/* Premium Toggle */}
                    <div className="flex justify-center items-center gap-6">
                        <span className={`text-lg font-medium transition-colors ${billingCycle === 'monthly' ? 'text-white' : 'text-text-secondary'}`}>Monthly</span>

                        <button
                            onClick={toggleBilling}
                            className={`relative w-20 h-10 rounded-full p-1 transition-all duration-500 ${billingCycle === 'annual'
                                    ? `bg-gradient-to-r ${currentData.gradient} shadow-glow-cosmic`
                                    : 'bg-white/10 border border-white/10'
                                }`}
                        >
                            <motion.div
                                className="w-8 h-8 bg-white rounded-full shadow-md"
                                animate={{ x: billingCycle === 'annual' ? 40 : 0 }}
                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            />
                        </button>

                        <span className={`text-lg font-medium transition-colors ${billingCycle === 'annual' ? 'text-white' : 'text-text-secondary'}`}>
                            Annually <span className={`text-sm font-bold ml-1 bg-gradient-to-r ${currentData.gradient} bg-clip-text text-transparent`}>-20%</span>
                        </span>
                    </div>
                </div>

                {/* Pricing Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-7xl mx-auto">
                    {currentData.plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative group flex flex-col p-1 rounded-[2.5rem] transition-all duration-500 ${plan.popular
                                    ? 'md:-translate-y-8 z-10'
                                    : 'hover:-translate-y-2'
                                }`}
                        >
                            {/* Gradient Border for Popular Card */}
                            {plan.popular && (
                                <div className={`absolute inset-0 rounded-[2.5rem] bg-gradient-to-b ${currentData.gradient} opacity-100 blur-sm`}></div>
                            )}

                            {/* Card Content */}
                            <div className={`relative h-full flex flex-col p-8 md:p-10 rounded-[2.4rem] bg-[#0a0b1e] border border-white/5 overflow-hidden ${plan.popular ? 'shadow-2xl' : 'shadow-xl'
                                }`}>
                                {/* Glass Shine Effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                                {plan.popular && (
                                    <div className="absolute top-6 right-6">
                                        <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r ${currentData.gradient} text-white shadow-lg`}>
                                            Popular
                                        </span>
                                    </div>
                                )}

                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold font-display text-white mb-2">{plan.name}</h3>
                                    <p className="text-text-secondary text-sm h-10">{plan.description}</p>
                                </div>

                                <div className="mb-10 min-h-[5rem]">
                                    {typeof plan.price === 'string' ? (
                                        <div className="text-5xl font-bold font-display text-white tracking-tight">{plan.price}</div>
                                    ) : (
                                        <div className="flex items-end gap-2">
                                            <div className="flex overflow-hidden h-[4.5rem] items-end">
                                                <AnimatePresence mode="wait">
                                                    <motion.span
                                                        key={billingCycle}
                                                        initial={{ y: 50, opacity: 0 }}
                                                        animate={{ y: 0, opacity: 1 }}
                                                        exit={{ y: -50, opacity: 0 }}
                                                        transition={{ duration: 0.3, ease: "backOut" }}
                                                        className="text-6xl font-bold font-display text-white tracking-tighter block"
                                                    >
                                                        ${billingCycle === 'monthly' ? plan.price.monthly : plan.price.annual}
                                                    </motion.span>
                                                </AnimatePresence>
                                            </div>
                                            <span className="text-text-secondary mb-3 font-medium">/mo</span>
                                        </div>
                                    )}
                                    {typeof plan.price !== 'string' && (
                                        <AnimatePresence>
                                            {billingCycle === 'annual' && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: 'auto' }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    className="text-sm text-green-400 mt-2 font-medium"
                                                >
                                                    Billed annually
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    )}
                                </div>

                                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-10"></div>

                                <ul className="space-y-5 mb-10 flex-grow">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-4 text-text-secondary group-hover:text-white/90 transition-colors">
                                            <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${currentData.gradient} flex items-center justify-center shrink-0 shadow-sm mt-0.5`}>
                                                <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span className="text-sm leading-relaxed">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button className={`w-full py-5 rounded-2xl font-bold text-lg transition-all duration-300 relative overflow-hidden group/btn ${plan.popular
                                        ? `bg-gradient-to-r ${currentData.gradient} text-white shadow-lg hover:shadow-xl hover:scale-[1.02]`
                                        : 'bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20'
                                    }`}>
                                    <span className="relative z-10">{plan.cta}</span>
                                    {plan.popular && (
                                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                                    )}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
