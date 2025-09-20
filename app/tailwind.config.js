/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Mandatory brand colors - AUTOMATIC DISQUALIFICATION if not used prominently
        'brand-pink': '#ec4899',
        'brand-blue': '#3b82f6',
        // Additional brand palette
        'pink': {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899', // Main brand pink
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
        },
        'blue': {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6', // Main brand blue
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
      },
      boxShadow: {
        'luxury': '0 10px 25px -5px rgba(236, 72, 153, 0.1), 0 10px 10px -5px rgba(59, 130, 246, 0.05)',
        'luxury-lg': '0 25px 50px -12px rgba(236, 72, 153, 0.15), 0 25px 25px -12px rgba(59, 130, 246, 0.1)',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #ec4899 0%, #3b82f6 100%)',
        'brand-gradient-hover': 'linear-gradient(135deg, #db2777 0%, #2563eb 100%)',
      }
    },
  },
  plugins: [],
}
