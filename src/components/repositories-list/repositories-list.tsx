import React from 'react'
import { FlatList, ListRenderItem } from 'react-native'

import { Repository } from '@components/repository'
import { Topography } from '@components/topography'

import { IRepositoriesListProps } from './repositories-list.types'
import { TRepository } from '@typings/global'

import { scrollContainerStyle, StyledWrapper } from './repositories-list.styles'

const keyExtractor = (repository: TRepository) => repository.id.toString()

const renderRepository: ListRenderItem<TRepository> = ({ item }) => {
  return (
    <StyledWrapper>
      <Repository {...item} />
    </StyledWrapper>
  )
}

export const RepositoriesList: React.FC<IRepositoriesListProps> = React.memo(({ repositories }) => {
  if (!repositories.length) {
    return (
      <Topography color='white' isCentered>
        Nothing found
      </Topography>
    )
  }

  return (
    <FlatList
      data={repositories}
      keyExtractor={keyExtractor}
      renderItem={renderRepository}
      decelerationRate='fast'
      scrollEventThrottle={16}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={scrollContainerStyle}
    />
  )
})
