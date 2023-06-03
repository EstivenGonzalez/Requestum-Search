import React, { useCallback, useEffect, useState } from 'react'

import { History } from '@components/history'
import { RepositoriesList } from '@components/repositories-list'
import { SearchBar } from '@components/search-bar'

import { useDebounce } from '@hooks/debounce'
import { useAppDispatch } from '@hooks/redux'

import { addToHistory } from '@store/history'

import { IRepository } from '@typings/global'

import { StyledRepositoriesSearch as Styled } from './repositories-search.styles'

export const RepositoriesSearch: React.FC = () => {
  const [term, setTerm] = useState('')
  const debouncedTerm = useDebounce(term)
  const [repositories, setRepositories] = useState<IRepository[]>([])
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(addToHistory(debouncedTerm))
    setRepositories([])
  }, [debouncedTerm])

  const loadMore = useCallback(async () => {}, [])

  return (
    <Styled.RepositoriesSearch>
      <SearchBar value={term} onChangeText={setTerm} placeholder='type here' />

      <History />

      <RepositoriesList repositories={repositories} onEndReached={loadMore} />
    </Styled.RepositoriesSearch>
  )
}
