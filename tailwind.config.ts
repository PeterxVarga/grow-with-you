import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // Kártya színek
                "card-yellow": "#feebba",
                "card-blue": "#e2eff0",
                "card-pink": "#ffd3dd",

                // Márka színek
                "brand-coral": "#EAB8B5",
                "brand-coral-dark": "#dea09d",

                // Szöveg színek
                "text-main": "#1a1917",
                "text-muted": "#3a353e",
                "text-quote": "rgba(26, 25, 23, 0.9)",
                "text-quote-mark": "rgba(26, 25, 23, 0.75)",
                "text-desc": "rgba(26, 25, 23, 0.7)",
                "text-banner": "rgba(26, 25, 23, 0.8)",

                // Háttér színek
                "bg-cream": "#faf9f7",
                "bg-beige": "#f6f3f0",
                "bg-footer": "#F8ECEB", // A kért púderrózsaszín/bézs árnyalat

                // Borderek
                "border-default": "rgba(26, 25, 23, 0.16)",
                "border-badge": "rgba(222, 160, 157, 0.2)",
            },
            fontFamily: {
                "parkinsans": ["var(--font-parkinsans)", "sans-serif"],
                "source-sans": ["var(--font-source-sans)", "sans-serif"],
                "caveat": ["var(--font-caveat)", "cursive"],
            },
            borderRadius: {
                "24": "24px",
            },
            maxWidth: {
                "design-container": "1200px",
                "design-header": "846px",
            },
        },
    },
    plugins: [],
};

export default config;