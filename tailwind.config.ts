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
        primary: {
          DEFAULT: '#DCA0A2',
          action: '#d98076',
        },
        secondary: {
          DEFAULT: '#FBF6F4',
          action: '#DDCEC0',
        },
        black: {
          DEFAULT: '#3E3E3E',
        },
      },
    },
  },
  plugins: [],
};
export default config;
