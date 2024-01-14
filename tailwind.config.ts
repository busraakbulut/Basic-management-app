import type { Config } from 'tailwindcss';

const config: Config = {
 content: [
  './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  './src/container/**/*.{js,ts,jsx,tsx,mdx}',
 ],
 theme: {
  extend: {
   fontFamily: {
    sans:
     '"SF Pro Display",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu, Cantarell,"Open Sans","Helvetica Neue",sans-serif',
   },

   colors: {
    'off-white': '#f7f8f8',
    'transparent-white': 'rgba(255, 255, 255, 0.08)',
    background: '#000212',
    grey: '#858699',
    'grey-dark': '#222326',
   },
   spacing: {
    'navigation-height': 'var(--navigation-height)',
    'footer-height': 'var(--footer-height)',
   },
   backgroundImage: {
    gradient:
     'linear-gradient(92.88deg, rgb(69, 94, 181) 9.16%, rgb(86, 67, 204) 43.89%, rgb(103, 63, 215) 64.72%)',
   },
  },
 },
 plugins: [],
};
export default config;
