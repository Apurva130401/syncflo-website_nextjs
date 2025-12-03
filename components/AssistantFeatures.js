'use client'

function Card({ title, description, image, points, gradient, index }) {
    return (
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
            <div className="relative w-full max-w-6xl h-[80vh] bg-secondary/95 backdrop-blur-xl border border-white/10 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row">
                {/* Content Side */}
                <div className="w-full md:w-[45%] p-8 md:p-12 flex flex-col justify-between relative z-10">
                    <div>
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
                            <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${gradient} mr-2`}></span>
                            <span className="text-sm font-medium text-white/80">Feature 0{index + 1}</span>
                        </div>

                        <h2 className="text-3xl md:text-5xl font-bold font-display mb-6 leading-tight">
                            {title}
                        </h2>
                        <p className="text-lg text-text-secondary leading-relaxed mb-8">
                            {description}
                        </p>

                        <ul className="space-y-4">
                            {points.map((point, i) => (
                                <li key={i} className="flex items-center text-white/90">
                                    <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center mr-4 shrink-0 shadow-glow-sm`}>
                                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Decorative Number */}
                    <span className="text-[10rem] font-bold text-white/5 absolute bottom-0 right-0 -z-10 leading-none select-none">
                        {index + 1}
                    </span>
                </div>

                {/* Image Side */}
                <div className="w-full md:w-[55%] relative h-full">
                    <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-20 mix-blend-overlay z-10`}></div>
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover"
                    />
                    {/* Gradient Overlay for text readability on mobile if needed */}
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent md:hidden"></div>
                </div>
            </div>
        </div>
    )
}

export default function AssistantFeatures() {
    const features = [
        {
            title: 'Smart Email Mastery',
            description: 'Convert overwhelming inboxes into actionable insights. Our AI reads, prioritizes, and transforms emails into scheduled tasks.',
            image: '/assets/Email Management Screenshots.jpg',
            gradient: 'from-neon-cyan to-neon-blue',
            points: ['Intelligent prioritization', 'Meeting extraction', 'Calendar integration']
        },
        {
            title: 'Effortless Scheduling',
            description: 'Say goodbye to back-and-forth emails. Our AI finds optimal time slots, proposes alternatives, and books meetings directly.',
            image: '/assets/Calendar Automation Interface.jpg',
            gradient: 'from-neon-blue to-neon-purple',
            points: ['Smart availability detection', 'Automated follow-ups', 'Conflict resolution']
        },
        {
            title: 'Inbox Zero Achieved',
            description: 'Maintain a pristine inbox with AI-powered categorization. Distinguish between urgent responses needed and informational messages.',
            image: '/assets/Inbox Organization Interface.jpg',
            gradient: 'from-neon-purple to-neon-cyan',
            points: ['Automatic tagging', 'Priority scoring', 'Bulk processing']
        },
        {
            title: 'Instant Response Crafting',
            description: 'Generate professional, personalized replies in seconds. Our AI adapts to your writing style and tone.',
            image: '/assets/Reply Composition Interface.jpg',
            gradient: 'from-neon-cyan to-neon-purple',
            points: ['Context-aware drafts', 'Tone matching', 'Multi-language support']
        },
        {
            title: 'Seamless Meeting Setup',
            description: 'Eliminate the scheduling dance. AI handles all coordination, from initial proposals to final confirmations.',
            image: '/assets/Meeting Scheduling Interface.jpg',
            gradient: 'from-neon-blue to-neon-cyan',
            points: ['Time slot optimization', 'Attendee coordination', 'Platform integration']
        }
    ]

    return (
        <section className="bg-primary relative">
            {/* Intro Section */}
            <div className="container mx-auto px-6 py-24 text-center">
                <h2 className="text-4xl md:text-6xl font-bold font-display mb-6">
                    Powerful Features for <span className="text-gradient">Busy Professionals</span>
                </h2>
                <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                    Scroll down to explore how SyncFlo AI transforms your workflow.
                </p>
            </div>

            {/* Stacked Cards Section */}
            <div className="relative pb-24">
                {features.map((feature, index) => (
                    <Card
                        key={index}
                        {...feature}
                        index={index}
                    />
                ))}
            </div>
        </section>
    )
}
