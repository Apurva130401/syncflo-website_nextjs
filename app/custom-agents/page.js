'use client'

import ServicePage from '../../components/ServicePage'

export default function CustomAgentsPage() {
    const features = [
        {
            title: "Bespoke LLM Training",
            description: "We fine-tune models on your specific business data for 99% accuracy in responses.",
            icon: "🧠"
        },
        {
            title: "Multi-Platform Deployment",
            description: "One agent that works across WhatsApp, Instagram, Website Chat, and Slack.",
            icon: "🌐"
        },
        {
            title: "Active Learning Loops",
            description: "Agents that get smarter with every conversation, automatically flagging unknown queries.",
            icon: "📈"
        }
    ]

    const process = [
        {
            title: "Knowledge Mapping",
            description: "We convert your PDFs, docs, and website data into a structured vector database."
        },
        {
            title: "Prompt Engineering",
            description: "Crafting the perfect persona and guardrails to ensure brand safety and compliance."
        },
        {
            title: "Integration & Handoff",
            description: "Connecting to your CRM and setting up smooth human-handoff protocols."
        }
    ]

    const benefits = [
        "24/7 instant customer support",
        "Reduced support costs by 70%",
        "Consistent brand voice",
        "Seamless human handoff"
    ]

    return (
        <ServicePage
            title="Custom AI"
            subtitle="Agents"
            description="Go beyond basic chatbots. We build sophisticated AI agents trained on your proprietary data that can handle complex queries, execute tasks, and embody your brand voice."
            features={features}
            process={process}
            benefits={benefits}
        />
    )
}
