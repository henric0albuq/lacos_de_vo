/** @type {import('tailwindcss').Config} */
module.exports = {
  blocklist: ["overline"],
  darkMode: ["class"],
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Fraunces"', 'Georgia', 'serif'],
        sans: ['Outfit', 'sans-serif'],
        script: ['Parisienne', 'cursive'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        cream: '#FBF6F1',
        creamdeep: '#F5ECE4',
        blush: '#F9E9ED',
        petal: '#F3D7DE',
        rose: '#E0AFBA',
        rosedark: '#C98795',
        roseink: '#A96473',
        lilac: '#D9CCEA',
        lavender: '#EFE9F7',
        gold: '#C6A15B',
        goldsoft: '#E7D3A6',
        ink: '#4A3B39',
        inksoft: '#8A7A74',
      },
      boxShadow: {
        soft: '0 20px 50px -20px rgba(201,135,149,0.28)',
        softer: '0 10px 30px -12px rgba(201,135,149,0.18)',
        lift: '0 30px 60px -25px rgba(169,100,115,0.38)',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        floaty: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        sparkle: {
          '0%, 100%': { opacity: '0.35', transform: 'scale(0.75) rotate(0deg)' },
          '50%': { opacity: '1', transform: 'scale(1.1) rotate(15deg)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(1)', opacity: '0.5' },
          '100%': { transform: 'scale(1.6)', opacity: '0' },
        },
      },
      animation: {
        marquee: 'marquee 46s linear infinite',
        floaty: 'floaty 6s ease-in-out infinite',
        sparkle: 'sparkle 3.2s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 2.4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
