import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    lang: z.enum(['es', 'en', 'de']),
    slug: z.string().optional(),
  }),
});

export const collections = { blog };
