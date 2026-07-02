import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0A0A0A',
        surface: '#141414',
        'surface-2': '#1E1E1E',
        accent: '#FFFFFF',
        'accent-light': '#D9D9D9',
        muted: '#808080',
        border: '#2A2A2A',
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        logo: ['var(--font-afronaut)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
