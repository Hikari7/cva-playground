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
          light: '#fcc8c2',
          dark: '#a36e7b',
          action: '#d98076',
        },
        secondary: {
          DEFAULT: '#FBF6F4',
          light: '#FBF6F4',
          dark: '#246475',
          action: '#215e6e',
        },
        tertiary: {
          DEFAULT: '#DADADA',
          dark: '#bababa',
          action: '#aeaeae',
        },
        black: {
          DEFAULT: '#231815',
        },
      },
    },
  },
  plugins: [],
};
export default config;
