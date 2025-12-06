'use client'

import ServicePage from '../../components/ServicePage'

export default function ServicesOverviewPage() {
    const features = [
        {
            title: "Website Development",
            description: "High-performance, SEO-optimized visuals that convert visitors into customers.",
            icon: "💻"
        },
        {
            title: "Custom AI Agents",
            description: "Intelligent bots trained on your data to handle support and sales 24/7.",
            icon: "🤖"
        },
        {
            title: "Workflow Automation",
            description: "Connect your apps and automate repetitive tasks to save hours every day.",
            icon: "⚡"
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
