import React from 'react'
import { SafeAreaView } from 'react-native'

import { Header } from '@components/header'
import { HideKeyboardView } from '@components/hide-keyboard'

import { RepositoriesSearch } from '@modules/repositories-search'

import { StyledApp as Styled } from './app.styles'

export const App: React.FC = () => {
  return (
    <Styled.App>
      <HideKeyboardView>
        <SafeAreaView />
        <Header />
        <RepositoriesSearch />
      </HideKeyboardView>
    </Styled.App>
  )
}
