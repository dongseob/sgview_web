import typographyPlugin from '@tailwindcss/typography';

const config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        colorchip: 'var(--colorchip)',
      },
      screens: {
        768: '768px',
      },
    },
  },
  darkMode: 'class',
  plugins: [typographyPlugin],
};

export default config;
