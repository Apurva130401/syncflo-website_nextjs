'use client'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function PrivacyPolicy() {
    return (
        <div className="bg-primary min-h-screen text-white font-sans selection:bg-neon-cyan/30">
            <Navbar />
            <main className="container mx-auto px-6 pt-40 pb-20 max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold font-display mb-12">Privacy Policy</h1>
                <div className="prose prose-invert prose-lg max-w-none">
                    <p className="text-text-secondary mb-8">
                        Last updated: December 6, 2025
                    </p>
                    {/* Placeholder content - standard legal text would go here */}
                    <p>
                        At SyncFlo AI, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our AI services.
                    </p>
                    <h3>1. Information We Collect</h3>
                    <p>
                        We collect information that you strictly provide to us for the purpose of account creation and service usage, including name, email address, and business details.
                    </p>
                    <h3>2. How We Use Your Information</h3>
                    <p>
                        We use the information we collect to operate, maintain, and improve our services, communicate with you, and ensure the security of our platform.
                    </p>
                    <h3>3. Data Security</h3>
                    <p>
                        We implement appropriate technical and organizational security measures designed to protect the security of any personal information we process.
                    </p>
                    <p>
                        For any questions regarding this policy, please contact us at <a href="mailto:privacy@syncflo.xyz" className="text-neon-cyan hover:underline">privacy@syncflo.xyz</a>.
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    )
}
