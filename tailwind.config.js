/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#0A0F1E',
          900: '#0D1426',
          800: '#111A30',
          700: '#16213B',
          600: '#1C2A47',
        },
        cyan: {
          DEFAULT: '#00D4FF',
          soft: 'rgba(0,212,255,0.12)',
        },
        mint: {
          DEFAULT: '#00FFB3',
          soft: 'rgba(0,255,179,0.12)',
        },
        bronze: '#B8794C',
        silver: '#B9C2CC',
        gold: '#E8B84B',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      backgroundImage: {
        'grid-fade':
          'linear-gradient(180deg, rgba(0,212,255,0.06) 0%, rgba(10,15,30,0) 60%)',
      },
      boxShadow: {
        glow: '0 0 40px -8px rgba(0,212,255,0.35)',
        'glow-mint': '0 0 40px -8px rgba(0,255,179,0.35)',
      },
      animation: {
        flow: 'flow 3.2s linear infinite',
        'pulse-slow': 'pulse-slow 3s ease-in-out infinite',
        rise: 'rise 0.7s cubic-bezier(0.16,1,0.3,1) both',
      },
      keyframes: {
        flow: {
          '0%': { strokeDashoffset: '24' },
          '100%': { strokeDashoffset: '0' },
        },
        'pulse-slow': {
          '0%,100%': { opacity: 0.5 },
          '50%': { opacity: 1 },
        },
        rise: {
          '0%': { opacity: 0, transform: 'translateY(18px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
