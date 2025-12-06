'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import TrustMetrics from '../components/TrustMetrics'
import Features from '../components/Features'
import WhyChooseUs from '../components/WhyChooseUs'
import HowItWorks from '../components/HowItWorks'
import FAQ from '../components/FAQ'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'
import Footer from '../components/Footer'
import Chatbot from '../components/Chatbot'

export default function Home() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
        })
    }, [])

    return (
        <div>
            <Navbar />
            <Hero />
            <TrustMetrics />
            <Features />
            <WhyChooseUs />
            <HowItWorks />
            <FAQ />
            <Testimonials />
            <CTA />
            <Footer />
            <Chatbot />
        </div>
    )
}