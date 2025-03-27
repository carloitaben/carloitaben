import type { Config } from "tailwindcss"

export default {
  content: ["./src/**/*.{ts,tsx,astro}"],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    fontFamily: {
      mono: "IBM Plex Mono"
    },
    extend: {
      spacing: {
        "lh": "1.25rem",
        "2lh": "2.5rem", 
        "4lh": "5rem", 
      }
    }
  },
} satisfies Config
