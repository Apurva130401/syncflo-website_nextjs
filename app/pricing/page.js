import Navbar from '../../components/Navbar'
import PricingHero from '../../components/PricingHero'
import PricingTiers from '../../components/PricingTiers'
import FAQ from '../../components/FAQ'
import CTA from '../../components/CTA'
import Footer from '../../components/Footer'
import SmoothScroll from '../../components/SmoothScroll'

export const metadata = {
    title: 'Pricing - SyncFlo Ai',
    description: 'Choose the perfect AI solution for your business. Transparent pricing for WhatsApp automation, Voice Agents, and more.',
}

export default function Pricing() {
    return (
        <main className="min-h-screen bg-primary text-text-primary selection:bg-neon-cyan/30 selection:text-white">
            <SmoothScroll />
            <Navbar />
            <PricingHero />
            <PricingTiers />
            <FAQ />
            <CTA />
            <Footer />
        </main>
    )
}
