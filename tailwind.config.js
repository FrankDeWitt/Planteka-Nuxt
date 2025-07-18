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
        secondary: {
          50: '#f4f7f5',
          100: '#e6ede8',
          200: '#cddbd2',
          300: '#a8bfb1',
          400: '#365d4a',
          500: '#2c4d3c',
          600: '#243e30',
          700: '#1f3228',
          800: '#1a2921',
          900: '#17241e',
          950: '#0c130f',
        },
        desert: {
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
        stromboli: {
          50: '#f4f7f5',
          100: '#e6ede8',
          200: '#cddbd2',
          300: '#a8bfb1',
          400: '#365d4a',
          500: '#2c4d3c',
          600: '#243e30',
          700: '#1f3228',
          800: '#1a2921',
          900: '#17241e',
          950: '#0c130f',
        },
        dawnpink: {
          50: '#fdfcfb',
          100: '#fbf8f5',
          200: '#f7f0ea',
          300: '#f2e4d8',
          400: '#f0e6dc',
          500: '#e8d4c2',
          600: '#d9bfa2',
          700: '#c4a07d',
          800: '#a6835f',
          900: '#8a6b4a',
          950: '#473528',
        },
        saddle: {
          50: '#faf7f4',
          100: '#f3ebe3',
          200: '#e6d4c3',
          300: '#d4b798',
          400: '#b89565',
          500: '#a47f4e',
          600: '#8b6a42',
          700: '#725438',
          800: '#5f4530',
          900: '#503021',
          950: '#2c1a12',
        },
        avocado: {
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
        beaver: {
          50: '#faf8f7',
          100: '#f3efec',
          200: '#e6ddd6',
          300: '#d4c4b8',
          400: '#a58373',
          500: '#946d5d',
          600: '#7f5a4a',
          700: '#6a4a3e',
          800: '#583e35',
          900: '#4a352f',
          950: '#271c18',
        },
      }
    },
  },
}