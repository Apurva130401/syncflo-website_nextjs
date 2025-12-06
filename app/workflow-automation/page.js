'use client'

import ServicePage from '../../components/ServicePage'

export default function WorkflowAutomationPage() {
    const features = [
        {
            title: "Zapier & Make Automation",
            description: "Connect 5000+ apps to create seamless workflows without writing a single line of new code.",
            icon: "⚡"
        },
        {
            title: "Custom API Integrations",
            description: "We build custom bridges for legacy software that doesn't natively talk to the modern web.",
            icon: "🔌"
        },
        {
            title: "Error Handling & Logging",
            description: "Robust systems that alert you instantly if a workflow fails, preventing data loss.",
            icon: "🛡️"
        }
    ]

    const process = [
        {
            title: "Process Audit",
            description: "We map out your current manual workflows to identify bottlenecks and repetitive tasks."
        },
        {
            title: "Architecture Design",
            description: " designing efficient, cost-effective automation flows using the best tools for the job."
        },
        {
            title: "Build & Monitor",
            description: "Implementing the automation and setting up dashboards to track time/money saved."
        }
    ]

    const benefits = [
        "Save 20+ hours per week/employee",
        "Eliminate human entry errors",
        "Faster lead response times",
        "Scalable operational processes"
    ]

    return (
        <ServicePage
            title="Workflow"
            subtitle="Automation"
            description="Stop wasting time on repetitive tasks. We design and build automated workflows that connect your apps, synchronize data, and free up your team for creative work."
            features={features}
            process={process}
            benefits={benefits}
        />
    )
}
