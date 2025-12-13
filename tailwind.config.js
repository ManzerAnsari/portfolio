/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Exo 2', 'sans-serif'],
        display: ['Exo 2', 'sans-serif'],
        exo: ['Exo 2', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f0f4ff',
          100: '#e0e9ff',
          200: '#c7d5ff',
          300: '#a5b8ff',
          400: '#8b94ff',
          500: '#7c7aff',
          600: '#6d5df7',
          700: '#5a47e8',
          800: '#4a3bd4',
          900: '#3f35b3',
        },
        dark: {
          bg: '#0a0e1a', // Soft dark blue-gray
          surface: '#111827', // Softer dark surface
          card: '#1a1f2e', // Soft card background
          border: 'rgba(255, 255, 255, 0.08)', // Softer borders
        },
        accent: {
          purple: '#a78bfa', // Soft lavender purple
          cyan: '#67e8f9',   // Soft sky cyan
          pink: '#f0abfc',   // Soft pink
          blue: '#93c5fd',   // Soft blue
          mint: '#6ee7b7',   // Soft mint green
          amber: '#fbbf24',  // Soft amber
          primary: '#f8fafc', // Soft white text
          secondary: '#cbd5e1', // Soft gray text
          muted: '#94a3b8', // Muted text
        }
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
};