// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Define a `type` and `schema` for each collection
const recipesCollection = defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      image: z.string(),
      alt: z.string(),
      description: z.string(),
      ingredients: z.array(z.object({
        name: z.string(),
        amount: z.array(z.string().or(z.number())),
        note: z.string().optional(),
      })),
      directions: z.array(z.array(z.string().or(z.number().array()))),
    })
});
// Export a single `collections` object to register your collection(s)
export const collections = {
  recipes: recipesCollection,
};
