'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppHero from '@/components/WhatsAppHero'
import WhatsAppFeatures from '@/components/WhatsAppFeatures'
import WhatsAppUseCases from '@/components/WhatsAppUseCases'
import WhatsAppPricing from '@/components/WhatsAppPricing'
import WhatsAppFAQ from '@/components/WhatsAppFAQ'
import WhatsAppIntegrations from '@/components/WhatsAppIntegrations'
import SmoothScroll from '@/components/SmoothScroll'

export default function WhatsAppPage() {
    return (
        <main className="bg-primary min-h-screen text-white selection:bg-green-accent/30">
            <SmoothScroll />
            <Navbar />

            <WhatsAppHero />
            <WhatsAppFeatures />
            <WhatsAppUseCases variant="marquee" />

            <WhatsAppIntegrations
                title="Seamless Integrations"
                description="SyncFlo Ai connects directly to the platforms and tools you already use, enabling a powerful, unified system."
                integrations={[
                    { title: "E-commerce Platforms", description: "Shopify, WooCommerce, Magento, BigCommerce" },
                    { title: "CRM Systems", description: "Salesforce, HubSpot, Zoho, Pipedrive" },
                    { title: "Payment Gateways", description: "Stripe, Razorpay, PayPal, WhatsApp Pay" },
                    { title: "Scheduling Tools", description: "Calendly, Google Calendar, Outlook" }
                ]}
            />

            <WhatsAppFAQ />

            {/* Simple CTA before footer */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-primary to-secondary"></div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h2 className="text-4xl md:text-6xl font-bold font-display mb-8">
                        Ready to <span className="text-gradient">Automate?</span>
                    </h2>
                    <p className="text-xl text-text-secondary mb-12 max-w-2xl mx-auto">
                        Join hundreds of businesses using SyncFlo to revolutionize their customer communication.
                    </p>
                    <a
                        href="#contact"
                        className="inline-block px-10 py-5 rounded-full bg-gradient-to-r from-green-accent to-blue-accent text-primary font-bold text-xl shadow-lg shadow-green-accent/20 hover:scale-105 transition-transform"
                    >
                        Get Started Now
                    </a>
                </div>
            </section>

            <Footer />
        </main>
    )
}
