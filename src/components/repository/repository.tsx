import React from 'react'
import { Linking } from 'react-native'

import { Topography } from '@components/topography'

import { TRepository } from '@typings/global'

import { StyledRepository as Styled } from './repository.styles'

const WEIGHT = 600

export const Repository: React.FC<TRepository> = (props) => {
  const { description, name, language, html_url } = props

  const openRepository = async () => {
    const isValidLink = Linking.canOpenURL(html_url)

    if (!isValidLink) {
      return console.error('Invlaid link format')
    }

    try {
      await Linking.openURL(html_url)
    } catch (error) {
      console.error('Failed to open page', error)
    }
  }

  return (
    <Styled.Repository onPress={openRepository}>
      <Topography weight={WEIGHT} fontSize={19}>
        {name}
      </Topography>
      {language && (
        <Styled.Language>
          Language: <Topography weight={WEIGHT}>{language}</Topography>
        </Styled.Language>
      )}
      {description && (
        <Styled.Description>
          Description: <Topography weight={WEIGHT}>{description}</Topography>
        </Styled.Description>
      )}
    </Styled.Repository>
  )
}
