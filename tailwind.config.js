/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx,mdx}",
    "./src/components/**/*.{js,jsx,ts,tsx,mdx}",
    "./src/data/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#050816",
        panel: "rgba(11, 18, 40, 0.72)",
        line: "rgba(255, 255, 255, 0.12)",
        rose: "#ff5a8a",
        blue: "#5d8bff",
        cyan: "#5eead4",
        sand: "#f8f4ec"
      },
      boxShadow: {
        glow: "0 18px 60px rgba(17, 24, 39, 0.4)",
        card: "0 14px 40px rgba(8, 15, 35, 0.24)"
      },
      backgroundImage: {
        "hero-radial": "radial-gradient(circle at top, rgba(93, 139, 255, 0.24), transparent 34%), radial-gradient(circle at 20% 20%, rgba(255, 90, 138, 0.16), transparent 26%)",
        "brand-gradient": "linear-gradient(135deg, #ff5a8a 0%, #5d8bff 55%, #5eead4 100%)"
      }
    }
  },
  plugins: []
};
