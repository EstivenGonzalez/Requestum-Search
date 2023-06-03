import React from 'react'
import { FlatList, ListRenderItem } from 'react-native'

import { Repository } from '@components/repository'

import { IRepositoriesListProps } from './repositories-list.types'
import { IRepository } from '@typings/global'

import { scrollContainerStyle } from './repositories-list.styles'

const keyExtractor = (repository: IRepository) => repository.id

const renderRepository: ListRenderItem<IRepository> = ({ item }) => {
  return <Repository name={item.name} language={item.language} description={item.description} />
}

export const RepositoriesList: React.FC<IRepositoriesListProps> = (props) => {
  const { repositories, onEndReached } = props
  return (
    <FlatList
      data={repositories}
      onEndReached={onEndReached}
      keyExtractor={keyExtractor}
      renderItem={renderRepository}
      decelerationRate='fast'
      scrollEventThrottle={16}
      onEndReachedThreshold={0.2}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={scrollContainerStyle}
    />
  )
}
