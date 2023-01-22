/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  safelist: [
    {
      pattern:
        /bg-(gray|cyan|red|yellow|amber|green|blue|indigo|purple|pink|fuchsia|teal|lime|orange|rose|violet|sky)-(500)/,
      variants: ["hover"],
    },
    {
      pattern:
        /border-(gray|cyan|red|yellow|amber|green|blue|indigo|purple|pink|fuchsia|teal|lime|orange|rose|violet|sky)-(500)/,
    },
    {
      pattern:
        /text-(gray|cyan|red|yellow|amber|green|blue|indigo|purple|pink|fuchsia|teal|lime|orange|rose|violet|sky)-(500)/,
      variants: ["group-hover", "hover"],
    },
  ],
  theme: {
    fontFamily: {
      sans: ["Plus Jakarta Sans", "sans-serif"],
      code: ["JetBrains Mono", "monospace"],
      // sans: ["Inter Tight", "sans-serif"],
    },
    extend: {
      colors: {
        // black: "#050505",
        // brand: "#F4E022",
        // brand: "#FF2E63",
        brand: "#00FA9A",
      },
    },
  },
  plugins: [require("preline/plugin"), require("@tailwindcss/typography")],
};
