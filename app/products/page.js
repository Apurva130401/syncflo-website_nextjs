import Navbar from '../../components/Navbar'
import ProductsHero from '../../components/ProductsHero'
import ProductsGrid from '../../components/ProductsGrid'
import ProductsCTA from '../../components/ProductsCTA'
import Footer from '../../components/Footer'
import SmoothScroll from '../../components/SmoothScroll'

export const metadata = {
    title: 'Our AI Solutions - SyncFlo Ai',
    description: 'Supercharge your sales, support, and client engagement with SyncFlo AI solutions.',
}

export default function Products() {
    return (
        <main className="min-h-screen bg-primary text-text-primary selection:bg-neon-cyan/30 selection:text-white">
            <SmoothScroll />
            <Navbar />
            <ProductsHero />
            <ProductsGrid />
            <ProductsCTA />
            <Footer />
        </main>
    )
}
