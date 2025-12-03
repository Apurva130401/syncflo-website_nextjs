export default function Testimonials() {
    return (
        <section id="testimonials" className="py-24 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-secondary/60 via-primary to-primary z-0"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-bold font-display mb-6">
                        What Our <span className="text-gradient">Customers Say</span>
                    </h2>
                    <p className="text-text-secondary max-w-2xl mx-auto text-xl">
                        See the positive impact SyncFlo Ai has had on businesses like yours.
                    </p>
                </div>

                <div className="glass-panel max-w-5xl mx-auto p-12 rounded-3xl border-2 border-neon-cyan/20 shadow-glow-cosmic">
                    {/* TrustBox widget - Review Collector */}
                    <div
                        className="trustpilot-widget mx-auto w-full"
                        data-locale="en-US"
                        data-template-id="56278e9abfbbba0bdcd568bc"
                        data-businessunit-id="689e779d226916f97539fd86"
                        data-style-height="52px"
                        data-style-width="100%"
                        data-token="bcb1c7cf-6512-4a42-9795-65b22516bb18"
                    >
                        <a href="https://www.trustpilot.com/review/syncflo.xyz" target="_blank" rel="noopener" className="text-neon-cyan hover:text-neon-blue transition-colors text-lg font-semibold">View on Trustpilot</a>
                    </div>
                    {/* End TrustBox widget */}
                </div>
            </div>
        </section>
    )
}