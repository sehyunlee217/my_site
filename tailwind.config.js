/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#106B6B",
        primary_dark: "#1C2B2B",
        background: "#e4f1ee",
        font_dark: "#e2e8f0"
      },
      fontFamily: {
        "noteworthy": ["Noteworthy", "serif"],
        "main": ["Noto Sans KR", "serif"],
        "roboto": ["Roboto Condensed", "serif"],
        "kr_reg": ["Noto Serif KR", "serif"],
      },
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    plugins: [],
  }
};