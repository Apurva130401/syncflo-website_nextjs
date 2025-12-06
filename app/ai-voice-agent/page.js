'use client'

import { useEffect, useState, useRef } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

export default function AiVoiceAgent() {
    const containerRef = useRef(null)



    useEffect(() => {
        // Initialize Vapi Button Logic
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
                callButton.textContent = "Talk to Nina";
                callButton.style.cssText = `
                    position: fixed;
                    bottom: 40px;
                    right: 40px;
                    padding: 16px 32px;
                    background: linear-gradient(135deg, #FF8C00, #FF4500);
                    color: white;
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    border-radius: 100px;
                    font-weight: 700;
                    font-size: 16px;
                    box-shadow: 0 10px 30px -10px rgba(255, 69, 0, 0.6);
                    z-index: 999999;  
                    cursor: pointer;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    backdrop-filter: blur(10px);
                    letter-spacing: 0.5px;
                `;

                callButton.onmouseover = () => {
                    callButton.style.transform = 'translateY(-2px) scale(1.02)';
                    callButton.style.boxShadow = '0 20px 40px -12px rgba(255, 69, 0, 0.8)';
                }
                callButton.onmouseout = () => {
                    callButton.style.transform = 'translateY(0) scale(1)';
                    callButton.style.boxShadow = '0 10px 30px -10px rgba(255, 69, 0, 0.6)';
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
        <div ref={containerRef} className="bg-primary min-h-screen text-white font-sans selection:bg-sales-orange/30 overflow-x-hidden">
            <Navbar />

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
                {/* Dynamic Background */}
                <div className="absolute inset-0 pointer-events-none">
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-[-20%] left-[20%] w-[800px] h-[800px] rounded-full bg-sales-orange/10 blur-[120px]"
                    />
                    <motion.div
                        animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.2, 0.4, 0.2],
                        }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                        className="absolute bottom-[-20%] right-[10%] w-[600px] h-[600px] rounded-full bg-sales-red/10 blur-[120px]"
                    />
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 hover:bg-white/10 transition-colors cursor-default">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sales-orange opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-sales-orange"></span>
                            </span>
                            <span className="text-sm font-medium text-white/80 tracking-wide">Next-Gen Voice AI</span>
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-6xl md:text-8xl font-bold font-display leading-tight mb-8 tracking-tight"
                    >
                        The Voice That <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-sales-orange via-sales-red to-sales-orange bg-300% animate-shimmer">
                            Never Sleeps
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl md:text-2xl text-text-secondary mb-12 max-w-3xl mx-auto leading-relaxed"
                    >
                        Deploy a hyper-realistic AI agent to handle sales, support, and bookings 24/7.
                        Scale your operations without scaling your headcount.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                    >
                        <a href="#process" className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-sales-orange to-sales-red text-white font-bold text-lg shadow-lg shadow-sales-orange/25 hover:shadow-sales-orange/40 transition-all hover:-translate-y-1 overflow-hidden">
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                            <span className="relative">Start Now</span>
                        </a>
                        <button onClick={() => document.querySelector('button[style*="z-index: 999999"]')?.click()} className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-semibold text-lg hover:bg-white/10 transition-all backdrop-blur-sm flex items-center gap-3 group">
                            <span>Hear a Sample</span>
                            <svg className="w-5 h-5 text-sales-orange group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* Features Grid (Bento) */}
            <section className="py-32 bg-secondary relative">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl md:text-6xl font-bold font-display mb-6">Beyond Human <span className="text-transparent bg-clip-text bg-gradient-to-r from-sales-orange to-sales-red">Capability</span></h2>
                        <p className="text-text-secondary max-w-2xl mx-auto text-lg">Engineered for performance, designed for connection.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[minmax(300px,auto)]">
                        {/* Large Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="md:col-span-2 bg-primary/40 backdrop-blur-xl rounded-[2.5rem] border border-white/5 p-12 relative overflow-hidden group hover:border-sales-orange/20 transition-colors duration-500"
                        >
                            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-sales-orange/10 to-transparent rounded-full blur-[80px] group-hover:opacity-100 transition-opacity duration-500 opacity-50"></div>
                            <div className="relative z-10">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sales-orange to-sales-red flex items-center justify-center mb-8 shadow-lg shadow-sales-orange/20">
                                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
                                </div>
                                <h3 className="text-3xl font-bold font-display mb-4">Hyper-Realistic Conversation</h3>
                                <p className="text-text-secondary text-lg leading-relaxed max-w-md">
                                    Our AI understands nuance, interruptions, and context better than most humans. It speaks with natural intonation, pauses, and emotion, creating a connection that converts.
                                </p>
                            </div>
                        </motion.div>

                        {/* Tall Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="md:row-span-2 bg-primary/40 backdrop-blur-xl rounded-[2.5rem] border border-white/5 p-10 relative overflow-hidden group hover:border-sales-orange/20 transition-colors duration-500 flex flex-col"
                        >
                            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-sales-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:bg-sales-orange/10 group-hover:border-sales-orange/20 transition-all">
                                <svg className="w-7 h-7 text-white group-hover:text-sales-orange transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                            </div>
                            <h3 className="text-2xl font-bold font-display mb-4">Total Recall</h3>
                            <p className="text-text-secondary leading-relaxed mb-8 flex-grow">
                                Every conversation is transcribed, summarized, and analyzed. SyncFlo pushes structured data directly to your CRM, so you never lose a detail.
                            </p>
                            <div className="space-y-3">
                                {['Sentiment Analysis', 'Key Topic Extraction', 'Action Item Detection'].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 text-sm text-white/60">
                                        <div className="w-1.5 h-1.5 rounded-full bg-sales-orange"></div>
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Standard Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-primary/40 backdrop-blur-xl rounded-[2.5rem] border border-white/5 p-10 relative overflow-hidden group hover:border-sales-orange/20 transition-colors duration-500"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:bg-sales-orange/10 group-hover:border-sales-orange/20 transition-all">
                                <svg className="w-7 h-7 text-white group-hover:text-sales-orange transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                            </div>
                            <h3 className="text-2xl font-bold font-display mb-4">Smart Scheduling</h3>
                            <p className="text-text-secondary leading-relaxed">
                                Seamlessly integrates with Google & Outlook calendars to book meetings in real-time.
                            </p>
                        </motion.div>

                        {/* Standard Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="bg-primary/40 backdrop-blur-xl rounded-[2.5rem] border border-white/5 p-10 relative overflow-hidden group hover:border-sales-orange/20 transition-colors duration-500"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:bg-sales-orange/10 group-hover:border-sales-orange/20 transition-all">
                                <svg className="w-7 h-7 text-white group-hover:text-sales-orange transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                            </div>
                            <h3 className="text-2xl font-bold font-display mb-4">Global Reach</h3>
                            <p className="text-text-secondary leading-relaxed">
                                Provision local numbers in 50+ countries. Scale your presence instantly.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Live in Minutes Section (Timeline) */}
            <section id="process" className="py-32 bg-primary relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl md:text-6xl font-bold font-display mb-6">Live in <span className="text-transparent bg-clip-text bg-gradient-to-r from-sales-orange to-sales-red">Minutes</span></h2>
                        <p className="text-text-secondary text-lg">No complex setup. No coding required.</p>
                    </div>

                    <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-[3rem] left-0 w-full h-0.5 bg-white/5">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: "100%" }}
                                transition={{ duration: 1.5, ease: "easeInOut" }}
                                className="h-full bg-gradient-to-r from-sales-orange to-sales-red"
                            />
                        </div>

                        {[
                            { step: 1, title: "Define Your Goal", desc: "Tell the AI its objective: Is it qualifying leads, making sales calls, or booking demos?" },
                            { step: 2, title: "Provide Knowledge", desc: "Upload your product info, sales scripts, or FAQs. The AI learns instantly." },
                            { step: 3, title: "Activate Agent", desc: "Assign a phone number and let your Voice Agent start working 24/7." }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.3 }}
                                className="relative text-center group"
                            >
                                <div className="w-24 h-24 mx-auto bg-secondary rounded-full border-4 border-primary flex items-center justify-center relative z-10 mb-8 group-hover:scale-110 transition-transform duration-300 shadow-xl shadow-black/50">
                                    <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-3xl font-bold font-display text-sales-orange group-hover:text-white group-hover:bg-sales-orange transition-all duration-300">
                                        {item.step}
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold font-display mb-4 group-hover:text-sales-orange transition-colors">{item.title}</h3>
                                <p className="text-text-secondary leading-relaxed max-w-xs mx-auto">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Use Cases Section */}
            <section id="use-cases" className="py-32 bg-secondary">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl md:text-6xl font-bold font-display mb-6">One Agent, <span className="text-transparent bg-clip-text bg-gradient-to-r from-sales-orange to-sales-red">Countless Roles</span></h2>
                        <p className="text-text-secondary max-w-2xl mx-auto text-lg">Deploy our versatile voice AI for any business function.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: 'Customer Service', desc: 'Provide 24/7 support, answer queries, and resolve issues instantly.', icon: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z' },
                            { title: 'Receptionist', desc: 'Handle inbound calls, route to departments, and take messages.', icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' },
                            { title: 'Sales Qualification', desc: 'Filter lead lists to identify high-intent prospects and book demos.', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
                            { title: 'Lead Reactivation', desc: 'Re-engage cold leads with personalized follow-ups to uncover opportunities.', icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15' }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -10 }}
                                className="bg-primary/50 backdrop-blur-sm p-8 rounded-3xl border border-white/5 hover:border-sales-orange/30 transition-all duration-300 group"
                            >
                                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-sales-orange/20 transition-colors">
                                    <svg className="w-6 h-6 text-white group-hover:text-sales-orange transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={item.icon} />
                                    </svg>
                                </div>
                                <h3 className="font-bold text-xl mb-3 font-display">{item.title}</h3>
                                <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries Section (Marquee) */}
            <section className="py-32 bg-primary overflow-hidden">
                <style jsx>{`
                    @keyframes scroll {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                    .marquee-container:hover .marquee-content {
                        animation-play-state: paused !important;
                    }
                    .marquee-content {
                        animation: scroll 40s linear infinite;
                    }
                `}</style>
                <div className="container mx-auto px-6 text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">Built for Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-sales-orange to-sales-red">Industry</span></h2>
                    <p className="text-text-secondary max-w-2xl mx-auto">Pre-trained models ready to deploy for your specific sector.</p>
                </div>

                <div className="relative w-full group">
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-primary to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-primary to-transparent z-10 pointer-events-none"></div>

                    <div className="flex overflow-hidden marquee-container">
                        <div className="flex gap-8 px-8 marquee-content w-max">
                            {[...industries, ...industries].map((industry, idx) => (
                                <Link
                                    href={industry.link}
                                    key={idx}
                                    className="flex-shrink-0 w-80 p-8 rounded-3xl bg-secondary border border-white/5 hover:border-sales-orange/30 transition-all duration-300 group/card hover:-translate-y-1 cursor-pointer block"
                                >
                                    <div className="flex items-start justify-between mb-6">
                                        <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover/card:bg-sales-orange/20 transition-colors">
                                            <span className="text-3xl">{industry.emoji}</span>
                                        </div>
                                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-all -translate-x-2 group-hover/card:translate-x-0">
                                            <svg className="w-4 h-4 text-sales-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold font-display mb-3 text-left">{industry.name}</h3>
                                    <p className="text-sm text-text-secondary text-left mb-6 leading-relaxed">Specialized agents trained on {industry.name.toLowerCase()} terminology and workflows.</p>

                                    <div className="flex items-center gap-2 text-sm font-bold text-sales-orange opacity-0 group-hover/card:opacity-100 transition-opacity transform translate-y-2 group-hover/card:translate-y-0 duration-300">
                                        <span>Learn More</span>
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-center mt-12 relative z-20">
                        <Link
                            href="/ai-voice-agent/industries"
                            className="group inline-flex items-center gap-2 text-white hover:text-sales-orange transition-colors font-medium text-lg px-6 py-3 rounded-full border border-white/10 hover:bg-white/5 bg-secondary/50 backdrop-blur-sm"
                        >
                            View All Industries
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <FAQSection />

            <Footer />
        </div>
    )
}

const industries = [
    { name: 'Mortgage', emoji: '🏠', link: '/ai-voice-agent/mortgage' },
    { name: 'Recruitment', emoji: '👥', link: '/ai-voice-agent/recruitment' },
    { name: 'Healthcare', emoji: '🏥', link: '/ai-voice-agent/healthcare' },
    { name: 'Car Dealership', emoji: '🚗', link: '/ai-voice-agent/car-dealership' },
    { name: 'Real Estate', emoji: '🏢', link: '/ai-voice-agent/real-estate' },
    { name: 'Insurance', emoji: '🛡️', link: '/ai-voice-agent/insurance' },
    { name: 'Legal', emoji: '⚖️', link: '/ai-voice-agent/legal' },
    { name: 'Agencies', emoji: '🚀', link: '/ai-voice-agent/agency' },
    { name: 'SaaS', emoji: '💻', link: '/ai-voice-agent/saas' },
    { name: 'E-commerce', emoji: '🛍️', link: '/ai-voice-agent/e-commerce' },
]

const faqs = [
    { q: 'How realistic is the voice?', a: 'Our models are trained on thousands of hours of human speech. They breathe, pause, and intonate just like a real person. Most customers cannot tell the difference.' },
    { q: 'Can I use my own phone number?', a: 'Yes, we can port your existing business numbers or provision new local numbers in over 50 countries.' },
    { q: 'Does it integrate with my CRM?', a: 'We support native integrations with Salesforce, HubSpot, Pipedrive, and Zoho. For everything else, we have a robust API and Zapier connector.' },
    { q: 'Is it compliant?', a: 'Absolutely. We are fully compliant with TCPA, GDPR, and SOC2 standards. We also have built-in guardrails for call times and DNC lists.' },
    { q: 'What languages are supported?', a: 'Currently, our primary supported language is English, with multiple accents available (US, UK, Australian). We are rapidly expanding our language library.' },
    { q: 'Can it handle unexpected questions?', a: 'Yes. It is built on a powerful LLM that understands context. If it doesn\'t know an answer, it can be instructed to pivot or escalate to a human.' }
];

function FAQSection() {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section id="faq" className="py-32 bg-secondary">
            <div className="container mx-auto px-6 max-w-3xl">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">Common <span className="text-transparent bg-clip-text bg-gradient-to-r from-sales-orange to-sales-red">Questions</span></h2>
                </div>
                <div className="space-y-4">
                    {faqs.map((item, idx) => (
                        <FAQItem
                            key={idx}
                            index={idx}
                            question={item.q}
                            answer={item.a}
                            isOpen={openIndex === idx}
                            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

function FAQItem({ question, answer, isOpen, onClick, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`bg-primary/40 backdrop-blur-sm rounded-2xl border overflow-hidden transition-all duration-300 ${isOpen ? 'border-sales-orange/50 shadow-lg shadow-sales-orange/10' : 'border-white/5 hover:border-white/10'}`}
        >
            <button
                onClick={onClick}
                className="flex justify-between items-center w-full p-6 text-left"
            >
                <span className={`text-lg font-semibold pr-8 transition-colors ${isOpen ? 'text-white' : 'text-white/80'}`}>{question}</span>
                <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-sales-orange text-white' : 'bg-white/5 text-sales-orange'}`}
                >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                </motion.span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <div className="px-6 pb-6 text-text-secondary leading-relaxed border-t border-white/5 pt-4">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}
