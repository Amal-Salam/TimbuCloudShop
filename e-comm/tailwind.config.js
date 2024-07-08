
/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './public/index.html',
    './app/**/*.jsx',
    './src/components/**/*.jsx',
    './src/pages/**/*.jsx',
  ],
  theme: {
    
    fontFamily: {
      lato:"var(--font-lato)",
    },
    extend: {
      
      colors:{
        primary_text_color:"var(--primary-text-color)",
        secondary_text_color:"var(--secondary-text-color)",
      },
      backgroundColor: {
        background_hero:"var(--background-hero)",
        background_btn:"var(--background-btn)",
      },
    },
  },

  plugins: [],
};
