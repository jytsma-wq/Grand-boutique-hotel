import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
    darkMode: "class",
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			forest: {
  				'50': 'var(--forest-50)',
  				'100': 'var(--forest-100)',
  				'200': 'var(--forest-200)',
  				'300': 'var(--forest-300)',
  				'400': 'var(--forest-400)',
  				'500': 'var(--forest-500)',
  				'600': 'var(--forest-600)',
  				'700': 'var(--forest-700)',
  				'800': 'var(--forest-800)',
  				'900': 'var(--forest-900)',
  				'950': 'var(--forest-950)',
  			},
  			brass: {
  				'50': 'var(--brass-50)',
  				'100': 'var(--brass-100)',
  				'200': 'var(--brass-200)',
  				'300': 'var(--brass-300)',
  				'400': 'var(--brass-400)',
  				'500': 'var(--brass-500)',
  				'600': 'var(--brass-600)',
  				'700': 'var(--brass-700)',
  				'800': 'var(--brass-800)',
  				'900': 'var(--brass-900)',
  			},
  			cream: {
  				'50': 'var(--cream-50)',
  				'100': 'var(--cream-100)',
  				'200': 'var(--cream-200)',
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [tailwindcssAnimate],
};
export default config;
