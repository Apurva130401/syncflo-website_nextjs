export default function Footer() {
    return (
        <footer className="bg-primary border-t border-neon-cyan/10 pt-20 pb-10 relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1">
                        <a href="#home" className="text-3xl font-bold font-display tracking-wider text-white mb-6 block group">
                            SyncFlo<span className="text-gradient">Ai</span>
                        </a>
                        <p className="text-text-secondary mb-6 leading-relaxed">
                            Empowering businesses with intelligent AI automation tools for WhatsApp and Voice.
                        </p>
                        <div className="flex space-x-4">
                            {/* Social Icons with Cosmic Hover */}
                            {['twitter', 'linkedin'].map((social) => (
                                <a key={social} href={`#${social}`} className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-text-muted hover:bg-gradient-to-br hover:from-neon-cyan hover:to-neon-blue hover:text-white transition-all hover:scale-110">
                                    <span className="sr-only">{social}</span>
                                    <div className="w-5 h-5 bg-current rounded-sm"></div>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Product</h4>
                        <ul className="space-y-4">
                            <li><a href="#features" className="text-text-secondary hover:text-neon-cyan transition-colors">Features</a></li>
                            <li><a href="#pricing" className="text-text-secondary hover:text-neon-blue transition-colors">Pricing</a></li>
                            <li><a href="#demo" className="text-text-secondary hover:text-neon-purple transition-colors">Book Demo</a></li>
                            <li><a href="#api" className="text-text-secondary hover:text-neon-cyan transition-colors">API Access</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Company</h4>
                        <ul className="space-y-4">
                            <li><a href="#about" className="text-text-secondary hover:text-neon-cyan transition-colors">About Us</a></li>
                            <li><a href="#careers" className="text-text-secondary hover:text-neon-blue transition-colors">Careers</a></li>
                            <li><a href="#blog" className="text-text-secondary hover:text-neon-purple transition-colors">Blog</a></li>
                            <li><a href="#contact" className="text-text-secondary hover:text-neon-cyan transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Legal</h4>
                        <ul className="space-y-4">
                            <li><a href="#privacy" className="text-text-secondary hover:text-neon-cyan transition-colors">Privacy Policy</a></li>
                            <li><a href="#terms" className="text-text-secondary hover:text-neon-blue transition-colors">Terms of Service</a></li>
                            <li><a href="#security" className="text-text-secondary hover:text-neon-purple transition-colors">Security</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar with Gradient Divider */}
                <div className="border-t border-neon-cyan/10 pt-8 flex flex-col md:flex-row justify-between items-center relative z-10">
                    <p className="text-text-muted text-sm">
                        &copy; {new Date().getFullYear()} SyncFlo Ai. All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#privacy" className="text-text-muted hover:text-neon-cyan text-sm transition-colors">Privacy</a>
                        <a href="#terms" className="text-text-muted hover:text-neon-blue text-sm transition-colors">Terms</a>
                    </div>
                </div>
            </div>

            {/* Massive Background Text */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3 w-full text-center pointer-events-none select-none z-0">
                <h1 className="text-[15vw] font-bold font-display tracking-widest text-white/5 whitespace-nowrap">
                    SYNCFLO AI
                </h1>
            </div>
        </footer>
    )
}