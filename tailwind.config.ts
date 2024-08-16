import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-bg-gradient':
          "url('https://static.vecteezy.com/system/resources/thumbnails/002/961/909/small/light-pink-blue-gradient-blur-background-vector.jpg')",
        'smart-banner-bg-gradient':
          "url('https://img.freepik.com/free-vector/blue-pink-halftone-background_53876-99004.jpg')",
      },
    },
    container: {
      center: true,
      screens: {
        sm: '600px',
        md: '728px',
        lg: '1172px',
      },
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
      },
    },
  },
  plugins: [],
};
export default config;
