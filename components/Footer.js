export default function Footer() {
    return (
        <footer className="bg-[#020202] relative overflow-hidden flex flex-col justify-between pt-20 pb-10">

            {/* Top Section: Branding (Left) & Links (Right) */}
            <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row justify-between items-start mb-20 gap-12">

                {/* Left Side: Branding */}
                <div className="w-full md:w-1/3 flex flex-col items-start text-left">
                    <a href="#home" className="text-3xl font-bold font-display tracking-wider text-white mb-6 block">
                        SyncFlo<span className="text-[#3b82f6]">Ai</span>
                    </a>
                    <p className="text-zinc-500 leading-relaxed max-w-xs">
                        Empowering businesses with intelligent AI automation tools for WhatsApp and Voice.
                    </p>
                </div>

                {/* Right Side: Navigation Links */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 w-full md:w-2/3 justify-end md:justify-items-end">
                    {/* Product Column */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Product</h4>
                        <ul className="space-y-4">
                            <li><a href="#features" className="text-zinc-500 hover:text-white transition-colors">Features</a></li>
                            <li><a href="#integrations" className="text-zinc-500 hover:text-white transition-colors">Integrations</a></li>
                            <li><a href="#pricing" className="text-zinc-500 hover:text-white transition-colors">Pricing</a></li>
                            <li><a href="#changelog" className="text-zinc-500 hover:text-white transition-colors">Changelog</a></li>
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Company</h4>
                        <ul className="space-y-4">
                            <li><a href="#about" className="text-zinc-500 hover:text-white transition-colors">About Us</a></li>
                            <li><a href="#careers" className="text-zinc-500 hover:text-white transition-colors">Careers</a></li>
                            <li><a href="#blog" className="text-zinc-500 hover:text-white transition-colors">Blog</a></li>
                            <li><a href="#contact" className="text-zinc-500 hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Legal Column */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Legal</h4>
                        <ul className="space-y-4">
                            <li><a href="#privacy" className="text-zinc-500 hover:text-white transition-colors">Privacy Policy</a></li>
                            <li><a href="#terms" className="text-zinc-500 hover:text-white transition-colors">Terms of Service</a></li>
                            <li><a href="#cookie" className="text-zinc-500 hover:text-white transition-colors">Cookie Policy</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Massive Text with Gradient */}
            <div className="w-full flex justify-center items-center select-none pointer-events-none mb-10 md:mb-0">
                <h1 className="text-[13vw] md:text-[15vw] font-bold font-display tracking-tighter bg-gradient-to-b from-zinc-800 to-black bg-clip-text text-transparent leading-none text-center">
                    SYNCFLO AI
                </h1>
            </div>

            {/* Bottom Bar */}
            <div className="container mx-auto px-6 relative z-10 w-full pt-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Left Side: Copyright */}
                    <div className="flex items-center space-x-4 mb-4 md:mb-0">

                        <p className="text-zinc-600 text-sm">
                            &copy; {new Date().getFullYear()} SyncFlo Inc. All rights reserved.
                        </p>
                    </div>

                    {/* Right Side: Socials */}
                    <div className="flex space-x-8">
                        <a href="#" className="text-zinc-600 hover:text-white text-sm transition-colors">Twitter</a>
                        <a href="#" className="text-zinc-600 hover:text-white text-sm transition-colors">Linkedin</a>
                        <a href="#" className="text-zinc-600 hover:text-white text-sm transition-colors">GitHub</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}