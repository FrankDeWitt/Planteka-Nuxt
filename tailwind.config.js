/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f6f7f4',
          100: '#e9ebe4',
          200: '#d3d8ca',
          300: '#b5bda7',
          400: '#838c68',
          500: '#6b7455',
          600: '#555c45',
          700: '#464a3a',
          800: '#3a3e32',
          900: '#33352c',
          950: '#1a1c15',
        },
        secondary: {
          50: '#fef6f3',
          100: '#fdeae4',
          200: '#fad1c3',
          300: '#f5b194',
          400: '#b34b23',
          500: '#a03d1c',
          600: '#8a3218',
          700: '#722916',
          800: '#5e2316',
          900: '#4f2017',
          950: '#2b0e08',
        },
        neutral: 'zinc',
        planteka: {
          50: '#f6f7f4',
          100: '#e9ebe4',
          200: '#d3d8ca',
          300: '#b5bda7',
          400: '#838c68',
          500: '#6b7455',
          600: '#555c45',
          700: '#464a3a',
          800: '#3a3e32',
          900: '#33352c',
          950: '#1a1c15',
        }
      }
    },
  },
}