import React from 'react'

import { ErrorText } from '@components/error-text'
import { History } from '@components/history'
import { RepositoriesList } from '@components/repositories-list'
import { SearchBar } from '@components/search-bar'
import { useRepositoriesSearch } from './repositories-search.state'

import { StyledRepositoriesSearch as Styled } from './repositories-search.styles'

export const RepositoriesSearch: React.FC = () => {
  const { refetch, setTerm, repositories, isLoading, isError, term } = useRepositoriesSearch()

  return (
    <Styled.RepositoriesSearch>
      <SearchBar
        value={term}
        onChangeText={setTerm}
        placeholder='Search repositories..'
        isLoading={isLoading}
      />

      <History />

      {isError ? (
        <ErrorText onRetry={refetch} />
      ) : (
        repositories && <RepositoriesList repositories={repositories} />
      )}
    </Styled.RepositoriesSearch>
  )
}
