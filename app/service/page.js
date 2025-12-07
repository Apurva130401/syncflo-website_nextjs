'use client'

import ServicePage from '../../components/ServicePage'

export default function ServicesOverviewPage() {
    const features = [
        {
            title: 'Website Development',
            description: 'Stunning, high-performance websites built with Next.js and modern technologies to establish your premium digital presence.',
            tag: 'High Performance',
            tagColor: 'text-blue-400 bg-blue-400/15',
            gradient: 'from-blue-400 to-indigo-500',
            icon: (
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
            ),
            link: '/web-development',
            linkText: 'View Service'
        },
        {
            title: 'Custom AI Agents',
            description: 'Tailored AI solutions trained on your specific business data to handle unique workflows, support, and internal operations.',
            tag: 'Tailored Solution',
            tagColor: 'text-purple-400 bg-purple-400/15',
            gradient: 'from-purple-400 to-pink-500',
            icon: (
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            link: '/custom-agents',
            linkText: 'View Service'
        },
        {
            title: 'Workflow Automation',
            description: 'Steamline your business operations by connecting your favorite apps and automating repetitive tasks with AI logic.',
            tag: 'Efficiency',
            tagColor: 'text-cyan-400 bg-cyan-400/15',
            gradient: 'from-cyan-400 to-teal-500',
            icon: (
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
            ),
            link: '/workflow-automation',
            linkText: 'View Service'
        }
    ]

    // Simplified process for the overview
    const process = [
        {
            title: "Consultation",
            description: "We discuss your business needs and identify high-impact opportunities."
        },
        {
            title: "Strategy",
            description: "We design a custom roadmap tailored to your specific goals and budget."
        },
        {
            title: "Execution",
            description: "Our experts build, test, and deploy your solution with precision."
        }
    ]

    const benefits = [
        "End-to-end technical partnership",
        "Focus on ROI and business metrics",
        "Post-launch support and maintenance",
        "Cutting-edge tech stack"
    ]

    return (
        <ServicePage
            title="Our Premium"
            subtitle="Services"
            description="Beyond our software products, we offer bespoke engineering and design services to help you scale. From custom implementations to complete digital transformations."
            features={features}
            process={process}
            benefits={benefits}
        />
    )
}
