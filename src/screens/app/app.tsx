import React from 'react'

import { Topography } from '@components/topography'

import { StyledApp as Styled } from './app.styles'

export const App: React.FC = () => {
  return (
    <Styled.App>
      <Topography>App</Topography>
    </Styled.App>
  )
}
