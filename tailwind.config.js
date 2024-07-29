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
        border: {
          'black': '#000',
          'orange': '#ff5733',
        },
      },
      keyframes: {
        'border-radius': {
          '0%, 100%': { borderRadius: '10% 5%' },
          '10%': { borderRadius: '30% 70% 50% 50% / 30% 30% 70% 70%' },
          '20%': { borderRadius: '50% 50% 70% 30% / 50% 50% 30% 70%' },
          '30%': { borderRadius: '30% 50% 50% 30% / 50% 30% 30% 50%' },
          '40%': { borderRadius: '50% 30% 30% 50% / 30% 50% 50% 30%' },
          '50%': { borderRadius: '50% 50% 30% 30% / 50% 50% 30% 70%' },
          '60%': { borderRadius: '30% 30% 50% 50% / 50% 70% 70% 30%' },
          '70%': { borderRadius: '50% 70% 30% 50% / 30% 50% 50% 70%' },
          '80%': { borderRadius: '70% 50% 30% 30% / 70% 50% 30% 50%' },
          '90%': { borderRadius: '30% 50% 70% 30% / 50% 30% 50% 70%' },
        }
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'border-radius': 'border-radius 10s infinite linear',
      },
      padding: {
        'customPadding': 'px-2 py-2'
      }
    },
  },
  plugins: [],
}