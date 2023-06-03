import React from 'react'

import { Icon } from '@components/icon'
import { Topography } from '@components/topography'

import { StyledHeader as Styled } from './header.styles'

export const Header: React.FC = () => {
  return (
    <Styled.Header>
      <Styled.Wrapper>
        <Icon type='logo' />
        <Styled.CompanyName>
          <Topography family='PancettaSerifPro-SemiBold' fontSize={40} color='primary'>
            requestum
          </Topography>
          <Topography family='PancettaSerifPro-Regular' fontSize={16} color='primary'>
            web development company
          </Topography>
        </Styled.CompanyName>
      </Styled.Wrapper>
      <Topography color='primary' weight={500}>
        Github repositories search app
      </Topography>
      <Styled.Delimiter />
    </Styled.Header>
  )
}
