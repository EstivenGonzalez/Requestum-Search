import React from 'react'
import { SafeAreaView } from 'react-native'

import { Header } from '@components/header'

import { RepositoriesSearch } from '@modules/repositories-search'

import { StyledApp as Styled } from './app.styles'

export const App: React.FC = () => {
  return (
    <Styled.App>
      <SafeAreaView />
      <Header />
      <RepositoriesSearch />
    </Styled.App>
  )
}
