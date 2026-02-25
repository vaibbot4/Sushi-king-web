/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    // ✅ FLUID container: full width + auto (clamped) side padding
    container: {
      center: true,
      // padding grows smoothly with viewport, never too small/big
      padding: {
        DEFAULT: "clamp(1rem, 4vw, 4rem)",   // ~16px → ~64px
      },
      // make container width fluid (no fixed max-width steps)
      screens: {
        sm: "100%",
        md: "100%",
        lg: "100%",
        xl: "100%",
        "2xl": "100%",
      },
    },
    extend: {
      colors: {
        'navy': '#002147',
        'navy-light': '#003366',
        'wave-blue': '#E6F3FF',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

