import React from 'react'
import { View } from 'react-native'

import { ISearchBarProps } from './search-bar.types'

import { StyledSearchBar as Styled } from './search-bar.styles'

import { THEME } from '@theme/colors'

export const SearchBar: React.FC<ISearchBarProps> = (props) => {
  const { value, placeholder, onChangeText, isLoading } = props

  return (
    <View>
      <Styled.SearchBar
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        placeholderTextColor={THEME.gray}
      />
      {isLoading && <Styled.Loader size='small' color={THEME.background} />}
    </View>
  )
}
