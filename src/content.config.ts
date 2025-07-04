import { defineCollection, z } from "astro:content"
import { glob } from "astro/loaders"

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/blog" }),
  schema: z.object({
    slug: z.string(),
    year: z.union([z.number(), z.literal("evergreen")]),
    title: z.string(),
  }),
})

export const collections = { blog }
