import { z } from 'zod'

import { repositorySchema } from '@services/repository'

export type TRepository = z.infer<typeof repositorySchema>
