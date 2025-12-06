'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check } from 'lucide-react'

export default function WhatsAppPricing() {
    const [billingCycle, setBillingCycle] = useState('monthly')

    const toggleBilling = () => {
        setBillingCycle(prev => prev === 'monthly' ? 'annual' : 'monthly')
    }

    const plans = [
        {
            name: 'Starter',
            description: 'Perfect for small businesses starting automation.',
            price: { monthly: 99, annual: 79 },
            features: [
                '1,000 WhatsApp conversations/mo',
                '1 Business Number',
                'Basic Chatbot Flows',
                'Notion/Sheets Logging'
            ],
            cta: 'Get Started',
            popular: false
        },
        {
            name: 'Growth',
            description: 'For growing businesses ready to scale.',
            price: { monthly: 249, annual: 199 },
            features: [
                '5,000 conversations/mo',
                '3 Business Numbers',
                'Catalog Integration',
                'Marketing Broadcasts',
                'Basic CRM Integration'
            ],
            cta: 'Get Started',
            popular: true
        },
        {
            name: 'Enterprise',
            description: 'Custom solutions for large organizations.',
            price: 'Custom',
            features: [
                'Unlimited conversations',
                'Multi-agent Dashboard',
                'White-label Option',
                'Dedicated Success Manager',
                'Custom SLA & Support'
            ],
            cta: 'Contact Sales',
            popular: false
        }
    ]

    return (
        <section id="pricing" className="py-24 bg-secondary/30">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
                        WhatsApp Business AI <span className="text-gradient">Plans</span>
                    </h2>
                    <p className="text-text-secondary max-w-2xl mx-auto text-lg mb-10">
                        Choose the perfect plan to automate your customer communication.
                    </p>

                    {/* Toggle */}
                    <div className="flex justify-center items-center gap-6">
                        <span className={`text-lg font-medium transition-colors ${billingCycle === 'monthly' ? 'text-white' : 'text-text-secondary'}`}>Monthly</span>
                        <button
                            onClick={toggleBilling}
                            className="relative w-16 h-8 rounded-full bg-white/10 p-1 transition-colors hover:bg-white/20"
                        >
                            <motion.div
                                className="w-6 h-6 bg-green-accent rounded-full shadow-md"
                                animate={{ x: billingCycle === 'annual' ? 32 : 0 }}
                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            />
                        </button>
                        <span className={`text-lg font-medium transition-colors ${billingCycle === 'annual' ? 'text-white' : 'text-text-secondary'}`}>
                            Annually <span className="text-sm font-bold text-green-accent ml-1">-20%</span>
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative p-8 rounded-[2.5rem] border transition-all duration-300 ${plan.popular
                                    ? 'bg-[#0a0b1e] border-green-accent shadow-2xl shadow-green-accent/10 scale-105 z-10'
                                    : 'bg-primary border-white/5 hover:border-white/10'
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                    <span className="bg-gradient-to-r from-green-accent to-blue-accent text-primary font-bold px-4 py-1 rounded-full text-sm">
                                        Most Popular
                                    </span>
                                </div>
                            )}

                            <h3 className="text-2xl font-bold font-display text-white mb-2">{plan.name}</h3>
                            <p className="text-text-secondary text-sm mb-8 h-10">{plan.description}</p>

                            <div className="mb-8 min-h-[4rem]">
                                {typeof plan.price === 'string' ? (
                                    <div className="text-4xl font-bold font-display text-white">{plan.price}</div>
                                ) : (
                                    <div className="flex items-end gap-1">
                                        <span className="text-5xl font-bold font-display text-white">
                                            ${billingCycle === 'monthly' ? plan.price.monthly : plan.price.annual}
                                        </span>
                                        <span className="text-text-secondary mb-2">/mo</span>
                                    </div>
                                )}
                            </div>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-text-secondary">
                                        <Check className="w-5 h-5 text-green-accent shrink-0" />
                                        <span className="text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-4 rounded-xl font-bold transition-all ${plan.popular
                                    ? 'bg-gradient-to-r from-green-accent to-blue-accent text-primary hover:shadow-lg hover:shadow-green-accent/20'
                                    : 'bg-white/5 text-white hover:bg-white/10'
                                }`}>
                                {plan.cta}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
