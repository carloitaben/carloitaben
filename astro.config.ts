import { defineConfig } from "astro/config"
import aws from "astro-sst"
import tailwindcss from "tailwindcss"
import autoprefixer from "autoprefixer"

// https://astro.build/config
export default defineConfig({
  adapter: aws({
    deploymentStrategy: "static",
  }),
  vite: {
    css: {
      postcss: {
        plugins: [tailwindcss, autoprefixer],
      },
    },
  },
})
