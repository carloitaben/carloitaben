import { defineCollection, z } from "astro:content"
import { glob } from "astro/loaders"

const drafts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/drafts" }),
  schema: z.object({
    year: z.union([z.number(), z.literal("evergreen")]),
    title: z.string(),
  }),
})

export const collections = { drafts }
