'use client'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Check, X } from 'lucide-react'

export default function WebDevPricingPage() {
    const plans = [
        {
            name: "Launch",
            subtitle: "For Startups & Personal Brands",
            price: "5,000",
            description: "A stunning, high-performance landing page to establish your digital presence.",
            features: [
                "Custom Next.js Development",
                "Mobile-First Responsive Design",
                "Basic SEO Setup",
                "Contact Form Integration",
                "1 Month Support",
                "CMS Integration (Sanity/Strapi)",
            ],
            notIncluded: [
                "Advanced Animations",
                "User Authentication",
                "Database Integration",
                "Payment Processing",
            ],
            gradient: "from-blue-400 to-indigo-500",
            popular: false
        },
        {
            name: "Scale",
            subtitle: "For Growing Businesses",
            price: "15,000",
            description: "A comprehensive multi-page website with dynamic content and premium animations.",
            features: [
                "Everything in Launch",
                "Up to 10 Custom Pages",
                "Premium Glassmorphism Design",
                "Complex Animations (Framer Motion)",
                "Blog/News Section",
                "Advanced SEO & Analytics",
                "3 Months Support",
                "Newsletter Integration",
            ],
            notIncluded: [
                "User Authentication",
                "SaaS Features",
            ],
            gradient: "from-purple-500 via-pink-500 to-red-500",
            popular: true
        },
        {
            name: "Dominance",
            subtitle: "For Enterprise & SaaS",
            price: "Custom",
            description: "Full-scale web applications with complex logic, databases, and user systems.",
            features: [
                "Everything in Scale",
                "User Authentication (Supabase/Auth0)",
                "Database Architecture",
                "Stripe/Payment Integration",
                "Admin Dashboard",
                "SaaS Features",
                "6 Months Priority Support",
                "Custom API Integrations",
            ],
            notIncluded: [],
            gradient: "from-amber-300 via-orange-500 to-red-600",
            popular: false
        }
    ]

    return (
        <div className="bg-[#030014] min-h-screen text-white font-sans selection:bg-purple-500/30">
            <Navbar />

            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]"></div>
                <div className="container mx-auto px-6 text-center relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold font-display mb-6"
                    >
                        Invest in <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                            Digital Excellence
                        </span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-white/60 max-w-2xl mx-auto mb-16"
                    >
                        Transparent pricing for world-class engineering. No hidden fees, just results.
                    </motion.p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {plans.map((plan, idx) => (
                            <motion.div
                                key={plan.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + (idx * 0.1) }}
                                className={`relative p-8 rounded-[2rem] border ${plan.popular ? 'border-purple-500/50 bg-[#0B0F19]/80' : 'border-white/10 bg-[#0B0F19]/50'} flex flex-col group hover:transform hover:scale-[1.02] transition-all duration-300`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg shadow-purple-500/20">
                                        Most Popular
                                    </div>
                                )}

                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                                    <p className="text-white/50 text-sm mb-6">{plan.subtitle}</p>
                                    <div className="flex items-baseline justify-center gap-1">
                                        <span className="text-xl text-white/50">$</span>
                                        <span className={`text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${plan.gradient}`}>
                                            {plan.price}
                                        </span>
                                        {plan.price !== "Custom" && <span className="text-white/50">/project</span>}
                                    </div>
                                    <p className="mt-6 text-white/80 leading-relaxed text-sm">
                                        {plan.description}
                                    </p>
                                </div>

                                <div className="flex-grow space-y-4 mb-8 text-left">
                                    {plan.features.map((feature) => (
                                        <div key={feature} className="flex items-start gap-3">
                                            <Check className={`w-5 h-5 flex-shrink-0 ${plan.popular ? 'text-green-400' : 'text-white/30'}`} />
                                            <span className="text-sm font-medium text-white/90">{feature}</span>
                                        </div>
                                    ))}
                                    {plan.notIncluded.map((feature) => (
                                        <div key={feature} className="flex items-start gap-3 opacity-50">
                                            <X className="w-5 h-5 flex-shrink-0 text-red-400/50" />
                                            <span className="text-sm text-white/50 line-through">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <Link
                                    href="/contact"
                                    className={`w-full py-4 rounded-xl font-bold transition-all ${plan.popular
                                            ? `bg-gradient-to-r ${plan.gradient} text-white shadow-lg hover:shadow-purple-500/25`
                                            : 'bg-white/10 hover:bg-white/20 text-white'
                                        }`}
                                >
                                    {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}
