'use client'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function DataProcessing() {
    return (
        <div className="bg-primary min-h-screen text-white font-sans selection:bg-neon-cyan/30">
            <Navbar />
            <main className="container mx-auto px-6 pt-40 pb-20 max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold font-display mb-12">Data Processing Agreement</h1>
                <div className="prose prose-invert prose-lg max-w-none">
                    <p className="text-text-secondary mb-8">
                        Last updated: December 6, 2025
                    </p>
                    <p>
                        This Data Processing Agreement ("DPA") forms part of the Master Services Agreement between SyncFlo ("Processor") and the Customer ("Controller").
                    </p>
                    <h3>1. Scope and Purpose</h3>
                    <p>
                        This DPA applies to the processing of Personal Data by SyncFlo on behalf of the Customer in the course of providing its AI automation services.
                    </p>
                    <h3>2. Processing of Personal Data</h3>
                    <p>
                        SyncFlo shall process Personal Data only on documented instructions from the Customer, including with regard to transfers of personal data to a third country or an international organization.
                    </p>
                    <h3>3. Subprocessors</h3>
                    <p>
                        The Customer authorizes SyncFlo to engage subprocessors (such as cloud providers and AI model providers) to process Personal Data, provided that SyncFlo imposes data protection obligations on such subprocessors.
                    </p>
                    <p>
                        For full DPA details, please contact <a href="mailto:dpo@syncflo.xyz" className="text-neon-cyan hover:underline">dpo@syncflo.xyz</a>.
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    )
}
