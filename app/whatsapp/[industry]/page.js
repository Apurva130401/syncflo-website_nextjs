import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppHero from '@/components/WhatsAppHero'
import WhatsAppFeatures from '@/components/WhatsAppFeatures'
import WhatsAppUseCases from '@/components/WhatsAppUseCases'
import WhatsAppFAQ from '@/components/WhatsAppFAQ'
import WhatsAppIntegrations from '@/components/WhatsAppIntegrations'
import SmoothScroll from '@/components/SmoothScroll'
import WhatsAppMockUI from '@/components/WhatsAppMockUI'
import { industryData } from '../data'

export async function generateStaticParams() {
    return Object.keys(industryData).map((industry) => ({
        industry: industry,
    }))
}

export async function generateMetadata({ params }) {
    const { industry } = params
    const data = industryData[industry]

    if (!data) {
        return {
            title: 'Industry Not Found',
        }
    }

    return {
        title: `${data.title} | SyncFlo WhatsApp AI`,
        description: data.description,
    }
}

export default function IndustryPage({ params }) {
    const { industry } = params
    const data = industryData[industry]

    if (!data) {
        notFound()
    }

    return (
        <main className="bg-primary min-h-screen text-white selection:bg-green-accent/30">
            <SmoothScroll />
            <Navbar />

            <WhatsAppHero
                title={data.title}
                subtitle={data.subtitle}
                description={data.description}
                badge={data.heroBadge}
                visual={
                    <WhatsAppMockUI
                        conversation={data.mockConversation}
                        contactName={data.contactName}
                        contactImage={data.contactImage}
                    />
                }
            />

            <WhatsAppFeatures features={data.features} />

            <WhatsAppUseCases
                cases={data.useCases}
                sectionTitle={<>Tailored Use Cases for <span className="text-gradient">{data.heroBadge.replace('WhatsApp for ', '')}</span></>}
            />

            <WhatsAppIntegrations
                title="Seamless Integrations"
                description={data.integrations.description}
                integrations={data.integrations.items}
            />

            <WhatsAppFAQ faqs={data.faqs} />

            {/* Simple CTA before footer */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-primary to-secondary"></div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h2 className="text-4xl md:text-6xl font-bold font-display mb-8">
                        Ready to Transform Your <span className="text-gradient">Business?</span>
                    </h2>
                    <p className="text-xl text-text-secondary mb-12 max-w-2xl mx-auto">
                        Join forward-thinking companies in your industry using SyncFlo to revolutionize customer communication.
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
