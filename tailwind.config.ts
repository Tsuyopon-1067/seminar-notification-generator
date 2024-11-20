import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        green: {
          50: '#001053',
          100: '#022B66',
          200: '#044C78',
          300: '#07748A',
          400: '#0a9b94',
          500: '#29AA8C',
          600: '#48B98A',
          700: '#68C78D',
          800: '#88D598',
          900: '#AAE2AB',
          DEFAULT: '#0a9b94',
        },
      },
    },
  },
  plugins: [],
};
export default config;
