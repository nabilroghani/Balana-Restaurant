/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          cream: '#FFF8F0',          // Primary light background
          'cream-light': '#FAF3E0',    // Secondary section light background
          terracotta: '#A72626',     // Rich deep red primary accent
          red: '#C0392B',            // Radiant Pakistani red
          mahogany: '#3A1F1A',       // Dark wood headings & deep text
          'mahogany-dark': '#2D1814',// Heavy dark wood accent
          amber: '#E67E22',          // Warm amber accent
          gold: '#D4AC0D',           // Warm gold accent
          card: '#FFFFFF',           // Crisp clean card background
          border: '#E8D5C4',         // Warm subtle border
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'warm-glow': '0 10px 30px -5px rgba(167, 38, 38, 0.25)',
        'amber-glow': '0 10px 30px -5px rgba(230, 126, 34, 0.25)',
        'card-warm': '0 10px 25px -5px rgba(58, 31, 26, 0.08)',
      },
      backgroundImage: {
        'warm-hero': 'linear-gradient(135deg, rgba(58, 31, 26, 0.75), rgba(167, 38, 38, 0.85))',
      }
    },
  },
  plugins: [],
}
