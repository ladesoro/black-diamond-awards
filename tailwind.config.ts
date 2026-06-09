import type { Config } from "tailwindcss";
const config: Config = { content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"], theme: { extend: { colors: { diamond: { black: "#090807", charcoal: "#151515", graphite: "#232323", coral: "#ff3f5f", blush: "#ff6b83", bone: "#f6f1eb" } }, boxShadow: { glow: "0 0 60px rgba(255,63,95,.25)" }, fontFamily: { display: ["Arial Black", "Impact", "system-ui", "sans-serif"], sans: ["Inter", "Arial", "sans-serif"] } } }, plugins: [] };
export default config;
