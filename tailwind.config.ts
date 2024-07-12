import type { Config } from "tailwindcss"

export default {
  content: ["./src/**/*.{ts,tsx,astro}"],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config
