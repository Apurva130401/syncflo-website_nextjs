'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useAnimationControls } from 'framer-motion'
import Link from 'next/link'
import {
    ShoppingCart, Home, Stethoscope, GraduationCap, Car, Dumbbell, Coffee, Scissors, ArrowRight,
    CreditCard, RefreshCw, Truck, Megaphone, Headphones, UserCheck, Key, FileText, HelpCircle,
    Bell, Smile, CalendarCheck, Pill, Info, Video, ClipboardList, BookOpen, DollarSign,
    LifeBuoy, Users, Wrench, UserPlus, Star, Calendar, User, MessageSquare, Tag, ArrowUp, Clipboard, Map
} from 'lucide-react'

const iconMap = {
    ShoppingCart, Home, Stethoscope, GraduationCap, Car, Dumbbell, Coffee, Scissors, ArrowRight,
    CreditCard, RefreshCw, Truck, Megaphone, Headphones, UserCheck, Key, FileText, HelpCircle,
    Bell, Smile, CalendarCheck, Pill, Info, Video, ClipboardList, BookOpen, DollarSign,
    LifeBuoy, Users, Wrench, UserPlus, Star, Calendar, User, MessageSquare, Tag, ArrowUp, Clipboard, Map
}

export default function WhatsAppUseCases({ cases, sectionTitle, sectionSubtitle, variant = 'grid' }) {
    const defaultCases = [
        { icon: "ShoppingCart", title: 'E-commerce', desc: 'Browse catalogs and checkout directly in WhatsApp.', color: 'text-blue-400', href: '/whatsapp/e-commerce' },
        { icon: "Home", title: 'Real Estate', desc: 'Qualify and nurture leads with automated follow-ups.', color: 'text-green-400', href: '/whatsapp/real-estate' },
        { icon: "Stethoscope", title: 'Healthcare', desc: 'Automate booking, rescheduling, and reminders.', color: 'text-red-400', href: '/whatsapp/healthcare' },
        { icon: "GraduationCap", title: 'Education', desc: 'Automate answers for deadlines, requirements, and fees.', color: 'text-yellow-400', href: '/whatsapp/education' },
        { icon: "Car", title: 'Automotive', desc: 'Browse inventory and book test drives instantly.', color: 'text-orange-400', href: '/whatsapp/automotive' },
        { icon: "Dumbbell", title: 'Gym & Fitness', desc: 'View schedules, book spots, and manage cancellations.', color: 'text-cyan-400', href: '/whatsapp/gyms-fitness' },
        { icon: "Coffee", title: 'Hospitality', desc: 'Check availability and book rooms or tables instantly.', color: 'text-purple-400', href: '/whatsapp/hospitality' },
        { icon: "Scissors", title: 'Salons & Spas', desc: 'Automate appointments and cancellations 24/7.', color: 'text-pink-400', href: '/whatsapp/salons-spas' },
        { icon: "Map", title: 'Travel & Tourism', desc: 'Plan trips, book flights, hotels, and activities.', color: 'text-blue-500', href: '/whatsapp/travel' },
    ]

    const displayCases = cases || defaultCases
    // Duplicate cases to create seamless loop for marquee
    const marqueeCases = [...displayCases, ...displayCases]

    return (
        <section className="py-24 bg-primary relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-accent/5 rounded-full blur-[128px]"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-accent/5 rounded-full blur-[128px]"></div>
            </div>

            <div className="container mx-auto px-6 mb-16">
                <div className="text-center">
                    <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
                        {sectionTitle || <>Powerful Solutions for <span className="text-gradient">Every Industry</span></>}
                    </h2>
                    <p className="text-text-secondary max-w-2xl mx-auto text-lg">
                        {sectionSubtitle || "Discover how our WhatsApp AI can be tailored to meet the unique needs of your business."}
                    </p>
                </div>
            </div>

            {variant === 'marquee' ? (
                <div className="w-full relative group">
                    <div className="overflow-hidden">
                        <div
                            className="flex gap-6 w-max marquee-content"
                            style={{
                                animation: 'marquee 40s linear infinite'
                            }}
                        >
                            {marqueeCases.map((item, index) => {
                                const IconComponent = iconMap[item.icon] || ShoppingCart
                                return (
                                    <div
                                        key={index}
                                        className="w-[350px] p-8 rounded-3xl bg-secondary border border-white/5 hover:border-white/10 hover:bg-white/5 transition-all duration-300 group/card flex flex-col h-full shrink-0"
                                    >
                                        <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 ${item.color} group-hover/card:scale-110 transition-transform duration-300`}>
                                            <IconComponent className="w-7 h-7" />
                                        </div>
                                        <h3 className="text-xl font-bold font-display text-white mb-3">{item.title}</h3>
                                        <p className="text-text-secondary mb-6 flex-grow">{item.desc}</p>

                                        <Link
                                            href={item.href || '#'}
                                            className="inline-flex items-center text-sm font-semibold text-green-accent hover:text-green-400 transition-colors mt-auto"
                                        >
                                            Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover/card:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div className="flex justify-center mt-12">
                        <Link
                            href="/whatsapp/industries"
                            className="group inline-flex items-center gap-2 text-white hover:text-green-accent transition-colors font-medium text-lg px-6 py-3 rounded-full border border-white/10 hover:bg-white/5 bg-secondary/50 backdrop-blur-sm"
                        >
                            View All Industries
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    <style jsx>{`
                        @keyframes marquee {
                            0% { transform: translateX(0); }
                            100% { transform: translateX(-50%); }
                        }
                        .marquee-content:hover {
                            animation-play-state: paused !important;
                        }
                    `}</style>
                </div>
            ) : (
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {displayCases.map((item, index) => {
                            const IconComponent = iconMap[item.icon] || ShoppingCart
                            return (
                                <div
                                    key={index}
                                    className="p-8 rounded-3xl bg-secondary border border-white/5 hover:border-white/10 hover:bg-white/5 transition-all duration-300 group cursor-pointer flex flex-col h-full"
                                >
                                    <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                                        <IconComponent className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-xl font-bold font-display text-white mb-3">{item.title}</h3>
                                    <p className="text-text-secondary mb-6 flex-grow">{item.desc}</p>

                                    {item.href && (
                                        <Link
                                            href={item.href}
                                            className="inline-flex items-center text-sm font-semibold text-green-accent hover:text-green-400 transition-colors mt-auto"
                                        >
                                            Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    )}
                                </div>
                            )
                        })}
                    </div>
                </div>
            )}
        </section>
    )
}
