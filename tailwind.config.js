/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      extend: {
        backgroundBlur: {
          'lg': '20px'
        }
      }
    },
  },
  plugins: [
    // require('@tailwindcss/filters'),
  ],
}

