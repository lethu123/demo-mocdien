import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      screens: {
        xl: '1200px',
        '2xl': '1200px',
      },
      padding: '4rem'
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontFamily: {
      DM: ['DM Serif Display', 'Helvetica', 'Arial', 'sans-serif'],
      DS: ['Dancing Script', 'Helvetica', 'Arial', 'sans-serif'],

    }
  },
  plugins: [],
};
export default config;
