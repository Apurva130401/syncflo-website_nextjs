'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

export default function WhatsAppIntegrations({ title, description, integrations }) {
    return (
        <section id="integrations" className="py-24 bg-secondary relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    <div className="md:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
                                Seamlessly Integrated with <span className="text-gradient">Your Tech Stack</span>
                            </h2>
                            <p className="text-text-secondary text-lg mb-8 leading-relaxed">
                                {description || "SyncFlo Ai connects directly to the platforms and tools you already use, enabling a powerful, unified system."}
                            </p>

                            <ul className="space-y-6">
                                {integrations && integrations.map((item, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-start gap-4"
                                    >
                                        <div className="mt-1">
                                            <CheckCircle2 className="w-6 h-6 text-green-accent" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold text-lg mb-1">{item.title}</h4>
                                            <p className="text-text-secondary">{item.description}</p>
                                        </div>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                    <div className="md:w-1/2 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative z-10"
                        >
                            {/* Abstract Representation of Integrations */}
                            <div className="relative w-full aspect-square max-w-[500px] mx-auto">
                                {/* Center Node */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-secondary rounded-full border-2 border-blue-accent flex items-center justify-center z-20 shadow-[0_0_30px_rgba(0,163,255,0.3)]">
                                    <span className="font-display font-bold text-blue-accent">SyncFlo</span>
                                </div>

                                {/* Orbiting Nodes */}
                                {[0, 90, 180, 270].map((deg, i) => (
                                    <div
                                        key={i}
                                        className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 animate-spin-slow"
                                        style={{ animationDelay: `-${i * 5}s` }}
                                    >
                                        <div
                                            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-secondary rounded-full border border-white/10 flex items-center justify-center backdrop-blur-sm"
                                            style={{ transform: `rotate(${deg}deg) translateY(-120px) rotate(-${deg}deg)` }}
                                        >
                                            <div className="w-8 h-8 bg-white/5 rounded-full" />
                                        </div>
                                    </div>
                                ))}

                                {/* Connecting Lines */}
                                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                                    <circle cx="50%" cy="50%" r="120" fill="none" stroke="currentColor" strokeWidth="1" className="text-white" strokeDasharray="4 4" />
                                </svg>
                            </div>
                        </motion.div>

                        {/* Background Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-blue-accent/5 rounded-full blur-[100px] -z-10" />
                    </div>
                </div>
            </div>
        </section>
    )
}
