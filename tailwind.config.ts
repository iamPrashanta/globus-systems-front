import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/app/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0a2447",
        muted: "#58718d",
        royal: "#086cd8",
        sky: "#eaf5ff",
        line: "#dceaf7"
      },
      maxWidth: { content: "1200px" },
      boxShadow: { soft: "0 22px 70px rgba(15,70,120,.08)" }
    }
  },
  plugins: []
};

export default config;
