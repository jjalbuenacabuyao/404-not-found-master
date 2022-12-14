/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        'gray-1': '#333333',
        'lighter-gray': '#4f4f4f',
      },
      width: {
        'large': '33.6875rem',
      },
    },
    fontFamily: {
      'body': ['Space Mono', 'monospace'],
      'head': ['Inconsolata', 'monospace'],
    }
  },
  plugins: [],
}
