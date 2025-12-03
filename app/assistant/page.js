import Navbar from '../../components/Navbar'
import AssistantHero from '../../components/AssistantHero'
import AssistantFeatures from '../../components/AssistantFeatures'
import AssistantCTA from '../../components/AssistantCTA'
import Footer from '../../components/Footer'
import SmoothScroll from '../../components/SmoothScroll'

export const metadata = {
    title: 'SyncFlo AI Assistant - Your Personal AI Chief of Staff',
    description: 'Transform your email chaos into organized productivity with SyncFlo AI Assistant.',
}

export default function Assistant() {
    return (
        <main className="min-h-screen bg-primary text-text-primary selection:bg-neon-cyan/30 selection:text-white">
            <SmoothScroll />
            <Navbar />
            <AssistantHero />
            <AssistantFeatures />
            <AssistantCTA />
            <Footer />
        </main>
    )
}
