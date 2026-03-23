import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Palette
        'remigo-red': '#DB3B3B',
        'brand-black': '#0C0C0C',
        'brand-white': '#F8F8F8',
        // Secondary Palette
        'sky-blue': '#8ECAFE',
        'amber': '#FDB932',
        'burgundy': '#392326',
      },
      fontFamily: {
        'trocchi': ['Trocchi', 'serif'],
        'hanken': ['Hanken Grotesk', 'sans-serif'],
        'jetbrains': ['JetBrains Mono', 'monospace'],
        'roboto': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
