'use client'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function TermsOfService() {
    return (
        <div className="bg-primary min-h-screen text-white font-sans selection:bg-neon-cyan/30">
            <Navbar />
            <main className="container mx-auto px-6 pt-40 pb-20 max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold font-display mb-12">Terms of Service</h1>
                <div className="prose prose-invert prose-lg max-w-none">
                    <p className="text-text-secondary mb-8">
                        Last updated: December 6, 2025
                    </p>
                    <p>
                        Please read these Terms of Service ("Terms") carefully before using the SyncFlo AI platform operated by SyncFlo.
                    </p>
                    <h3>1. Acceptance of Terms</h3>
                    <p>
                        By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the Service.
                    </p>
                    <h3>2. Use License</h3>
                    <p>
                        Permission is granted to temporarily access the materials (information or software) on SyncFlo's website for personal, non-commercial transitory viewing only.
                    </p>
                    <h3>3. AI Usage Policy</h3>
                    <p>
                        Our AI services must not be used for any illegal, harmful, or abusive purposes. We reserve the right to terminate accounts that violate our usage guidelines.
                    </p>
                    <p>
                        For any questions regarding these terms, please contact us at <a href="mailto:legal@syncflo.xyz" className="text-neon-cyan hover:underline">legal@syncflo.xyz</a>.
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    )
}
