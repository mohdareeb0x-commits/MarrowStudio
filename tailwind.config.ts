import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bone: {
          DEFAULT: '#F4F1EA',
          light: '#FAF8F5',
          dark: '#ECE7DF',
          muted: '#E5E0D5',
        },
        charcoal: {
          DEFAULT: '#181716',
          soft: '#262422',
          muted: '#3D3A37',
        },
        sand: {
          DEFAULT: '#E5E0D5',
          dark: '#D0C9BB',
          text: '#78756D',
        },
        vermilion: {
          DEFAULT: '#C84B31',
          hover: '#B33E25',
          light: '#F8ECE9',
        },
      },
      fontFamily: {
        serif: ['var(--font-instrument-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      lineHeight: {
        tightest: '0.92',
      },
      letterSpacing: {
        tightest: '-0.04em',
        widest: '0.18em',
      },
    },
  },
  plugins: [],
};

export default config;
