import { z } from 'zod'

import { axiosInstance } from '../api.service'
import { repositorySchema } from './repository.schema'

import { ISearchRepositoriesResponse } from './repository.types'
import { TRepository } from '@typings/global'

export const repositoryService = {
  searchByTerm: async (term: string): Promise<TRepository[]> => {
    const response = await axiosInstance.get<ISearchRepositoriesResponse>(
      `search/repositories?q=${term}`,
    )

    const repositories = z.array(repositorySchema).parse(response.data.items)

    return repositories
  },
}
