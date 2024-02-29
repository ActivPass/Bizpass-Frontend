import daisyui from "daisyui"

const darkModeConfig = {
  darkMode: "class",
  theme: {
    extend: {
      backgroundColor: {
        dark: "#333",
      },
      textColor: {
        dark: "#fff",
      },
      fontFamily: {
        custom: ["Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light"],
  },
  ...darkModeConfig, // Merge the dark mode configuration
}
