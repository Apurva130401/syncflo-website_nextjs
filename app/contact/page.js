import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import ContactForm from '../../components/ContactForm'

export const metadata = {
    title: 'Contact Us - SyncFlo Ai',
    description: 'Get in touch with SyncFlo Ai to transform your business with WhatsApp Automation and AI Voice Agents.',
}

export default function Contact() {
    return (
        <main className="min-h-screen bg-primary selection:bg-accent selection:text-primary">
            <Navbar />

            <section className="relative pt-32 pb-20 overflow-hidden">
                {/* Background Elements */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-secondary/20 to-transparent pointer-events-none"></div>
                <div className="absolute top-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent2/5 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h1 className="text-5xl md:text-7xl font-bold font-display mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
                                Contact <span className="text-gradient">Us</span>
                            </h1>
                            <p className="text-xl text-text-secondary max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
                                Have a question or want to request a demo? Fill out the form below and we'll get back to you as soon as possible.
                            </p>
                        </div>

                        <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
