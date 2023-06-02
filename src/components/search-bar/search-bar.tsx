import React from 'react'

import { SearchBarProps } from './search-bar.types'

import { StyledSearchBar } from './search-bar.styles'

import { THEME } from '@theme/colors'

export const SearchBar: React.FC<SearchBarProps> = (props) => {
  const { value, placeholder, onChangeText } = props

  return (
    <StyledSearchBar
      value={value}
      placeholder={placeholder}
      onChangeText={onChangeText}
      placeholderTextColor={THEME.gray}
    />
  )
}
