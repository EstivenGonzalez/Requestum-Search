import { z } from 'zod'

export const repositorySchema = z.object({
  id: z.number(),
  name: z.string(),
  language: z.nullable(z.string()),
  description: z.nullable(z.string()),
  html_url: z.string(),
})
