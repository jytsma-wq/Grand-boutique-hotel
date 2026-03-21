import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Boutique Hotel Custom Palette
        'hotel-primary': '#1e293b', // Deep elegant dark slate/navy
        'hotel-secondary': '#d4af37', // Luxurious gold/bronze accent
        'hotel-bg': '#f8f9fa', // Soft cream/off-white
        
        // Telegraph Palette - Exact Matches
        charcoal: {
          50: '#f4f4f4',
          100: '#e8e8e8',
          200: '#d1d1d1',
          300: '#adadad',
          400: '#818181',
          500: '#636363',
          600: '#4f4f4f',
          700: '#424242',
          800: '#383838',
          900: '#1a1a1a', // Deep Charcoal Background
          950: '#0d0d0d',
        },
        brass: {
          50: '#fbf9f2',
          100: '#f7f3e2',
          200: '#efe4c3',
          300: '#e4cf98',
          400: '#d4b563', // Bright Gold Accent
          500: '#baa363', // Muted Gold
          600: '#9c8246',
          700: '#7d663a',
          800: '#665332',
          900: '#54452d',
        },
        cream: {
          50: '#fdfcf8',
          100: '#faf9f3', // Main Light Text
          200: '#f5f3e7',
          300: '#ede9d6',
          400: '#e0dbbc',
          500: '#d0c9a5',
          600: '#bba886',
          700: '#96866b',
          800: '#7b6e5a',
          900: '#665b4b',
        },
        forest: {
          50: '#f6f7f5',
          100: '#ebede9',
          200: '#d4dbcf',
          300: '#b3c2ab',
          400: '#8ba382',
          500: '#6b8563',
          600: '#526b4b',
          700: '#42553d',
          800: '#364532',
          900: '#2f3b2b',
          950: '#1a2218',
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
        body: ['var(--font-lato)', 'sans-serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};
export default config;
