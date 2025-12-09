'use client'

import { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion'
import { ArrowRight, MoveUpRight } from 'lucide-react'

export default function DigitalPandaClone() {
    // --- CUSTOM CURSOR (Native JS Listener, no Lenis) ---
    const cursorX = useMotionValue(-100)
    const cursorY = useMotionValue(-100)

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX - 10)
            cursorY.set(e.clientY - 10)
        }
        window.addEventListener('mousemove', moveCursor)
        return () => window.removeEventListener('mousemove', moveCursor)
    }, [])

    // --- HORIZONTAL SCROLL LOGIC ---
    // We use a tall container (300vh) to create scroll space.
    // The internal container is sticky.
    // We map the scroll progress of the TALL container to the horizontal offset.
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"])

    return (
        <div className="bg-[#111] min-h-screen text-[#e1e1e1] font-sans selection:bg-[#e1e1e1] selection:text-[#111] overflow-x-hidden">

            {/* GLOBAL NOISE */}
            <div className="fixed inset-0 opacity-[0.04] pointer-events-none z-0"
                style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}></div>

            {/* CUSTOM CURSOR */}
            <motion.div
                className="fixed w-5 h-5 bg-[#e1e1e1] rounded-full pointer-events-none z-[100] mix-blend-difference top-0 left-0"
                style={{ x: cursorX, y: cursorY }}
            />

            {/* NAV */}
            <nav className="fixed top-0 w-full p-8 md:p-12 flex justify-between items-center z-50 mix-blend-difference">
                <div className="text-xl font-bold tracking-tighter uppercase cursor-none">Panda<span className="text-[#666]">Clone</span></div>
                <div className="flex gap-8">
                    {['Work', 'About', 'Contact'].map(link => (
                        <span key={link} className="text-sm font-medium tracking-widest uppercase hover:text-[#666] transition-colors cursor-none">{link}</span>
                    ))}
                </div>
            </nav>

            {/* HERO */}
            <section className="h-screen flex flex-col justify-center items-center relative z-10 bg-[#111]">
                <div className="flex flex-col items-center">
                    <h1 className="text-[13vw] leading-[0.8] font-bold tracking-tighter uppercase text-center mix-blend-exclusion">
                        Digital
                    </h1>
                    <h1 className="text-[13vw] leading-[0.8] font-bold tracking-tighter uppercase text-center mix-blend-exclusion text-[#333]">
                        Panda
                    </h1>
                </div>

                <div className="absolute bottom-12 flex justify-between w-full px-12">
                    <span className="text-sm uppercase tracking-widest opacity-50">Native Scroll</span>
                    <span className="text-sm uppercase tracking-widest opacity-50">Scroll to Explore</span>
                </div>
            </section>

            {/* INTRO TEXT */}
            <section className="py-48 container mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-24 relative z-10">
                <div className="w-full md:w-[30%]">
                    <span className="block w-full h-[1px] bg-[#333] mb-8"></span>
                    <p className="text-sm uppercase tracking-widest text-[#666]">Philosophy</p>
                </div>
                <div className="w-full md:w-[70%]">
                    <p className="text-[3vw] leading-[1.2] font-medium indent-24">
                        We removed the heavy scroll libraries. This is pure, native CSS sticky positioning. It feels weighty because the design is weighty, not because some script is hijacking your mouse.
                    </p>
                </div>
            </section>

            {/* HORIZONTAL SELECTED WORKS - CSS BASIC STICKY */}
            <section ref={containerRef} className="relative h-[300vh] bg-[#e1e1e1] text-[#111]">
                <div className="sticky top-0 h-screen flex items-center overflow-hidden">
                    <motion.div style={{ x }} className="flex gap-12 px-12 md:px-24">
                        {[
                            {
                                id: "01",
                                name: "Native Sticky",
                                cat: "CSS Architecture",
                                color: "bg-[#1a1a1a]"
                            },
                            {
                                id: "02",
                                name: "Performant",
                                cat: "60 FPS",
                                color: "bg-[#2b2b2b]"
                            },
                            {
                                id: "03",
                                name: "Responsive",
                                cat: "Universal",
                                color: "bg-[#3c3c3c]"
                            }
                        ].map((project, i) => (
                            <div key={i} className="group relative w-[80vw] md:w-[50vw] h-[60vh] md:h-[70vh] flex-shrink-0 flex flex-col justify-between">
                                <div className="w-full h-full relative overflow-hidden rounded-md">
                                    <div className={`w-full h-full ${project.color} transform group-hover:scale-105 transition-transform duration-500 ease-out text-white flex items-center justify-center font-bold text-4xl`}>
                                        {project.id}
                                    </div>
                                </div>
                                <div className="flex justify-between items-end mt-6 border-b border-[#ccc] pb-4">
                                    <div>
                                        <h3 className="text-4xl font-bold tracking-tight">{project.name}</h3>
                                        <span className="text-sm uppercase tracking-widest text-[#666]">{project.cat}</span>
                                    </div>
                                    <div className="w-12 h-12 rounded-full border border-[#ccc] flex items-center justify-center group-hover:bg-[#111] group-hover:text-white transition-colors duration-300">
                                        <MoveUpRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* FOOTER */}
            <section className="h-screen bg-[#111] flex flex-col justify-center items-center relative overflow-hidden z-10">
                <div className="relative z-10 mix-blend-difference text-center">
                    <h2 className="text-[10vw] leading-[0.85] font-bold tracking-tighter uppercase text-[#e1e1e1]">
                        Panda
                    </h2>
                    <h2 className="text-[10vw] leading-[0.85] font-bold tracking-tighter uppercase text-[#333]">
                        Native
                    </h2>
                </div>
            </section>
        </div>
    )
}
