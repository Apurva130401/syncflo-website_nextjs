"use client"

import React, { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"

function FeatureItem({ feature, index, setCurrentFeature }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" })

    useEffect(() => {
        if (isInView) {
            setCurrentFeature(index)
        }
    }, [isInView, index, setCurrentFeature])

    return (
        <div
            ref={ref}
            className={cn(
                "flex items-start gap-6 md:gap-8 py-24 transition-opacity duration-500",
                isInView ? "opacity-100" : "opacity-30 blur-[1px]"
            )}
        >
            <div
                className={cn(
                    "w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center border-2 shrink-0 transition-all duration-500",
                    isInView
                        ? "bg-neon-cyan border-neon-cyan text-primary scale-110 shadow-glow-cyan"
                        : "bg-white/5 border-white/10 text-white/50",
                )}
            >
                <span className="text-xl font-bold">{index + 1}</span>
            </div>

            <div className="flex-1">
                <h3 className="text-2xl md:text-4xl font-bold text-white mb-6 font-display">
                    {feature.title || feature.step}
                </h3>
                <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
                    {feature.content}
                </p>
            </div>
        </div>
    )
}

export function FeatureSteps({
    features,
    className,
    title = "How to get Started",
    imageHeight = "h-[500px]",
}) {
    const [currentFeature, setCurrentFeature] = useState(0)

    return (
        <div className={cn("p-8 md:p-12", className)}>
            <div className="max-w-7xl mx-auto w-full">
                <h2 className="text-3xl md:text-5xl font-bold mb-20 text-center font-display">
                    {title}
                </h2>

                <div className="flex flex-col md:grid md:grid-cols-2 gap-10 md:gap-20">
                    {/* Text Column - Scrolls */}
                    <div className="order-2 md:order-1">
                        {features.map((feature, index) => (
                            <FeatureItem
                                key={index}
                                feature={feature}
                                index={index}
                                setCurrentFeature={setCurrentFeature}
                            />
                        ))}
                    </div>

                    {/* Image Column - Sticky */}
                    <div className="order-1 md:order-2 hidden md:block relative h-[600px]">
                        <div className="sticky top-32 h-[600px] w-full overflow-hidden rounded-[2.5rem] border border-white/10 shadow-2xl bg-secondary/50 backdrop-blur-sm">
                            <AnimatePresence mode="wait">
                                {features.map(
                                    (feature, index) =>
                                        index === currentFeature && (
                                            <motion.div
                                                key={index}
                                                className="absolute inset-0 rounded-[2.5rem] overflow-hidden"
                                                initial={{ opacity: 0, scale: 1.1 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.95 }}
                                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                            >
                                                <Image
                                                    src={feature.image}
                                                    alt={feature.step}
                                                    className="w-full h-full object-cover"
                                                    width={1000}
                                                    height={800}
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                                            </motion.div>
                                        ),
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
