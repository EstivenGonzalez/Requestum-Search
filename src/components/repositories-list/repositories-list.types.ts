import { IRepository } from '@typings/global'

export interface IRepositoriesListProps {
  repositories: IRepository[]
  onEndReached: () => Promise<void>
}
