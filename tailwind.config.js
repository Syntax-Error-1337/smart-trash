 /** @type {import('tailwindcss').Config} */
 export default {
  content: ["./src/**/*.{html,js}"],
   theme: {
    extend: {
      colors: {
        primary: '#00E0FF',
        secondary: '#0072FF',
        dark: '#0F172A',
        light: '#F8FAFC',
        ai: {
          purple: '#A855F7',
          pink: '#EC4899',
          blue: '#3B82F6',
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
 }