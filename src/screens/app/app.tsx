import React, { useState } from 'react'
import { StatusBar } from 'react-native'

import { Repository } from '@components/repository'
import { SearchBar } from '@components/search-bar'
import { Topography } from '@components/topography'

import { useDebounce } from '@hooks/debounce'

import { StyledApp as Styled } from './app.styles'

export const App: React.FC = () => {
  const [term, setTerm] = useState('')
  const debouncedTerm = useDebounce(term)

  return (
    <Styled.App>
      <StatusBar barStyle={'light-content'} />
      <SearchBar value={term} onChangeText={setTerm} placeholder='type here' />
      <Repository name='accordion' language='JS' description='test' />
      <Topography>{debouncedTerm}</Topography>
    </Styled.App>
  )
}
