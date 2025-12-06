import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import SmoothScroll from '../components/SmoothScroll'
import ContextMenu from '../components/ContextMenu'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' })

export const metadata = {
    title: 'SyncFlo Ai - Intelligent Business Automation',
    description: 'Deploy powerful AI Chatbots for WhatsApp Automation and Voice Calls.',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
            <body className={`${inter.className} bg-primary text-white`}>
                <SmoothScroll />
                <ContextMenu />
                {children}
            </body>
        </html>
    )
}