/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
      extend: {
        backgroundImage:{
          'logo': "url('/images/logo.png')",
          'carousel': "url('/images/carouselBg.png')",
          //feedbackCards
          'feedback-1': "url('/images/feedbackClinic1.png')",
        },
        colors:{
          'primary-100': '#6C5CA4',
          'primary-200': '#9C89D6',
          'primary-300': '#FFECFF',
          'acent-100': '#F7786B',
          'acent-200': '#891319',
          'white-100': '#FFFFFF',
          'white-200': '#F5F5F5',
          'white-300': '#CCCCCC',
          'black-100': '#636183',
          'black-200': '#918EB3',
        },
    },
  },
  plugins: [],
}
