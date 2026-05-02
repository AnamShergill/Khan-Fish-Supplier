import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-navy': '#003366',
        'navy-blue': '#1a2332',
        'gold': '#D4AF37',
        'light-gold': '#F4E4C1',
        'sea-blue': '#00A8E8',
        'ice-white': '#FFFFFF',
      },
      fontFamily: {
        'montserrat': ['var(--font-montserrat)', 'sans-serif'],
        'open-sans': ['var(--font-open-sans)', 'sans-serif'],
        'playfair': ['var(--font-playfair)', 'serif'],
      },
    },
  },
  plugins: [],
};

export default config;
