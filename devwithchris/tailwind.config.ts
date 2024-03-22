import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'ck': '#00E682',
      'background': '#0d0208',
      'primary': '#1db968',
      'secondary': '#0a5c37',
      'accent': '#00381f',
    },
    fontSize: {
      sm: '0.750rem',
      base: '1rem',
      xl: '1.333rem',
      '2xl': '1.777rem',
      '3xl': '2.369rem',
      '4xl': '3.158rem',
      '5xl': '4.210rem',
    },
    fontFamily: {
      heading: 'Orbitron',
      body: 'Roboto',
    },
    fontWeight: {
      normal: '400',
      bold: '700',
    },
  },
  plugins: [],
};
export default config;
