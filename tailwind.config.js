/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                // Background colors - Cosmic Void
                primary: '#02040F', // Deep Dark Navy
                secondary: '#0a0b1e', // Slightly lighter void
                tertiary: '#15162e', // Card background

                // Cosmic Neon Accents
                'neon-cyan': '#00E5FF', // Electric Cyan
                'neon-blue': '#2979FF', // Vivid Blue
                'neon-purple': '#651FFF', // Neon Violet

                // Product Specific Colors
                'green-accent': '#00FF87',
                'blue-accent': '#00A3FF',
                'sales-orange': '#FF8C00',
                'sales-red': '#FF4500',
                'suite-purple': '#A855F7',
                'suite-pink': '#EC4899',

                // Legacy mapping for compatibility
                coral: '#00E5FF',
                amber: '#2979FF',
                rose: '#651FFF',
                orange: '#2979FF',
                peach: '#651FFF',

                // Glass effects
                glass: 'rgba(255, 255, 255, 0.03)',
                'glass-hover': 'rgba(0, 229, 255, 0.05)',
                'glass-strong': 'rgba(2, 4, 15, 0.8)',

                // Text colors
                'text-primary': '#FFFFFF',
                'text-secondary': '#B0B5C8',
                'text-muted': '#6B7280',
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'Inter', 'sans-serif'],
                display: ['var(--font-space-grotesk)', 'Space Grotesk', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'gradient-cosmic': 'linear-gradient(135deg, #00E5FF 0%, #2979FF 50%, #651FFF 100%)',
                'gradient-cosmic-intense': 'linear-gradient(135deg, #00E5FF 0%, #651FFF 100%)',
                // Legacy mapping
                'gradient-warm': 'linear-gradient(135deg, #00E5FF 0%, #2979FF 50%, #651FFF 100%)',
                'gradient-warm-intense': 'linear-gradient(135deg, #00E5FF 0%, #651FFF 100%)',
            },
            boxShadow: {
                'glow-cyan': '0 0 30px rgba(0, 229, 255, 0.4)',
                'glow-blue': '0 0 30px rgba(41, 121, 255, 0.4)',
                'glow-purple': '0 0 30px rgba(101, 31, 255, 0.4)',
                'glow-cosmic': '0 0 40px rgba(41, 121, 255, 0.5)',
                'glow-cosmic-lg': '0 0 60px rgba(41, 121, 255, 0.6)',
                'card': '0 8px 32px rgba(0, 0, 0, 0.5)',
                'card-hover': '0 16px 48px rgba(0, 229, 255, 0.15)',
                // Legacy mapping
                'glow-warm': '0 0 40px rgba(41, 121, 255, 0.5)',
                'glow-coral': '0 0 30px rgba(0, 229, 255, 0.4)',
                'glow-amber': '0 0 30px rgba(41, 121, 255, 0.4)',
            },
            animation: {
                'spin-slow': 'spin 10s linear infinite',
                'spin-slower': 'spin 20s linear infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'float': 'float 6s ease-in-out infinite',
                'shimmer': 'shimmer 3s linear infinite',
                'glow': 'glow 2s ease-in-out infinite alternate',
                'slide-up': 'slideUp 0.5s ease-out',
                'fade-in-up': 'fadeInUp 0.6s ease-out',
                'scale-in': 'scaleIn 0.3s ease-out',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-200% 0' },
                    '100%': { backgroundPosition: '200% 0' },
                },
                glow: {
                    '0%': { boxShadow: '0 0 20px rgba(0, 229, 255, 0.3)' },
                    '100%': { boxShadow: '0 0 40px rgba(101, 31, 255, 0.6)' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                fadeInUp: {
                    '0%': { transform: 'translateY(30px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                scaleIn: {
                    '0%': { transform: 'scale(0.9)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                },
            },
        },
    },
    plugins: [],
}