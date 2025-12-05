'use client'

import { useEffect, useState, useRef } from 'react'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'

export default function CarDealershipAgent() {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })

    useEffect(() => {
        const initializeVapiButton = () => {
            try {
                if (typeof window.Vapi === 'undefined') {
                    console.error("Vapi object not found, even after script onload.");
                    return;
                }
                const vapi = new window.Vapi({
                    publicApiKey: "58cc1d10-c747-4f98-bc4c-ad85fd919dfc"
                });

                const callButton = document.createElement("button");
                callButton.textContent = "Talk to Agent";
                callButton.style.cssText = `
                    position: fixed;
                    bottom: 40px;
                    right: 40px;
                    padding: 16px 32px;
                    background: #FF8C00;
                    color: white;
                    border: none;
                    border-radius: 2px;
                    font-weight: 600;
                    font-size: 14px;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    box-shadow: 0 10px 30px -10px rgba(255, 69, 0, 0.6);
                    z-index: 999999;  
                    cursor: pointer;
                    transition: all 0.3s ease;
                `;

                callButton.onmouseover = () => {
                    callButton.style.background = '#FF4500';
                    callButton.style.transform = 'translateY(-2px)';
                }
                callButton.onmouseout = () => {
                    callButton.style.background = '#FF8C00';
                    callButton.style.transform = 'translateY(0)';
                }

                document.body.appendChild(callButton);

                callButton.onclick = () => {
                    vapi.startConversation();
                };

                return () => {
                    if (document.body.contains(callButton)) {
                        document.body.removeChild(callButton);
                    }
                }

            } catch (error) {
                console.error("An error occurred while initializing the Vapi button:", error);
            }
        }

        const script = document.createElement('script');
        script.src = "https://cdn.jsdelivr.net/npm/@vapi-ai/web/dist/vapi.umd.js";
        script.onload = initializeVapiButton;
        document.head.appendChild(script);

        return () => {
            if (document.head.contains(script)) {
                document.head.removeChild(script);
            }
            const existingButton = document.querySelector('button[style*="z-index: 999999"]');
            if (existingButton) {
                existingButton.remove();
            }
        }
    }, [])

    return (
        <div ref={containerRef} className="bg-primary min-h-screen text-white font-sans selection:bg-sales-orange/30">
            <Navbar />

            {/* Hero Section - Inspired by HTML Reference */}
            <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden">
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute top-[-20%] left-[20%] w-[600px] h-[600px] rounded-full bg-sales-orange/10 blur-[100px]" />
                    <div className="absolute bottom-[-20%] right-[10%] w-[500px] h-[500px] rounded-full bg-sales-red/10 blur-[100px]" />
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.05]"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-block bg-sales-red/10 text-sales-orange px-4 py-1.5 rounded-full text-sm font-medium mb-6 border border-sales-red/20 backdrop-blur-sm">
                            Cutting-Edge Voice AI
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold font-display leading-tight mb-6"
                    >
                        AI Voice Agent for <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-sales-orange to-sales-red">
                            Car Dealerships
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed"
                    >
                        Automate lead follow-up, schedule test drives, and provide instant vehicle information to boost sales and customer satisfaction.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <a
                            href="/contact"
                            className="inline-block bg-gradient-to-r from-sales-orange to-sales-red text-white font-bold px-8 py-4 rounded-full text-lg hover:shadow-lg hover:shadow-sales-orange/25 transition-all hover:-translate-y-1"
                        >
                            Book a Demo
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* The Problem - High Contrast (Dark) */}
            <section className="py-32 bg-secondary relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-6xl md:text-8xl font-bold font-display tracking-tighter mb-8 leading-none text-white">
                                MISSED CALLS<br />
                                <span className="text-sales-red">KILL SALES.</span>
                            </h2>
                        </div>
                        <div className="space-y-8">
                            <p className="text-2xl font-medium leading-relaxed text-white/90">
                                67% of dealership calls go to voicemail. Every missed call is a customer walking into your competitor's showroom.
                            </p>
                            <p className="text-xl text-white/60 leading-relaxed">
                                Your BDC is overwhelmed. Your sales floor is busy. SyncFlo sits in the middle, answering every single call instantly, qualifying the lead, and handing it off only when they're ready to buy.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features - True Sticky Stacking (CSS Only) */}
            <section className="bg-primary relative pt-32 pb-48" id="features">
                <div className="container mx-auto px-6 mb-24 text-center">
                    <h2 className="text-4xl md:text-6xl font-bold font-display tracking-tight mb-6">
                        System Capabilities
                    </h2>
                    <div className="h-1 w-24 bg-sales-orange mx-auto rounded-full"></div>
                </div>

                <div className="relative">
                    {[
                        {
                            title: "Service & Sales Synchronization",
                            description: "SyncFlo connects directly to your calendar. It negotiates times, books appointments, and sends confirmation texts automatically. No more phone tag.",
                            icon: "📅",
                            color: "from-sales-orange to-orange-600",
                            points: ["Real-time slot availability", "Automated reminders", "Rescheduling handling"]
                        },
                        {
                            title: "Live Inventory Intelligence",
                            description: "\"Do you have a white F-150 Lariat?\" SyncFlo knows. It reads your inventory feed in real-time to answer specific questions about stock, trim levels, and pricing.",
                            icon: "🚗",
                            color: "from-sales-red to-red-600",
                            points: ["VIN-level data access", "Trim & Feature comparison", "In-transit updates"]
                        },
                        {
                            title: "Precision Lead Qualification",
                            description: "Stop handing your sales team cold leads. SyncFlo vets every caller for budget, trade-in status, and purchase timeline before the transfer happens.",
                            icon: "🎯",
                            color: "from-blue-500 to-cyan-500",
                            points: ["Credit score pre-check", "Trade-in valuation collection", "Purchase horizon identification"]
                        }
                    ].map((feature, index) => (
                        <div
                            key={index}
                            className="sticky top-0 h-screen flex items-center justify-center"
                            style={{ zIndex: index + 1 }}
                        >
                            <div className="relative w-full max-w-6xl h-[70vh] bg-[#0B0F19] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row group">
                                {/* Glossy Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50 pointer-events-none"></div>

                                {/* Content Side */}
                                <div className="w-full md:w-1/2 p-12 md:p-16 flex flex-col justify-center relative z-10 bg-[#0B0F19]/80 backdrop-blur-md">
                                    <div className="inline-flex items-center gap-3 mb-8">
                                        <span className={`w-3 h-3 rounded-full bg-gradient-to-r ${feature.color} shadow-[0_0_12px_rgba(255,255,255,0.5)]`}></span>
                                        <span className="text-white/40 font-mono text-sm tracking-widest uppercase">Capability 0{index + 1}</span>
                                    </div>

                                    <h3 className="text-3xl md:text-5xl font-bold font-display mb-6 leading-tight text-white">
                                        {feature.title}
                                    </h3>
                                    <p className="text-xl text-white/60 leading-relaxed mb-10">
                                        {feature.description}
                                    </p>

                                    <div className="grid gap-4">
                                        {feature.points.map((point, i) => (
                                            <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                                                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center text-xs font-bold text-white`}>
                                                    {i + 1}
                                                </div>
                                                <span className="text-white/80 font-medium">{point}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Visual Side */}
                                <div className="w-full md:w-1/2 relative overflow-hidden bg-black">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-20`}></div>
                                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 bg-center"></div>

                                    {/* Central Tech Element */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="relative w-64 h-64">
                                            <div className={`absolute inset-0 rounded-full border-2 border-white/10 animate-[spin_10s_linear_infinite]`}></div>
                                            <div className={`absolute inset-4 rounded-full border border-white/20 border-dashed animate-[spin_15s_linear_infinite_reverse]`}></div>
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="text-8xl filter drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                                                    {feature.icon}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Universal Integration Section */}
            <section className="py-32 bg-secondary text-white relative">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-6xl font-bold font-display tracking-tighter mb-8">
                        UNIVERSAL COMPATIBILITY
                    </h2>
                    <p className="text-xl text-white/60 max-w-2xl mx-auto mb-20">
                        We don't replace your tech stack. We supercharge it. SyncFlo integrates seamlessly with every major automotive platform.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <div className="p-12 border border-white/10 hover:bg-white/5 transition-colors duration-500 group">
                            <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-500">📂</div>
                            <h3 className="text-2xl font-bold font-display mb-4">DMS Integration</h3>
                            <p className="opacity-60">Real-time read/write access to your inventory and deal structures.</p>
                        </div>
                        <div className="p-12 border border-white/10 hover:bg-white/5 transition-colors duration-500 group">
                            <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-500">👥</div>
                            <h3 className="text-2xl font-bold font-display mb-4">CRM Sync</h3>
                            <p className="opacity-60">Every call logged. Every lead updated. No manual data entry required.</p>
                        </div>
                        <div className="p-12 border border-white/10 hover:bg-white/5 transition-colors duration-500 group">
                            <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-500">📅</div>
                            <h3 className="text-2xl font-bold font-display mb-4">Calendar Link</h3>
                            <p className="opacity-60">Direct booking into your sales and service teams' actual availability.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section - Minimalist */}
            <section className="py-32 bg-primary">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-3xl font-bold font-display mb-16 text-white/40">FREQUENTLY ASKED QUESTIONS</h2>

                    <div className="space-y-8">
                        {[
                            { q: "Does this replace my BDC?", a: "It augments it. SyncFlo handles the volume and routine queries, allowing your BDC to focus on high-value outbound calls and closing deals." },
                            { q: "How fast is the setup?", a: "We can deploy a fully trained agent in under 48 hours. We ingest your inventory feed and service menu automatically." },
                            { q: "Can it handle accents?", a: "Yes. Our models are trained on diverse datasets to understand and communicate effectively with customers from all backgrounds." },
                            { q: "Is it secure?", a: "Enterprise-grade security. All data is encrypted, and we are fully compliant with automotive data privacy standards." }
                        ].map((item, idx) => (
                            <div key={idx} className="border-b border-white/10 pb-8">
                                <h3 className="text-xl font-bold text-white mb-4">{item.q}</h3>
                                <p className="text-white/50 leading-relaxed">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}
