'use client'

import { useState } from 'react'
import { supabase } from '../lib/supabaseClient'

export default function ContactForm() {
    // const supabase = createClientComponentClient() // Removed

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        businessName: '',
        industry: '',
        otherIndustry: '',
        whatsapp: '',
        queryCount: '',
        message: ''
    })
    const [status, setStatus] = useState('idle') // idle, loading, success, error

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus('loading')

        if (!supabase) {
            console.error('Supabase client not initialized. Missing env vars.')
            alert('Configuration Error: Supabase keys are missing. Please check your .env.local file.')
            setStatus('error')
            return
        }

        try {
            // Prepare data for Supabase
            // If industry is 'Other', use the otherIndustry value
            const industryValue = formData.industry === 'Other' ? formData.otherIndustry : formData.industry

            const { error } = await supabase
                .from('contact_submissions')
                .insert([
                    {
                        first_name: formData.firstName,
                        last_name: formData.lastName,
                        email: formData.email,
                        business_name: formData.businessName,
                        industry: industryValue,
                        whatsapp: formData.whatsapp,
                        query_count: formData.queryCount,
                        message: formData.message,
                        status: 'new' // Default status for new leads
                    }
                ])

            if (error) throw error

            console.log('Form Submitted Successfully')
            setStatus('success')

            // Reset form after success
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                businessName: '',
                industry: '',
                otherIndustry: '',
                whatsapp: '',
                queryCount: '',
                message: ''
            })
        } catch (error) {
            console.error('Error submitting form:', error)
            setStatus('error')
            alert('Something went wrong. Please try again.')
        }
    }

    return (
        <div className="glass-panel p-8 md:p-10 rounded-3xl relative overflow-hidden">
            {/* Success Overlay */}
            {status === 'success' && (
                <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-secondary/95 backdrop-blur-xl animate-in fade-in duration-300">
                    <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                        <svg className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold font-display text-white mb-2">Message Sent!</h3>
                    <p className="text-text-secondary text-center max-w-xs">
                        Thank you for reaching out. We'll get back to you shortly.
                    </p>
                    <button
                        onClick={() => setStatus('idle')}
                        className="mt-8 px-6 py-2 bg-white/10 hover:bg-white/20 rounded-full text-sm font-medium transition-colors"
                    >
                        Send Another Message
                    </button>
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="firstName" className="text-sm font-medium text-text-secondary ml-1">First Name</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            required
                            value={formData.firstName}
                            onChange={handleChange}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                            placeholder="John"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="lastName" className="text-sm font-medium text-text-secondary ml-1">Last Name</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            required
                            value={formData.lastName}
                            onChange={handleChange}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                            placeholder="Doe"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-text-secondary ml-1">Business Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                            placeholder="john@company.com"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="businessName" className="text-sm font-medium text-text-secondary ml-1">Business Name</label>
                        <input
                            type="text"
                            id="businessName"
                            name="businessName"
                            required
                            value={formData.businessName}
                            onChange={handleChange}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                            placeholder="Acme Inc."
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="industry" className="text-sm font-medium text-text-secondary ml-1">Industry</label>
                        <div className="relative">
                            <select
                                id="industry"
                                name="industry"
                                required
                                value={formData.industry}
                                onChange={handleChange}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white appearance-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all cursor-pointer"
                            >
                                <option value="" disabled className="bg-secondary text-text-secondary">Select an Industry</option>
                                <option value="Real Estate" className="bg-secondary text-white">Real Estate</option>
                                <option value="E-commerce" className="bg-secondary text-white">E-commerce</option>
                                <option value="Hospitality" className="bg-secondary text-white">Hospitality</option>
                                <option value="Automotive" className="bg-secondary text-white">Automotive</option>
                                <option value="Healthcare" className="bg-secondary text-white">Healthcare</option>
                                <option value="Education" className="bg-secondary text-white">Education</option>
                                <option value="Other" className="bg-secondary text-white">Other</option>
                            </select>
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/50">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="whatsapp" className="text-sm font-medium text-text-secondary ml-1">WhatsApp Number (With Country Code)</label>
                        <input
                            type="tel"
                            id="whatsapp"
                            name="whatsapp"
                            value={formData.whatsapp}
                            onChange={handleChange}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                            placeholder="+1 (555) 000-0000"
                        />
                    </div>
                </div>

                {formData.industry === 'Other' && (
                    <div className="space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
                        <label htmlFor="otherIndustry" className="text-sm font-medium text-text-secondary ml-1">Please Specify Industry</label>
                        <input
                            type="text"
                            id="otherIndustry"
                            name="otherIndustry"
                            required
                            value={formData.otherIndustry}
                            onChange={handleChange}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                            placeholder="e.g. Legal Services"
                        />
                    </div>
                )}

                <div className="space-y-2">
                    <label htmlFor="queryCount" className="text-sm font-medium text-text-secondary ml-1">Monthly Customer Queries</label>
                    <div className="relative">
                        <select
                            id="queryCount"
                            name="queryCount"
                            required
                            value={formData.queryCount}
                            onChange={handleChange}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white appearance-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all cursor-pointer"
                        >
                            <option value="" disabled className="bg-secondary text-text-secondary">Select a range</option>
                            <option value="1-50" className="bg-secondary text-white">1 - 50</option>
                            <option value="50-250" className="bg-secondary text-white">50 - 250</option>
                            <option value="250-1000" className="bg-secondary text-white">250 - 1,000</option>
                            <option value="1000+" className="bg-secondary text-white">1,000+</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/50">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-text-secondary ml-1">Your Query</label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                        placeholder="Tell us about your needs..."
                    ></textarea>
                </div>

                <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white font-bold text-lg shadow-lg shadow-blue-900/20 hover:shadow-blue-900/40 hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                    {status === 'loading' ? (
                        <>
                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                        </>
                    ) : (
                        <>
                            Send Message
                        </>
                    )}
                </button>
            </form>
        </div>
    )
}
