'use client'

import { motion } from 'framer-motion'
import {
    MessageSquare, ShoppingBag, Zap, Calendar, Home, Heart, ShieldCheck,
    FileCheck, Bell, Filter, CalendarCheck, TrendingUp, CheckCircle, Tag
} from 'lucide-react'

const iconMap = {
    MessageSquare, ShoppingBag, Zap, Calendar, Home, Heart, ShieldCheck,
    FileCheck, Bell, Filter, CalendarCheck, TrendingUp, CheckCircle, Tag
}

export default function WhatsAppFeatures({ features }) {
    // Default features if none provided (fallback for main page if needed, though we should pass them)
    const defaultFeatures = [
        {
            icon: "MessageSquare",
            title: '24/7 Automated Support',
            description: 'Instantly answer FAQs, track orders, and resolve issues any time of day, without human intervention.',
            gradient: 'from-green-accent to-emerald-500'
        },
        {
            icon: "ShoppingBag",
            title: 'Automated Sales Agent',
            description: 'Qualify leads, showcase products from your catalog, and guide customers through the sales funnel.',
            gradient: 'from-blue-accent to-cyan-500'
        },
        {
            icon: "Zap",
            title: 'Marketing Broadcasts',
            description: 'Send personalized promotional messages, updates, and newsletters with high open rates.',
            gradient: 'from-purple-500 to-pink-500'
        }
    ]

    const displayFeatures = features || defaultFeatures

    return (
        <section id="features" className="py-24 bg-secondary/50 relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
                        Everything You Need to <span className="text-gradient">Automate & Scale</span>
                    </h2>
                    <p className="text-text-secondary max-w-2xl mx-auto text-lg">
                        Our AI is packed with powerful features to transform your WhatsApp channel into a revenue engine.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {displayFeatures.map((feature, index) => {
                        const IconComponent = iconMap[feature.icon] || MessageSquare // Fallback icon

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="group p-8 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-green-accent/30 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} p-[1px] mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <div className="w-full h-full bg-[#0a0b1e] rounded-[14px] flex items-center justify-center">
                                        <IconComponent className="w-7 h-7 text-white" />
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold font-display text-white mb-4">{feature.title}</h3>
                                <p className="text-text-secondary leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
