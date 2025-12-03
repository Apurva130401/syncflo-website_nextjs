'use client'

import { useState, useRef, useEffect } from 'react'

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState([
        { text: "Hello! I'm your sales assistant. I can answer questions about SyncFlo Ai and our products. How can I help you today?", sender: 'ai' }
    ])
    const [inputValue, setInputValue] = useState('')
    const messagesEndRef = useRef(null)

    const scrollToBottom = () => {
        if (isOpen) {
            messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
        }
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages, isOpen])

    const handleSendMessage = async () => {
        if (inputValue.trim() === '') return

        const userMessage = { text: inputValue, sender: 'user' }
        setMessages(prev => [...prev, userMessage])
        setInputValue('')

        // Simulate AI response (replace with actual API call)
        setTimeout(() => {
            const aiResponse = { text: "Thank you for your question! Our AI agents are designed to handle various business automation tasks. Would you like to learn more about our WhatsApp automation or voice agents?", sender: 'ai' }
            setMessages(prev => [...prev, aiResponse])
        }, 1000)
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSendMessage()
        }
    }

    return (
        <>
            <div id="chat-bubble" onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.02-3.11A7.002 7.002 0 012 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM4.416 14.65A6.986 6.986 0 0010 16c3.309 0 6-2.691 6-6s-2.691-6-6-6-6 2.691-6 6c0 1.562.602 3.002 1.626 4.118L4.416 14.65z" clipRule="evenodd" />
                </svg>
            </div>

            <div id="chat-window" className={isOpen ? 'open' : ''}>
                <div className="p-4 bg-secondary border-b border-white/10 flex justify-between items-center">
                    <h3 className="font-display font-bold text-lg"><span className="text-gradient">SyncFlo</span> Ai Assistant</h3>
                    <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div id="chat-messages" className="flex-1 p-4 overflow-y-auto flex flex-col">
                    {messages.map((message, index) => (
                        <div key={index} className={`chat-message ${message.sender === 'user' ? 'user-message' : 'ai-message'}`}>
                            {message.sender === 'ai' ? (
                                <div dangerouslySetInnerHTML={{ __html: message.text.replace(/\n/g, '<br>') }} />
                            ) : (
                                message.text
                            )}
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                </div>
                <div className="p-4 bg-secondary border-t border-white/10">
                    <div className="flex items-center">
                        <input
                            type="text"
                            id="chat-input"
                            placeholder="Ask a question about SyncFlo Ai..."
                            className="flex-1 bg-primary border border-white/10 rounded-full py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-neon-cyan"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyPress={handleKeyPress}
                        />
                        <button onClick={handleSendMessage} className="ml-3 p-2 bg-gradient-to-r from-neon-cyan to-neon-blue rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}