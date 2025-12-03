'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function ContextMenu() {
    const [visible, setVisible] = useState(false)
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [linkHref, setLinkHref] = useState(null)
    const menuRef = useRef(null)
    const router = useRouter()

    useEffect(() => {
        const handleContextMenu = (e) => {
            e.preventDefault()

            // Check if clicked element is a link or inside a link
            const linkElement = e.target.closest('a')
            if (linkElement) {
                setLinkHref(linkElement.href)
            } else {
                setLinkHref(null)
            }

            // Calculate position to keep menu within viewport
            let x = e.clientX
            let y = e.clientY

            const menuWidth = 220 // Approximate width
            const menuHeight = 250 // Approximate height

            if (x + menuWidth > window.innerWidth) {
                x = window.innerWidth - menuWidth - 20
            }

            if (y + menuHeight > window.innerHeight) {
                y = window.innerHeight - menuHeight - 20
            }

            setPosition({ x, y })
            setVisible(true)
        }

        const handleClick = () => {
            setVisible(false)
        }

        const handleScroll = () => {
            if (visible) setVisible(false)
        }

        window.addEventListener('contextmenu', handleContextMenu)
        window.addEventListener('click', handleClick)
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('contextmenu', handleContextMenu)
            window.removeEventListener('click', handleClick)
            window.removeEventListener('scroll', handleScroll)
        }
    }, [visible])

    if (!visible) return null

    const menuItems = [
        {
            label: 'Home',
            icon: (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
            ),
            action: () => router.push('/')
        },
        {
            label: 'View Products',
            icon: (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
            ),
            action: () => router.push('/products')
        }
    ]

    // Add "Open Link in New Tab" if a link was clicked
    if (linkHref) {
        menuItems.push({
            label: 'Open Link in New Tab',
            icon: (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
            ),
            action: () => window.open(linkHref, '_blank')
        })
    }

    // Add remaining items
    menuItems.push(
        { type: 'divider' },
        {
            label: 'Refresh Page',
            icon: (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
            ),
            action: () => window.location.reload()
        },
        {
            label: 'Copy Page URL',
            icon: (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                </svg>
            ),
            action: () => {
                navigator.clipboard.writeText(window.location.href)
            }
        },
        { type: 'divider' },
        {
            label: 'Contact Support',
            icon: (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            ),
            action: () => router.push('/dashboard/support')
        }
    )

    return (
        <div
            ref={menuRef}
            className="fixed z-[9999] min-w-[220px] bg-secondary/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-glow-cosmic p-2 animate-in fade-in zoom-in-95 duration-100"
            style={{ top: position.y, left: position.x }}
        >
            {menuItems.map((item, index) => {
                if (item.type === 'divider') {
                    return <div key={index} className="h-px bg-white/10 my-2 mx-2" />
                }

                return (
                    <button
                        key={index}
                        onClick={item.action}
                        className="w-full flex items-center gap-3 px-3 py-2.5 text-sm text-text-secondary hover:text-white hover:bg-white/10 rounded-lg transition-colors group text-left"
                    >
                        <span className="text-text-secondary group-hover:text-primary transition-colors">
                            {item.icon}
                        </span>
                        <span className="font-medium">{item.label}</span>
                    </button>
                )
            })}
        </div>
    )
}
