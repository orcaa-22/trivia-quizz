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
      },
    },
  },
  plugins: [
    // require('@tailwindcss/filters'),
    function ({ addComponents }) {
      addComponents({
        '.btn': {
          borderRadius: '0.5rem', // 8px
          border: '1px solid transparent',
          padding: '0.6em 1.2em',
          fontSize: '1rem', // 1em
          fontWeight: '500',
          fontFamily: 'inherit',
          backgroundColor: '#1a1a1a',
          cursor: 'pointer',
          transition: 'border-color 0.25s',
        },
        '.btn:hover': {
          borderColor: '#646cff',
        },
        '.btn:focus, .btn:focus-visible': {
          outline: '4px auto -webkit-focus-ring-color',
        },
      });
    },
  ],
}

