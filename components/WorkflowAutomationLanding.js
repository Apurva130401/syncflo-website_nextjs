'use client'

import { useRef, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import CTA from './CTA'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Zap, Check, GitBranch, Database, Clock, Sliders, Smartphone, Lock, Activity, Layers, Repeat, Globe } from 'lucide-react'

export default function WorkflowAutomationLanding() {
    // We use pure CSS sticky behavior, so we don't need heavy scroll hooks for layout.
    // Framer Motion is used purely for entrance animations (opacity/y-axis).

    const Reveal = ({ children, delay = 0 }) => (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    )

    return (
        <div className="bg-[#050505] min-h-screen text-white font-sans selection:bg-blue-500/30">
            <Navbar />

            {/* HERO SECTION */}
            <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden">
                {/* Background Grid */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] z-0 opacity-[0.05] pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-transparent to-[#050505] z-0 pointer-events-none"></div>

                {/* Floating Elements (CSS Animation) */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] animate-pulse-slow pointer-events-none"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] animate-pulse-slow delay-1000 pointer-events-none"></div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <Reveal>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8 backdrop-blur-sm">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                            </span>
                            <span className="text-sm font-medium text-blue-400 tracking-wide uppercase">Scalable Infrastructure</span>
                        </div>

                        <h1 className="text-6xl md:text-8xl font-bold font-display tracking-tight leading-[0.9] mb-8">
                            <span className="block text-white mb-2">Invisible</span>
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 pb-4">
                                Orchestration.
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl text-white/50 max-w-3xl mx-auto mb-12 leading-relaxed">
                            Stop trading time for data entry. We engineer autonomous workflows that <span className="text-white">connect your apps</span>, synchronize your data, and execute logic while you sleep.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link href="/contact" className="px-8 py-4 rounded-full bg-white text-black font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_40px_rgba(255,255,255,0.3)]">
                                Automate Now
                            </Link>
                            <Link href="#process" className="px-8 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white font-semibold text-lg hover:bg-white/10 transition-colors">
                                How It Works
                            </Link>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* INTEGRATIONS MARQUEE (CSS Only) */}
            <section className="py-10 border-y border-white/5 bg-white/[0.02] overflow-hidden">
                <div className="relative w-full overflow-hidden">
                    <div className="flex w-max animate-card-cycle hover:pause">
                        {/* Duplicated list for seamless scrolling */}
                        {[...Array(4)].map((_, i) => (
                            <div key={i} className="flex gap-16 mx-8 items-center">
                                <span className="text-2xl font-bold text-white/20 uppercase hover:text-white/40 transition-colors cursor-default">Zapier</span>
                                <span className="text-2xl font-bold text-white/20 uppercase hover:text-white/40 transition-colors cursor-default">Make</span>
                                <span className="text-2xl font-bold text-white/20 uppercase hover:text-white/40 transition-colors cursor-default">Salesforce</span>
                                <span className="text-2xl font-bold text-white/20 uppercase hover:text-white/40 transition-colors cursor-default">HubSpot</span>
                                <span className="text-2xl font-bold text-white/20 uppercase hover:text-white/40 transition-colors cursor-default">Stripe</span>
                                <span className="text-2xl font-bold text-white/20 uppercase hover:text-white/40 transition-colors cursor-default">Slack</span>
                                <span className="text-2xl font-bold text-white/20 uppercase hover:text-white/40 transition-colors cursor-default">Airtable</span>
                                <span className="text-2xl font-bold text-white/20 uppercase hover:text-white/40 transition-colors cursor-default">Shopify</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PROBLEM / SOLUTION BENTO GRID */}
            <section className="py-32 container mx-auto px-6 relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>

                <Reveal>
                    <div className="text-center mb-24 relative z-10">
                        <h2 className="text-4xl md:text-6xl font-bold font-display mb-6">The Chaos of "App Sprawl"</h2>
                        <p className="text-xl text-white/50 max-w-2xl mx-auto">
                            Your business uses 20+ apps. None of them talk to each other. Your team acts as the "human glue," copying and pasting data all day.
                        </p>
                    </div>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[600px] relative z-10">
                    {/* Card 1: The Bottleneck */}
                    <div className="col-span-1 md:col-span-2 bg-[#0A0A0A] border border-white/10 rounded-3xl p-10 relative overflow-hidden group hover:border-red-500/30 transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative z-10 h-full flex flex-col justify-between items-start">
                            <div>
                                <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-6">
                                    <Clock className="w-6 h-6 text-red-400" />
                                </div>
                                <h3 className="text-3xl font-bold mb-4">The "Human API" Bottleneck</h3>
                                <p className="text-white/60 text-lg">
                                    When workflows rely on humans to move data (e.g., getting a lead from FB Ads to CRM), response times slip from seconds to hours. Competitors win.
                                </p>
                            </div>
                            <div className="w-full h-32 mt-8 border-t border-dashed border-white/10 flex items-center justify-around text-white/20 font-mono text-sm uppercase tracking-widest">
                                <div className="flex flex-col items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                                    Facebook
                                </div>
                                <span className="text-red-500 animate-pulse text-xs">Waiting (2h 4m)...</span>
                                <div className="flex flex-col items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    CRM
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Error Prone */}
                    <div className="col-span-1 bg-[#0A0A0A] border border-white/10 rounded-3xl p-10 relative overflow-hidden group hover:border-orange-500/30 transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative z-10">
                            <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-6">
                                <Activity className="w-6 h-6 text-orange-400" />
                            </div>
                            <h3 className="text-3xl font-bold mb-4">Error Prone</h3>
                            <p className="text-white/60 text-lg leading-relaxed">
                                One typo in an email address means a lost deal. Manual entry has a 4% error rate on average. That scales to disaster.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* STICKY "HOW IT WORKS" SECTION - NATIVE CSS ONLY */}
            <section id="process" className="relative bg-[#020202] py-32">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-24 relative">

                        {/* LEFT: Sticky Text */}
                        <div className="lg:w-1/3 static lg:relative">
                            <div className="lg:sticky lg:top-32 h-fit">
                                <h2 className="text-5xl md:text-6xl font-bold font-display mb-8">
                                    Architecture <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Design</span>
                                </h2>
                                <p className="text-xl text-white/50 mb-10 leading-relaxed">
                                    We don't just "zap" things. We architect robust, error-handling pipelines that scale with your enterprise.
                                </p>
                                <ul className="space-y-6">
                                    <li className="flex items-center gap-4 text-lg text-white/80 group">
                                        <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                                            <Check className="w-4 h-4 text-blue-400" />
                                        </div>
                                        99.9% Uptime Logging
                                    </li>
                                    <li className="flex items-center gap-4 text-lg text-white/80 group">
                                        <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                                            <Check className="w-4 h-4 text-blue-400" />
                                        </div>
                                        Automatic Retries
                                    </li>
                                    <li className="flex items-center gap-4 text-lg text-white/80 group">
                                        <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                                            <Check className="w-4 h-4 text-blue-400" />
                                        </div>
                                        Conditional Branching
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* RIGHT: Scrollable Cards (Native Flow) */}
                        <div className="lg:w-2/3 flex flex-col gap-32">
                            {/* STEP 1 */}
                            <div className="group min-h-[60vh] flex flex-col justify-center">
                                <div className="p-10 md:p-14 rounded-[2rem] bg-[#0F0F0F] border border-white/10 group-hover:border-blue-500/50 transition-colors duration-500 relative overflow-hidden shadow-2xl">
                                    <div className="absolute top-0 right-0 p-32 bg-blue-500/10 rounded-full blur-[80px] group-hover:bg-blue-500/20 transition-all opacity-50"></div>
                                    <div className="relative z-10">
                                        <div className="text-8xl font-bold text-white/5 mb-8 font-display absolute top-4 right-8">01</div>
                                        <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white group-hover:text-blue-400 transition-colors">Triggers & Listeners</h3>
                                        <p className="text-white/60 text-lg md:text-xl mb-10 max-w-lg">
                                            We configure webhooks that listen for real-time events. A new Stripe payment, a signed DocuSign contract, or a website form fill. No polling delay.
                                        </p>
                                        <div className="flex gap-4">
                                            <div className="bg-[#1a1a1a] px-4 py-2 rounded-lg border border-white/10 font-mono text-sm text-green-400 shadow-lg">Webhook: 200 OK</div>
                                            <div className="bg-[#1a1a1a] px-4 py-2 rounded-lg border border-white/10 font-mono text-sm text-blue-400 shadow-lg">Payload: JSON</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* STEP 2 */}
                            <div className="group min-h-[60vh] flex flex-col justify-center">
                                <div className="p-10 md:p-14 rounded-[2rem] bg-[#0F0F0F] border border-white/10 group-hover:border-purple-500/50 transition-colors duration-500 relative overflow-hidden shadow-2xl">
                                    <div className="absolute top-0 right-0 p-32 bg-purple-500/10 rounded-full blur-[80px] group-hover:bg-purple-500/20 transition-all opacity-50"></div>
                                    <div className="relative z-10">
                                        <div className="text-8xl font-bold text-white/5 mb-8 font-display absolute top-4 right-8">02</div>
                                        <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white group-hover:text-purple-400 transition-colors">Logic & Filtering</h3>
                                        <p className="text-white/60 text-lg md:text-xl mb-10 max-w-lg">
                                            "If deal {'>'} $10k, alert VP. If deal {'<'} $10k, add to nurturing." We build complex boolean logic to route data exactly where it needs to go.
                                        </p>
                                        <div className="flex flex-col gap-2 font-mono text-xs text-white/50 border-l border-white/10 pl-4 bg-black/20 p-4 rounded-r-lg">
                                            <div>if (value {'>'} 10000) {'{'}</div>
                                            <div className="text-purple-400 pl-4">priority = "high";</div>
                                            <div className="text-purple-400 pl-4">notifySlack("#sales-wins");</div>
                                            <div>{'}'} else {'{'}</div>
                                            <div className="text-white/30 pl-4">addToCampaign("nurture");</div>
                                            <div>{'}'}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* STEP 3 */}
                            <div className="group min-h-[60vh] flex flex-col justify-center">
                                <div className="p-10 md:p-14 rounded-[2rem] bg-[#0F0F0F] border border-white/10 group-hover:border-cyan-500/50 transition-colors duration-500 relative overflow-hidden shadow-2xl">
                                    <div className="absolute top-0 right-0 p-32 bg-cyan-500/10 rounded-full blur-[80px] group-hover:bg-cyan-500/20 transition-all opacity-50"></div>
                                    <div className="relative z-10">
                                        <div className="text-8xl font-bold text-white/5 mb-8 font-display absolute top-4 right-8">03</div>
                                        <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white group-hover:text-cyan-400 transition-colors">Execution & Action</h3>
                                        <p className="text-white/60 text-lg md:text-xl mb-10 max-w-lg">
                                            The system performs the work. It creates the invoice, sends the onboarding kit, updates the dashboard, and texts the client. All instantly.
                                        </p>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/5">
                                                <Check className="w-5 h-5 text-green-500" /> <span className="text-base font-medium">Invoice Sent</span>
                                            </div>
                                            <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/5">
                                                <Check className="w-5 h-5 text-green-500" /> <span className="text-base font-medium">Slack Alerted</span>
                                            </div>
                                            <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/5">
                                                <Check className="w-5 h-5 text-green-500" /> <span className="text-base font-medium">CRM Updated</span>
                                            </div>
                                            <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/5">
                                                <Check className="w-5 h-5 text-green-500" /> <span className="text-base font-medium">Project Created</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* USE CASES GRID */}
            <section className="py-24 bg-[#050505]">
                <div className="container mx-auto px-6">
                    <Reveal>
                        <h2 className="text-4xl font-bold text-center mb-16 font-display">What We Automate</h2>
                    </Reveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Globe className="w-6 h-6 text-blue-400" />,
                                title: "Lead Management",
                                desc: "Capture leads from FB/LinkedIn -> Enrich with Clearbit -> Add to CRM -> Notify Slack -> Add to Email Sequence."
                            },
                            {
                                icon: <Smartphone className="w-6 h-6 text-purple-400" />,
                                title: "Client Onboarding",
                                desc: "Contract Signed -> Generate Invoice -> Create Google Drive Folder -> Send Welcome Email -> Create Project in Asana."
                            },
                            {
                                icon: <Database className="w-6 h-6 text-cyan-400" />,
                                title: "E-Commerce Ops",
                                desc: "New Order -> Check Inventory -> Print Shipping Label -> Add Customer to 'Purchased' Segment -> Request Review."
                            },
                            {
                                icon: <Lock className="w-6 h-6 text-green-400" />,
                                title: "Employee Offboarding",
                                desc: "Termination Date -> Revoke Google Access -> Archive Slack Account -> Send Exit Survey -> Update HRIS."
                            },
                            {
                                icon: <Layers className="w-6 h-6 text-pink-400" />,
                                title: "Content Publishing",
                                desc: "Notion Draft Approved -> Post to WordPress -> Share on LinkedIn/Twitter -> Add Link to Excel Tracker."
                            },
                            {
                                icon: <Repeat className="w-6 h-6 text-yellow-400" />,
                                title: "Data Reconciliation",
                                desc: "Weekly Timer -> Pull Stripe Transactions -> Match with Xero Invoices -> Alert on Discrepancies."
                            }
                        ].map((item, i) => (
                            <div key={i} className="p-8 bg-[#0F0F0F] rounded-2xl border border-white/5 hover:border-white/20 transition-all group hover:-translate-y-2">
                                <div className="mb-6 bg-white/5 w-14 h-14 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">{item.icon}</div>
                                <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors text-white/90">{item.title}</h3>
                                <p className="text-white/50 leading-relaxed text-sm group-hover:text-white/70 transition-colors">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTA />
            <Footer />
        </div>
    )
}
