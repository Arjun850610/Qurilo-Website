export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:{
          500:'#558BDC'
        },
        secondary:'#fff',
        blue:{
          800:'#0D184B'
        },
        lightblue: '#D6DFF9',
        lightpurple: '#E1DCF3',
        lightyellow: '#F9EBDD',
        darkgray: {
          500: '#1E2222'
        },
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
    },
  },
  plugins: [],
}