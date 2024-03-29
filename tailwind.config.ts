import type { Config } from "tailwindcss";

const themeShape = {
  "--rounded-box": "1rem", // border radius rounded-box utility class, used in card and other large boxes
  "--rounded-btn": "9099999rem", // border radius rounded-btn utility class, used in buttons and similar element
  "--rounded-badge": "2rem", // border radius rounded-badge utility class, used in badges and similar
  "--animation-btn": "0.25s", // duration of animation when you click on button
  "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
  "--btn-focus-scale": "0.95", // scale transform of button when you focus on it
  "--border-btn": "1px", // border width of buttons
  "--tab-border": "1px", // border width of tabs
  "--tab-radius": "0.5rem", // border radius of tabs
};

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Comfortaa"],
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/container-queries")],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#59ae59",
          secondary: "#9dda9d",
          accent: "#6cd66c",
          neutral: "#080b08",
          "base-100": "#f7f9f7",
          ...themeShape,
          ".drop-shadow-primary": {
            filter: "drop-shadow(0 10px 8px #59ae59)",
          },
        },
      },
      {
        dark: {
          primary: "#aacdaa",
          secondary: "#4b6566",
          accent: "#78919c",
          neutral: "#f3f6f3",
          "base-100": "#070907",
          ...themeShape,
          ".drop-shadow-primary": {
            filter: "drop-shadow(0 10px 8px #aacdaa)",
          },
        },
      },
    ],
  },
};
export default config;
