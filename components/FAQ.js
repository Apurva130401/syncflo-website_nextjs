'use client'

import { useState } from 'react'

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null)

    const faqs = [
        {
            question: "What is SyncFlo Ai?",
            answer: "SyncFlo Ai is a business automation platform that uses intelligent AI chatbots for communication channels like WhatsApp and voice calls to handle tasks, reduce operational costs, and streamline workflows."
        },
        {
            question: "How does the AI Voice Sales Agent work?",
            answer: "Our AI Voice Sales Agent uses a human-like voice to handle inbound and outbound calls 24/7. It is trained to qualify leads, book appointments, and provide information, acting as a tireless member of your sales team."
        },
        {
            question: "Can SyncFlo Ai integrate with my existing tools?",
            answer: "Yes, our platform is designed for seamless integration. You can connect it with your CRM, social media accounts, and other business tools to create a unified and automated ecosystem."
        }
    ]

    return (
        <section id="faq" className="py-24 bg-primary">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-bold font-display mb-6">
                        Frequently Asked <span className="text-gradient">Questions</span>
                    </h2>
                    <p className="text-text-secondary max-w-2xl mx-auto text-xl">
                        Get quick answers to the most common questions about SyncFlo Ai.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto space-y-5">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`glass-panel rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index
                                ? 'border-coral/40 bg-coral/5 shadow-glow-coral'
                                : 'hover:border-white/20'
                                }`}
                        >
                            <button
                                className="w-full px-10 py-7 text-left flex justify-between items-center focus:outline-none group"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                <span className={`text-xl font-bold font-display transition-colors ${openIndex === index ? 'text-gradient' : 'text-white'
                                    }`}>
                                    {faq.question}
                                </span>
                                <span className={`transform transition-all duration-300 ${openIndex === index ? 'rotate-180 text-coral' : 'text-text-muted'
                                    }`}>
                                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </span>
                            </button>

                            <div
                                className={`px-10 transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-96 pb-8 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <p className="text-text-secondary leading-relaxed text-lg">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}