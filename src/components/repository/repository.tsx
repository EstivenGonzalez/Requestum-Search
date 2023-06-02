import React from 'react'

import { Topography } from '@components/topography'

import { RepositoryProps } from './repository.types'

import { StyledRepository as Styled } from './repository.styles'

const WEIGHT = 600

export const Repository: React.FC<RepositoryProps> = (props) => {
  const { description, name, language } = props

  return (
    <Styled.Repository>
      <Styled.Name weight={WEIGHT} fontSize={19}>
        {name}
      </Styled.Name>
      <Styled.Language>
        Language: <Topography weight={WEIGHT}>{language}</Topography>
      </Styled.Language>
      <Topography>
        Description: <Topography weight={WEIGHT}>{description}</Topography>
      </Topography>
    </Styled.Repository>
  )
}
