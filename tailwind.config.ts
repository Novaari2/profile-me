import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'surface': {
          light: '#ffffff',
          dark: '#1a1a1a',
        },
        'background': {
          light: '#f3f4f6',
          dark: '#111111',
        },
        'primary': {
          light: '#6366f1',
          dark: '#818cf8',
        },
        'secondary': {
          light: '#4f46e5',
          dark: '#6366f1',
        },
        'text-primary': {
          light: '#111827',
          dark: '#f9fafb',
        },
        'text-secondary': {
          light: '#4b5563',
          dark: '#9ca3af',
        },
        'accent-primary': {
          light: '#60a5fa',
          dark: '#3b82f6',
        },
        'accent-secondary': {
          light: '#34d399',
          dark: '#10b981',
        },
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'blob': 'blob 7s infinite',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        },
      },
      filter: {
        'blur-xl': 'blur(24px)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
} satisfies Config