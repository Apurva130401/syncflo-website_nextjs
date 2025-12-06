'use client'

import { motion } from 'framer-motion'
import { Check, CheckCheck, MoreVertical, Phone, Video } from 'lucide-react'
import Image from 'next/image'

export default function WhatsAppMockUI({
    conversation = [],
    contactName = "SyncFlo AI",
    contactStatus = "online",
    contactImage = "https://placehold.co/40x40/00FF87/0B0F19?text=AI"
}) {
    return (
        <div className="w-full max-w-md mx-auto bg-[#0e151b] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl relative">
            {/* Status Bar Mock */}
            <div className="h-6 bg-[#0e151b] flex justify-between items-center px-6 pt-2">
                <span className="text-[10px] text-white/60 font-medium">9:41</span>
                <div className="flex gap-1">
                    <div className="w-3 h-3 rounded-full bg-white/20"></div>
                    <div className="w-3 h-3 rounded-full bg-white/20"></div>
                </div>
            </div>

            {/* Header */}
            <div className="bg-[#202c33] px-4 py-3 flex items-center justify-between z-10 relative">
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <div className="w-10 h-10 rounded-full overflow-hidden bg-white/10 relative">
                            {/* Fallback or actual image */}
                            <Image
                                src={contactImage}
                                alt={contactName}
                                width={40}
                                height={40}
                                className="object-cover"
                            />
                        </div>
                        {contactStatus === 'online' && (
                            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#202c33]"></div>
                        )}
                    </div>
                    <div>
                        <h3 className="text-white font-medium text-sm leading-tight">{contactName}</h3>
                        <p className="text-white/60 text-xs">{contactStatus}</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 text-[#00a884]">
                    <Video size={20} />
                    <Phone size={20} />
                    <MoreVertical size={20} className="text-white/60" />
                </div>
            </div>

            {/* Chat Area */}
            <div className="bg-[#0b141a] p-4 min-h-[400px] max-h-[500px] overflow-y-auto relative space-y-4 scrollbar-hide">
                {/* Background Pattern Overlay */}
                <div className="absolute inset-0 opacity-[0.06] pointer-events-none"
                    style={{ backgroundImage: 'url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")' }}
                ></div>

                {conversation.map((msg, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.5, duration: 0.4 }}
                        className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'} relative z-0`}
                    >
                        <div
                            className={`max-w-[80%] rounded-lg p-3 text-sm shadow-sm relative ${msg.isUser
                                    ? 'bg-[#005c4b] text-[#e9edef] rounded-tr-none'
                                    : 'bg-[#202c33] text-[#e9edef] rounded-tl-none'
                                }`}
                        >
                            {msg.image && (
                                <div className="mb-2 rounded-lg overflow-hidden">
                                    <Image
                                        src={msg.image}
                                        alt="Attachment"
                                        width={200}
                                        height={150}
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                            )}

                            <p className="leading-relaxed whitespace-pre-line">{msg.text}</p>

                            {msg.product && (
                                <div className="mt-2 bg-black/20 p-2 rounded flex gap-3 items-center">
                                    {msg.product.image && (
                                        <div className="w-12 h-12 bg-white/10 rounded overflow-hidden flex-shrink-0">
                                            <Image
                                                src={msg.product.image}
                                                alt={msg.product.title}
                                                width={48}
                                                height={48}
                                                className="object-cover w-full h-full"
                                            />
                                        </div>
                                    )}
                                    <div className="flex-1 min-w-0">
                                        <p className="font-medium truncate text-xs">{msg.product.title}</p>
                                        <p className="text-white/60 text-xs">{msg.product.price}</p>
                                    </div>
                                </div>
                            )}

                            {msg.actions && (
                                <div className="mt-3 space-y-1">
                                    {msg.actions.map((action, i) => (
                                        <button
                                            key={i}
                                            className="w-full bg-[#2a3942] hover:bg-[#374248] text-[#00a884] text-xs font-medium py-2 rounded transition-colors"
                                        >
                                            {action}
                                        </button>
                                    ))}
                                </div>
                            )}

                            <div className="flex justify-end items-center gap-1 mt-1 opacity-60">
                                <span className="text-[10px]">{msg.time || "10:00 AM"}</span>
                                {msg.isUser && <CheckCheck size={14} className="text-[#53bdeb]" />}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Input Area Mock */}
            <div className="bg-[#202c33] p-3 flex items-center gap-3 z-10 relative">
                <div className="text-white/60">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M9.153 11.603c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962zm-3.204 1.362c-.026-.307-.131 5.218 6.063 5.551 6.066-.25 6.066-5.551 6.066-5.551-6.066-.666-12.129.666-12.129 0zm11.363 1.108s-.669 1.959-5.051 1.959c-3.505 0-5.388-1.164-5.607-1.959 0 0 5.912 1.055 10.658 0zM11.804 1.011C5.609 1.011.978 6.033.978 12.228s4.826 10.761 11.021 10.761S23.02 18.423 23.02 12.228c.001-6.195-5.021-11.217-11.216-11.217zM12 21.354c-5.273 0-9.381-3.886-9.381-9.159s3.942-9.548 9.215-9.548 9.548 4.275 9.548 9.548c-.001 5.272-4.109 9.159-9.382 9.159zm3.108-9.751c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962z"></path></svg>
                </div>
                <div className="flex-1 bg-[#2a3942] rounded-lg h-9 px-3 flex items-center">
                    <span className="text-white/30 text-sm">Message</span>
                </div>
                <div className="w-10 h-10 bg-[#00a884] rounded-full flex items-center justify-center text-white shadow-lg">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M1.101 21.757 23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z"></path></svg>
                </div>
            </div>
        </div>
    )
}
