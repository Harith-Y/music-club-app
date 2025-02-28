import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'media',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        poppins: ['var(--font-poppins)'],
      },
      colors: {
        primary: {
          DEFAULT: 'rgb(111, 29, 176)',
          50: '#f5f0ff',
          100: '#ede0ff',
          200: '#dec5ff',
          300: '#c89aff',
          400: '#b05fff',
          500: '#9333ea',
          600: '#7e22ce',
          700: '#6f1db0',
          800: '#581c87',
          900: '#4c1d6e',
        },
        secondary: {
          DEFAULT: 'rgb(255, 89, 94)',
          50: '#fff1f1',
          100: '#ffe1e2',
          200: '#ffc7c9',
          300: '#ff9da0',
          400: '#ff5964',
          500: '#ff3a43',
          600: '#ed1c24',
          700: '#c8121a',
          800: '#a41319',
          900: '#88161b',
        },
        accent: {
          DEFAULT: 'rgb(255, 202, 58)',
          50: '#fffbeb',
          100: '#fff4c6',
          200: '#ffea89',
          300: '#ffda4d',
          400: '#ffca3a',
          500: '#ffb81c',
          600: '#e69500',
          700: '#bf7200',
          800: '#9c5700',
          900: '#7a4100',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;