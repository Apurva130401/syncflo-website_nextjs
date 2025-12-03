'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

export default function WhatsAppFAQ({ faqs }) {
    const [openIndex, setOpenIndex] = useState(null)

    const defaultFaqs = [
        {
            question: "Is this compliant with WhatsApp's policies?",
            answer: "Absolutely. We operate exclusively through the official WhatsApp Business API, ensuring that all communications are fully compliant with Meta's terms of service. Your account's safety and integrity are our top priority."
        },
        {
            question: "How long does it take to set up?",
            answer: "The initial setup is incredibly fast. You can connect your number and have a basic AI assistant running in under 15 minutes. Customizing advanced workflows depends on your specific requirements, but our interface is designed for speed and ease of use."
        },
        {
            question: "What kind of information can I use to train the AI?",
            answer: "You can train the AI with various sources, including uploading documents (PDFs, DOCs), providing a link to your website (it will crawl and learn from it), or simply by adding text-based questions and answers."
        },
        {
            question: "Can the AI hand over a conversation to a human agent?",
            answer: "Yes! Our system includes seamless human handover. You can set triggers (like specific keywords or complex queries) that automatically pause the AI and notify a human agent to take over the conversation."
        },
        {
            question: "How are pricing plans for conversations calculated?",
            answer: "A 'conversation' is a 24-hour messaging window between you and a customer. WhatsApp initiates charges per conversation, and our plans provide a set number of these conversations per month."
        }
    ]

    const displayFaqs = faqs || defaultFaqs

    return (
        <section className="py-24 bg-primary">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
                        Your WhatsApp AI <span className="text-gradient">Questions</span>
                    </h2>
                </div>

                <div className="space-y-4">
                    {displayFaqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-white/10 rounded-2xl bg-secondary/30 overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                            >
                                <span className="text-lg font-bold text-white">{faq.question}</span>
                                {openIndex === index ? (
                                    <Minus className="w-5 h-5 text-green-accent" />
                                ) : (
                                    <Plus className="w-5 h-5 text-green-accent" />
                                )}
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="p-6 pt-0 text-text-secondary leading-relaxed border-t border-white/5">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
